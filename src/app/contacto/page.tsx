'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ContactoPage() {
  const [subject, setSubject] = useState('');

  const motivos = [
    { icon: 'science', label: 'Colaboración en investigación', desc: 'Proyectos conjuntos, co-autoría, datos clínicos' },
    { icon: 'school', label: 'Programas educativos', desc: 'Diplomados, cursos, tutores inteligentes' },
    { icon: 'code', label: 'Desarrollo de soluciones IA', desc: 'Modelos clínicos, agentes, herramientas' },
    { icon: 'handshake', label: 'Alianzas institucionales', desc: 'FUCS, hospitales, grupos de investigación' },
  ];

  const mailtoHref = `mailto:siembrau@gmail.com${subject ? `?subject=${encodeURIComponent(subject)}` : ''}`;

  return (
    <>
      <Navbar />
      <main className="flex-grow bg-[var(--color-surface)] min-h-screen">

        {/* Hero */}
        <header className="bg-[var(--color-surface-container-lowest)] border-b border-[var(--color-outline-variant)]/20 pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-8 lg:px-12">
            <span className="text-[var(--color-secondary)] font-bold tracking-[0.2em] uppercase text-xs block mb-4">
              Semillero Singularidad · FUCS
            </span>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-[var(--color-primary)] mb-6 leading-tight tracking-tight">
              Hablemos de IA<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]">
                aplicada a la salud
              </span>
            </h1>
            <p className="text-xl text-[var(--color-on-surface-variant)] max-w-2xl font-light leading-relaxed">
              ¿Tienes una idea, quieres colaborar o simplemente tienes preguntas sobre nuestros proyectos? Escríbenos.
            </p>
          </div>
        </header>

        {/* Motivos de contacto */}
        <section className="max-w-7xl mx-auto px-8 lg:px-12 py-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[var(--color-outline)] mb-8">
            ¿En qué podemos colaborar?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
            {motivos.map((m) => (
              <button
                key={m.label}
                type="button"
                onClick={() => setSubject(m.label)}
                className={`text-left p-5 rounded-2xl border transition-all group ${
                  subject === m.label
                    ? 'border-[var(--color-primary)] bg-[var(--color-primary)]/5'
                    : 'border-[var(--color-outline-variant)]/30 bg-[var(--color-surface-container-lowest)] hover:border-[var(--color-primary)]/40 hover:bg-[var(--color-primary)]/[0.02]'
                }`}
              >
                <span className={`material-symbols-outlined text-2xl mb-3 block ${subject === m.label ? 'text-[var(--color-primary)]' : 'text-[var(--color-outline)]'}`}>
                  {m.icon}
                </span>
                <p className="font-bold text-sm text-[var(--color-on-surface)] mb-1 leading-tight">{m.label}</p>
                <p className="text-xs text-[var(--color-on-surface-variant)]">{m.desc}</p>
              </button>
            ))}
          </div>

          {/* Grid principal: contacto + info */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

            {/* Bloque de contacto directo */}
            <div className="lg:col-span-3">
              <div className="bg-[var(--color-surface-container-lowest)] p-8 lg:p-10 rounded-[40px] border border-[var(--color-outline-variant)]/20 shadow-sm space-y-6">
                <h2 className="text-2xl font-extrabold text-[var(--color-primary)] tracking-tight">Escríbenos</h2>
                <p className="text-[var(--color-on-surface-variant)] text-sm leading-relaxed">
                  Puedes contactarnos directamente por correo electrónico. Si seleccionaste un tema de interés arriba, se incluirá en el asunto automáticamente.
                </p>

                <a
                  href={mailtoHref}
                  className="flex items-center justify-center gap-3 w-full py-4 bg-[var(--color-primary)] text-white font-bold rounded-xl hover:bg-[var(--color-secondary)] shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all text-base"
                >
                  <span className="material-symbols-outlined text-[20px]">mail</span>
                  Abrir correo electrónico
                </a>

                <p className="text-xs text-[var(--color-outline)] text-center">
                  siembrau@gmail.com
                </p>

                <div className="p-4 bg-[var(--color-surface-container-low)] rounded-2xl border border-[var(--color-outline-variant)]/20 text-xs text-[var(--color-on-surface-variant)] italic text-center">
                  El formulario de contacto en línea estará disponible en la versión completa de la plataforma.
                </div>
              </div>
            </div>

            {/* Panel de información */}
            <div className="lg:col-span-2 space-y-6">

              <div className="bg-[var(--color-surface-container-lowest)] p-6 rounded-3xl border border-[var(--color-outline-variant)]/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[var(--color-primary)] text-xl">schedule</span>
                  </div>
                  <div>
                    <p className="text-[10px] text-[var(--color-outline)] uppercase font-bold tracking-wider">Tiempo de respuesta</p>
                    <p className="text-sm font-bold text-[var(--color-on-surface)]">48 – 72 horas hábiles</p>
                  </div>
                </div>
                <p className="text-xs text-[var(--color-on-surface-variant)] leading-relaxed">
                  Revisamos todos los mensajes y respondemos con atención a cada propuesta o consulta.
                </p>
              </div>

              <div className="bg-[var(--color-surface-container-lowest)] p-6 rounded-3xl border border-[var(--color-outline-variant)]/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-secondary)]/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[var(--color-secondary)] text-xl">location_city</span>
                  </div>
                  <div>
                    <p className="text-[10px] text-[var(--color-outline)] uppercase font-bold tracking-wider">Institución</p>
                    <p className="text-sm font-bold text-[var(--color-on-surface)]">FUCS · Bogotá D.C.</p>
                  </div>
                </div>
                <p className="text-xs text-[var(--color-on-surface-variant)] leading-relaxed">
                  Fundación Universitaria de Ciencias de la Salud.<br />
                  Semillero de Investigación Singularidad — Vicerrectoría de Investigaciones.
                </p>
              </div>

              <div className="bg-[var(--color-primary)]/[0.04] p-6 rounded-3xl border border-[var(--color-primary)]/10">
                <p className="text-[10px] text-[var(--color-outline)] uppercase font-bold tracking-wider mb-4">Áreas de trabajo</p>
                <div className="flex flex-wrap gap-2">
                  {['IA en Salud', 'Machine Learning', 'Deep Learning', 'LLMs', 'Agentes IA', 'Diagnóstico por imagen', 'Educación médica', 'Ética en IA'].map(tag => (
                    <span key={tag} className="text-[11px] font-medium text-[var(--color-primary)] bg-[var(--color-primary)]/10 px-2.5 py-1 rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
