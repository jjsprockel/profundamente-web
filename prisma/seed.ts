import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const mockContent = [
  {
    id: '2',
    title: 'Predicción de Riesgo Intrahospitalario',
    slug: 'prediccion-riesgo',
    excerpt: 'Algoritmos predictivos para pacientes en UCI.',
    category: 'solution',
    published_at: '2026-03-12T00:00:00Z',
    base_relevance: 85,
    average_rating: 4.5,
    rating_count: 89,
    subsections: ['Machine Learning'],
  },
  {
    id: '4',
    title: 'Orquestación de Admisión Clínica',
    slug: 'orquestacion-admision',
    excerpt: 'Agente autónomo para el triaje y asignación de recursos.',
    category: 'solution',
    published_at: '2026-03-21T00:00:00Z',
    base_relevance: 95,
    average_rating: 4.6,
    rating_count: 32,
    subsections: ['Agentes'],
  },
  {
    id: '5',
    title: 'Proyecto GLORIA',
    slug: 'proyecto-gloria',
    excerpt: 'La primera red de telepatología digital de Latinoamérica potenciada con IA.',
    category: 'research',
    published_at: '2026-02-20T00:00:00Z',
    base_relevance: 95,
    average_rating: 4.7,
    rating_count: 45,
    subsections: ['Macroproyecto'],
  },
  {
    id: '8',
    title: 'Protocolos Éticos y Seguridad IA',
    slug: 'protocolos-eticos',
    excerpt: 'Guía práctica para el uso de IA en entornos clínicos.',
    category: 'education',
    published_at: '2026-01-21T00:00:00Z',
    base_relevance: 90,
    average_rating: 4.9,
    rating_count: 500,
    subsections: ['Ética'],
  },
  {
    id: '10',
    title: 'Constitución del Semillero Singularidad 2025',
    slug: 'constitucion-singularidad',
    excerpt: 'La FUCS aprueba oficialmente la creación del semillero de investigación orientado a IA y salud.',
    category: 'news',
    published_at: '2025-06-16T09:00:00Z',
    base_relevance: 90,
    average_rating: 4.8,
    rating_count: 55,
    subsections: ['Institucional'],
  },
  {
    id: '11',
    title: 'Identificación de Subtipos de Adenocarcinoma de Pulmón mediante ajuste fino de MedGemma-27B',
    slug: 'medgemma-27b',
    excerpt: 'Modelo de visión por computador basado en un modelo fundacional multimodal ajustado (QLoRA).',
    category: 'solution',
    published_at: '2026-03-17T00:00:00Z',
    base_relevance: 95,
    average_rating: 4.9,
    rating_count: 120,
    subsections: ['LLM/NLP'],
  },
  {
    id: '12',
    title: 'Diplomado en Inteligencia Artificial Generativa para Clínicos',
    slug: 'diplomado-ia-generativa',
    excerpt: 'Programa integral sobre el uso de LLMs, agentes y síntesis de evidencia.',
    category: 'education',
    published_at: '2026-03-22T00:00:00Z',
    base_relevance: 95,
    average_rating: 4.8,
    rating_count: 32,
    subsections: ['IA Generativa'],
  },
  {
    id: '13',
    title: 'Tutor de Ciencia de Datos en Salud',
    slug: 'tutor-ciencia-datos',
    excerpt: 'Sistema experto diseñado para el aprendizaje autodirigido de Python.',
    category: 'education',
    published_at: '2026-03-22T00:00:00Z',
    base_relevance: 85,
    average_rating: 4.9,
    rating_count: 156,
    subsections: ['Ciencia de Datos'],
  },
  {
    id: '14',
    title: 'Obtención del premio "2025 ASH Abstract Achievement Award"',
    slug: 'premio-ash-2025',
    excerpt: 'Reconocimiento a la investigación "Automatic identification of blast leukemic cells types".',
    category: 'news',
    published_at: '2026-03-22T00:00:00Z',
    base_relevance: 100,
    average_rating: 5.0,
    rating_count: 24,
    subsections: ['Premios'],
  },
  {
    id: '15',
    title: 'HematologIA — Modelo de IA para el Diagnóstico Temprano en Leucemias Agudas',
    slug: 'hematologia',
    excerpt: 'Proyecto multimodal para diferenciar LMA vs LLA.',
    category: 'research',
    published_at: '2026-03-22T00:00:00Z',
    base_relevance: 98,
    average_rating: 4.9,
    rating_count: 56,
    subsections: ['Trabajo de especialización'],
  },
  {
    id: '16',
    title: 'Identificación de mieloblastos vs linfoblastos mediante Transformers visuales',
    slug: 'clasificacion-blastos-vit',
    excerpt: 'Modelo de Deep Learning basado en ConvNeXT + ViT.',
    category: 'solution',
    published_at: '2026-03-22T00:00:00Z',
    base_relevance: 90,
    average_rating: 4.9,
    rating_count: 120,
    subsections: ['Visión por computador'],
  },
  {
    id: '17',
    title: 'Clasificación automática de fracturas de tobillo mediante IA',
    slug: 'fractura-tobillo',
    excerpt: 'Análisis automatizado de radiografías para clasificación Lauge-Hansen.',
    category: 'research',
    published_at: '2026-03-22T00:00:00Z',
    base_relevance: 96,
    average_rating: 4.8,
    rating_count: 32,
    subsections: ['Trabajo de especialización'],
  },
  {
    id: '18',
    title: 'Modelo ConvNeXT para la predicción de Fractura del Maléolo Posterior',
    slug: 'prediccion-tobillo-convnext',
    excerpt: 'Sistema de IA basado en redes neurales avanzadas.',
    category: 'solution',
    published_at: '2026-03-22T00:00:00Z',
    base_relevance: 88,
    average_rating: 4.8,
    rating_count: 15,
    subsections: ['Deep Learning'],
  },
  {
    id: '19',
    title: 'Semillero de Investigación Singularidad',
    slug: 'singularidad',
    excerpt: 'Iniciativa académica orientada a la formación de estudiantes en IA.',
    category: 'research',
    published_at: '2026-03-22T00:00:00Z',
    base_relevance: 98,
    average_rating: 4.9,
    rating_count: 85,
    subsections: ['Semillero de Investigación'],
  },
  {
    id: '20',
    title: 'Macroproyecto para la Implementación de Tutores Virtuales Inteligentes',
    slug: 'macroproyecto-tutores',
    excerpt: 'Diseño y validación de un marco metodológico para el desarrollo de tutores.',
    category: 'research',
    published_at: '2026-03-22T00:00:00Z',
    base_relevance: 99,
    average_rating: 4.9,
    rating_count: 42,
    subsections: ['Macroproyecto'],
  },
  {
    id: '21',
    title: 'Tutor Virtual Inteligente en la Evaluación de Historias Clínicas',
    slug: 'tutor-evaluacion-historias',
    excerpt: 'Sistema experto para la retroalimentación automatizada.',
    category: 'solution',
    published_at: '2026-03-22T00:00:00Z',
    base_relevance: 92,
    average_rating: 4.8,
    rating_count: 28,
    subsections: ['LLM/NLP'],
  },
  {
    id: '22',
    title: 'Intérprete de Antibiogramas para Bacilos Gram Negativos',
    slug: 'interprete-antibiogramas',
    excerpt: 'Asistente basado en GPT para la interpretación clínica.',
    category: 'solution',
    published_at: '2026-03-22T00:00:00Z',
    base_relevance: 94,
    average_rating: 4.9,
    rating_count: 31,
    subsections: ['LLM/NLP'],
  },
  {
    id: '23',
    title: 'Identificación de grupos de riesgo para nefropatía por contraste',
    slug: 'nefropatia-contraste',
    excerpt: 'Desarrollo y validación de un modelo de IA basado en aprendizaje no supervisado.',
    category: 'research',
    published_at: '2026-03-22T00:00:00Z',
    base_relevance: 97,
    average_rating: 4.8,
    rating_count: 22,
    subsections: ['Trabajo de Grado'],
  },
  {
    id: '24',
    title: 'Modelo GMM para Nefropatía por Contraste',
    slug: 'modelo-gmm-nefropatia',
    excerpt: 'Modelo no supervisado basado en Gaussian Mixture Models.',
    category: 'solution',
    published_at: '2026-03-22T00:00:00Z',
    base_relevance: 90,
    average_rating: 4.9,
    rating_count: 18,
    subsections: ['Machine Learning'],
  },
  {
    id: '25',
    title: 'Ensamblaje de redes neuronales convolucionales ponderadas para Plasmodium',
    slug: 'ensamblaje-cnn-plasmodium',
    excerpt: 'Identificación automática de Plasmodium falciparum.',
    category: 'research',
    published_at: '2026-03-22T00:00:00Z',
    base_relevance: 95,
    average_rating: 4.9,
    rating_count: 18,
    subsections: ['Articulo'],
  },
  {
    id: '26',
    title: 'Reconocimiento a investigación en IA aplicada a sepsis en Congreso de Medicina Crítica',
    slug: 'premio-amci-sepsis-ia',
    excerpt: 'El proyecto "Identificación de subgrupos clínicos en sepsis mediante modelos de mezcla gaussiana" fue galardonado con el segundo puesto en el Congreso Internacional de Medicina Crítica (AMCI®).',
    category: 'news',
    published_at: '2025-06-12T09:00:00Z',
    base_relevance: 98,
    average_rating: 0,
    rating_count: 0,
    subsections: ['Premios'],
  }
]

async function main() {
  console.log('Iniciando el sembrado de datos...')

  for (const content of mockContent) {
    const pub = await prisma.publication.upsert({
      where: { slug: content.slug },
      update: {
        title: content.title,
        category: content.category,
        subcategory: content.subsections?.[0] || null,
        relevanceScore: content.base_relevance,
        viewsCount: (content as any).views_count || 0,
        publishedAt: new Date(content.published_at),
      },
      create: {
        title: content.title,
        slug: content.slug,
        category: content.category,
        subcategory: content.subsections?.[0] || null,
        relevanceScore: content.base_relevance,
        viewsCount: (content as any).views_count || 0,
        publishedAt: new Date(content.published_at),
      },
    })

    // Crear resúmenes de rating correspondientes
    if (content.category === 'solution') {
      await prisma.solutionRatingSummary.upsert({
        where: { publicationId: pub.id },
        update: { avgRating: content.average_rating, totalRatings: content.rating_count },
        create: { publicationId: pub.id, avgRating: content.average_rating, totalRatings: content.rating_count },
      })
    } else if (content.category === 'research') {
      await prisma.researchRatingSummary.upsert({
        where: { publicationId: pub.id },
        update: { avgRating: content.average_rating, totalRatings: content.rating_count },
        create: { publicationId: pub.id, avgRating: content.average_rating, totalRatings: content.rating_count },
      })
    } else if (content.category === 'education') {
      await prisma.educationRatingSummary.upsert({
        where: { publicationId: pub.id },
        update: { avgRating: content.average_rating, totalRatings: content.rating_count },
        create: { publicationId: pub.id, avgRating: content.average_rating, totalRatings: content.rating_count },
      })
    } else if (content.category === 'news') {
      await prisma.newsRatingSummary.upsert({
        where: { publicationId: pub.id },
        update: { avgRating: content.average_rating, totalRatings: content.rating_count },
        create: { publicationId: pub.id, avgRating: content.average_rating, totalRatings: content.rating_count },
      })
    }
  }

  console.log('Sembrado de datos completado exitosamente.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
