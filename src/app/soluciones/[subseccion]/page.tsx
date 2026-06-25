import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import SolucionesSubseccionClient from './SolucionesSubseccionClient';

const SUBSECTION_META: Record<string, { title: string; subtitle: string; desc: string; filter: string }> = {
  'llm-nlp': {
    title: 'Síntesis Clínica Inteligente',
    subtitle: 'LLM / NLP',
    desc: 'Modelos basados en procesamiento de lenguaje natural orientados a la generación, estructuración y análisis de información clínica no estructurada. Estas herramientas permiten apoyar la elaboración de historias clínicas, la interpretación de notas médicas, resultados de laboratorio e informes diagnósticos, así como el desarrollo de procesos educativos en salud. Su objetivo es mejorar la organización y comprensión de la información clínica, manteniendo siempre un enfoque en la validación y supervisión humana.',
    filter: 'LLM/NLP',
  },
  'machine-learning': {
    title: 'Reglas de Predicción Clínica',
    subtitle: 'Machine Learning',
    desc: 'Modelos de aprendizaje automático diseñados para identificar patrones y estimar riesgos clínicos a partir de datos estructurados. Estas soluciones integran variables demográficas, clínicas, de laboratorio y, cuando es posible, genéticas, con el fin de apoyar procesos de diagnóstico y anticipación de complicaciones. Se desarrollan bajo esquemas de validación estadística rigurosa y están orientadas a la investigación aplicada y la evaluación de modelos predictivos en contextos reales.',
    filter: 'Machine Learning',
  },
  'deep-learning': {
    title: 'Diagnóstico por Imagen',
    subtitle: 'Deep Learning',
    desc: 'Modelos de aprendizaje profundo enfocados en el análisis automatizado de imágenes médicas, incluyendo estudios radiológicos y de histopatología. Mediante redes neuronales convolucionales y arquitecturas basadas en Transformers visuales, estas herramientas buscan apoyar la detección, clasificación y caracterización de hallazgos clínicos. Su uso actual se limita a escenarios de investigación y validación, donde se evalúa su desempeño, robustez y aplicabilidad.',
    filter: 'Deep Learning',
  },
  agentes: {
    title: 'Gestión Inteligente en Salud',
    subtitle: 'Agentes',
    desc: 'Agentes de inteligencia artificial diseñados para apoyar la gestión de procesos asistenciales y de investigación en salud. Estas soluciones buscan automatizar tareas, integrar información de múltiples fuentes y facilitar la toma de decisiones en entornos complejos. Incluyen aplicaciones orientadas a la gestión de flujos clínicos, seguimiento de pacientes, apoyo a procesos investigativos y coordinación de actividades académicas. Su desarrollo se enmarca en modelos experimentales que requieren evaluación continua antes de cualquier implementación en entornos operativos.',
    filter: 'Agentes',
  },
};

export function generateStaticParams() {
  return Object.keys(SUBSECTION_META).map((subseccion) => ({ subseccion }));
}

export default async function SubsectionPage({ params }: { params: Promise<{ subseccion: string }> }) {
  const { subseccion } = await params;
  const meta = SUBSECTION_META[subseccion];

  if (!meta) {
    return (
      <>
        <Navbar />
        <main className="flex-grow pt-40 pb-24 text-center text-[var(--color-on-surface-variant)] min-h-screen">
          <h1 className="text-2xl font-bold mb-4">Subsección no encontrada</h1>
          <Link href="/soluciones" className="text-[var(--color-primary)] hover:underline">
            Volver a Soluciones
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="flex-grow pt-32 pb-24 bg-[var(--color-surface)] min-h-screen">

        <section className="bg-[var(--color-surface-container-lowest)] py-16 mb-16 border-b border-[var(--color-outline-variant)]/20 shadow-sm">
          <div className="max-w-7xl mx-auto px-8 lg:px-24">
            <Link href="/soluciones" className="inline-flex items-center gap-2 text-sm text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] mb-8 transition-colors">
              <span className="material-symbols-outlined text-[16px]">arrow_back</span>
              Volver al Portafolio
            </Link>

            <div className="max-w-4xl">
              <span className="text-[var(--color-secondary)] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
                {meta.subtitle}
              </span>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-[var(--color-primary)] mb-8 tracking-tight">
                {meta.title}
              </h1>

              <p className="text-xl text-[var(--color-on-surface-variant)] font-light leading-relaxed mb-10">
                {meta.desc}
              </p>

              <div className="bg-[var(--color-surface)] border-l-4 border-[var(--color-secondary)] p-6 rounded-r-2xl text-[var(--color-on-surface)] text-sm shadow-sm max-w-3xl">
                <span className="font-bold flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-[var(--color-secondary)]">warning</span>
                  Aviso Importante
                </span>
                Es importante destacar que estas herramientas{' '}
                <strong className="text-[var(--color-primary)]">no están destinadas</strong>, en su estado actual, para la
                toma de decisiones clínicas ni para su implementación directa en la práctica asistencial. Su
                disponibilidad en esta plataforma tiene como finalidad facilitar la exploración, la evaluación
                preliminar y el uso en entornos de prueba, investigación o formación. El uso de estas soluciones debe
                entenderse en todo momento dentro de un contexto experimental y supervisado.
              </div>
            </div>
          </div>
        </section>

        <SolucionesSubseccionClient subseccionFilter={meta.filter} />

      </main>
      <Footer />
    </>
  );
}
