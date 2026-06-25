import { Content } from '@/types/database';

export const mockContent: Content[] = [
  {
    id: '2',
    title: 'Predicción de Riesgo Intrahospitalario',
    slug: 'prediccion-riesgo',
    excerpt: 'Algoritmos predictivos para pacientes en UCI.',
    body_content: 'Predecir el deterioro clínico horas antes de que ocurra un evento adverso es el santo grial de los cuidados intensivos. Hemos consolidado un ensamble de modelos de Machine Learning clásico entrenados con derivadas de MIMIC-IV y una cohorte local privada para anticipar shock séptico, falla renal aguda y fallo multiorgánico.',
    category: 'solution',
    tags: ['Deep Learning', 'Risk'],
    published_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 10).toISOString(),
    base_relevance: 85,
    views_count: 850,
    is_active: true,
    is_featured: true,
    solution_url: '/herramientas/prediccion',
    average_rating: 4.5,
    rating_count: 89,
    image_url: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=800&auto=format&fit=crop',
    logo_icon: 'data_usage',
    subsections: ['Machine Learning'],
    tool_type: 'Regla de predicción',
    status: 'Validado'
  },
  {
    id: '4',
    title: 'Orquestación de Admisión Clínica',
    slug: 'orquestacion-admision',
    excerpt: 'Agente autónomo para el triaje y asignación de recursos.',
    body_content: 'Agentes de inteligencia artificial diseñados para orquestar procesos de atención. El agente se encarga de revisar los síntomas pre-registrados, compararlos con el historial disponible en el sistema HIS, y sugerir priorizaciones de emergencia.',
    category: 'solution',
    tags: ['Agentic UX', 'Triage'],
    published_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 1).toISOString(),
    base_relevance: 95,
    views_count: 450,
    is_active: true,
    is_featured: true,
    solution_url: '/p/orquestacion-admision',
    average_rating: 4.6,
    rating_count: 32,
    image_url: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop',
    logo_icon: 'smart_toy',
    subsections: ['Agentes'],
    tool_type: 'Agente Orquestador',
    status: 'Experimental'
  },
  {
    id: '5',
    title: 'Proyecto GLORIA',
    slug: 'proyecto-gloria',
    excerpt: 'La primera red de telepatología digital de Latinoamérica potenciada con IA.',
    body_content: 'Investigación multicéntrica en la que estamos digitalizando miles de placas de patología para entrenar modelos detectores de neoplasias primarias en tejido gástrico.',
    category: 'research',
    tags: ['Telepatología', 'Research'],
    published_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 30).toISOString(),
    base_relevance: 95,
    views_count: 5000,
    is_active: true,
    is_featured: true,
    solution_url: null,
    average_rating: 4.7,
    rating_count: 45,
    image_url: '/images/gloria-new-hero.png',
    logo_icon: 'network_node',
    subsections: ['Macroproyecto'],
    tool_type: 'Estudio Multicéntrico',
    funding_type: 'Externa',
    research_status: 'En Desarrollo'
  },
  {
    id: '8',
    title: 'Protocolos Éticos y Seguridad IA',
    slug: 'protocolos-eticos',
    excerpt: 'Guía práctica para el uso de IA en entornos clínicos.',
    body_content: 'Masterclass: pilares éticos de la OMS.',
    category: 'education',
    tags: ['Ethics', 'Guidelines'],
    published_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 60).toISOString(),
    base_relevance: 90,
    views_count: 1500,
    is_active: true,
    is_featured: false,
    solution_url: null,
    average_rating: 4.9,
    rating_count: 500,
    education_subtype: 'Curso',
    education_area: ['Ética en IA', 'Medicina'],
    start_date: '2026-04-01T00:00:00Z',
    end_date: '2026-05-30T00:00:00Z',
    image_url: 'https://images.unsplash.com/photo-1579308107931-aa9ec8229b4e?w=800&auto=format&fit=crop',
    logo_icon: 'verified_user'
  },
  {
    id: '10',
    title: 'Constitución del Semillero Singularidad 2025',
    slug: 'constitucion-singularidad',
    excerpt: 'La FUCS aprueba oficialmente la creación del semillero de investigación orientado a IA y salud.',
    body_content: `Bogotá D.C., 16 de junio de 2025\n\nLa Fundación Universitaria de Ciencias de la Salud (FUCS), a través de su Vicerrectoría de Investigaciones, aprobó oficialmente la creación del semillero de investigación “Singularidad”, una iniciativa orientada al fortalecimiento de la formación investigativa en inteligencia artificial aplicada a la salud.\n\nLa aprobación fue otorgada por el Comité de Investigaciones en su sesión del 11 de junio de 2025, según consta en el Acta No. 2 de 2025, consolidando así un nuevo espacio académico para el desarrollo de proyectos interdisciplinarios y la formación de talento en áreas emergentes de la medicina y la tecnología.\n\nEl semillero “Singularidad” se articula con las líneas estratégicas de investigación de la FUCS y se proyecta como un entorno de aprendizaje activo, donde estudiantes y jóvenes investigadores podrán participar en iniciativas relacionadas con:\n\nInteligencia artificial aplicada a la salud\nAnálisis de datos clínicos y biomédicos\nDesarrollo de modelos predictivos y sistemas de apoyo diagnóstico\nInnovación en procesos educativos y asistenciales\n\nLa comunicación oficial fue dirigida al docente John Jaime Sprockel Díaz, quien liderará el proceso de consolidación del semillero, incluyendo la estructuración del plan de trabajo y la ejecución de sus actividades académicas y científicas.\n\nAsimismo, se indicó la articulación con el Coordinador de Semilleros de Investigación, con el fin de garantizar la adecuada implementación y seguimiento de esta nueva iniciativa dentro del ecosistema institucional de investigación.\n\nLa creación del semillero “Singularidad” representa un paso significativo en el fortalecimiento de las capacidades investigativas de la FUCS, promoviendo la integración entre medicina, tecnología e innovación, y consolidando un espacio clave para la formación de las nuevas generaciones de investigadores en salud digital.`,
    category: 'news',
    tags: ['Singularidad', 'Institucional', 'IA'],
    published_at: '2025-06-16T09:00:00Z',
    base_relevance: 90,
    views_count: 1250,
    is_active: true,
    is_featured: false,
    solution_url: null,
    average_rating: 4.8,
    rating_count: 55,
    social_links: [{ platform: 'Instagram', url: '#', icon: 'account_circle' }],
    image_url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop',
    logo_icon: 'event'
  },
  {
    id: '11',
    title: 'Identificación de Subtipos de Adenocarcinoma de Pulmón mediante ajuste fino de MedGemma-27B',
    slug: 'medgemma-27b',
    excerpt: 'Modelo de visión por computador basado en un modelo fundacional multimodal ajustado (QLoRA) para la clasificación automática de subtipos histológicos de adenocarcinoma pulmonar en imágenes H&E, alcanzando alta exactitud y concordancia diagnóstica en entornos de validación controlados.',
    body_content: 'Este modelo fue desarrollado en el marco del programa GLORIA...',
    category: 'solution',
    tags: ['PatologíaDigital', 'CáncerDePulmón', 'DeepLearning', 'ModelosFundacionales', 'MedGemma', 'DiagnósticoPorImagen', 'IAEnSalud', 'Histopatología'],
    published_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5).toISOString(),
    base_relevance: 95,
    views_count: 1500,
    is_active: true,
    is_featured: true,
    solution_url: '/herramientas/sintesis',
    average_rating: 4.9,
    rating_count: 120,
    image_url: '/images/medgemma-he.png',
    logo_icon: 'biotech',
    subsections: ['LLM/NLP', 'Deep Learning'],
    tool_type: 'Visión por computador',
    status: 'Experimental'
  },
  {
    id: '12',
    title: 'Diplomado en Inteligencia Artificial Generativa para Clínicos',
    slug: 'diplomado-ia-generativa',
    excerpt: 'Programa integral sobre el uso de LLMs, agentes y síntesis de evidencia en la práctica médica diaria.',
    body_content: 'Este diplomado de 120 horas aborda desde fundamentos de transformers hasta ingeniería de prompts aplicada a casos clínicos reales.',
    category: 'education',
    tags: ['IAGenerativa', 'SaludDigital', 'LLMs'],
    published_at: new Date().toISOString(),
    base_relevance: 95,
    views_count: 500,
    is_active: true,
    is_featured: true,
    solution_url: null,
    average_rating: 4.8,
    rating_count: 32,
    education_subtype: 'Diplomado',
    education_area: ['IA generative', 'Agentes', 'Medicina'],
    start_date: '2026-06-15T00:00:00Z',
    end_date: '2026-12-15T00:00:00Z',
    image_url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop',
    logo_icon: 'model_training'
  },
  {
    id: '13',
    title: 'Tutor de Ciencia de Datos en Salud',
    slug: 'tutor-ciencia-datos',
    excerpt: 'Sistema experto diseñado para el aprendizaje autodirigido de Python y análisis estadístico médico.',
    body_content: 'Herramienta interactiva que guía al estudiante en la limpieza y análisis de datasets clínicos abiertos.',
    category: 'education',
    tags: ['DataScience', 'Python', 'Education'],
    published_at: new Date().toISOString(),
    base_relevance: 85,
    views_count: 1200,
    is_active: true,
    is_featured: false,
    solution_url: null,
    average_rating: 4.9,
    rating_count: 156,
    education_subtype: 'Tutor',
    education_area: ['Ciencia de Datos', 'Machine Learning'],
    start_date: '2026-03-01T00:00:00Z',
    end_date: '2027-03-01T00:00:00Z',
    image_url: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=800&auto=format&fit=crop',
    logo_icon: 'smart_toy'
  },
  {
    id: '14',
    title: 'Obtención del premio "2025 ASH Abstract Achievement Award"',
    slug: 'premio-ash-2025',
    excerpt: 'Reconocimiento a la investigación "Automatic identification of blast leukemic cells types using deep learning with vision transformers" en el 67th ASH Annual Meeting.',
    body_content: 'Estamos orgullosos de anunciar que nuestro trabajo sobre identificación de células leucémicas mediante Vision Transformers ha sido galardonado por la American Society of Hematology (ASH). El premio será entregado en Orlando, Florida, durante diciembre de 2025.',
    category: 'news',
    tags: ['ASH2025', 'Leukemia', 'VisionTransformers', 'Hematology'],
    published_at: new Date().toISOString(),
    base_relevance: 100,
    views_count: 3500,
    is_active: true,
    is_featured: true,
    solution_url: null,
    average_rating: 5.0,
    rating_count: 24,
    social_links: [
      { platform: 'LinkedIn', url: '#', icon: 'share' },
      { platform: 'Twitter', url: '#', icon: 'public' }
    ],
    image_url: '/images/ash-award.png',
    logo_icon: 'emoji_events'
  },
  {
    id: '15',
    title: 'HematologIA — Modelo de IA para el Diagnóstico Temprano en Leucemias Agudas',
    slug: 'hematologia',
    excerpt: 'Proyecto multimodal para diferenciar LMA vs LLA mediante visión por computador y perfiles genéticos.',
    body_content: 'HematologIA integra análisis de imágenes histopatológicas, datos clínicos y perfiles genéticos para el apoyo diagnóstico temprano...',
    category: 'research',
    tags: ['Hematología', 'IA', 'Leucemia', 'DeepLearning'],
    published_at: new Date().toISOString(),
    base_relevance: 98,
    views_count: 4200,
    is_active: true,
    is_featured: true,
    solution_url: null,
    average_rating: 4.9,
    rating_count: 56,
    image_url: '/images/hematologia-hero.png',
    logo_icon: 'bloodtype',
    subsections: ['Trabajo de especialización'],
    funding_type: 'No',
    research_status: 'Consolidación de resultados'
  },
  {
    id: '16',
    title: 'Identificación de mieloblastos vs linfoblastos mediante Transformers visuales',
    slug: 'clasificacion-blastos-vit',
    excerpt: 'Modelo de Deep Learning basado en ConvNeXT + ViT para la clasificación diagnóstica de blastos leucémicos.',
    body_content: 'Desarrollado en el marco del proyecto HematologIA, este modelo alcanza altas métricas de sensibilidad en la diferenciación de linajes...',
    category: 'solution',
    tags: ['Computer Vision', 'Deep Learning', 'VisionTransformers', 'Hematology'],
    published_at: new Date().toISOString(),
    base_relevance: 90,
    views_count: 1800,
    is_active: true,
    is_featured: false,
    solution_url: '/herramientas/sintesis',
    average_rating: 4.9,
    rating_count: 120,
    image_url: '/images/hematologia-hero.png',
    logo_icon: 'biotech',
    subsections: ['Visión por computador', 'Deep Learning'],
    tool_type: 'Visión Computacional',
    status: 'Experimental'
  },
  {
    id: '17',
    title: 'Clasificación automática de fracturas de tobillo y predicción de fractura del maléolo posterior mediante IA',
    slug: 'fractura-tobillo',
    excerpt: 'Análisis automatizado de radiografías para clasificación Lauge-Hansen y detección de compromiso del maléolo posterior.',
    body_content: 'Este proyecto de investigación tiene como objetivo el desarrollo y validación de modelos de inteligencia artificial para el análisis automatizado de imágenes radiográficas...',
    category: 'research',
    tags: ['Ortopedia', 'IA', 'Radiografía', 'DeepLearning'],
    published_at: new Date().toISOString(),
    base_relevance: 96,
    views_count: 2100,
    is_active: true,
    is_featured: true,
    solution_url: null,
    average_rating: 4.8,
    rating_count: 32,
    image_url: '/images/tobillo-fractura-hero.png',
    logo_icon: 'airline_seat_legroom_extra',
    subsections: ['Trabajo de especialización'],
    funding_type: 'No',
    research_status: 'Consolidación de resultados'
  },
  {
    id: '18',
    title: 'Modelo ConvNeXT para la predicción de Fractura del Maléolo Posterior',
    slug: 'prediccion-tobillo-convnext',
    excerpt: 'Sistema de IA basado en redes neurales avanzadas para predecir inestabilidad articular a partir de proyecciones AP/Lateral.',
    body_content: 'Desarrollado mediante aprendizaje por transferencia, este modelo optimiza la detección de fracturas complejas en servicios de urgencias...',
    category: 'solution',
    tags: ['Orthopedics', 'VisionTransformers', 'AnkleFracture'],
    published_at: new Date().toISOString(),
    base_relevance: 88,
    views_count: 950,
    is_active: true,
    is_featured: false,
    solution_url: null,
    average_rating: 4.8,
    rating_count: 15,
    image_url: '/images/tobillo-fractura-hero.png',
    logo_icon: 'bone',
    subsections: ['Deep Learning'],
    tool_type: 'Regla de predicción',
    status: 'Experimental'
  },
  {
    id: '19',
    title: 'Semillero de Investigación Singularidad',
    slug: 'singularidad',
    excerpt: 'Iniciativa académica orientada a la formación de estudiantes en IA aplicada a la salud bajo un enfoque interdisciplinario.',
    body_content: 'El semillero de investigación Singularidad es una de las apuestas institucionales más importantes de la FUCS para liderar la transformación digital en salud...',
    category: 'research',
    tags: ['Formación', 'IA', 'SaludDigital', 'Investigación'],
    published_at: new Date().toISOString(),
    base_relevance: 98,
    views_count: 3200,
    is_active: true,
    is_featured: true,
    solution_url: null,
    average_rating: 4.9,
    rating_count: 85,
    image_url: '/images/singularidad-hero.png',
    logo_icon: 'school',
    subsections: ['Semillero de Investigación'],
    funding_type: 'Interna',
    research_status: 'En Desarrollo'
  },
  {
    id: '20',
    title: 'Macroproyecto para la Implementación de Tutores Virtuales Inteligentes Basados en GPTs Personalizados para la Educación en Salud',
    slug: 'macroproyecto-tutores',
    excerpt: 'Diseño y validación de un marco metodológico para el desarrollo de tutores virtuales inteligentes basados en LLMs para educación médica.',
    body_content: 'Este macroproyecto tiene como propósito diseñar, implementar y validar un marco metodológico para el desarrollo de tutores virtuales inteligentes basados en modelos de lenguaje (LLM), orientados a fortalecer los procesos de formación en salud...',
    category: 'research',
    tags: ['Educación', 'IA', 'GPTs', 'LLM', 'Pedagogía'],
    published_at: new Date().toISOString(),
    base_relevance: 99,
    views_count: 1560,
    is_active: true,
    is_featured: true,
    solution_url: null,
    average_rating: 4.9,
    rating_count: 42,
    image_url: '/images/macroproyecto-tutores-hero.png',
    logo_icon: 'school',
    subsections: ['Macroproyecto'],
    funding_type: 'No',
    research_status: 'Consolidación de resultados'
  },
  {
    id: '21',
    title: 'Tutor Virtual Inteligente en la Evaluación de Historias Clínicas',
    slug: 'tutor-evaluacion-historias',
    excerpt: 'Sistema experto para la retroalimentación automatizada en la estructuración y calidad de registros clínicos.',
    body_content: 'Desarrollado como parte del macroproyecto de tutores virtuales, este modelo evalúa la coherencia y cumplimiento de guías en historias clínicas...',
    category: 'solution',
    tags: ['LLM', 'EducaciónMedica', 'NLP'],
    published_at: new Date().toISOString(),
    base_relevance: 92,
    views_count: 840,
    is_active: true,
    is_featured: false,
    solution_url: null,
    average_rating: 4.8,
    rating_count: 28,
    image_url: '/images/macroproyecto-tutores-hero.png',
    logo_icon: 'history_edu',
    subsections: ['LLM/NLP'],
    tool_type: 'Tutor Inteligente',
    status: 'Experimental'
  },
  {
    id: '22',
    title: 'Intérprete de Antibiogramas para Bacilos Gram Negativos',
    slug: 'interprete-antibiogramas',
    excerpt: 'Asistente basado en GPT para la interpretación clínica de perfiles de sensibilidad bacteriana.',
    body_content: 'Herramienta diseñada para el fortalecimiento de competencias en infectología y microbiología mediante la interpretación guiada de antibiogramas...',
    category: 'solution',
    tags: ['Infectología', 'LLM', 'Microbiología'],
    published_at: new Date().toISOString(),
    base_relevance: 94,
    views_count: 720,
    is_active: true,
    is_featured: false,
    solution_url: null,
    average_rating: 4.9,
    rating_count: 31,
    image_url: '/images/macroproyecto-tutores-hero.png',
    logo_icon: 'biotech',
    subsections: ['LLM/NLP'],
    tool_type: 'Interprete IA',
    status: 'Experimental'
  },
  {
    id: '23',
    title: 'Identificación de grupos de riesgo para nefropatía por contraste en pacientes con infarto agudo de miocardio mediante inteligencia artificial',
    slug: 'nefropatia-contraste',
    excerpt: 'Desarrollo y validación de un modelo de IA basado en aprendizaje no supervisado para la estratificación de riesgo renal (CA/CI-AKI) post-cateterismo.',
    body_content: 'Este proyecto tiene como objetivo el desarrollo y validación de un modelo de inteligencia artificial basado en aprendizaje no supervisado para la estratificación de riesgo de lesión renal aguda asociada a contraste (CA/CI-AKI)...',
    category: 'research',
    tags: ['Cardiología', 'Nefrología', 'MachineLearning', 'GMM', 'Investigación'],
    published_at: new Date().toISOString(),
    base_relevance: 97,
    views_count: 1100,
    is_active: true,
    is_featured: true,
    solution_url: null,
    average_rating: 4.8,
    rating_count: 22,
    image_url: '/images/nefropatia-contraste-hero.png',
    logo_icon: 'monitor_heart',
    subsections: ['Trabajo de Grado Especialización'],
    funding_type: 'No',
    research_status: 'Consolidación de resultados'
  },
  {
    id: '24',
    title: 'Identificación Grupos de Riesgo para Nefropatía por Contraste en Cateterismo Cardiaco postInfarto',
    slug: 'modelo-gmm-nefropatia',
    excerpt: 'Modelo no supervisado basado en Gaussian Mixture Models para identificar fenotipos clínicos de susceptibilidad renal.',
    body_content: 'Modelo basado en Gaussian Mixture Models (GMM) que permitió identificar cuatro fenotipos clínicos con riesgo diferencial de lesión renal...',
    category: 'solution',
    tags: ['Machine Learning', 'Unsupervised', 'Clustering', 'Cardiology'],
    published_at: new Date().toISOString(),
    base_relevance: 90,
    views_count: 650,
    is_active: true,
    is_featured: false,
    solution_url: null,
    average_rating: 4.9,
    rating_count: 18,
    image_url: '/images/nefropatia-contraste-hero.png',
    logo_icon: 'analytics',
    subsections: ['Machine Learning'],
    tool_type: 'Modelo de Clustering (GMM)',
    status: 'Validado'
  },
  {
    id: '25',
    title: 'Ensamblaje de redes neuronales convolucionales ponderadas mediante una estrategia estadística para la identificación automática de Plasmodium falciparum',
    slug: 'ensamblaje-cnn-plasmodium',
    excerpt: 'Desarrollo y validación de modelos de IA basados en redes neuronales convolucionales (CNN) y estrategias de ensamblaje estadístico para la identificación de malaria.',
    body_content: 'Este artículo presenta el desarrollo y validación de modelos de inteligencia artificial basados en redes neuronales convolucionales (CNN) y estrategias de ensamblaje estadístico para la identificación automática de Plasmodium falciparum en extendidos de sangre periférica...',
    category: 'research',
    tags: ['Malaria', 'DeepLearning', 'CNN', 'EnsembleLearning', 'Diagnostics'],
    published_at: new Date().toISOString(),
    base_relevance: 95,
    views_count: 540,
    is_active: true,
    is_featured: true,
    solution_url: null,
    average_rating: 4.9,
    rating_count: 18,
    image_url: '/images/plasmodium-cnn-hero.png',
    logo_icon: 'biotech',
    subsections: ['Articulo'],
    funding_type: 'No',
    research_status: 'Publicado'
  },
  {
    id: '26',
    title: 'Reconocimiento a investigación en inteligencia artificial aplicada a sepsis en Congreso de Medicina Crítica',
    slug: 'premio-amci-sepsis-ia',
    excerpt: 'El proyecto "Identificación de subgrupos clínicos en sepsis mediante modelos de mezcla gaussiana" fue galardonado con el segundo puesto en el Congreso Internacional de Medicina Crítica (AMCI®).',
    body_content: `Bogotá D.C., 12 de junio de 2025\n\nEl proyecto de investigación “Identificación de subgrupos clínicos en sepsis mediante modelos de mezcla gaussiana: un análisis basado en inteligencia artificial” fue galardonado con el segundo puesto en la categoría adultos, modalidad oral, en el marco del Congreso Internacional de Medicina Crítica y Cuidado Intensivo organizado por la Asociación Colombiana de Medicina Crítica y Cuidado Intensivo (AMCI®).\n\nEl reconocimiento fue otorgado al Dr. Juan José Diaztagle Fernández, destacando la relevancia del trabajo en la aplicación de técnicas de inteligencia artificial para la estratificación de pacientes con sepsis, una condición de alta complejidad clínica y significativa carga en salud pública.\n\nEste estudio propone el uso de modelos de mezcla gaussiana para identificar subgrupos clínicos con comportamientos diferenciados, contribuyendo al avance de enfoques de medicina personalizada y al desarrollo de herramientas de apoyo a la decisión clínica en entornos críticos.\n\nEl premio incluye un reconocimiento económico destinado a fortalecer actividades académicas y de investigación, consolidando el impacto del proyecto en la comunidad científica.\n\nEste logro resalta el papel de la investigación interdisciplinaria en la integración de la inteligencia artificial en la medicina crítica, así como el compromiso institucional con el desarrollo de soluciones innovadoras basadas en evidencia.`,
    category: 'news',
    tags: ['Sepsis', 'AMCI', 'GMM', 'IA', 'MedicinaCrítica'],
    published_at: '2025-06-12T09:00:00Z',
    base_relevance: 98,
    views_count: 2800,
    is_active: true,
    is_featured: true,
    solution_url: null,
    average_rating: 0,
    rating_count: 0,
    social_links: [
      { platform: 'LinkedIn', url: '#', icon: 'share' },
      { platform: 'Twitter', url: '#', icon: 'public' }
    ],
    image_url: '/images/sepsis-ia-award.jpg',
    logo_icon: 'emoji_events'
  },
  {
    id: '27',
    title: 'Identificación de subgrupos clínicos en sepsis mediante modelos de mezcla gaussiana: un análisis basado en inteligencia artificial',
    slug: 'sepsis-gmm',
    excerpt: 'Proyecto de investigación orientado a la identificación de subgrupos clínicos en pacientes con sepsis mediante técnicas de aprendizaje no supervisado. A partir de modelos de mezcla gaussiana (GMM), se busca caracterizar fenotipos clínicos diferenciables asociados a desenlaces relevantes como mortalidad intrahospitalaria y estancia hospitalaria prolongada.',
    body_content: 'El modelo identificó cinco clústeres clínicamente diferenciables con variaciones significativas en severidad clínica (APACHE II, SOFA), disfunción orgánica (creatinina, lactato, pH) y estado hemodinámico. La mortalidad intrahospitalaria varió entre 25% y 75%, evidenciando perfiles de riesgo claramente diferenciados. Los clústeres 2 y 3 presentaron los perfiles más graves.',
    category: 'research',
    tags: ['Sepsis', 'GMM', 'MachineLearning', 'CuidadoCrítico', 'Clustering', 'IA', 'AprendizajeNoSupervisado'],
    published_at: '2025-06-12T09:00:00Z',
    base_relevance: 97,
    views_count: 1850,
    is_active: true,
    is_featured: true,
    solution_url: null,
    average_rating: 4.8,
    rating_count: 28,
    image_url: '/images/sepsis-gmm-hero.png',
    logo_icon: 'monitor_heart',
    subsections: ['Trabajo de Semillero'],
    funding_type: 'No',
    research_status: 'Terminado'
  },
  {
    id: '28',
    title: 'Identificación de Subgrupos Clínicos en Sepsis mediante GMM',
    slug: 'modelo-gmm-sepsis',
    excerpt: 'Modelo de clustering no supervisado basado en Gaussian Mixture Models que identifica cinco fenotipos clínicos diferenciados en pacientes con sepsis, estratificando riesgo de mortalidad intrahospitalaria y estancia hospitalaria prolongada para apoyar decisiones en medicina crítica.',
    body_content: 'Modelo basado en Gaussian Mixture Models (GMM) entrenado sobre 96 pacientes adultos con diagnóstico de sepsis. Identifica cinco clústeres clínicamente diferenciables con mortalidad intrahospitalaria variable entre 25% y 75% y estancia hospitalaria prolongada entre 57% y 75%. Los clústeres 2 y 3 presentan los perfiles más graves con mayor disfunción metabólica.',
    category: 'solution',
    tags: ['MachineLearning', 'Clustering', 'GMM', 'Sepsis', 'CuidadoCrítico', 'AprendizajeNoSupervisado'],
    published_at: '2025-06-12T09:00:00Z',
    base_relevance: 90,
    views_count: 580,
    is_active: true,
    is_featured: false,
    solution_url: '/p/modelo-gmm-sepsis',
    average_rating: 4.8,
    rating_count: 18,
    image_url: '/images/sepsis-gmm-hero.png',
    logo_icon: 'analytics',
    subsections: ['Machine Learning'],
    tool_type: 'Modelo de Clustering (GMM)',
    status: 'Validado'
  },
  {
    id: '29',
    title: 'Taller Básico de Patología Computacional – Programa GLORIA',
    slug: 'taller-patologia-computacional-gloria',
    excerpt: 'El Programa GLORIA realizó su primer Taller Básico de Patología Computacional: un evento híbrido certificado de 6 horas que reunió a patólogos, residentes, citohistotecnólogos e ingenieros biomédicos en la FUCS el 11 de abril de 2026.',
    body_content: `El 11 de abril de 2026, el Programa GLORIA realizó con éxito su primer Taller Básico de Patología Computacional, celebrado de manera híbrida en la Sala Digital Grande — Biblioteca Darío Cadena Rey de la Fundación Universitaria de Ciencias de la Salud (FUCS), Sede Norte, Carrera 54 No. 67A – 80.

El evento, moderado por el Dr. Rafael Parra Medina, reunió a profesionales del área de salud y tecnología interesados en comprender el impacto de la inteligencia artificial y el análisis digital de imágenes en la práctica diagnóstica actual. La jornada tuvo una capacidad presencial de 39 personas y contó además con transmisión virtual a través de Zoom.

El programa académico, desarrollado entre las 7:00 a.m. y la 1:00 p.m., cubrió un arco temático progresivo: desde la presentación del Programa GLORIA y su alcance, hasta un taller práctico de análisis de imágenes digitales con QuPath. En los módulos teóricos, el Dr. John Jaime Sprockel Díaz abordó el panorama actual de la inteligencia artificial; Juan Andrés Méndez Galvis expuso las bases de Machine Learning aplicado a patología; y Javier Hernán Gil Gómez introdujo los conceptos clave sobre señales de imágenes en histopatología. El cierre práctico, a cargo del Dr. Andrés David Mosquera Zamudio, permitió a los participantes operar directamente sobre la plataforma QuPath para el análisis cuantitativo de imágenes de tejido.

Los asistentes recibieron un certificado de asistencia con intensidad de 6 horas, avalado por la FUCS, la Sociedad de Cirugía de Bogotá – Hospital de San José, icontec (ISO 9001) y el Laboratorio de Patología Rita María Páez S.A.S., entre otras instituciones. El evento contó con financiación del proyecto Ciencias (contrato 789-2023) y la participación del Instituto Nacional de Cancerología Colombia y Laboratorios López Correa.

Este taller representa un paso concreto en la misión formativa del Programa GLORIA, consolidando su compromiso con la transferencia de conocimiento en patología digital e inteligencia artificial aplicada a la salud diagnóstica en Colombia.`,
    category: 'news',
    tags: ['PatologíaComputacional', 'GLORIA', 'QuPath', 'FUCS', 'PatologíaDigital'],
    published_at: '2026-04-11T07:00:00Z',
    base_relevance: 93,
    views_count: 870,
    is_active: true,
    is_featured: true,
    solution_url: null,
    average_rating: 4.8,
    rating_count: 22,
    social_links: [
      { platform: 'LinkedIn', url: '#', icon: 'share' },
      { platform: 'Twitter', url: '#', icon: 'public' }
    ],
    image_url: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&auto=format&fit=crop',
    logo_icon: 'biotech'
  },
  {
    id: '30',
    title: 'Taller Básico de Patología Computacional – Programa GLORIA',
    slug: 'taller-patologia-computacional',
    excerpt: 'Programa de formación presencial e híbrida en patología digital, inteligencia artificial aplicada a histopatología y análisis de imágenes con QuPath. Certificado con 6 horas de intensidad, avalado por FUCS e icontec.',
    body_content: `Programa de formación desarrollado en el marco del Programa GLORIA — Globalización de la Telepatología en Red con Aplicaciones de Inteligencia Artificial.

AGENDA

7:30 – 8:00 | Programa GLORIA
Ponente: Rafael Parra Medina, MD, MSc, PhD
Presentación del Programa GLORIA, sus objetivos, avances y el contexto de la patología digital en Colombia.

8:00 – 8:30 | Inteligencia Artificial: ¿Para dónde vamos?
Ponente: John Jaime Sprockel Díaz, MD, MSc
Panorama actual de la IA en medicina: tendencias, modelos fundacionales y su impacto en el diagnóstico clínico.

8:30 – 9:30 | Machine Learning aplicado a patología
Ponente: Juan Andrés Méndez Galvis, Ing, MSc (st)
Fundamentos de Machine Learning, tipos de aprendizaje y sus aplicaciones en análisis de imágenes histopatológicas.

9:30 – 10:45 | Señales de imágenes en histopatología
Ponente: Javier Hernán Gil Gómez, MSc, PhD (St)
Preprocesamiento de imágenes digitales, extracción de características y técnicas de análisis cuantitativo en tejido histológico.

10:45 – 11:00 | Break

11:00 – 12:00 | Workshop: Plataforma de imágenes digitales con QuPath
Ponente: Andrés David Mosquera Zamudio, MD, PhD
Taller práctico en QuPath: segmentación, anotación y análisis cuantitativo de imágenes de whole slide imaging (WSI).

12:00 – 12:30 | Evaluación y certificación de aprobación del curso
Ponente: Javier Hernán Gil Gómez, MSc, PhD (St)
Evaluación de los conocimientos adquiridos y proceso de certificación de asistencia.

12:30 – 12:40 | Cierre y despedida
Ponente: Rafael Parra Medina, MD, PhD`,
    category: 'education',
    tags: ['PatologíaDigital', 'QuPath', 'MachineLearning', 'GLORIA', 'Histopatología'],
    published_at: '2026-04-11T07:00:00Z',
    base_relevance: 91,
    views_count: 640,
    is_active: true,
    is_featured: true,
    solution_url: null,
    average_rating: 4.9,
    rating_count: 18,
    education_subtype: 'Curso',
    education_area: ['Patología Digital', 'IA aplicada a Salud', 'Histopatología'],
    start_date: '2026-04-11T07:00:00Z',
    end_date: '2026-04-11T13:00:00Z',
    image_url: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&auto=format&fit=crop',
    logo_icon: 'biotech'
  }
];

export function calculateDynamicScore(content: Content): number {
  const w1 = 1.0;
  const w2 = 0.05;
  const gravity = 1.5;

  const ageInMs = Date.now() - new Date(content.published_at).getTime();
  const ageInHours = Math.max(0, ageInMs / (1000 * 60 * 60));

  const numerator = (content.base_relevance * w1) + (content.views_count * w2);
  const denominator = Math.pow(ageInHours + 2, gravity);

  return numerator / denominator;
}

export function getRankedContent(categoryFilter?: string, subsectionFilter?: string, sortBy: 'ranking' | 'date' | 'views' = 'ranking'): Content[] {
  let filtered = mockContent;

  // Filtro por categoría general (solution, research, etc)
  if (categoryFilter && categoryFilter !== 'all') {
    filtered = filtered.filter(item => item.category === categoryFilter);
  }

  // Filtro específico para subsecciones de soluciones (LLM/NLP, Deep Learning, etc)
  if (subsectionFilter) {
    filtered = filtered.filter(item => item.subsections?.includes(subsectionFilter));
  }

  return filtered.sort((a, b) => {
    if (sortBy === 'ranking') {
      return calculateDynamicScore(b) - calculateDynamicScore(a);
    } else if (sortBy === 'date') {
      return new Date(b.published_at).getTime() - new Date(a.published_at).getTime();
    } else if (sortBy === 'views') {
      return b.views_count - a.views_count;
    }
    return 0;
  });
}
