import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SolutionCard from '@/components/SolutionCard';
import { mockContent } from '@/lib/mockData';
import SolutionDisclaimerWrapper from '@/components/SolutionDisclaimerWrapper';

export default async function MacroproyectoTutoresPage() {
  const research = mockContent.find(c => c.slug === 'macroproyecto-tutores');
  const solutionTutor = mockContent.find(c => c.slug === 'tutor-evaluacion-historias');
  const solutionAntibiograma = mockContent.find(c => c.slug === 'interprete-antibiogramas');

  if (!research) return <div>Contenido no encontrado</div>;

  return (
    <SolutionDisclaimerWrapper category="research" subsections={['LLM/NLP', 'Agentes']}>
      <Navbar />
      <main className="flex-grow bg-[var(--color-surface)] min-h-screen pt-32 pb-24 text-[var(--color-on-surface)]">
        <div className="max-w-5xl mx-auto px-8 lg:px-12">
          
          {/* Logo */}
          <div className="mb-8">
            <div className="w-16 h-16 bg-[var(--color-surface-container)] rounded-2xl flex items-center justify-center text-[var(--color-secondary)] shadow-sm border border-[var(--color-outline-variant)]/30">
              <span className="material-symbols-outlined text-4xl">{research.logo_icon || 'school'}</span>
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
                Este macroproyecto tiene como propósito diseñar, implementar y validar un marco metodológico para el desarrollo de tutores virtuales inteligentes basados en modelos de lenguaje (LLM), orientados a fortalecer los procesos de formación en salud.
              </p>
              <p>
                La iniciativa integra inteligencia artificial generativa, pedagogía clínica y evaluación estructurada, permitiendo la creación de sistemas de tutoría capaces de proporcionar retroalimentación personalizada, adaptativa y alineada con objetivos formativos en pregrado y posgrado.
              </p>
              <p>
                El proyecto se desarrolla en el marco del laboratorio ProfundaMente y la Unidad de Virtualización de la FUCS, consolidando un enfoque interdisciplinario que articula tecnología, educación e investigación aplicada.
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
                <p>La educación en salud requiere estrategias innovadoras que integren conocimientos teóricos, habilidades clínicas y competencias interpersonales en escenarios complejos. Los modelos de lenguaje de gran escala (LLM) ofrecen una oportunidad para transformar estos procesos mediante sistemas de tutoría inteligente que:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <li className="flex items-start gap-3 bg-[var(--color-surface)] p-4 rounded-xl border border-[var(--color-outline-variant)]/20 shadow-sm">
                      <span className="material-symbols-outlined text-[var(--color-secondary)] mt-0.5">check_circle</span>
                      <span className="text-xs">Proporcionan retroalimentación inmediata y personalizada</span>
                    </li>
                    <li className="flex items-start gap-3 bg-[var(--color-surface)] p-4 rounded-xl border border-[var(--color-outline-variant)]/20 shadow-sm">
                      <span className="material-symbols-outlined text-[var(--color-secondary)] mt-0.5">trending_up</span>
                      <span className="text-xs">Mejoran la comprensión de conceptos clínicos complejos</span>
                    </li>
                    <li className="flex items-start gap-3 bg-[var(--color-surface)] p-4 rounded-xl border border-[var(--color-outline-variant)]/20 shadow-sm">
                      <span className="material-symbols-outlined text-[var(--color-secondary)] mt-0.5">self_improvement</span>
                      <span className="text-xs">Favorecen el aprendizaje autónomo y continuo</span>
                    </li>
                    <li className="flex items-start gap-3 bg-[var(--color-surface)] p-4 rounded-xl border border-[var(--color-outline-variant)]/20 shadow-sm">
                      <span className="material-symbols-outlined text-[var(--color-secondary)] mt-0.5">change_circle</span>
                      <span className="text-xs">Reducen la dependencia de esquemas educativos tradicionales</span>
                    </li>
                </ul>
                <p className="mt-4 italic text-sm">Adicionalmente, los GPTs personalizados permiten superar limitaciones de modelos generales, como imprecisiones o falta de contextualización, mediante la incorporación de conocimiento específico, guías clínicas y estructuras pedagógicas definidas.</p>
              </div>
            </section>

            {/* Objetivos */}
            <section className="space-y-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-2 h-8 bg-[var(--color-secondary)] rounded-full"></span>
                <h2 className="text-2xl font-bold text-[var(--color-primary)] uppercase tracking-widest text-sm">Objetivos</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-[var(--color-primary)]/5 p-8 rounded-3xl border border-[var(--color-primary)]/10 shadow-sm">
                  <h3 className="font-bold text-[var(--color-primary)] mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined">center_focus_strong</span> Objetivo general
                  </h3>
                  <p className="text-[var(--color-on-surface-variant)] text-sm leading-relaxed">
                    Diseñar y validar un marco metodológico para la creación, evaluación y escalamiento de tutores virtuales inteligentes basados en GPTs personalizados en educación en salud.
                  </p>
                </div>
                <div className="bg-[var(--color-secondary)]/5 p-8 rounded-3xl border border(--color-secondary)]/10 shadow-sm">
                  <h3 className="font-bold text-[var(--color-secondary)] mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined">architecture</span> Objetivos específicos
                  </h3>
                  <ul className="text-[var(--color-on-surface-variant)] text-xs space-y-3">
                    <li>• Desarrollar un sistema estructurado para la creación de GPTs personalizados sin requerimientos de programación.</li>
                    <li>• Implementar modelos piloto en contextos clínicos y educativos específicos.</li>
                    <li>• Diseñar rúbricas de evaluación para valorar desempeño técnico, pedagógico y ético.</li>
                    <li>• Evaluar la utilidad de los tutores virtuales en el aprendizaje clínico.</li>
                    <li>• Facilitar la adopción institucional de estas tecnologías en diferentes programas académicos.</li>
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
              
              <div className="mb-8 p-6 bg-[var(--color-surface-container-lowest)] rounded-2xl border border-[var(--color-outline-variant)]/20 shadow-sm">
                <p className="text-sm text-[var(--color-on-surface-variant)]">
                  El macroproyecto se estructura como un marco de facilitación basado en un enfoque modular y reproducible.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: 'Preparación institucional', icon: 'settings_account_box', desc: 'Gobernanza, licencias y plan de implementación.' },
                  { title: 'Marco de facilitación', icon: 'auto_awesome_motion', desc: 'Guías, plantillas y buenas prácticas.' },
                  { title: 'Ingeniería del metaprompt', icon: 'psychology', desc: 'Construcción de sistema automatizado para generar GPTs.' },
                  { title: 'Desarrollo por dominio', icon: 'clinical_notes', desc: 'Creación de tutores virtuales en áreas específicas.' },
                  { title: 'Marco de evaluación', icon: 'assignment_turned_in', desc: 'Diseño de rúbricas cuantitativas y cualitativas.' },
                  { title: 'Piloto bifocal', icon: 'biotech', desc: 'Implementación y evaluación de modelos iniciales.' }
                ].map((phase, idx) => (
                  <div key={idx} className="bg-[var(--color-surface-container-low)] p-6 rounded-2xl border border-[var(--color-outline-variant)]/20 flex flex-col items-center text-center">
                    <span className="material-symbols-outlined text-[var(--color-secondary)] mb-3 text-3xl">{phase.icon}</span>
                    <h4 className="font-bold text-[var(--color-primary)] mb-2 text-xs">{phase.title}</h4>
                    <p className="text-[10px] text-[var(--color-on-surface-variant)] leading-tight">{phase.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-[var(--color-outline-variant)]/10">
                 <div className="bg-white/40 p-6 rounded-2xl">
                    <h4 className="font-bold text-[var(--color-primary)] mb-3 flex items-center gap-2 text-sm">
                      <span className="material-symbols-outlined">data_object</span> Enfoque técnico
                    </h4>
                    <ul className="text-xs text-[var(--color-on-surface-variant)] space-y-2">
                       <li>• Uso de metaprompting para generación automatizada de GPTs.</li>
                       <li>• Evaluación basada en dominios: coherencia, consistencia factual, alineación pedagógica y riesgo.</li>
                       <li>• Validación mediante métodos mixtos (cuantitativos y cualitativos).</li>
                       <li>• Integración con plataformas existentes sin necesidad de desarrollo de software adicional.</li>
                    </ul>
                 </div>
              </div>
            </section>

            {/* Resultados (Artículos y Modelos) */}
            <section className="space-y-12">
              <div className="flex items-center gap-4">
                <span className="w-2 h-8 bg-[var(--color-secondary)] rounded-full"></span>
                <h2 className="text-2xl font-bold text-[var(--color-primary)] uppercase tracking-widest text-sm">Resultados</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Artículos */}
                <div className="space-y-6">
                  <h3 className="font-bold text-[var(--color-on-surface)] flex items-center gap-2 text-sm uppercase tracking-wider">
                    <span className="material-symbols-outlined text-[var(--color-secondary)]">description</span> Artículos Publicados/Enviados
                  </h3>
                  <div className="p-6 bg-white rounded-2xl border border-[var(--color-outline-variant)]/20 shadow-md">
                    <p className="text-[10px] font-bold text-[var(--color-secondary)] mb-2 uppercase">Destacado - Repert Med Cir</p>
                    <p className="text-sm font-bold text-[var(--color-primary)] leading-snug mb-3">
                      Macroproyecto para la implementación de tutores virtuales basados en inteligencia artificial IA mediante GPTs personalizados aplicados a la educación en salud.
                    </p>
                    <p className="text-xs text-[var(--color-on-surface-variant)] font-light mb-4">
                      Sprockel JJ, Rodríguez N, González M, Gómez A.
                    </p>
                    <a href="https://doi.org/10.31260/RepertMedCir.01217372.1811" target="_blank" className="text-xs text-[var(--color-secondary)] font-bold hover:underline flex items-center gap-1">
                      Ver Publicación <span className="material-symbols-outlined text-xs">open_in_new</span>
                    </a>
                  </div>
                </div>

                {/* Modelos */}
                <div className="space-y-6">
                  <h3 className="font-bold text-[var(--color-on-surface)] flex items-center gap-2 text-sm uppercase tracking-wider">
                    <span className="material-symbols-outlined text-[var(--color-secondary)]">smart_toy</span> Modelos Desarrollados
                  </h3>
                  <div className="grid grid-cols-1 gap-6">
                    {solutionTutor && (
                      <div className="scale-95 origin-top-left">
                        <SolutionCard content={solutionTutor} />
                      </div>
                    )}
                    {solutionAntibiograma && (
                      <div className="scale-95 origin-top-left -mt-4">
                        <SolutionCard content={solutionAntibiograma} />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>

            {/* Impacto Esperado */}
            <section className="bg-gradient-to-br from-[var(--color-primary)] to-[#004d40] p-12 rounded-[40px] shadow-2xl relative overflow-hidden text-white">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
                 <div>
                    <h2 className="text-3xl font-bold mb-6 text-white">Impacto Esperado</h2>
                    <p className="text-white/80 mb-8 leading-relaxed">El macroproyecto busca generar impacto en múltiples dimensiones, desde la transformación pedagógica hasta la consolidación institucional de capacidades tecnológicas.</p>
                 </div>
                 <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: 'school', t: 'Educativo', d: 'Proceso enseñanza' },
                      { icon: 'psychology', t: 'Tecnológico', d: 'IA Generativa' },
                      { icon: 'science', t: 'Científico', d: 'Evidencia sistemas' },
                      { icon: 'business', t: 'Institucional', d: 'Innovación' }
                    ].map(i => (
                      <div key={i.t} className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 text-center hover:bg-white/20 transition-colors">
                         <span className="material-symbols-outlined text-white mb-2">{i.icon}</span>
                         <h4 className="text-[10px] font-bold text-white uppercase block">{i.t}</h4>
                         <p className="text-[8px] text-white/60">{i.d}</p>
                      </div>
                    ))}
                 </div>
               </div>
            </section>

            {/* Instituciones e Investigadores */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-[var(--color-outline-variant)]/20 pt-16">
              <div>
                <h3 className="font-bold text-[var(--color-primary)] mb-6 uppercase tracking-widest text-xs">Instituciones Colaboradoras</h3>
                <div className="space-y-4">
                  {[
                    'Fundación Universitaria de Ciencias de la Salud (FUCS)', 
                    'ProfundaMente – Laboratorio de IA en Salud', 
                    'Unidad de Virtualización para el Aprendizaje'
                  ].map(inst => (
                    <div key={inst} className="text-sm font-medium text-[var(--color-on-surface-variant)] flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-[var(--color-secondary)] rounded-full"></span> {inst}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-bold text-[var(--color-primary)] mb-6 uppercase tracking-widest text-xs">Equipo de Investigación</h3>
                <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                  {[
                    'John Jaime Sprockel Díaz', 'Nandy Rodríguez Velázquez', 'Melissa González Alonso', 
                    'Arley Gómez López', 'Merideidy Plazas', 'Martin Poveda', 
                    'Marcela López', 'Dalia Hincapie', 'Diana Chaves', 
                    'Leonardo Montoya', 'Luis Castillo', 'Luisa Bobadilla', 
                    'Maria Victoria Triana', 'Mike Parra'
                  ].map(name => (
                    <div key={name} className="text-[10px] text-[var(--color-on-surface-variant)] border-b border-[var(--color-outline-variant)]/10 pb-1">
                      {name}
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
