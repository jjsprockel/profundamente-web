import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SolutionCard from '@/components/SolutionCard';
import StarRating from '@/components/StarRating';
import RatingFeedback from '@/components/RatingFeedback';
import { mockContent } from '@/lib/mockData';
import prisma from '@/lib/prisma';
import SolutionDisclaimerWrapper from '@/components/SolutionDisclaimerWrapper';

export default async function HematologiaPage() {
  const research = mockContent.find(c => c.slug === 'hematologia');
  const pub = await prisma.publication.findUnique({ where: { slug: 'hematologia' } });
  const solution = mockContent.find(c => c.slug === 'clasificacion-blastos-vit');

  if (!research) return <div>Contenido no encontrado</div>;

  return (
    <SolutionDisclaimerWrapper category="research" subsections={['Deep Learning', 'Visión por computador']}>
      <Navbar />
      <main className="flex-grow bg-[var(--color-surface)] min-h-screen pt-32 pb-24">
        <div className="max-w-5xl mx-auto px-8 lg:px-12">
          
          {/* Header Section: Logo y Calificación */}
          <div className="flex justify-between items-center mb-8">
            <div className="w-16 h-16 bg-[var(--color-surface-container)] rounded-2xl flex items-center justify-center text-[var(--color-secondary)] shadow-sm border border-[var(--color-outline-variant)]/30">
              <span className="material-symbols-outlined text-4xl">{research.logo_icon || 'bloodtype'}</span>
            </div>
            <div className="bg-[var(--color-surface-container-lowest)] px-4 py-2 rounded-full shadow-sm border border-[var(--color-outline-variant)]/20">
              <StarRating rating={research.average_rating} count={research.rating_count} />
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
                HematologIA es un proyecto de investigación orientado al desarrollo y validación de modelos de inteligencia artificial para el apoyo diagnóstico temprano en leucemias agudas, integrando análisis de imágenes histopatológicas, datos clínicos y perfiles genéticos. El proyecto busca construir un sistema multimodal capaz de diferenciar entidades como Leucemia Mieloide Aguda (LMA) y Leucemia Linfoblástica Aguda (LLA).
              </p>
            </div>
          </header>

          <div className="grid grid-cols-1 gap-16">
            
            {/* Justificación */}
            <section className="bg-[var(--color-surface-container-lowest)] p-8 lg:p-12 rounded-3xl shadow-sm border border-[var(--color-outline-variant)]/10">
              <div className="flex items-center gap-4 mb-8">
                <span className="w-2 h-8 bg-[var(--color-secondary)] rounded-full"></span>
                <h2 className="text-2xl font-bold text-[var(--color-primary)] uppercase tracking-widest text-sm">Justificación</h2>
              </div>
              <div className="text-[var(--color-on-surface-variant)] space-y-4">
                <p>Las leucemias agudas representan un desafío crítico en salud pública debido a su rápida progresión, alta mortalidad y la necesidad de diagnóstico oportuno. En Colombia, los tiempos de confirmación diagnóstica pueden oscilar entre 9 y 24 días.</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  {['Alta heterogeneidad biológica', 'Variabilidad interobservador', 'Complejidad en interpretación morfológica', 'Limitaciones en acceso a técnicas'].map(item => (
                    <li key={item} className="flex items-center gap-3 bg-[var(--color-surface)] p-4 rounded-xl border border-[var(--color-outline-variant)]/20">
                      <span className="material-symbols-outlined text-[var(--color-secondary)]">priority_high</span>
                      <span className="text-sm font-medium">{item}</span>
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
                    <span className="material-symbols-outlined">flag</span> Objetivo general
                  </h3>
                  <p className="text-[var(--color-on-surface-variant)] text-sm leading-relaxed">
                    Desarrollar y validar modelos de inteligencia artificial para el apoyo diagnóstico temprano en leucemias agudas mediante análisis multimodal de imágenes histopatológicas.
                  </p>
                </div>
                <div className="bg-[var(--color-secondary)]/5 p-8 rounded-3xl border border-[var(--color-secondary)]/10">
                  <h3 className="font-bold text-[var(--color-secondary)] mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined">checklist</span> Objetivos específicos
                  </h3>
                  <ul className="text-[var(--color-on-surface-variant)] text-xs space-y-3">
                    <li>• Construir base de datos multimodal (clínica, histopatológica, genética)</li>
                    <li>• Generar y curar repositorio de imágenes digitales de alta calidad</li>
                    <li>• Entrenar modelos de deep learning (CNN y Vision Transformers)</li>
                    <li>• Diferenciar LMA vs LLA con énfasis en subtipos de relevancia terapéutica</li>
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
              <div className="space-y-6">
                {[
                  { 
                    phase: 'Fase 1: Construcción de base de datos', 
                    items: ['Recolección retrospectiva (2013–2023)', 'Digitalización de muestras (médula ósea)', 'Generación de parches (20x–40x)', 'Anotación experta multidisciplinaria']
                  },
                  { 
                    phase: 'Fase 2: Desarrollo de modelos', 
                    items: ['Entrenamiento de CNN y Vision Transformers', 'Transfer Learning', 'Evaluación con métricas F1, Sensibilidad, AUC', 'Exploración de imágenes sintéticas']
                  }
                ].map((f, idx) => (
                  <div key={idx} className="bg-[var(--color-surface-container-low)] p-6 rounded-2xl border border-[var(--color-outline-variant)]/20">
                    <h4 className="font-bold text-[var(--color-primary)] mb-4">{f.phase}</h4>
                    <div className="flex flex-wrap gap-2">
                      {f.items.map(item => (
                        <span key={item} className="bg-white px-3 py-1.5 rounded-lg text-xs font-medium text-[var(--color-on-surface-variant)] border border-[var(--color-outline-variant)]/10 shadow-sm">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Resultados (Ponencias, Artículos, Modelos) */}
            <section className="space-y-12">
              <div className="flex items-center gap-4">
                <span className="w-2 h-8 bg-[var(--color-secondary)] rounded-full"></span>
                <h2 className="text-2xl font-bold text-[var(--color-primary)] uppercase tracking-widest text-sm">Resultados Obtenidos</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Ponencias y Artículos */}
                <div className="space-y-6">
                  <h3 className="font-bold text-[var(--color-on-surface)] flex items-center gap-2">
                    <span className="material-symbols-outlined text-[var(--color-secondary)]">present_to_all</span> Ponencias y Artículos
                  </h3>
                  <div className="space-y-4">
                    <div className="p-5 bg-white rounded-2xl border border-[var(--color-outline-variant)]/20 shadow-sm relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-2 bg-amber-100 text-amber-700 text-[10px] font-bold uppercase tracking-tighter rounded-bl-lg">Premio ASH 2025</div>
                      <p className="text-sm font-bold text-[var(--color-primary)] mb-1">Poster "Automatic identification of blast leukemic cells types..."</p>
                      <p className="text-xs text-[var(--color-on-surface-variant)]">67th ASH Annual Meeting, Orlando USA.</p>
                    </div>
                    <div className="p-5 bg-white rounded-2xl border border-[var(--color-outline-variant)]/20 shadow-sm">
                      <p className="text-sm font-bold text-[var(--color-primary)] mb-1">Poster "Development of a Diagnostic Support Model..."</p>
                      <p className="text-xs text-[var(--color-on-surface-variant)]">SOHO 2025 Thirteenth Annual Meeting, Houston, Texas.</p>
                    </div>
                  </div>
                </div>

                {/* Modelo Desarrollado */}
                <div className="space-y-6">
                  <h3 className="font-bold text-[var(--color-on-surface)] flex items-center gap-2">
                    <span className="material-symbols-outlined text-[var(--color-secondary)]">neurology</span> Modelos Desarrollados
                  </h3>
                  {solution && (
                    <div className="scale-95 origin-top-left">
                      <SolutionCard content={solution} />
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* Impacto Esperado */}
            <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-container)] p-12 rounded-[40px] text-white shadow-xl relative overflow-hidden">
              <span className="material-symbols-outlined absolute -right-8 -bottom-8 text-[200px] opacity-10">hub</span>
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-8">Impacto Esperado</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {[
                    { title: 'Clínico', desc: 'Reducción de tiempos y mejora en precisión' },
                    { title: 'Tecnológico', desc: 'Herramientas de IA para hematología' },
                    { title: 'Científico', desc: 'Publicaciones de alto impacto' },
                    { title: 'Formativo', desc: 'Talento en IA aplicada a salud' },
                    { title: 'Sistémico', desc: 'Fortalecimiento de salud digital' }
                  ].map(imp => (
                    <div key={imp.title} className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                      <h4 className="font-bold text-sm mb-1 uppercase tracking-widest opacity-80">{imp.title}</h4>
                      <p className="text-xs text-white/90">{imp.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Instituciones y Miembros */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-[var(--color-outline-variant)]/20 pt-16">
              <div>
                <h3 className="font-bold text-[var(--color-primary)] mb-6 flex items-center gap-2 uppercase tracking-widest text-sm">
                  Instituciones Colaboradoras
                </h3>
                <ul className="space-y-3 text-[var(--color-on-surface-variant)] text-sm">
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[var(--color-secondary)] rounded-full"></span> FUCS</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[var(--color-secondary)] rounded-full"></span> Hospital de San José</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[var(--color-secondary)] rounded-full"></span> Grupos: Hematología FUCS & MEDINE</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-[var(--color-primary)] mb-6 flex items-center gap-2 uppercase tracking-widest text-sm">
                  Equipo de Investigación
                </h3>
                <div className="grid grid-cols-1 gap-4 text-sm">
                  {[
                    { name: 'María Helena Solano Trujillo', role: 'Investigadora principal' },
                    { name: 'John Jaime Sprockel', role: 'Coinvestigador' },
                    { name: 'Liliana Moreno', role: 'Hematopatología' },
                    { name: 'Adriana Bornacelly', role: 'Investigadora en formación' }
                  ].map(m => (
                    <div key={m.name} className="flex flex-col border-b border-[var(--color-outline-variant)]/10 pb-2">
                       <span className="font-bold text-[var(--color-on-surface)]">{m.name}</span>
                       <span className="text-xs text-[var(--color-outline)]">{m.role}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Sección de Calificación */}
            <div className="pt-8 border-t border-[var(--color-outline-variant)]/30">
              {pub && <RatingFeedback publicationId={pub.id} category={pub.category} />}
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </SolutionDisclaimerWrapper>
  );
}
