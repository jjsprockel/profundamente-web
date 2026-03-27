import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ResearchCard from '@/components/ResearchCard';
import { PublicationService } from '@/lib/services/publicationService';
import Link from 'next/link';

export default async function InvestigacionPage() {
  const allResearch = (await PublicationService.getAllPublications()).filter(p => p.category === 'research');
  const topResearch = allResearch.slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="flex-grow pt-32 pb-24 bg-[var(--color-surface)] min-h-screen">
        <div className="max-w-5xl mx-auto px-8 lg:px-24">
          
          <header className="mb-16">
            <span className="text-[var(--color-secondary)] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
              Eje Fundamental
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--color-primary)] tracking-tight mb-8">
              Investigación
            </h1>
            <p className="text-[var(--color-on-surface-variant)] leading-relaxed text-lg">
              El componente de investigación de <strong className="text-[var(--color-primary)]">ProfundaMente</strong> constituye el eje fundamental para el desarrollo, validación e implementación de soluciones basadas en inteligencia artificial aplicadas a la salud. A través de una aproximación rigurosa, interdisciplinaria y orientada a problemas reales del entorno clínico, el laboratorio articula conocimiento científico, desarrollo tecnológico y evaluación sistemática.
            </p>
            <p className="text-[var(--color-on-surface-variant)] leading-relaxed text-lg mt-4">
              Las actividades de investigación se estructuran en torno a macroproyectos, dentro de los cuales se integran iniciativas de diferentes niveles de formación y complejidad, promoviendo la generación de conocimiento y el desarrollo de talento en salud digital e inteligencia artificial.
            </p>
          </header>

          <section className="space-y-8">
            
            <div className="bg-[var(--color-surface-container-lowest)] p-8 md:p-10 rounded-3xl border border-[var(--color-surface-container-highest)]/50 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-secondary)]/5 rounded-bl-full -z-10" />
              <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-[var(--color-secondary)] text-3xl">account_tree</span>
                Estructura de investigación
              </h2>
              <p className="text-[var(--color-on-surface-variant)] mb-8">
                ProfundaMente organiza su producción científica y tecnológica mediante una estructura escalonada que incluye:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold text-[var(--color-on-surface)] mb-2 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[var(--color-primary)] text-sm">api</span>
                    Macroproyectos de investigación
                  </h3>
                  <p className="text-[var(--color-on-surface-variant)] text-sm leading-relaxed">
                    Líneas estratégicas que abordan problemáticas complejas en salud mediante enfoques multidisciplinarios, integrando componentes clínicos, computacionales y metodológicos. Estos proyectos orientan el desarrollo de modelos de inteligencia artificial, la generación de bases de datos y la evaluación de impacto en escenarios reales.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[var(--color-on-surface)] mb-2 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[var(--color-primary)] text-sm">school</span>
                    Trabajos de grado y formación avanzada
                  </h3>
                  <p className="text-[var(--color-on-surface-variant)] text-sm mb-2">El laboratorio apoya y desarrolla proyectos de investigación en distintos niveles de formación académica, incluyendo:</p>
                  <ul className="list-disc list-inside text-[var(--color-secondary)] font-medium text-sm ml-2 space-y-1 mb-3">
                    <li><span className="text-[var(--color-on-surface-variant)] font-normal">Especialidades médico-quirúrgicas</span></li>
                    <li><span className="text-[var(--color-on-surface-variant)] font-normal">Maestrías</span></li>
                    <li><span className="text-[var(--color-on-surface-variant)] font-normal">Doctorados</span></li>
                  </ul>
                  <p className="text-[var(--color-on-surface-variant)] text-sm leading-relaxed">Estos trabajos se articulan con los macroproyectos, contribuyendo tanto a la formación de investigadores como al avance de las líneas estratégicas del laboratorio.</p>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-lg font-bold text-[var(--color-on-surface)] mb-2 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[var(--color-primary)] text-sm">group</span>
                    Semilleros de investigación
                  </h3>
                  <p className="text-[var(--color-on-surface-variant)] text-sm leading-relaxed">
                    A través de iniciativas como el semillero Singularidad, se promueve la participación temprana de estudiantes en procesos investigativos, fomentando el pensamiento crítico, la formación en metodologías científicas y el desarrollo de competencias en inteligencia artificial aplicada a la salud.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[var(--color-surface-container-lowest)] p-8 rounded-3xl border border-[var(--color-surface-container-highest)]/50 shadow-sm transition-all hover:shadow-md">
                <h2 className="text-xl font-bold text-[var(--color-primary)] mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[var(--color-secondary)]">biotech</span>
                  Enfoque metodológico
                </h2>
                <p className="text-[var(--color-on-surface-variant)] text-sm mb-4">Las investigaciones desarrolladas en ProfundaMente están orientadas a la validación robusta, sistemática y reproducible de modelos de inteligencia artificial. Esto implica:</p>
                <ul className="list-[circle] list-inside text-[var(--color-on-surface-variant)] text-sm ml-2 space-y-1.5 mb-4">
                  <li>Diseño de estudios con rigor metodológico</li>
                  <li>Uso de datos clínicos estructurados y no estructurados</li>
                  <li>Evaluación del desempeño de modelos en contextos reales</li>
                  <li>Análisis de generalización y sesgos</li>
                  <li>Validación interna y, cuando es posible, externa</li>
                </ul>
                <p className="text-[var(--color-on-surface-variant)] text-sm font-medium">El objetivo no es únicamente el desarrollo de modelos, sino su evaluación crítica y contextualizada, garantizando su pertinencia y potencial aplicabilidad.</p>
              </div>

              <div className="bg-[var(--color-surface-container-lowest)] p-8 rounded-3xl border border-[var(--color-surface-container-highest)]/50 shadow-sm transition-all hover:shadow-md">
                <h2 className="text-xl font-bold text-[var(--color-primary)] mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[var(--color-secondary)]">policy</span>
                  Marco ético y regulatorio
                </h2>
                <p className="text-[var(--color-on-surface-variant)] text-sm mb-4">Todas las actividades de investigación se desarrollan en estricto cumplimiento de los principios éticos y normativos vigentes. Esto incluye:</p>
                <ul className="list-[circle] list-inside text-[var(--color-on-surface-variant)] text-sm ml-2 space-y-1.5 mb-4">
                  <li>Protección de datos personales y clínicos</li>
                  <li>Cumplimiento de regulaciones en investigación en salud</li>
                  <li>Evaluación por comités de ética</li>
                  <li>Transparencia en el uso de datos y modelos</li>
                  <li>Consideración de implicaciones clínicas y sociales</li>
                </ul>
                <p className="text-[var(--color-on-surface-variant)] text-sm font-medium">El laboratorio incorpora el análisis ético como un componente transversal en todos sus proyectos, asumiendo su responsabilidad en salud.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[var(--color-surface-container-lowest)] p-8 rounded-3xl border border-[var(--color-surface-container-highest)]/50 shadow-sm transition-all hover:shadow-md">
                <h2 className="text-xl font-bold text-[var(--color-primary)] mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[var(--color-secondary)]">hub</span>
                  Redes de colaboración
                </h2>
                <p className="text-[var(--color-on-surface-variant)] text-sm mb-4">ProfundaMente participa activamente en redes interinstitucionales de investigación, tanto a nivel nacional como internacional, que permiten:</p>
                <ul className="list-[circle] list-inside text-[var(--color-on-surface-variant)] text-sm ml-2 space-y-1.5 mb-4">
                  <li>Integración de datos y conocimiento</li>
                  <li>Desarrollo colaborativo de proyectos</li>
                  <li>Validación multicéntrica de modelos</li>
                  <li>Intercambio de experiencias y buenas prácticas</li>
                </ul>
                <p className="text-[var(--color-on-surface-variant)] text-sm font-medium">Estas alianzas fortalecen la calidad científica de los proyectos y amplían su impacto potencial en el sistema de salud.</p>
              </div>

              <div className="bg-[var(--color-surface-container-lowest)] p-8 rounded-3xl border border-[var(--color-surface-container-highest)]/50 shadow-sm transition-all hover:shadow-md">
                <h2 className="text-xl font-bold text-[var(--color-primary)] mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[var(--color-secondary)]">integration_instructions</span>
                  Integración con desarrollo tecnológico
                </h2>
                <p className="text-[var(--color-on-surface-variant)] text-sm mb-4 leading-relaxed">
                  El componente de investigación está estrechamente vinculado con el desarrollo de soluciones del laboratorio. Los modelos de inteligencia artificial que se ponen a disposición en la plataforma surgen de estos procesos investigativos y mantienen un vínculo directo con sus protocolos de validación.
                </p>
                <p className="text-[var(--color-on-surface-variant)] text-sm font-medium leading-relaxed">
                  De esta manera, la investigación no se concibe como un proceso aislado, sino como un sistema continuo de generación, evaluación y transferencia de conocimiento, que conecta la ciencia con la práctica.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-secondary)]/10 p-8 rounded-3xl border border-[var(--color-primary)]/20 shadow-sm text-center">
              <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4 inline-flex items-center gap-2">
                <span className="material-symbols-outlined text-[var(--color-primary)]">trending_up</span>
                Proyección
              </h2>
              <p className="text-[var(--color-on-surface)] text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
                A través de este enfoque, <strong className="text-[var(--color-primary)]">ProfundaMente</strong> busca consolidarse como un referente en investigación aplicada en inteligencia artificial en salud, contribuyendo al desarrollo de soluciones basadas en evidencia, a la formación de talento altamente calificado y al fortalecimiento de la capacidad científica del país.
              </p>
            </div>

          </section>
        </div>

        {/* Top 3 Investigaciones */}
        <div className="max-w-7xl mx-auto px-8 lg:px-24 mt-24">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-2">Investigaciones Destacadas</h2>
              <p className="text-[var(--color-on-surface-variant)] text-sm">Proyectos líderes en la intersección de salud e inteligencia artificial.</p>
            </div>
            
            <Link 
              href="/investigacion/todas" 
              className="mt-6 md:mt-0 flex items-center gap-2 px-6 py-3 bg-[var(--color-primary)] text-white rounded-xl font-bold hover:shadow-lg hover:bg-[var(--color-secondary)] transition-all"
            >
              Ver Todas las Investigaciones
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topResearch.map((item) => (
              <ResearchCard key={item.id} content={item} />
            ))}
            {topResearch.length === 0 && (
              <p className="text-[var(--color-on-surface-variant)] text-center col-span-3 py-12">
                No hay investigaciones publicadas actualmente.
              </p>
            )}
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
