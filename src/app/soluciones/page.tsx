import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { PublicationService } from '@/lib/services/publicationService';
import Link from 'next/link';
import SolutionCard from '@/components/SolutionCard';

export default async function SolucionesPage() {
  
  const allSolutions = (await PublicationService.getAllPublications()).filter(p => p.category === 'solution');

  // Filtrar por subsección (usando tags o subsections del mock que ahora están integradas)
  const topLLM = allSolutions.filter(p => p.subsections?.includes('LLM/NLP')).slice(0, 3);
  const topML = allSolutions.filter(p => p.subsections?.includes('Machine Learning')).slice(0, 3);
  const topDL = allSolutions.filter(p => p.subsections?.includes('Deep Learning')).slice(0, 3);
  const topAgentes = allSolutions.filter(p => p.subsections?.includes('Agentes')).slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="flex-grow pt-32 pb-24 bg-[var(--color-surface)] min-h-screen">
        
        {/* Cabecera / Introducción */}
        <section className="max-w-4xl mx-auto px-8 lg:px-0 mb-16">
          <span className="text-[var(--color-secondary)] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
            Nuestros Modelos
          </span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-[var(--color-primary)] mb-8 tracking-tight leading-tight">
            Soluciones en IA
          </h1>
          
          <div className="prose prose-lg prose-slate max-w-none text-[var(--color-on-surface-variant)] font-[family-name:var(--font-body)] leading-relaxed space-y-6">
            <p>
              El laboratorio ProfundaMente desarrolla y pone a disposición un conjunto de soluciones basadas en inteligencia artificial orientadas a la gestión de procesos clínicos, la investigación y la educación en salud. Estas soluciones integran metodologías de aprendizaje automático, procesamiento de lenguaje natural y aprendizaje profundo, enmarcadas en líneas de investigación activas y procesos de validación rigurosos.
            </p>
            <p>
              Cada solución corresponde a un modelo o conjunto de modelos que se encuentran en diferentes fases de desarrollo, evaluación y validación. Su diseño se fundamenta en marcos metodológicos robustos, adaptados al contexto clínico y académico colombiano, con el propósito de garantizar pertinencia, interpretabilidad y potencial aplicabilidad en escenarios reales.
            </p>
            <div className="bg-[var(--color-surface-container-low)] border-l-4 border-[var(--color-secondary)] p-6 rounded-r-2xl my-8 text-[var(--color-on-surface)] text-sm shadow-sm">
              <span className="font-bold flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-[var(--color-secondary)]">warning</span>
                Aviso Importante
              </span>
              Es importante destacar que estas herramientas <strong className="text-[var(--color-primary)]">no están destinadas</strong>, en su estado actual, para la toma de decisiones clínicas ni para su implementación directa en la práctica asistencial. Su disponibilidad en esta plataforma tiene como finalidad facilitar la exploración, la evaluación preliminar y el uso en entornos de prueba, investigación o formación. El uso de estas soluciones debe entenderse en todo momento dentro de un contexto experimental y supervisado.
            </div>
          </div>
        </section>

        {/* Pilares Estratégicos con sus tarjetas inyectadas */}
        <section className="max-w-7xl mx-auto px-8 lg:px-24 space-y-24">
          
          {/* Pilar 1: LLM / NLP */}
          <div id="llm-nlp" className="scroll-mt-32">
            <div className="max-w-4xl mb-12">
              <h2 className="text-3xl font-extrabold flex items-center gap-3 text-[var(--color-tertiary)] mb-4">
                <span className="material-symbols-outlined text-4xl">neurology</span>
                LLM / NLP — Síntesis Clínica Inteligente
              </h2>
              <p className="text-[var(--color-on-surface-variant)] text-lg leading-relaxed ml-12">
                Modelos basados en procesamiento de lenguaje natural orientados a la generación, estructuración y análisis de información clínica no estructurada. Estas herramientas permiten apoyar la elaboración de historias clínicas, la interpretación de notas médicas, resultados de laboratorio e informes diagnósticos, así como el desarrollo de procesos educativos en salud. Su objetivo es mejorar la organización y comprensión de la información clínica, manteniendo siempre un enfoque en la validación y supervisión humana.
              </p>
            </div>
            
            {/* Top 3 Cards de LLM */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-[var(--color-on-surface)] mb-6">Soluciones Destacadas en LLM/NLP</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {topLLM.map(tool => <SolutionCard key={tool.id} content={tool} />)}
              </div>
            </div>
            <Link href="/soluciones/llm-nlp" className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-surface-container-high)] text-[var(--color-on-surface)] hover:bg-[var(--color-tertiary)] hover:text-white font-bold rounded-xl transition-all shadow-sm">
              Ver todo el catálogo NLP
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>

          <hr className="border-[var(--color-outline-variant)]/20" />

          {/* Pilar 2: Machine Learning */}
          <div id="machine-learning" className="scroll-mt-32">
            <div className="max-w-4xl mb-12">
              <h2 className="text-3xl font-extrabold flex items-center gap-3 text-[var(--color-secondary)] mb-4">
                <span className="material-symbols-outlined text-4xl">data_usage</span>
                Machine Learning — Reglas de Predicción Clínica
              </h2>
              <p className="text-[var(--color-on-surface-variant)] text-lg leading-relaxed ml-12">
                Modelos de aprendizaje automático diseñados para identificar patrones y estimar riesgos clínicos a partir de datos estructurados. Estas soluciones integran variables demográficas, clínicas, de laboratorio y, cuando es posible, genéticas, con el fin de apoyar procesos de diagnóstico y anticipación de complicaciones. Se desarrollan bajo esquemas de validación estadística rigurosa y están orientadas a la investigación aplicada y la evaluación de modelos predictivos en contextos reales.
              </p>
            </div>
            
            {/* Top 3 Cards de ML */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-[var(--color-on-surface)] mb-6">Soluciones Destacadas en Machine Learning</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {topML.map(tool => <SolutionCard key={tool.id} content={tool} />)}
              </div>
            </div>
            <Link href="/soluciones/machine-learning" className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-surface-container-high)] text-[var(--color-on-surface)] hover:bg-[var(--color-secondary)] hover:text-white font-bold rounded-xl transition-all shadow-sm">
              Ver todo el catálogo Predictivo
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>

          <hr className="border-[var(--color-outline-variant)]/20" />

          {/* Pilar 3: Deep Learning */}
          <div id="deep-learning" className="scroll-mt-32">
            <div className="max-w-4xl mb-12">
              <h2 className="text-3xl font-extrabold flex items-center gap-3 text-[var(--color-primary)] mb-4">
                <span className="material-symbols-outlined text-4xl">biotech</span>
                Deep Learning — Diagnóstico por Imagen
              </h2>
              <p className="text-[var(--color-on-surface-variant)] text-lg leading-relaxed ml-12">
                Modelos de aprendizaje profundo enfocados en el análisis automatizado de imágenes médicas, incluyendo estudios radiológicos y de histopatología. Mediante redes neuronales convolucionales y arquitecturas basadas en Transformers visuales, estas herramientas buscan apoyar la detección, clasificación y caracterización de hallazgos clínicos. Su uso actual se limita a escenarios de investigación y validación, donde se evalúa su desempeño, robustez y aplicabilidad.
              </p>
            </div>
            
            {/* Top 3 Cards de DL */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-[var(--color-on-surface)] mb-6">Soluciones Destacadas en Computer Vision</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {topDL.map(tool => <SolutionCard key={tool.id} content={tool} />)}
              </div>
            </div>
            <Link href="/soluciones/deep-learning" className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-surface-container-high)] text-[var(--color-on-surface)] hover:bg-[var(--color-primary)] hover:text-white font-bold rounded-xl transition-all shadow-sm">
              Ver todo el catálogo CV
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>

          <hr className="border-[var(--color-outline-variant)]/20" />

          {/* Pilar 4: Agentes */}
          <div id="agentes" className="scroll-mt-32">
            <div className="max-w-4xl mb-12">
              <h2 className="text-3xl font-extrabold flex items-center gap-3 text-[var(--color-outline)] mb-4">
                <span className="material-symbols-outlined text-4xl">smart_toy</span>
                Agentes — Gestión Inteligente en Salud
              </h2>
              <p className="text-[var(--color-on-surface-variant)] text-lg leading-relaxed ml-12">
                Agentes de inteligencia artificial diseñados para apoyar la gestión de procesos asistenciales y de investigación en salud. Estas soluciones buscan automatizar tareas, integrar información de múltiples fuentes y facilitar la toma de decisiones en entornos complejos. Incluyen aplicaciones orientadas a la gestión de flujos clínicos, seguimiento de pacientes, apoyo a procesos investigativos y coordinación de actividades académicas. Su desarrollo se enmarca en modelos experimentales que requieren evaluación continua antes de cualquier implementación en entornos operativos.
              </p>
            </div>
            
            {/* Top 3 Cards de Agentes */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-[var(--color-on-surface)] mb-6">Soluciones Destacadas de Agentes Inteligentes</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {topAgentes.map(tool => <SolutionCard key={tool.id} content={tool} />)}
              </div>
            </div>
            <Link href="/soluciones/agentes" className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-surface-container-high)] text-[var(--color-on-surface)] hover:bg-slate-700 hover:text-white font-bold rounded-xl transition-all shadow-sm">
              Ver todo el ecosistema Agéntico
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>

        </section>

      </main>
      <Footer />
    </>
  );
}
