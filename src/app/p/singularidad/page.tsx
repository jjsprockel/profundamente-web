import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StarRating from '@/components/StarRating';
import RatingFeedback from '@/components/RatingFeedback';
import { mockContent } from '@/lib/mockData';
import prisma from '@/lib/prisma';

export default async function SemilleroSingularidadPage() {
  const entity = mockContent.find(c => c.slug === 'singularidad');
  const pub = await prisma.publication.findUnique({ where: { slug: 'singularidad' } });

  if (!entity) return <div>Contenido no encontrado</div>;

  return (
    <>
      <Navbar />
      <main className="flex-grow bg-[var(--color-surface)] min-h-screen pt-32 pb-24 text-[var(--color-on-surface)]">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          
          {/* Header Section: Logo y Calificación */}
          <div className="flex justify-between items-center mb-8">
            <div className="w-16 h-16 bg-[var(--color-surface-container)] rounded-2xl flex items-center justify-center text-[var(--color-primary)] shadow-sm border border-[var(--color-outline-variant)]/30">
              <span className="material-symbols-outlined text-4xl">{entity.logo_icon || 'school'}</span>
            </div>
            <div className="bg-[var(--color-surface-container-lowest)] px-4 py-2 rounded-full shadow-sm border border-[var(--color-outline-variant)]/20">
              <StarRating rating={entity.average_rating} count={entity.rating_count} />
            </div>
          </div>

          {/* Título y Descripción General */}
          <header className="mb-16">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-[var(--color-primary)] mb-6 font-[family-name:var(--font-headline)] tracking-tight">
              {entity.title}
            </h1>
            <div className="prose prose-lg max-w-none text-[var(--color-on-surface-variant)] leading-relaxed space-y-6">
              <p className="text-xl font-light italic border-l-4 border-[var(--color-secondary)] pl-6 py-2 bg-[var(--color-secondary)]/5 rounded-r-xl">
                {entity.excerpt}
              </p>
              <div className="space-y-4">
                <p>El semillero de investigación Singularidad es una iniciativa académica orientada a la formación de estudiantes en inteligencia artificial aplicada a la salud, mediante la integración de conocimientos interdisciplinarios en medicina, ingeniería y ciencia de datos.</p>
                <p>Surge como respuesta al crecimiento acelerado de la IA en el ámbito sanitario, promoviendo soluciones digitales en procesos académicos, investigativos y asistenciales como diagnóstico asistido, análisis de imágenes y medicina personalizada.</p>
              </div>
            </div>
          </header>

          <div className="grid grid-cols-1 gap-16">
            
            {/* Fechas Clave */}
            <section className="bg-[var(--color-surface-container-low)] p-8 rounded-3xl border border-[var(--color-outline-variant)]/20 shadow-sm">
              <div className="flex items-center gap-4 mb-8">
                <span className="w-1 h-8 bg-[var(--color-secondary)] rounded-full"></span>
                <h2 className="text-xl font-bold uppercase tracking-widest text-[var(--color-primary)] text-sm">Fechas clave</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { label: 'Constitución', date: '01 de febrero de 2025', icon: 'draw' },
                  { label: 'Aprobación (Acta 2)', date: '11 de junio de 2025', icon: 'verified_user' },
                  { label: 'Comunicación oficial', date: '16 de junio de 2025', icon: 'mail' }
                ].map(item => (
                  <div key={item.label} className="p-4 bg-white rounded-2xl border border-[var(--color-outline-variant)]/10">
                    <span className="material-symbols-outlined text-[var(--color-secondary)] mb-2">{item.icon}</span>
                    <h4 className="text-[10px] uppercase font-bold text-[var(--color-outline)] mb-1">{item.label}</h4>
                    <p className="text-sm font-bold text-[var(--color-primary)]">{item.date}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Liderazgo y Estructura */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-[var(--color-outline-variant)]/20 pt-16">
              <div>
                <h3 className="font-bold text-[var(--color-secondary)] mb-6 flex items-center gap-2 uppercase tracking-widest text-xs">
                  <span className="material-symbols-outlined text-sm">badge</span> Liderazgo
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-[var(--color-primary)]/5 rounded-2xl border border-[var(--color-primary)]/10">
                    <p className="text-[10px] uppercase font-bold text-[var(--color-primary)] mb-1">Docente Líder</p>
                    <p className="font-bold">John Jaime Sprockel Díaz</p>
                  </div>
                  <div className="p-4 bg-[var(--color-surface-container)] rounded-2xl">
                    <p className="text-[10px] uppercase font-bold text-[var(--color-on-surface-variant)] mb-2">Docentes responsables</p>
                    <ul className="text-xs space-y-1 font-medium italic">
                      <li>• John Jaime Sprockel</li>
                      <li>• Arley Gómez López</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="font-bold text-[var(--color-outline)] mb-4 uppercase tracking-widest text-xs">Adscripción</h3>
                <p className="text-lg font-bold text-[var(--color-primary)] leading-tight italic">
                  Grupo de Investigación y Proyección Social en Ciencias de la Salud
                </p>
              </div>
            </section>

            {/* Objetivos */}
            <section>
              <div className="flex items-center gap-4 mb-12">
                <span className="w-1 h-8 bg-[var(--color-secondary)] rounded-full"></span>
                <h2 className="text-xl font-bold uppercase tracking-widest text-[var(--color-primary)] text-sm">Objetivos</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-[var(--color-primary)] p-8 rounded-3xl text-white shadow-xl relative overflow-hidden group">
                  <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-9xl opacity-10 group-hover:scale-110 transition-transform">my_location</span>
                  <h3 className="text-xs uppercase font-bold tracking-widest mb-4 opacity-80">Objetivo general</h3>
                  <p className="text-lg font-medium leading-relaxed italic">
                    Proporcionar un espacio de formación para el desarrollo de soluciones innovadoras que integren la inteligencia artificial en la salud.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xs font-bold text-[var(--color-outline)] uppercase tracking-widest mb-4">Objetivos específicos</h3>
                  <ul className="space-y-3">
                    {[
                      'Diseño y ejecución de proyectos de IA',
                      'Desarrollo de soluciones a problemas reales',
                      'Divulgación científica institucional',
                      'Investigación en ética y responsabilidad'
                    ].map(obj => (
                      <li key={obj} className="flex items-start gap-3 text-sm text-[var(--color-on-surface-variant)]">
                        <span className="material-symbols-outlined text-[var(--color-secondary)] text-sm">double_arrow</span>
                        {obj}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Proyectos */}
            <section className="bg-[var(--color-surface-container-lowest)] p-10 rounded-[40px] border border-[var(--color-outline-variant)]/20">
              <div className="flex items-center justify-between mb-10">
                <h2 className="text-2xl font-bold text-[var(--color-primary)]">Proyectos y Líneas</h2>
                <span className="material-symbols-outlined text-[var(--color-secondary)] text-3xl">hub</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                   'Diagnóstico clínico asistido', 'Deep Learning en imágenes', 'Modelos predictivos en salud',
                   'NLP aplicado a información clínica', 'Innovación en educación médica'
                ].map(proj => (
                  <div key={proj} className="p-4 bg-[var(--color-surface)] border border-[var(--color-outline-variant)]/20 rounded-xl hover:border-[var(--color-secondary)] transition-colors">
                    <p className="text-xs font-bold italic">{proj}</p>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-xs text-[var(--color-outline)] italic text-center">
                * Los proyectos se desarrollan bajo supervisión docente y en articulación con macroproyectos institucionales.
              </p>
            </section>

            {/* Metodología */}
            <section className="bg-[var(--color-primary)]/5 p-8 lg:p-12 rounded-3xl">
              <h2 className="text-xl font-bold uppercase tracking-widest text-[var(--color-primary)] text-sm mb-10">Metodología de trabajo</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { t: 'Alfabetización', i: 'menu_book', d: 'Cursos de base IA' },
                  { t: 'Talleres Híbridos', i: 'laptop_chromebook', d: 'Presencial/Virtual' },
                  { t: 'Proyectos Guiados', i: 'precision_manufacturing', d: 'Desarrollo real' },
                  { t: 'Mentoria', i: 'psychology', d: 'Acompañamiento' }
                ].map(met => (
                  <div key={met.t} className="flex flex-col items-center text-center group">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[var(--color-secondary)] shadow-sm mb-4 border border-[var(--color-secondary)]/10 group-hover:rotate-12 transition-transform">
                      <span className="material-symbols-outlined">{met.i}</span>
                    </div>
                    <h4 className="text-xs font-bold text-[var(--color-primary)] mb-1">{met.t}</h4>
                    <p className="text-[10px] text-[var(--color-on-surface-variant)]">{met.d}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Integrantes y Articulación */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <section>
                <h3 className="text-xl font-bold mb-6 text-[var(--color-primary)]">Integrantes</h3>
                <p className="text-sm text-[var(--color-on-surface-variant)] leading-relaxed mb-6">
                  El semillero está conformado por estudiantes en formación que participan de manera activa bajo la orientación de mentoresacadémicos.
                </p>
                <ul className="text-xs space-y-3 font-medium">
                  {['Desarrollo de proyectos', 'Actividades académicas', 'Formación en IA', 'Divulgación científica'].map(act => (
                    <li key={act} className="flex items-center gap-3">
                       <span className="w-1.5 h-1.5 bg-[var(--color-secondary)] rounded-full"></span> {act}
                    </li>
                  ))}
                </ul>
              </section>
              <section className="bg-[var(--color-surface-container-high)] p-8 rounded-3xl">
                <h3 className="text-lg font-bold mb-6 text-[var(--color-primary)]">Articulación Institucional</h3>
                <div className="space-y-4">
                   {[
                     'Vicerrectoría de Investigaciones – FUCS', 'Coordinación de Semilleros', 
                     'Grupos de investigación institucionales', 'Laboratorios de innovación'
                   ].map(inst => (
                     <p key={inst} className="text-xs font-bold border-l-2 border-[var(--color-secondary)] pl-4 py-1 italic">
                        {inst}
                     </p>
                   ))}
                </div>
              </section>
            </div>

            {/* Proyección y Conclusión */}
            <section className="border-t border-[var(--color-outline-variant)]/20 pt-16 text-center max-w-3xl mx-auto">
               <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-6">Proyección Estratégica</h2>
               <div className="grid grid-cols-2 gap-4 mb-12">
                  {['Talento en IA', 'Impacto Clínico', 'Integración Educativa', 'Capacidad Científica'].map(p => (
                    <div key={p} className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-outline)] p-2 bg-[var(--color-surface-container)] rounded-lg">
                      {p}
                    </div>
                  ))}
               </div>
               <p className="text-lg font-medium text-[var(--color-on-surface-variant)] italic">
                 "La creación del semillero Singularidad representa un avance significativo en la consolidación de un ecosistema académico orientado a la inteligencia artificial en salud."
               </p>
            </section>

          </div>
          
          {/* Sección de Calificación */}
          <div className="mt-16 pt-8 border-t border-[var(--color-outline-variant)]/30">
             {pub && <RatingFeedback publicationId={pub.id} category={pub.category} />}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
