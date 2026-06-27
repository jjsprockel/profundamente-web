import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SolutionCard from '@/components/SolutionCard';
import Link from 'next/link';
import { mockContent } from '@/lib/mockData';
import SolutionDisclaimerWrapper from '@/components/SolutionDisclaimerWrapper';

export default async function FracturaTobilloPage() {
  const research = mockContent.find(c => c.slug === 'fractura-tobillo');
  const solution = mockContent.find(c => c.slug === 'prediccion-tobillo-convnext');

  if (!research) return <div>Contenido no encontrado</div>;

  return (
    <SolutionDisclaimerWrapper category="research" subsections={['Deep Learning', 'Visión por computador']}>
      <Navbar />
      <main className="flex-grow bg-[var(--color-surface)] min-h-screen pt-32 pb-24">
        <div className="max-w-5xl mx-auto px-8 lg:px-12">
          
          {/* Logo */}
          <div className="mb-8">
            <div className="w-16 h-16 bg-[var(--color-surface-container)] rounded-2xl flex items-center justify-center text-[var(--color-secondary)] shadow-sm border border-[var(--color-outline-variant)]/30">
              <span className="material-symbols-outlined text-4xl">{research.logo_icon || 'airline_seat_legroom_extra'}</span>
            </div>
          </div>

          {/* Nombre y Descripción */}
          <header className="mb-16">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-[var(--color-primary)] mb-6 font-[family-name:var(--font-headline)] tracking-tight">
              {research.title}
            </h1>
            <div className="prose prose-lg max-w-none text-[var(--color-on-surface-variant)] leading-relaxed">
              <p className="text-xl font-light italic border-l-4 border-[var(--color-secondary)] pl-6 py-2 bg-[var(--color-secondary)]/5 rounded-r-xl">
                {research.excerpt}
              </p>
              <p className="mt-8">
                Este proyecto de investigación tiene como objetivo el desarrollo y validación de modelos de inteligencia artificial para el análisis automatizado de imágenes radiográficas en pacientes con fracturas de tobillo. Se enfoca en la clasificación de fracturas según el sistema de Lauge-Hansen y en la predicción de la presencia de fractura del maléolo posterior.
              </p>
            </div>
          </header>

          {/* Tarjeta de Premio FLAMeCiPP */}
          <Link
            href="/noticias/premio-flamecipp-cordoba-2026"
            className="group flex flex-col md:flex-row items-center gap-6 bg-gradient-to-r from-amber-50 via-amber-50 to-orange-50 border border-amber-200 rounded-3xl p-8 mb-12 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-400 rounded-2xl flex items-center justify-center shadow-md">
              <span className="material-symbols-outlined text-white text-4xl">workspace_premium</span>
            </div>
            <div className="flex-grow text-center md:text-left">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-amber-600 mb-1">
                Premio Internacional · Mayo 2026
              </p>
              <h3 className="text-xl font-extrabold text-[var(--color-primary)] mb-1 leading-tight">
                Mejor Tema Libre FLAMeCiPP
              </h3>
              <p className="text-sm text-[var(--color-on-surface-variant)] leading-relaxed">
                11° Congreso FLAMeCiPP — Federación Latinoamericana de Medicina y Cirugía de la Pierna y el Pie<br />
                <span className="text-[var(--color-outline)] text-xs">Córdoba, Argentina · 26–29 de mayo de 2026</span>
              </p>
            </div>
            <div className="flex-shrink-0 flex items-center gap-2 text-amber-600 font-bold text-sm group-hover:gap-3 transition-all whitespace-nowrap">
              Ver noticia
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </div>
          </Link>

          <div className="grid grid-cols-1 gap-16">
            
            {/* Justificación */}
            <section className="bg-[var(--color-surface-container-lowest)] p-8 lg:p-12 rounded-3xl shadow-sm border border-[var(--color-outline-variant)]/10">
              <div className="flex items-center gap-4 mb-8">
                <span className="w-2 h-8 bg-[var(--color-secondary)] rounded-full"></span>
                <h2 className="text-2xl font-bold text-[var(--color-primary)] uppercase tracking-widest text-sm">Justificación</h2>
              </div>
              <div className="text-[var(--color-on-surface-variant)] space-y-4">
                <p>Las fracturas de tobillo son lesiones frecuentes con implicaciones funcionales significativas. La radiografía simple presenta limitaciones en la detección de compromiso del maléolo posterior, requiriendo estudios complementarios que no siempre están disponibles.</p>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  {['Alta carga asistencial', 'Variabilidad interobservador', 'Limitaciones en experiencia especializada'].map(item => (
                    <li key={item} className="flex items-center gap-3 bg-[var(--color-surface)] p-4 rounded-xl border border-[var(--color-outline-variant)]/20">
                      <span className="material-symbols-outlined text-[var(--color-secondary)]">warning</span>
                      <span className="text-xs font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Objetivos */}
            <section className="space-y-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-2 h-8 bg-[var(--color-secondary)] rounded-full"></span>
                <h2 className="text-2xl font-bold text-[var(--color-primary)] uppercase tracking-widest text-sm">Objetivos</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-[var(--color-primary)]/5 p-8 rounded-3xl border border-[var(--color-primary)]/10">
                  <h3 className="font-bold text-[var(--color-primary)] mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined">center_focus_strong</span> Objetivo general
                  </h3>
                  <p className="text-[var(--color-on-surface-variant)] text-sm leading-relaxed">
                    Desarrollar y validar modelos de IA para la identificación automática de fracturas de tobillo, la clasificación según Lauge-Hansen y la predicción de fractura del maléolo posterior.
                  </p>
                </div>
                <div className="bg-[var(--color-secondary)]/5 p-8 rounded-3xl border border-[var(--color-secondary)]/10">
                  <h3 className="font-bold text-[var(--color-secondary)] mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined">architecture</span> Objetivos específicos
                  </h3>
                  <ul className="text-[var(--color-on-surface-variant)] text-xs space-y-3">
                    <li>• Describir tipos de fracturas en imágenes radiográficas y tomográficas.</li>
                    <li>• Determinar incidencia de fractura del maléolo posterior.</li>
                    <li>• Comparar desempeño de diferentes arquitecturas (CNN, Transformers).</li>
                    <li>• Analizar impacto de múltiples proyecciones radiográficas.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Metodología */}
            <section>
              <div className="flex items-center gap-4 mb-8">
                <span className="w-2 h-8 bg-[var(--color-secondary)] rounded-full"></span>
                <h2 className="text-2xl font-bold text-[var(--color-primary)] uppercase tracking-widest text-sm">Metodología</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[var(--color-surface-container-low)] p-6 rounded-2xl border border-[var(--color-outline-variant)]/20">
                  <h4 className="font-bold text-[var(--color-primary)] mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">groups</span> Población y Datos
                   </h4>
                  <p className="border-l-2 border-[var(--color-secondary)] pl-4 text-xs text-[var(--color-on-surface-variant)]">
                    Estudio analítico de corte transversal multicéntrico (Hospital de San José y Hospital Infantil) incluyendo pacientes mayores de 18 años (2020-2023).
                  </p>
                </div>
                <div className="bg-[var(--color-surface-container-low)] p-6 rounded-2xl border border-[var(--color-outline-variant)]/20">
                  <h4 className="font-bold text-[var(--color-primary)] mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">memory</span> IA y Procesamiento
                   </h4>
                  <p className="border-l-2 border-[var(--color-secondary)] pl-4 text-xs text-[var(--color-on-surface-variant)]">
                    Entrenamiento de CNN (VGG, EficcientNet) y sistemas de ensamble. Preprocesamiento en escala de grises y validación con métricas AUC/F1.
                  </p>
                </div>
              </div>
            </section>

            {/* Resultados (Ponencias, Artículos, Modelos) */}
            <section className="space-y-12">
              <div className="flex items-center gap-4">
                <span className="w-2 h-8 bg-[var(--color-secondary)] rounded-full"></span>
                <h2 className="text-2xl font-bold text-[var(--color-primary)] uppercase tracking-widest text-sm">Resultados</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Ponencias */}
                <div className="space-y-4">
                  <h3 className="font-bold text-[var(--color-on-surface)] flex items-center gap-2 text-sm uppercase tracking-wider">
                    <span className="material-symbols-outlined text-[var(--color-secondary)]">campaign</span> Ponencias
                  </h3>
                  <ul className="text-xs text-[var(--color-on-surface-variant)] space-y-2">
                    <li className="p-3 bg-amber-50 rounded-xl border border-amber-200 shadow-sm">
                      <span className="flex items-center gap-1.5 text-[9px] font-extrabold uppercase tracking-wider text-amber-600 mb-1">
                        <span className="material-symbols-outlined text-[12px]">workspace_premium</span>
                        Mejor Tema Libre · FLAMeCiPP 2026
                      </span>
                      <span className="italic">11° Congreso FLAMeCiPP / 26° Congreso SAMeCiPP, Córdoba, Argentina.</span>
                    </li>
                    <li className="p-3 bg-white rounded-xl border border-[var(--color-outline-variant)]/20 shadow-sm italic">Congreso Nacional de Ortopedia y Traumatología — Colombia.</li>
                  </ul>
                </div>
 
                {/* Artículos */}
                <div className="space-y-4">
                  <h3 className="font-bold text-[var(--color-on-surface)] flex items-center gap-2 text-sm uppercase tracking-wider">
                    <span className="material-symbols-outlined text-[var(--color-secondary)]">description</span> Artículos
                  </h3>
                  <div className="p-4 bg-[var(--color-secondary)]/5 rounded-xl border border-[var(--color-secondary)]/20">
                    <p className="text-[10px] font-bold text-[var(--color-secondary)] mb-1 uppercase">Destacado</p>
                    <p className="text-xs font-bold text-[var(--color-primary)]">PREDICTION OF POSTERIOR MALLEOLAR FRACTURES... BASED ON VISION TRANSFORMERS</p>
                  </div>
                </div>

                {/* Modelos */}
                <div className="space-y-4">
                  <h3 className="font-bold text-[var(--color-on-surface)] flex items-center gap-2 text-sm uppercase tracking-wider">
                    <span className="material-symbols-outlined text-[var(--color-secondary)]">smart_toy</span> Modelos
                  </h3>
                  {solution && (
                    <div className="scale-90 origin-top-left -ml-2">
                      <SolutionCard content={solution} />
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* Impacto Esperado */}
            <section className="bg-[var(--color-surface-container-high)] p-12 rounded-[40px] shadow-sm relative overflow-hidden">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                 <div>
                    <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">Impacto Esperado</h2>
                    <p className="text-[var(--color-on-surface-variant)] mb-8">El proyecto busca fortalecer la detección temprana y el apoyo a médicos no especializados en entornos de alta carga asistencial.</p>
                 </div>
                 <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: 'health_and_safety', t: 'Clínico', d: 'Detección temprana' },
                      { icon: 'speed', t: 'Operativo', d: 'Mejora en tiempos' },
                      { icon: 'precision_manufacturing', t: 'Tecnológico', d: 'Herramientas IA' },
                      { icon: 'school', t: 'Formativo', d: 'Capacidad científica' }
                    ].map(i => (
                      <div key={i.t} className="bg-white p-4 rounded-2xl shadow-sm border border-[var(--color-outline-variant)]/10 text-center">
                         <span className="material-symbols-outlined text-[var(--color-secondary)] mb-2">{i.icon}</span>
                         <h4 className="text-xs font-bold text-[var(--color-primary)] block">{i.t}</h4>
                      </div>
                    ))}
                 </div>
               </div>
            </section>

            {/* Equipo e Instituciones */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-[var(--color-outline-variant)]/20 pt-16">
              <div>
                <h3 className="font-bold text-[var(--color-primary)] mb-6 uppercase tracking-widest text-xs">Instituciones y Grupos</h3>
                <div className="space-y-4">
                  {[
                    'FUCS', 'Hospital de San José', 'Hospital Infantil Universitario', 'Instituto Dupuytren (Argentina)', 'Grupo de Ortopedia y Traumatología'
                  ].map(inst => (
                    <div key={inst} className="text-sm font-medium text-[var(--color-on-surface-variant)] flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-[var(--color-secondary)] rounded-full"></span> {inst}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-bold text-[var(--color-primary)] mb-6 uppercase tracking-widest text-xs">Equipo del Proyecto</h3>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    { n: 'C. Caicedo Donoso', r: 'Orthopedic Surgeon, Hospital de San José' },
                    { n: 'R. Rodríguez Ciodaro', r: 'Full Professor, FUCS' },
                    { n: 'G. Arrondo', r: 'Chief of Ankle Service, Instituto Dupuytren' },
                    { n: 'J. Sprockel Diaz', r: 'Associate Research Professor, FUCS' }
                  ].map(m => (
                    <div key={m.n} className="flex flex-col border-b border-[var(--color-outline-variant)]/10 pb-2">
                       <span className="text-sm font-bold text-[var(--color-on-surface)]">{m.n}</span>
                       <span className="text-[10px] text-[var(--color-outline)] uppercase">{m.r}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Sección de Calificación */}
            <div className="pt-8 border-t border-[var(--color-outline-variant)]/30">
                            <p className="text-xs text-[var(--color-outline)] italic">La valoración interactiva estará disponible en la versión completa de la plataforma.</p>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </SolutionDisclaimerWrapper>
  );
}
