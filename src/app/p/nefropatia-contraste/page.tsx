import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SolutionCard from '@/components/SolutionCard';
import StarRating from '@/components/StarRating';
import { mockContent } from '@/lib/mockData';
import SolutionDisclaimerWrapper from '@/components/SolutionDisclaimerWrapper';

export default async function NefropatiaContrastePage() {
  const research = mockContent.find(c => c.slug === 'nefropatia-contraste');
  const solutionGMM = mockContent.find(c => c.slug === 'modelo-gmm-nefropatia');

  if (!research) return <div>Contenido no encontrado</div>;

  return (
    <SolutionDisclaimerWrapper category="research" subsections={['Machine Learning']}>
      <Navbar />
      <main className="flex-grow bg-[var(--color-surface)] min-h-screen pt-32 pb-24 text-[var(--color-on-surface)]">
        <div className="max-w-5xl mx-auto px-8 lg:px-12">
          
          {/* Header Section: Logo y Calificación */}
          <div className="flex justify-between items-center mb-8">
            <div className="w-16 h-16 bg-[var(--color-surface-container)] rounded-2xl flex items-center justify-center text-[var(--color-secondary)] shadow-sm border border-[var(--color-outline-variant)]/30">
              <span className="material-symbols-outlined text-4xl">{research.logo_icon || 'monitor_heart'}</span>
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
                Este proyecto tiene como objetivo el desarrollo y validación de un modelo de inteligencia artificial basado en aprendizaje no supervisado para la estratificación de riesgo de lesión renal aguda asociada a contraste (CA/CI-AKI) en pacientes sometidos a cateterismo cardiaco en el contexto de infarto agudo de miocardio.
              </p>
              <p>
                A través del uso de modelos de mezcla gaussiana (Gaussian Mixture Models, GMM), se busca identificar fenotipos clínicos latentes que permitan clasificar a los pacientes en grupos con diferente susceptibilidad al desarrollo de complicaciones renales, superando las limitaciones de los modelos tradicionales de predicción clínica.
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
              <div className="text-[var(--color-on-surface-variant)] space-y-6">
                <p>La lesión renal aguda asociada a medios de contraste es una complicación frecuente y clínicamente relevante en procedimientos de angiografía coronaria e intervención percutánea, con impacto significativo en morbimortalidad.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <div className="p-5 bg-[var(--color-surface)] rounded-2xl border border-red-100 shadow-sm">
                       <h4 className="text-xs font-bold text-red-600 mb-2 flex items-center gap-2">
                         <span className="material-symbols-outlined text-sm">error</span> Limitaciones Actuales
                       </h4>
                       <p className="text-[10px] leading-relaxed">Los modelos tradicionales, como el score de Mehran, presentan baja capacidad discriminativa en contextos locales y no logran capturar la heterogeneidad clínica del síndrome coronario agudo.</p>
                    </div>
                    <div className="p-5 bg-[var(--color-surface)] rounded-2xl border border-blue-100 shadow-sm">
                       <h4 className="text-xs font-bold text-blue-600 mb-2 flex items-center gap-2">
                         <span className="material-symbols-outlined text-sm">auto_awesome</span> La Oportunidad de la IA
                       </h4>
                       <p className="text-[10px] leading-relaxed">El aprendizaje no supervisado permite identificar patrones clínicos latentes y subgrupos diferenciados, facilitando una aproximación alineada con la medicina personalizada.</p>
                    </div>
                </div>
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
                    Desarrollar un modelo de inteligencia artificial basado en aprendizaje no supervisado para identificar grupos de riesgo de lesión renal aguda asociada a contraste en pacientes sometidos a cateterismo cardiaco.
                  </p>
                </div>
                <div className="bg-[var(--color-secondary)]/5 p-8 rounded-3xl border border-[var(--color-secondary)]/10">
                  <h3 className="font-bold text-[var(--color-secondary)] mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined">architecture</span> Objetivos específicos
                  </h3>
                  <ul className="text-[var(--color-on-surface-variant)] text-xs space-y-3">
                    <li>• Identificar fenotipos clínicos asociados a diferentes niveles de riesgo renal.</li>
                    <li>• Evaluar la incidencia de CA/CI-AKI y necesidad de diálisis en cada grupo.</li>
                    <li>• Analizar la reproducibilidad y estabilidad del modelo.</li>
                    <li>• Comparar el desempeño del modelo con enfoques tradicionales de predicción.</li>
                    <li>• Generar una herramienta de estratificación de riesgo basada en datos reales.</li>
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
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                 <div className="bg-[var(--color-surface-container-low)] p-6 rounded-2xl border border-[var(--color-outline-variant)]/20">
                    <span className="text-2xl font-black text-[var(--color-primary)]/20 block mb-2">01</span>
                    <h4 className="font-bold text-[var(--color-primary)] text-xs mb-2">Población</h4>
                    <p className="text-[10px] text-[var(--color-on-surface-variant)]">1,210 pacientes adultos (2018–2022) en seis instituciones de Colombia.</p>
                 </div>
                 <div className="bg-[var(--color-surface-container-low)] p-6 rounded-2xl border border-[var(--color-outline-variant)]/20">
                    <span className="text-2xl font-black text-[var(--color-primary)]/20 block mb-2">02</span>
                    <h4 className="font-bold text-[var(--color-primary)] text-xs mb-2">Procesamiento</h4>
                    <p className="text-[10px] text-[var(--color-on-surface-variant)]">Estandarización z-score, codificación categórica y manejo de colinealidad.</p>
                 </div>
                 <div className="bg-[var(--color-surface-container-low)] p-6 rounded-2xl border border-[var(--color-outline-variant)]/20">
                    <span className="text-2xl font-black text-[var(--color-primary)]/20 block mb-2">03</span>
                    <h4 className="font-bold text-[var(--color-primary)] text-xs mb-2">Modelamiento</h4>
                    <p className="text-[10px] text-[var(--color-on-surface-variant)]">Entrenamiento GMM (K=2-6) optimizado mediante BIC e identificación de 4 clusters.</p>
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-[var(--color-surface-container-lowest)] p-8 rounded-3xl border border-[var(--color-outline-variant)]/10 shadow-sm">
                 <div>
                    <h4 className="font-bold text-[var(--color-primary)] mb-4 flex items-center gap-2 text-sm">
                      <span className="material-symbols-outlined">verified</span> Validación y Estabilidad
                    </h4>
                    <p className="text-xs text-[var(--color-on-surface-variant)] leading-relaxed">
                      Validación interna mediante división de datos y evaluación de estabilidad con <strong>Adjusted Rand Index</strong>. Análisis de calibración y robustez técnica.
                    </p>
                 </div>
                 <div>
                    <h4 className="font-bold text-[var(--color-primary)] mb-4 flex items-center gap-2 text-sm">
                      <span className="material-symbols-outlined">analytics</span> Evaluación Clínica
                    </h4>
                    <p className="text-xs text-[var(--color-on-surface-variant)] leading-relaxed">
                      Comparación de incidencia de CA/CI-AKI y diálisis entre clusters. Visualización avanzada mediante <strong>UMAP</strong>, heatmaps y gráficos radiales.
                    </p>
                 </div>
              </div>
            </section>

            {/* Resultados (Ponencias, Artículos y Modelos) */}
            <section className="space-y-12">
              <div className="flex items-center gap-4">
                <span className="w-2 h-8 bg-[var(--color-secondary)] rounded-full"></span>
                <h2 className="text-2xl font-bold text-[var(--color-primary)] uppercase tracking-widest text-sm">Resultados</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Ponencias */}
                <div className="space-y-6">
                  <h3 className="font-bold text-[var(--color-on-surface)] flex items-center gap-2 text-xs uppercase tracking-widest text-primary/60">
                    <span className="material-symbols-outlined text-[var(--color-secondary)]">campaign</span> Ponencias
                  </h3>
                  <ul className="text-[10px] text-[var(--color-on-surface-variant)] space-y-3">
                    <li className="p-3 bg-white rounded-xl border border-[var(--color-outline-variant)]/20 shadow-sm">Presentación en eventos científicos en cardiología e inteligencia artificial.</li>
                    <li className="p-3 bg-white rounded-xl border border-[var(--color-outline-variant)]/20 shadow-sm">Socialización de resultados en entornos académicos e institucionales.</li>
                  </ul>
                </div>

                {/* Artículos */}
                <div className="space-y-6">
                  <h3 className="font-bold text-[var(--color-on-surface)] flex items-center gap-2 text-xs uppercase tracking-widest text-primary/60">
                    <span className="material-symbols-outlined text-[var(--color-secondary)]">description</span> Artículos
                  </h3>
                  <div className="p-5 bg-[var(--color-secondary)]/5 rounded-2xl border border-[var(--color-secondary)]/20">
                    <p className="text-[10px] font-bold text-[var(--color-secondary)] mb-2 uppercase">En Revisión Editorial</p>
                    <p className="text-xs font-bold text-[var(--color-primary)] leading-tight">
                      Risk Stratification of Contrast-Associated Acute Kidney Injury... An Unsupervised Multicenter Cohort Study
                    </p>
                  </div>
                </div>

                {/* Modelos */}
                <div className="space-y-6">
                  <h3 className="font-bold text-[var(--color-on-surface)] flex items-center gap-2 text-xs uppercase tracking-widest text-primary/60">
                    <span className="material-symbols-outlined text-[var(--color-secondary)]">smart_toy</span> Modelos Desarrollados
                  </h3>
                  {solutionGMM && (
                    <div className="scale-90 origin-top-left -ml-2">
                      <SolutionCard content={solutionGMM} />
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* Impacto Esperado */}
            <section className="bg-[var(--color-surface-container-high)] p-12 rounded-[40px] shadow-inner relative overflow-hidden">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                 <div>
                    <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6 tracking-tight">Impacto Esperado</h2>
                    <p className="text-[var(--color-on-surface-variant)] mb-8 font-light text-lg">El proyecto busca fortalecer la identificación temprana de pacientes de alto riesgo y optimizar estrategias preventivas en cardiología intervencionista.</p>
                 </div>
                 <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: 'health_and_safety', t: 'Clínico', d: 'Identificación temprana' },
                      { icon: 'precision_manufacturing', t: 'Sistémico', d: 'Eficiencia recursos' },
                      { icon: 'science', t: 'Científico', d: 'Aprendizaje no supervisado' },
                      { icon: 'person_add', t: 'Personalizado', d: 'Medicina de precisión' }
                    ].map(i => (
                      <div key={i.t} className="bg-white p-4 rounded-2xl shadow-sm border border-[var(--color-outline-variant)]/10 text-center">
                         <span className="material-symbols-outlined text-[var(--color-link)] mb-2 text-xl">{i.icon}</span>
                         <h4 className="text-[10px] font-bold text-[var(--color-primary)] uppercase block tracking-tighter">{i.t}</h4>
                         <p className="text-[8px] text-[var(--color-on-surface-variant)]">{i.d}</p>
                      </div>
                    ))}
                 </div>
               </div>
            </section>

            {/* Equipo e Instituciones */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-[var(--color-outline-variant)]/20 pt-16">
              <div>
                <h3 className="font-bold text-[var(--color-primary)] mb-6 uppercase tracking-widest text-xs">Instituciones Colaboradoras</h3>
                <div className="space-y-4">
                  {[
                    'Centros de atención terciaria y cuaternaria (Bogotá, Ibagué, Bucaramanga)', 
                    'Fundación Universitaria de Ciencias de la Salud (FUCS)', 
                    'Hospitales participantes en la red multicéntrica'
                  ].map(inst => (
                    <div key={inst} className="text-xs font-medium text-[var(--color-on-surface-variant)] flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-[var(--color-secondary)] rounded-full"></span> {inst}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-bold text-[var(--color-primary)] mb-6 uppercase tracking-widest text-xs">Equipo del Proyecto</h3>
                <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                  {[
                    'John Jaime Sprockel Díaz', 'Abraham José Ovalle Ortiz', 'Paula Daniela Nieto-Zambrano', 
                    'Saúl Pardo Vargas', 'Karen Natalia Guerrero Mesa', 'Alejandro Guerrero Cortes', 
                    'Silvia Alejandra Mogollón Hurtado', 'Sergio Andrés Fuentes París', 'Juan Manuel Quirós Hernández', 
                    'Luisa Fernanda Pardo Castro', 'Daniela Alexandra Cifuentes Garcia', 'Natalia Magaldi Serna', 
                    'Juan Vargas Ruiz', 'Paula Andrea Díaz Ardila', 'Evelyng Tatiana Carvajal Ostios', 'Jhon Edison Parra'
                  ].map(m => (
                    <div key={m} className="text-[10px] text-[var(--color-on-surface-variant)] border-b border-[var(--color-outline-variant)]/5 pb-1">
                      {m}
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
