import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

const sesiones = [
  {
    num: '1',
    titulo: 'Del chatbot a la infografía metodológica',
    desc: 'Diseño de prompts robustos, extracción metodológica de artículos científicos y generación de visualizaciones.',
    duracion: '2 horas',
    herramientas: ['ChatGPT', 'Generación de imágenes', 'Canvas / Proyectos'],
    producto: 'Prompt maestro, tabla metodológica, resumen y prompt de infografía',
    icon: 'chat',
    color: 'var(--color-primary)',
  },
  {
    num: '2A',
    titulo: 'NotebookLM para lectura y síntesis',
    desc: 'Consultas referenciadas, síntesis y producción de recursos de estudio desde fuentes documentales.',
    duracion: '1 hora',
    herramientas: ['NotebookLM'],
    producto: 'Cuaderno con fuentes, respuestas referenciadas, informe, tabla o mapa conceptual',
    icon: 'menu_book',
    color: 'var(--color-secondary)',
  },
  {
    num: '2B',
    titulo: 'GPT personalizados y Gems',
    desc: 'Diseño de asistentes académicos especializados para automatizar tareas repetitivas en investigación.',
    duracion: '1 hora',
    herramientas: ['ChatGPT GPTs', 'GPT Store', 'Gemini Gems'],
    producto: 'Asistente con propósito, instrucciones, capacidades, prueba y forma de compartir',
    icon: 'smart_toy',
    color: 'var(--color-tertiary)',
  },
  {
    num: '3A',
    titulo: 'Investigación profunda asistida por IA',
    desc: 'Exploración documentada de evidencia científica con evaluación crítica de pertinencia y trazabilidad de fuentes.',
    duracion: '1 hora',
    herramientas: ['Deep Research (ChatGPT / Gemini)'],
    producto: 'Pregunta delimitada, informe, matriz crítica, síntesis y vacíos identificados',
    icon: 'travel_explore',
    color: 'var(--color-primary)',
  },
  {
    num: '3B',
    titulo: 'Escritura asistida por IA',
    desc: 'Planificación, redacción, revisión y adaptación de textos académicos con declaración de uso de IA.',
    duracion: '1 hora',
    herramientas: ['Chatbot', 'Canvas', 'Herramientas de escritura asistida'],
    producto: 'Esquema, borrador, revisión, versión adaptada y declaración de uso de IA',
    icon: 'edit_note',
    color: 'var(--color-secondary)',
  },
  {
    num: '4',
    titulo: 'Análisis de bases de datos con Python',
    desc: 'Flujo reproducible en Google Colab: estadísticos descriptivos, modelos predictivos y evaluación crítica.',
    duracion: '2 horas',
    herramientas: ['Google Colab', 'Python', 'scikit-learn', 'XGBoost', 'LightGBM'],
    producto: 'Notebook funcional, descriptivos, modelos, métricas e interpretación crítica',
    icon: 'data_object',
    color: 'var(--color-tertiary)',
  },
];

const objetivos = [
  'Comprender el funcionamiento general de los chatbots y escoger el modelo adecuado según la tarea.',
  'Diseñar prompts robustos incorporando rol, contexto, tarea, restricciones, criterios de calidad y formato de salida.',
  'Utilizar NotebookLM para trabajar con fuentes documentales y generar recursos de estudio referenciados.',
  'Diseñar GPT personalizados o Gems para automatizar flujos académicos repetitivos en salud.',
  'Realizar investigación profunda asistida por IA evaluando críticamente pertinencia y trazabilidad de fuentes.',
  'Emplear IA como apoyo en la planificación, redacción, revisión y adaptación de textos académicos.',
  'Ejecutar un flujo reproducible de ciencia de datos en Google Colab usando Python, desde la carga de datos hasta modelos predictivos.',
  'Reconocer riesgos de uso: alucinaciones, sesgo, fuga de información, dependencia excesiva y falta de validación.',
];

const audiencia = [
  'Docentes e investigadores en ciencias de la salud',
  'Estudiantes de posgrado (residencias, especializaciones, maestrías)',
  'Médicos y profesionales de la salud en actividad asistencial',
  'Equipos de investigación clínica y epidemiológica',
];

export default function TallerIAInvestigacionPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow bg-[var(--color-surface)] min-h-screen pt-32 pb-24">
        <div className="max-w-5xl mx-auto px-8 lg:px-12">

          {/* Logo + badges */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <div className="w-16 h-16 bg-[var(--color-surface-container)] rounded-2xl flex items-center justify-center text-[var(--color-primary)] shadow-sm border border-[var(--color-outline-variant)]/30">
              <span className="material-symbols-outlined text-4xl">biotech</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">Taller Práctico</span>
              <span className="px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest rounded-full bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]">6 Sesiones · 8 Horas</span>
              <span className="px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest rounded-full bg-[var(--color-tertiary)]/10 text-[var(--color-tertiary)]">Programa GLORIA · FUCS</span>
            </div>
          </div>

          {/* Título */}
          <header className="mb-10">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-[var(--color-primary)] mb-4 font-[family-name:var(--font-headline)] tracking-tight leading-tight">
              IA en Investigación en Salud
            </h1>
            <p className="text-xl font-light italic border-l-4 border-[var(--color-primary)] pl-6 py-2 bg-[var(--color-primary)]/5 rounded-r-xl text-[var(--color-on-surface-variant)]">
              Taller práctico en sesiones guiadas · Laboratorio ProfundaMente / FUCS
            </p>
          </header>

          {/* Cartelera */}
          <div className="relative w-full mb-12 rounded-3xl overflow-hidden shadow-xl border border-[var(--color-outline-variant)]/20">
            <Image
              src="/images/taller-ia-investigacion-cartelera.png"
              alt="Cartelera Taller IA en Investigación en Salud"
              width={1200}
              height={675}
              className="w-full h-auto object-contain"
              priority
            />
          </div>

          <div className="grid grid-cols-1 gap-16">

            {/* Propósito */}
            <section className="bg-gradient-to-br from-[var(--color-primary)]/8 to-[var(--color-secondary)]/5 p-8 lg:p-12 rounded-3xl border border-[var(--color-primary)]/15">
              <div className="flex items-center gap-4 mb-6">
                <span className="material-symbols-outlined text-[var(--color-primary)] text-3xl">flag</span>
                <h2 className="text-2xl font-bold text-[var(--color-primary)]">Propósito Central</h2>
              </div>
              <p className="text-lg text-[var(--color-on-surface)] leading-relaxed mb-4">
                Formar participantes capaces de integrar IA generativa en tareas reales de investigación en salud, manteniendo criterios de <strong>trazabilidad, verificación, ética, reproducibilidad y responsabilidad académica</strong>.
              </p>
              <p className="text-[var(--color-on-surface-variant)] leading-relaxed">
                La propuesta se basa en una progresión de complejidad: desde la interacción básica con chatbots y la construcción de prompts, hasta la creación de asistentes personalizados, la investigación profunda, la escritura académica asistida y el análisis reproducible de bases de datos en Python.
              </p>
            </section>

            {/* Sesiones */}
            <section>
              <div className="flex items-center gap-4 mb-10">
                <span className="w-2 h-8 bg-[var(--color-primary)] rounded-full"></span>
                <h2 className="text-2xl font-bold text-[var(--color-primary)] uppercase tracking-widest text-sm">Sesiones del Taller</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {sesiones.map((s) => (
                  <div
                    key={s.num}
                    className="bg-[var(--color-surface-container-lowest)] rounded-2xl border border-[var(--color-outline-variant)]/15 p-6 flex flex-col gap-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm"
                        style={{ backgroundColor: `color-mix(in srgb, ${s.color} 12%, transparent)`, border: `1px solid color-mix(in srgb, ${s.color} 25%, transparent)` }}
                      >
                        <span className="material-symbols-outlined" style={{ color: s.color }}>{s.icon}</span>
                      </div>
                      <div>
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-[var(--color-outline)]">Sesión {s.num} · {s.duracion}</span>
                        <h3 className="font-bold text-[var(--color-on-surface)] leading-tight">{s.titulo}</h3>
                      </div>
                    </div>
                    <p className="text-sm text-[var(--color-on-surface-variant)] leading-relaxed">{s.desc}</p>
                    <div className="space-y-2">
                      <div className="flex flex-wrap gap-1">
                        {s.herramientas.map(h => (
                          <span key={h} className="text-[10px] font-bold bg-[var(--color-surface-container-high)] text-[var(--color-on-surface-variant)] px-2 py-0.5 rounded-md border border-[var(--color-outline-variant)]/20">{h}</span>
                        ))}
                      </div>
                      <p className="text-[11px] text-[var(--color-outline)] border-l-2 border-[var(--color-outline-variant)]/30 pl-3 italic">{s.producto}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Objetivos */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[var(--color-primary)]/5 p-8 rounded-3xl border border-[var(--color-primary)]/10">
                <h3 className="font-bold text-[var(--color-primary)] mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined">center_focus_strong</span> Objetivo general
                </h3>
                <p className="text-[var(--color-on-surface-variant)] text-sm leading-relaxed">
                  Desarrollar competencias prácticas para utilizar herramientas de IA generativa en la formulación, análisis, síntesis, escritura, visualización y modelamiento de información científica en salud, mediante actividades guiadas, productos verificables y reflexión crítica sobre sus limitaciones.
                </p>
              </div>
              <div className="bg-[var(--color-secondary)]/5 p-8 rounded-3xl border border-[var(--color-secondary)]/10">
                <h3 className="font-bold text-[var(--color-secondary)] mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined">checklist</span> Objetivos específicos
                </h3>
                <ul className="text-[var(--color-on-surface-variant)] text-xs space-y-2">
                  {objetivos.map((obj, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-[var(--color-secondary)] font-bold flex-shrink-0">{i + 1}.</span>
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Audiencia + Diseño pedagógico */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-2 h-8 bg-[var(--color-secondary)] rounded-full"></span>
                  <h2 className="text-sm font-bold text-[var(--color-primary)] uppercase tracking-widest">Dirigido a</h2>
                </div>
                <ul className="space-y-3">
                  {audiencia.map((a) => (
                    <li key={a} className="flex items-center gap-3 text-sm text-[var(--color-on-surface-variant)]">
                      <span className="w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full flex-shrink-0"></span>
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-2 h-8 bg-[var(--color-tertiary)] rounded-full"></span>
                  <h2 className="text-sm font-bold text-[var(--color-primary)] uppercase tracking-widest">Diseño pedagógico</h2>
                </div>
                <ul className="space-y-3 text-sm text-[var(--color-on-surface-variant)]">
                  {[
                    'Aprendizaje activo basado en productos',
                    'Práctica guiada con reflexión crítica',
                    'Progresión de complejidad entre sesiones',
                    'Cada sesión produce artefactos aplicables al propio proyecto',
                  ].map((p) => (
                    <li key={p} className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-[var(--color-tertiary)] text-[16px]">check_circle</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* CTA externo */}
            <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] p-10 rounded-3xl text-white text-center shadow-xl">
              <span className="material-symbols-outlined text-4xl mb-4 block opacity-80">open_in_new</span>
              <h3 className="text-2xl font-extrabold mb-2">Acceder al Taller</h3>
              <p className="text-white/80 mb-8 max-w-md mx-auto text-sm">
                El taller completo con las 6 sesiones, presentaciones, actividades y materiales está disponible en la plataforma interactiva del Laboratorio ProfundaMente.
              </p>
              <Link
                href="https://jjsprockel.github.io/taller-IA-Investigacion/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[var(--color-primary)] font-extrabold rounded-xl hover:bg-white/90 hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                Ir al Taller
                <span className="material-symbols-outlined">open_in_new</span>
              </Link>
            </section>

            {/* Créditos */}
            <section className="border-t border-[var(--color-outline-variant)]/20 pt-10 flex flex-col md:flex-row justify-between gap-8 text-sm text-[var(--color-on-surface-variant)]">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-outline)] mb-2">Instructor</p>
                <p className="font-bold text-[var(--color-on-surface)]">John Jaime Sprockel, MD ESP, MSc, MBA</p>
                <p className="text-xs">Director del Laboratorio ProfundaMente · FUCS</p>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-outline)] mb-2">Institución</p>
                <p className="font-bold text-[var(--color-on-surface)]">Fundación Universitaria de Ciencias de la Salud — FUCS</p>
                <p className="text-xs">Programa GLORIA · Laboratorio ProfundaMente</p>
              </div>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
