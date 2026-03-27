import prisma from '@/lib/prisma'

// Umbral mínimo de votos para estabilizar el weighted rating (Bayesian average)
const MIN_VOTES_THRESHOLD = 10

// ─── Weighted Rating (estilo IMDb / Bayesian Average) ───────────────────────
// Fórmula: WR = (v / (v + m)) * R + (m / (v + m)) * C
//   v = votos del contenido
//   m = umbral mínimo (MIN_VOTES_THRESHOLD)
//   R = promedio del contenido
//   C = promedio global de la categoría
export function calculateWeightedRating(
  avgRating: number,
  totalRatings: number,
  globalAvg: number,
  minVotes: number = MIN_VOTES_THRESHOLD
): number {
  const v = totalRatings
  const m = minVotes
  const R = avgRating
  const C = globalAvg
  if (v === 0) return C
  return (v / (v + m)) * R + (m / (v + m)) * C
}

// ─── Recencia ────────────────────────────────────────────────────────────────
// Decaimiento exponencial con vida media de 180 días.
// A los   0 días → 1.0   (contenido recién publicado)
// A los 180 días → 0.5   (relevancia a la mitad)
// A los 365 días → ~0.27 (contenido antiguo)
export function calculateRecencia(publishedAt: Date): number {
  const ageInDays = (Date.now() - publishedAt.getTime()) / (1000 * 60 * 60 * 24)
  return 1 / (1 + ageInDays / 180)
}

// ─── Uso ─────────────────────────────────────────────────────────────────────
// Combina vistas e interacción de valoración.
//   normalizedViews:  viewsCount / 5000 (cap 1.0)
//   normalizedRating: (weightedRating - 1) / 4  → escala [1,5] → [0,1]
// Peso igual (50/50) entre engagement y satisfacción.
export function calculateUso(viewsCount: number, weightedRating: number): number {
  const normalizedViews = Math.min(viewsCount / 5000, 1)
  const normalizedRating = Math.max(0, (weightedRating - 1) / 4)
  return 0.5 * normalizedViews + 0.5 * normalizedRating
}

// ─── Dynamic Score ────────────────────────────────────────────────────────────
// Score = α·recencia + β·relevancia + γ·uso
//   α = 0.35, β = 0.30, γ = 0.35
export function calculateDynamicScore(params: {
  publishedAt: Date
  relevanceScore: number
  viewsCount: number
  weightedRating: number
}): number {
  const alpha = 0.35
  const beta = 0.30
  const gamma = 0.35

  const recencia = calculateRecencia(params.publishedAt)
  const relevancia = Math.max(0, Math.min(1, params.relevanceScore / 100))
  const uso = calculateUso(params.viewsCount, params.weightedRating)

  return alpha * recencia + beta * relevancia + gamma * uso
}

// ─── Promedio Global de la Categoría ─────────────────────────────────────────
async function getGlobalAvgForCategory(category: string): Promise<number> {
  type SummaryRow = { avgRating: number; totalRatings: number }
  let summaries: SummaryRow[] = []

  if (category === 'solution') {
    summaries = await prisma.solutionRatingSummary.findMany({
      select: { avgRating: true, totalRatings: true },
    })
  } else if (category === 'research') {
    summaries = await prisma.researchRatingSummary.findMany({
      select: { avgRating: true, totalRatings: true },
    })
  } else if (category === 'education') {
    summaries = await prisma.educationRatingSummary.findMany({
      select: { avgRating: true, totalRatings: true },
    })
  } else if (category === 'news') {
    summaries = await prisma.newsRatingSummary.findMany({
      select: { avgRating: true, totalRatings: true },
    })
  }

  const totalVotes = summaries.reduce((sum, s) => sum + s.totalRatings, 0)
  const weightedSum = summaries.reduce((sum, s) => sum + s.avgRating * s.totalRatings, 0)

  return totalVotes > 0 ? weightedSum / totalVotes : 3.0
}

// ─── Orquestador: actualiza resumen y recalcula dynamicScore ──────────────────
export async function updateRatingSummaryAndScore(
  publicationId: string,
  category: string
): Promise<{
  avgRating: number
  totalRatings: number
  weightedRating: number
  dynamicScore: number
}> {
  // 1. Recalcular promedio real desde las valoraciones individuales en DB
  let newAvg = 0
  let newTotal = 0

  if (category === 'solution') {
    const agg = await prisma.solutionRating.aggregate({
      where: { publicationId },
      _avg: { rating: true },
      _count: { rating: true },
    })
    newAvg = agg._avg.rating ?? 0
    newTotal = agg._count.rating ?? 0
  } else if (category === 'research') {
    const agg = await prisma.researchRating.aggregate({
      where: { publicationId },
      _avg: { rating: true },
      _count: { rating: true },
    })
    newAvg = agg._avg.rating ?? 0
    newTotal = agg._count.rating ?? 0
  } else if (category === 'education') {
    const agg = await prisma.educationRating.aggregate({
      where: { publicationId },
      _avg: { rating: true },
      _count: { rating: true },
    })
    newAvg = agg._avg.rating ?? 0
    newTotal = agg._count.rating ?? 0
  } else if (category === 'news') {
    const agg = await prisma.newsRating.aggregate({
      where: { publicationId },
      _avg: { rating: true },
      _count: { rating: true },
    })
    newAvg = agg._avg.rating ?? 0
    newTotal = agg._count.rating ?? 0
  }

  // 2. Calcular weighted rating con promedio global de la categoría
  const globalAvg = await getGlobalAvgForCategory(category)
  const weightedRating = calculateWeightedRating(newAvg, newTotal, globalAvg)

  // 3. Actualizar (o crear) la tabla resumen correspondiente
  const summaryData = { avgRating: newAvg, totalRatings: newTotal, weightedRating }

  if (category === 'solution') {
    await prisma.solutionRatingSummary.upsert({
      where: { publicationId },
      update: summaryData,
      create: { publicationId, ...summaryData },
    })
  } else if (category === 'research') {
    await prisma.researchRatingSummary.upsert({
      where: { publicationId },
      update: summaryData,
      create: { publicationId, ...summaryData },
    })
  } else if (category === 'education') {
    await prisma.educationRatingSummary.upsert({
      where: { publicationId },
      update: summaryData,
      create: { publicationId, ...summaryData },
    })
  } else if (category === 'news') {
    await prisma.newsRatingSummary.upsert({
      where: { publicationId },
      update: summaryData,
      create: { publicationId, ...summaryData },
    })
  }

  // 4. Recalcular dynamicScore y actualizar Publication
  const pub = await prisma.publication.findUnique({ where: { id: publicationId } })
  if (!pub) throw new Error('Publication not found')

  const dynamicScore = calculateDynamicScore({
    publishedAt: pub.publishedAt,
    relevanceScore: pub.relevanceScore,
    viewsCount: pub.viewsCount,
    weightedRating,
  })

  await prisma.publication.update({
    where: { id: publicationId },
    data: { dynamicScore },
  })

  return { avgRating: newAvg, totalRatings: newTotal, weightedRating, dynamicScore }
}
