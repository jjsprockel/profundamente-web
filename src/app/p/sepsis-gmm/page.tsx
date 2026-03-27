import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StarRating from '@/components/StarRating';
import RatingFeedback from '@/components/RatingFeedback';
import SolutionCard from '@/components/SolutionCard';
import { mockContent } from '@/lib/mockData';
import prisma from '@/lib/prisma';

export default async function SepsisGMMPage() {
  const entity = mockContent.find(c => c.slug === 'sepsis-gmm');
  const solutionCard = mockContent.find(c => c.slug === 'modelo-gmm-sepsis');
  const pub = await prisma.publication.findUnique({ where: { slug: 'sepsis-gmm' } });

  if (!entity) return <div>Contenido no encontrado</div>;

  return (
    <>
      <Navbar />
      <main className="flex-grow bg-[var(--color-surface)] min-h-screen pt-32 pb-24 text-[var(--color-on-surface)]">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">

          {/* Logo y Calificación */}
          <div className="flex justify-between items-center mb-8">
            <div className="w-16 h-16 bg-[var(--color-surface-container)] rounded-2xl flex items-center justify-center text-[var(--color-secondary)] shadow-sm border border-[var(--color-outline-variant)]/30">
              <span className="material-symbols-outlined text-4xl">{entity.logo_icon || 'monitor_heart'}</span>
            </div>
            <div className="bg-[var(--color-surface-container-lowest)] px-4 py-2 rounded-full shadow-sm border border-[var(--color-outline-variant)]/20">
              <StarRating rating={entity.average_rating} count={entity.rating_count} />
            </div>
          </div>

          {/* Nombre y Descripción */}
          <header className="mb-16">
            <div className="flex flex-wrap gap-2 mb-4">
              {entity.subsections?.map(sub => (
                <span key={sub} className="px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest rounded-full bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]">
                  {sub}
                </span>
              ))}
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold text-[var(--color-primary)] mb-6 font-[family-name:var(--font-headline)] tracking-tight leading-tight">
              {entity.title}
            </h1>
            <p className="text-xl font-light italic border-l-4 border-[var(--color-secondary)] pl-6 py-2 bg-[var(--color-secondary)]/5 rounded-r-xl text-[var(--color-on-surface-variant)] leading-relaxed">
              {entity.excerpt}
            </p>
          </header>

          <div className="grid grid-cols-1 gap-16">

            {/* Justificación */}
            <section>
              <div className="flex items-center gap-4 mb-8">
                <span className="w-1 h-8 bg-[var(--color-secondary)] rounded-full"></span>
                <h2 className="text-sm font-bold uppercase tracking-widest text-[var(--color-primary)]">Justificación</h2>
              </div>
              <div className="space-y-4 text-[var(--color-on-surface-variant)] leading-relaxed">
                <p>La sepsis es un síndrome clínico altamente heterogéneo, cuya variabilidad en presentación y evolución dificulta su manejo uniforme y limita la efectividad de estrategias terapéuticas estandarizadas.</p>
                <p>Los enfoques tradicionales no logran capturar la complejidad fisiopatológica ni la diversidad de perfiles clínicos, lo que genera oportunidades para el uso de inteligencia artificial en la identificación de patrones latentes.</p>
                <p>En este contexto, el uso de modelos de clustering permite descubrir subgrupos clínicos con características diferenciadas, facilitando una mejor comprensión de la enfermedad y abriendo la posibilidad de intervenciones más personalizadas.</p>
              </div>
            </section>

            {/* Objetivos */}
            <section>
              <div className="flex items-center gap-4 mb-8">
                <span className="w-1 h-8 bg-[var(--color-secondary)] rounded-full"></span>
                <h2 className="text-sm font-bold uppercase tracking-widest text-[var(--color-primary)]">Objetivos</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-[var(--color-primary)] p-8 rounded-3xl text-white shadow-xl relative overflow-hidden group">
                  <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-9xl opacity-10 group-hover:scale-110 transition-transform">my_location</span>
                  <h3 className="text-xs uppercase font-bold tracking-widest mb-4 opacity-80">Objetivo general</h3>
                  <p className="text-base font-medium leading-relaxed italic">
                    Identificar subgrupos clínicos en pacientes con sepsis mediante modelos de mezcla gaussiana (GMM) y evaluar su asociación con mortalidad intrahospitalaria y estancia hospitalaria prolongada.
                  </p>
                </div>
                <div>
                  <h3 className="text-xs font-bold text-[var(--color-outline)] uppercase tracking-widest mb-4">Objetivos específicos</h3>
                  <ul className="space-y-3">
                    {[
                      'Caracterizar fenotipos clínicos basados en variables demográficas, clínicas y laboratoriales',
                      'Identificar diferencias en severidad y disfunción orgánica entre clústeres',
                      'Evaluar la asociación entre clústeres y desenlaces clínicos',
                      'Explorar la utilidad del modelo en estratificación de riesgo'
                    ].map(obj => (
                      <li key={obj} className="flex items-start gap-3 text-sm text-[var(--color-on-surface-variant)]">
                        <span className="material-symbols-outlined text-[var(--color-secondary)] text-sm mt-0.5">double_arrow</span>
                        {obj}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Metodología */}
            <section className="bg-[var(--color-primary)]/5 p-8 lg:p-12 rounded-3xl">
              <div className="flex items-center gap-4 mb-10">
                <span className="w-1 h-8 bg-[var(--color-secondary)] rounded-full"></span>
                <h2 className="text-sm font-bold uppercase tracking-widest text-[var(--color-primary)]">Metodología</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: 'groups', title: 'Población', desc: '96 pacientes adultos con diagnóstico de sepsis' },
                  { icon: 'table_chart', title: 'Datos', desc: 'Variables demográficas, clínicas, laboratoriales y hemodinámicas' },
                  { icon: 'build', title: 'Procesamiento', desc: 'Imputación por mediana y estandarización de variables' },
                  { icon: 'scatter_plot', title: 'Modelo', desc: 'Gaussian Mixture Models (GMM)' },
                  { icon: 'tune', title: 'Selección', desc: 'Criterio bayesiano de información (BIC)' },
                  { icon: 'analytics', title: 'Visualización', desc: 'Reducción dimensional mediante PCA' }
                ].map(item => (
                  <div key={item.title} className="bg-white p-5 rounded-2xl border border-[var(--color-outline-variant)]/20 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[var(--color-secondary)]/10 flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-[var(--color-secondary)]">{item.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[var(--color-primary)] uppercase tracking-wide mb-1">{item.title}</h4>
                      <p className="text-xs text-[var(--color-on-surface-variant)] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Resultados */}
            <section>
              <div className="flex items-center gap-4 mb-8">
                <span className="w-1 h-8 bg-[var(--color-secondary)] rounded-full"></span>
                <h2 className="text-sm font-bold uppercase tracking-widest text-[var(--color-primary)]">Resultados</h2>
              </div>

              <div className="bg-[var(--color-surface-container-lowest)] p-8 rounded-3xl border border-[var(--color-outline-variant)]/20 mb-8">
                <p className="text-[var(--color-on-surface-variant)] leading-relaxed mb-6">
                  El modelo identificó <strong className="text-[var(--color-on-surface)]">cinco clústeres clínicamente diferenciables</strong>, con variaciones significativas en:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  {[
                    { label: 'Mortalidad intrahospitalaria', range: '25% – 75%', icon: 'vital_signs' },
                    { label: 'Estancia prolongada (>5 días)', range: '57% – 75%', icon: 'calendar_clock' },
                    { label: 'Clústeres críticos', range: '2 y 3', icon: 'warning' }
                  ].map(m => (
                    <div key={m.label} className="p-4 bg-[var(--color-secondary)]/5 rounded-2xl border border-[var(--color-secondary)]/10 text-center">
                      <span className="material-symbols-outlined text-[var(--color-secondary)] text-2xl mb-2 block">{m.icon}</span>
                      <p className="text-lg font-extrabold text-[var(--color-primary)]">{m.range}</p>
                      <p className="text-[10px] text-[var(--color-outline)] uppercase tracking-wider mt-1">{m.label}</p>
                    </div>
                  ))}
                </div>
                <ul className="space-y-2 text-sm text-[var(--color-on-surface-variant)]">
                  {[
                    'Severidad clínica diferenciada: APACHE II, SOFA',
                    'Disfunción orgánica variable: creatinina, lactato, pH',
                    'Estado hemodinámico con patrones diferenciados por clúster',
                    'Clústeres 2 y 3: mayor disfunción metabólica y peor pronóstico'
                  ].map(r => (
                    <li key={r} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-[var(--color-secondary)] text-sm mt-0.5">check_circle</span>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ponencias */}
              <div className="bg-[var(--color-primary)] text-white p-8 rounded-3xl relative overflow-hidden mb-8">
                <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-9xl opacity-10">workspace_premium</span>
                <div className="relative z-10">
                  <p className="text-[10px] uppercase font-bold tracking-widest opacity-70 mb-3">Ponencias</p>
                  <h3 className="text-xl font-bold mb-2">Congreso Internacional de Medicina Crítica y Cuidado Intensivo (AMCI®)</h3>
                  <div className="flex flex-wrap gap-3 mt-4">
                    <span className="px-3 py-1.5 bg-white/15 rounded-full text-xs font-bold">Presentación oral</span>
                    <span className="px-3 py-1.5 bg-white/15 rounded-full text-xs font-bold">2do puesto — categoría adultos</span>
                  </div>
                  <p className="mt-4 text-sm text-white/80 leading-relaxed">
                    Este reconocimiento resalta el valor del modelo en la aplicación de inteligencia artificial para la estratificación clínica en sepsis.
                  </p>
                </div>
              </div>

              {/* Modelos desarrollados */}
              <div>
                <h3 className="text-xs font-bold text-[var(--color-outline)] uppercase tracking-widest mb-6">Modelos desarrollados</h3>
                {solutionCard && (
                  <div className="max-w-sm">
                    <SolutionCard content={solutionCard} />
                  </div>
                )}
              </div>
            </section>

            {/* Impacto esperado */}
            <section>
              <div className="flex items-center gap-4 mb-8">
                <span className="w-1 h-8 bg-[var(--color-secondary)] rounded-full"></span>
                <h2 className="text-sm font-bold uppercase tracking-widest text-[var(--color-primary)]">Impacto esperado</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { icon: 'local_hospital', label: 'Clínico', desc: 'Mejor estratificación de riesgo en pacientes con sepsis' },
                  { icon: 'science', label: 'Científico', desc: 'Avance en el uso de aprendizaje no supervisado en medicina crítica' },
                  { icon: 'memory', label: 'Tecnológico', desc: 'Desarrollo de modelos aplicables a escenarios reales' },
                  { icon: 'account_tree', label: 'Sistémico', desc: 'Base para implementación de herramientas de apoyo a decisiones' },
                  { icon: 'person_pin', label: 'Medicina de precisión', desc: 'Identificación de fenotipos clínicos diferenciados' }
                ].map(item => (
                  <div key={item.label} className="p-5 bg-[var(--color-surface-container-lowest)] rounded-2xl border border-[var(--color-outline-variant)]/20 flex items-start gap-4">
                    <span className="material-symbols-outlined text-[var(--color-secondary)] text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                    <div>
                      <p className="text-xs font-bold text-[var(--color-primary)] uppercase tracking-wide mb-1">{item.label}</p>
                      <p className="text-xs text-[var(--color-on-surface-variant)] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Instituciones y Miembros */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-1 h-8 bg-[var(--color-secondary)] rounded-full"></span>
                  <h2 className="text-sm font-bold uppercase tracking-widest text-[var(--color-primary)]">Instituciones colaboradoras</h2>
                </div>
                <div className="space-y-3">
                  {[
                    { name: 'Hospital El Tunal – Subred Sur', icon: 'local_hospital' },
                    { name: 'Universidad Nacional de Colombia', icon: 'school' },
                    { name: 'Fundación Universitaria de Ciencias de la Salud (FUCS)', icon: 'business' }
                  ].map(inst => (
                    <div key={inst.name} className="flex items-center gap-3 p-4 bg-[var(--color-surface-container-lowest)] rounded-2xl border border-[var(--color-outline-variant)]/20">
                      <span className="material-symbols-outlined text-[var(--color-secondary)]">{inst.icon}</span>
                      <p className="text-sm font-medium text-[var(--color-on-surface)]">{inst.name}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-1 h-8 bg-[var(--color-secondary)] rounded-full"></span>
                  <h2 className="text-sm font-bold uppercase tracking-widest text-[var(--color-primary)]">Miembros</h2>
                </div>
                <div className="space-y-3">
                  {[
                    { name: 'Juan José Diaztagle Fernández', role: 'Investigador principal' },
                    { name: 'John Jaime Sprockel Díaz', role: 'Co-investigador' }
                  ].map(member => (
                    <div key={member.name} className="p-5 bg-[var(--color-primary)]/5 rounded-2xl border border-[var(--color-primary)]/10">
                      <p className="text-xs uppercase font-bold text-[var(--color-primary)] tracking-wider mb-1">{member.role}</p>
                      <p className="font-bold text-[var(--color-on-surface)]">{member.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Metadatos */}
            <div className="flex flex-wrap gap-3 pt-4 border-t border-[var(--color-outline-variant)]/20">
              {entity.tags.map(tag => (
                <span key={tag} className="text-[11px] text-[var(--color-outline)] bg-[var(--color-surface-container-low)] px-2.5 py-1 rounded-lg border border-[var(--color-outline-variant)]/30">
                  #{tag}
                </span>
              ))}
            </div>

          </div>

          {/* Valoración del lector */}
          <div className="mt-16 pt-8 border-t border-[var(--color-outline-variant)]/30">
            <h2 className="text-sm font-bold uppercase tracking-widest text-[var(--color-outline)] mb-6">Valoración del lector</h2>
            {pub && <RatingFeedback publicationId={pub.id} category={pub.category} />}
            {!pub && (
              <p className="text-xs text-[var(--color-outline)] italic">
                La valoración estará disponible una vez el contenido sea registrado en la base de datos.
              </p>
            )}
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
