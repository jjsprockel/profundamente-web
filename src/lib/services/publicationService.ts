import prisma from '@/lib/prisma'
import { mockContent } from '@/lib/mockData'
import { Content } from '@/types/database'

export class PublicationService {
  /**
   * Devuelve todos los contenidos activos combinando:
   * - Métricas y fechas desde Publication (fuente de verdad para publishedAt y scores)
   * - Resúmenes de rating desde las tablas Summary (weightedRating, avgRating, totalRatings)
   * - Metadatos enriquecidos (imagen, body, tags, etc.) desde mockContent
   */
  static async getAllPublications(): Promise<Content[]> {
    const dbPubs = await prisma.publication.findMany({
      where: { status: 'published' },
      include: {
        solutionSummary: true,
        researchSummary: true,
        educationSummary: true,
        newsSummary: true,
      },
      orderBy: { publishedAt: 'desc' },
    })

    return dbPubs.map((pub) => {
      const mock = mockContent.find((m) => m.slug === pub.slug)

      // El resumen de rating es único por publicación (1-a-1 según categoría)
      const summary =
        pub.solutionSummary ||
        pub.researchSummary ||
        pub.educationSummary ||
        pub.newsSummary

      // Preferir datos de DB; caer en mock solo si no hay resumen aún
      const avgRating = summary?.avgRating ?? mock?.average_rating ?? 0
      const ratingCount = summary?.totalRatings ?? mock?.rating_count ?? 0
      const weightedRating = summary?.weightedRating ?? avgRating

      return {
        id: pub.id,
        title: pub.title,
        slug: pub.slug,
        excerpt: mock?.excerpt ?? null,
        body_content: mock?.body_content ?? null,
        // published_at viene SIEMPRE de la DB → garantiza consistencia entre tarjeta y detalle
        published_at: pub.publishedAt.toISOString(),
        category: pub.category as Content['category'],
        tags: mock?.tags ?? [],
        base_relevance: pub.relevanceScore,
        views_count: pub.viewsCount,
        is_active: pub.status === 'published',
        is_featured: mock?.is_featured ?? false,
        solution_url: mock?.solution_url ?? null,
        average_rating: avgRating,
        rating_count: ratingCount,
        weighted_rating: weightedRating,
        dynamic_score: pub.dynamicScore,
        // Metadatos enriquecidos desde mock
        image_url: mock?.image_url,
        logo_icon: mock?.logo_icon,
        subsections: mock?.subsections,
        tool_type: mock?.tool_type,
        status: mock?.status,
        funding_type: mock?.funding_type,
        research_status: mock?.research_status,
        social_links: mock?.social_links,
        education_subtype: mock?.education_subtype,
        education_area: mock?.education_area,
        start_date: mock?.start_date,
        end_date: mock?.end_date,
      } satisfies Content
    })
  }
}
