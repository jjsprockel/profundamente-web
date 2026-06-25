'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RatingFeedback from '@/components/RatingFeedback';
import StarRating from '@/components/StarRating';
import { mockContent } from '@/lib/mockData';
import Link from 'next/link';
import Image from 'next/image';

const agenda = [
  { hora: '7:30 – 8:00',   actividad: 'Programa GLORIA',                                               ponente: 'Rafael Parra Medina, MD, MSc, PhD' },
  { hora: '8:00 – 8:30',   actividad: 'Inteligencia Artificial: ¿Para dónde vamos?',                   ponente: 'John Jaime Sprockel Díaz, MD, MSc' },
  { hora: '8:30 – 9:30',   actividad: 'Machine Learning aplicado a patología',                         ponente: 'Juan Andrés Méndez Galvis, Ing, MSc (st)' },
  { hora: '9:30 – 10:45',  actividad: 'Señales de imágenes en histopatología',                         ponente: 'Javier Hernán Gil Gómez, MSc, PhD (St)' },
  { hora: '10:45 – 11:00', actividad: 'Break',                                                         ponente: '' },
  { hora: '11:00 – 12:00', actividad: 'Workshop: Plataforma de imágenes digitales con QuPath',         ponente: 'Andrés David Mosquera Zamudio, MD, PhD' },
  { hora: '12:00 – 12:30', actividad: 'Evaluación y certificación de aprobación del curso',            ponente: 'Javier Hernán Gil Gómez, MSc, PhD (St)' },
  { hora: '12:30 – 12:40', actividad: 'Cierre y despedida',                                            ponente: 'Rafael Parra Medina, MD, PhD' },
];

const audiencia = [
  'Médicos patólogos',
  'Residentes de patología',
  'Citohistotecnólogos',
  'Tecnólogos en histotecnología y citotecnología',
  'Ingenieros biomédicos',
  'Profesionales del área de tecnología en salud',
  'Profesionales vinculados a procesos diagnósticos interesados en el impacto de la IA y el análisis digital de imágenes',
];

const organizadores = [
  'Fundación Universitaria de Ciencias de la Salud – FUCS',
  'Sociedad de Cirugía de Bogotá – Hospital de San José',
  'Instituto Nacional de Cancerología Colombia',
  'Laboratorios López Correa',
  'Laboratorio de Patología Rita María Páez S.A.S.',
];

export default function TallerPatologiaComputacionalPage() {
  const article = mockContent.find((c) => c.slug === 'taller-patologia-computacional');

  if (!article) return null;

  return (
    <>
      <Navbar />
      <main className="flex-grow bg-[var(--color-surface)] min-h-screen">

        {/* Hero */}
        <header className="bg-[var(--color-surface-container-lowest)] border-b border-[var(--color-outline-variant)]/20 pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-8 lg:px-0">
            <Link
              href="/educacion"
              className="inline-flex items-center gap-2 text-sm text-[var(--color-on-surface-variant)] hover:text-[var(--color-tertiary)] mb-8 transition-colors"
            >
              <span className="material-symbols-outlined text-[16px]">arrow_back</span>
              Volver a Educación
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-[var(--color-tertiary)]/10 text-[var(--color-tertiary)] text-xs font-bold uppercase tracking-widest rounded-full border border-[var(--color-tertiary)]/20">
                Curso · Programa GLORIA
              </span>
              <span className="text-sm font-medium text-[var(--color-on-surface-variant)] flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px] opacity-60">event</span>
                11 de abril de 2026
              </span>
              <span className="text-sm font-medium text-[var(--color-on-surface-variant)] flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px] opacity-60">schedule</span>
                7:00 a.m. – 1:00 p.m.
              </span>
              <div className="ml-auto">
                <StarRating rating={article.average_rating} count={article.rating_count} />
              </div>
            </div>

            <h1 className="text-4xl lg:text-5xl font-extrabold text-[var(--color-tertiary)] mb-4 font-[family-name:var(--font-headline)] leading-tight">
              Taller Básico de Patología Computacional
            </h1>
            <p className="text-xl text-[var(--color-on-surface-variant)] font-light leading-relaxed mb-2">
              {article.excerpt}
            </p>

            {/* Modalidad pills */}
            <div className="flex flex-wrap gap-3 mt-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-tertiary)]/10 text-[var(--color-tertiary)] rounded-full text-sm font-bold">
                <span className="material-symbols-outlined text-[18px]">laptop_mac</span>
                Modalidad Híbrida
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-surface-container-high)] text-[var(--color-on-surface)] rounded-full text-sm font-medium">
                <span className="material-symbols-outlined text-[18px]">group</span>
                39 personas presenciales
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-surface-container-high)] text-[var(--color-on-surface)] rounded-full text-sm font-medium">
                <span className="material-symbols-outlined text-[18px]">workspace_premium</span>
                Certificado 6 horas
              </span>
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-8 lg:px-0 py-16 space-y-16 text-[var(--color-on-surface)]">

          {/* Imagen hero */}
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-xl border border-[var(--color-outline-variant)]/20">
            <Image
              src={article.image_url || 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&auto=format&fit=crop'}
              alt="Taller de Patología Computacional"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Dirigido a */}
          <section>
            <h2 className="text-2xl font-bold text-[var(--color-tertiary)] mb-5 flex items-center gap-2">
              <span className="material-symbols-outlined">person_search</span>
              Dirigido a
            </h2>
            <ul className="space-y-3">
              {audiencia.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[var(--color-on-surface-variant)]">
                  <span className="material-symbols-outlined text-[var(--color-tertiary)] text-[18px] mt-0.5 shrink-0">check_circle</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Agenda */}
          <section>
            <h2 className="text-2xl font-bold text-[var(--color-tertiary)] mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined">calendar_clock</span>
              Programa Académico
            </h2>
            <p className="text-[var(--color-on-surface-variant)] mb-6">
              Moderador: <strong className="text-[var(--color-on-surface)]">Dr. Rafael Parra Medina</strong>
            </p>
            <div className="overflow-hidden rounded-2xl border border-[var(--color-outline-variant)]/30 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--color-tertiary)] text-white">
                    <th className="px-5 py-3 text-left font-bold w-32">Hora</th>
                    <th className="px-5 py-3 text-left font-bold">Actividad</th>
                    <th className="px-5 py-3 text-left font-bold hidden md:table-cell">Ponente</th>
                  </tr>
                </thead>
                <tbody>
                  {agenda.map((row, i) => (
                    <tr
                      key={i}
                      className={
                        row.actividad === 'Break'
                          ? 'bg-[var(--color-surface-container-high)] text-[var(--color-outline)] italic'
                          : i % 2 === 0
                          ? 'bg-[var(--color-surface-container-lowest)]'
                          : 'bg-[var(--color-surface-container)]'
                      }
                    >
                      <td className="px-5 py-4 font-bold text-[var(--color-tertiary)] whitespace-nowrap align-top">
                        {row.hora}
                      </td>
                      <td className="px-5 py-4 text-[var(--color-on-surface)] font-medium align-top">
                        {row.actividad}
                        {row.ponente && (
                          <span className="block text-xs text-[var(--color-on-surface-variant)] mt-1 md:hidden">
                            {row.ponente}
                          </span>
                        )}
                      </td>
                      <td className="px-5 py-4 text-[var(--color-on-surface-variant)] hidden md:table-cell align-top">
                        {row.ponente}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Temas del programa */}
          <section className="bg-[var(--color-surface-container-lowest)] p-8 rounded-3xl border border-[var(--color-tertiary)]/20">
            <h2 className="text-2xl font-bold text-[var(--color-tertiary)] mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined">menu_book</span>
              Temas del Programa
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="bg-white/60 backdrop-blur-sm p-5 rounded-2xl border border-[var(--color-tertiary)]/10">
                <strong className="text-[var(--color-tertiary)] flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-[18px]">hub</span>
                  Programa GLORIA y contexto
                </strong>
                <p className="text-sm text-[var(--color-on-surface-variant)] leading-relaxed">
                  Presentación del programa de telepatología digital, su misión, alcance e impacto en Colombia.
                </p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm p-5 rounded-2xl border border-[var(--color-tertiary)]/10">
                <strong className="text-[var(--color-tertiary)] flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-[18px]">smart_toy</span>
                  Inteligencia Artificial: panorama actual
                </strong>
                <p className="text-sm text-[var(--color-on-surface-variant)] leading-relaxed">
                  Tendencias de la IA en medicina, modelos fundacionales y su aplicación en diagnóstico clínico.
                </p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm p-5 rounded-2xl border border-[var(--color-tertiary)]/10">
                <strong className="text-[var(--color-tertiary)] flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-[18px]">model_training</span>
                  Machine Learning en Patología
                </strong>
                <p className="text-sm text-[var(--color-on-surface-variant)] leading-relaxed">
                  Tipos de aprendizaje automático, pipelines de entrenamiento y aplicaciones en histopatología digital.
                </p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm p-5 rounded-2xl border border-[var(--color-tertiary)]/10">
                <strong className="text-[var(--color-tertiary)] flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-[18px]">image_search</span>
                  Señales de imágenes en histopatología
                </strong>
                <p className="text-sm text-[var(--color-on-surface-variant)] leading-relaxed">
                  Preprocesamiento, normalización de tinción, extracción de características y análisis cuantitativo de tejido.
                </p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm p-5 rounded-2xl border border-[var(--color-tertiary)]/10 md:col-span-2">
                <strong className="text-[var(--color-tertiary)] flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-[18px]">biotech</span>
                  Workshop práctico con QuPath
                </strong>
                <p className="text-sm text-[var(--color-on-surface-variant)] leading-relaxed">
                  Taller hands-on sobre la plataforma QuPath para segmentación, anotación y análisis cuantitativo de imágenes de whole slide imaging (WSI). Los participantes trabajaron directamente sobre casos de patología digital.
                </p>
              </div>
            </div>
          </section>

          {/* Lugar */}
          <section>
            <h2 className="text-2xl font-bold text-[var(--color-tertiary)] mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined">location_on</span>
              Lugar de realización
            </h2>
            <div className="bg-[var(--color-surface-container-lowest)] p-6 rounded-2xl border border-[var(--color-outline-variant)]/20 text-[var(--color-on-surface-variant)]">
              <p className="font-bold text-[var(--color-on-surface)] text-lg mb-1">
                Fundación Universitaria de Ciencias de la Salud – FUCS
              </p>
              <p>Sede Norte – Carrera 54 No. 67A – 80</p>
              <p className="text-[var(--color-tertiary)] font-medium mt-1">Sala Digital Grande Biblioteca Darío Cadena Rey</p>
            </div>
          </section>

          {/* Certificado por */}
          <section>
            <h2 className="text-2xl font-bold text-[var(--color-tertiary)] mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined">workspace_premium</span>
              Organizado y certificado por
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {organizadores.map((org) => (
                <li key={org} className="flex items-center gap-3 bg-[var(--color-surface-container-lowest)] p-4 rounded-xl border border-[var(--color-outline-variant)]/20 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-tertiary)] shrink-0"></span>
                  <span className="text-sm font-bold text-[var(--color-on-surface)]">{org}</span>
                </li>
              ))}
              <li className="flex items-center gap-3 bg-[var(--color-surface-container-lowest)] p-4 rounded-xl border border-[var(--color-outline-variant)]/20 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0"></span>
                <span className="text-sm font-bold text-[var(--color-on-surface)]">Ciencias – Contrato 789-2023 (Financiador)</span>
              </li>
            </ul>
          </section>

          {/* Hashtags */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--color-outline-variant)]/20">
            {article.tags?.map((tag) => (
              <span key={tag} className="text-xs font-bold text-[var(--color-outline)] bg-[var(--color-surface-container-lowest)] px-3 py-1 rounded-lg border border-[var(--color-outline-variant)]/30">
                #{tag}
              </span>
            ))}
          </div>

          {/* Rating */}
          <div className="pt-8 border-t border-[var(--color-outline-variant)]/30">
            <h3 className="text-2xl font-bold text-[var(--color-on-surface)] mb-2">Tu opinión es vital</h3>
            <p className="text-[var(--color-on-surface-variant)] mb-4">
              Califica qué tan pertinente resulta este programa de formación para tu práctica profesional.
            </p>
            <div className="-mt-4">
              <RatingFeedback publicationId={article.id} category="education" />
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
