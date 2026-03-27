import Link from 'next/link';

export default function SolutionsGrid() {
  return (
    <section className="py-24 px-8 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div className="space-y-4">
            <span className="text-[var(--color-secondary)] font-bold tracking-[0.2em] uppercase text-xs">Portafolio</span>
            <h2 className="text-4xl font-extrabold text-[var(--color-primary)]">Soluciones en IA</h2>
          </div>
          <p className="hidden md:block text-[var(--color-on-surface-variant)] max-w-sm text-right text-sm">
            Herramientas disponibles para uso experimental, orientadas a la exploración y aprendizaje en inteligencia artificial aplicada a la salud
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1: LLM/NLP */}
          <Link href="/soluciones/llm-nlp" className="group bg-[var(--color-surface-container-lowest)] p-8 rounded-3xl hover:bg-[var(--color-surface-container)] transition-all duration-300 flex flex-col h-full shadow-sm border border-[var(--color-surface-container-high)]/30">
            <div className="w-12 h-12 rounded-xl bg-[var(--color-tertiary)]/10 flex items-center justify-center text-[var(--color-tertiary)] mb-6">
              <span className="material-symbols-outlined">neurology</span>
            </div>
            <span className="px-3 py-1 bg-[var(--color-tertiary)]/10 text-[var(--color-tertiary)] text-[10px] font-bold uppercase tracking-wider rounded-full w-fit mb-4">LLM / NLP</span>
            <h3 className="text-xl font-bold text-[var(--color-on-surface)] mb-3">Síntesis Clínica Inteligente</h3>
            <p className="text-[var(--color-on-surface-variant)] text-sm flex-grow mb-8">
              Procesamiento de lenguaje natural para la generación, estructuración y análisis de historias clínicas, notas médicas y reportes diagnósticos, facilitando la interpretación de datos clínicos y apoyando procesos asistenciales y educativos.
            </p>
            <div className="flex items-center justify-between w-full group-hover:text-[var(--color-tertiary)] transition-colors font-bold text-sm">
              Acceder a Herramientas
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
            </div>
          </Link>

          {/* Card 2: Machine Learning */}
          <Link href="/soluciones/machine-learning" className="group bg-[var(--color-surface-container-lowest)] p-8 rounded-3xl hover:bg-[var(--color-surface-container)] transition-all duration-300 flex flex-col h-full shadow-sm border border-[var(--color-surface-container-high)]/30">
            <div className="w-12 h-12 rounded-xl bg-[var(--color-secondary)]/10 flex items-center justify-center text-[var(--color-secondary)] mb-6">
              <span className="material-symbols-outlined">data_usage</span>
            </div>
            <span className="px-3 py-1 bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] text-[10px] font-bold uppercase tracking-wider rounded-full w-fit mb-4">Machine Learning</span>
            <h3 className="text-xl font-bold text-[var(--color-on-surface)] mb-3">Reglas de Predicción Clínica</h3>
            <p className="text-[var(--color-on-surface-variant)] text-sm flex-grow mb-8">
              Modelos predictivos para estimar riesgo clínico, apoyar el diagnóstico y anticipar complicaciones, integrando datos demográficos, clínicos, de laboratorio y genéticos en entornos reales de atención.
            </p>
            <div className="flex items-center justify-between w-full group-hover:text-[var(--color-secondary)] transition-colors font-bold text-sm">
              Acceder a Herramientas
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
            </div>
          </Link>

          {/* Card 3: Deep Learning */}
          <Link href="/soluciones/deep-learning" className="group bg-[var(--color-surface-container-lowest)] p-8 rounded-3xl hover:bg-[var(--color-surface-container)] transition-all duration-300 flex flex-col h-full shadow-sm border border-[var(--color-surface-container-high)]/30">
            <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)] mb-6">
              <span className="material-symbols-outlined">biotech</span>
            </div>
            <span className="px-3 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-[10px] font-bold uppercase tracking-wider rounded-full w-fit mb-4">Deep Learning</span>
            <h3 className="text-xl font-bold text-[var(--color-on-surface)] mb-3">Diagnóstico por Imagen</h3>
            <p className="text-[var(--color-on-surface-variant)] text-sm flex-grow mb-8">
              Análisis automatizado de imágenes radiológicas e histopatológicas mediante redes neuronales convolucionales y transformers visuales, orientado al soporte en la detección, clasificación y caracterización de enfermedades.
            </p>
            <div className="flex items-center justify-between w-full group-hover:text-[var(--color-primary)] transition-colors font-bold text-sm">
              Acceder a Herramientas
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
            </div>
          </Link>

          {/* Card 4: Agentes */}
          <Link href="/soluciones/agentes" className="group bg-[var(--color-surface-container-lowest)] p-8 rounded-3xl hover:bg-[var(--color-surface-container)] transition-all duration-300 flex flex-col h-full shadow-sm border border-[var(--color-surface-container-high)]/30">
            <div className="w-12 h-12 rounded-xl bg-[var(--color-outline)]/10 flex items-center justify-center text-[var(--color-outline)] mb-6">
              <span className="material-symbols-outlined">smart_toy</span>
            </div>
            <span className="px-3 py-1 bg-[var(--color-outline)]/10 text-[var(--color-outline)] text-[10px] font-bold uppercase tracking-wider rounded-full w-fit mb-4">Agentes</span>
            <h3 className="text-xl font-bold text-[var(--color-on-surface)] mb-3">Gestión en Clínica e Inv.</h3>
            <p className="text-[var(--color-on-surface-variant)] text-sm flex-grow mb-8">
              Agentes de inteligencia artificial diseñados para orquestar procesos de atención e investigación en salud, integrando información, automatizando tareas y mejorando la eficiencia operativa y la toma de decisiones.
            </p>
            <div className="flex items-center justify-between w-full group-hover:text-[var(--color-outline)] transition-colors font-bold text-sm">
              Acceder a Herramientas
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}
