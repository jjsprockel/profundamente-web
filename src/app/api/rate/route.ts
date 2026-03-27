import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { updateRatingSummaryAndScore } from '@/lib/services/ratingService'

const VALID_CATEGORIES = new Set(['solution', 'research', 'education', 'news'])

// Control de spam: map de "ip:publicationId" → timestamp del último envío
// (en memoria, se reinicia al reiniciar el servidor — suficiente para el MVP)
const recentRatings = new Map<string, number>()
const COOLDOWN_MS = 60 * 60 * 1000 // 1 hora por publicación y por IP

function getRateLimitKey(req: NextRequest, publicationId: string): string {
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
    req.headers.get('x-real-ip') ||
    'unknown'
  return `${ip}:${publicationId}`
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { publicationId, category, rating } = body ?? {}

    // ── Validación de campos requeridos ──────────────────────────────────────
    if (!publicationId || !category || rating === undefined || rating === null) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos: publicationId, category, rating' },
        { status: 400 }
      )
    }

    if (!VALID_CATEGORIES.has(category)) {
      return NextResponse.json({ error: 'Categoría inválida' }, { status: 400 })
    }

    const ratingNum = Number(rating)
    if (!Number.isInteger(ratingNum) || ratingNum < 1 || ratingNum > 5) {
      return NextResponse.json(
        { error: 'El rating debe ser un entero entre 1 y 5' },
        { status: 400 }
      )
    }

    // ── Control de spam (IP + publicación) ───────────────────────────────────
    const rateLimitKey = getRateLimitKey(req, publicationId)
    const lastRating = recentRatings.get(rateLimitKey)
    if (lastRating && Date.now() - lastRating < COOLDOWN_MS) {
      return NextResponse.json(
        { error: 'Ya registraste una valoración reciente para este contenido. Intenta más tarde.' },
        { status: 429 }
      )
    }

    // ── Validar que la publicación exista, esté activa y la categoría coincida ─
    const pub = await prisma.publication.findUnique({ where: { id: publicationId } })

    if (!pub) {
      return NextResponse.json({ error: 'Publicación no encontrada' }, { status: 404 })
    }
    if (pub.status !== 'published') {
      return NextResponse.json(
        { error: 'Esta publicación no está disponible para valoración' },
        { status: 403 }
      )
    }
    if (pub.category !== category) {
      return NextResponse.json(
        { error: `La categoría enviada (${category}) no coincide con la publicación (${pub.category})` },
        { status: 400 }
      )
    }

    // ── Guardar valoración individual en la tabla correcta ───────────────────
    if (category === 'solution') {
      await prisma.solutionRating.create({ data: { publicationId, rating: ratingNum } })
    } else if (category === 'research') {
      await prisma.researchRating.create({ data: { publicationId, rating: ratingNum } })
    } else if (category === 'education') {
      await prisma.educationRating.create({ data: { publicationId, rating: ratingNum } })
    } else if (category === 'news') {
      await prisma.newsRating.create({ data: { publicationId, rating: ratingNum } })
    }

    // ── Actualizar resumen y recalcular dynamicScore ─────────────────────────
    const updatedMetrics = await updateRatingSummaryAndScore(publicationId, category)

    // Registrar timestamp en el rate limiter
    recentRatings.set(rateLimitKey, Date.now())

    return NextResponse.json(
      {
        success: true,
        data: {
          avgRating: updatedMetrics.avgRating,
          totalRatings: updatedMetrics.totalRatings,
          weightedRating: updatedMetrics.weightedRating,
          dynamicScore: updatedMetrics.dynamicScore,
        },
      },
      { status: 200 }
    )
  } catch (err) {
    console.error('[POST /api/rate] Error:', err)
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
  }
}
