'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

type FormState = 'idle' | 'sending' | 'sent' | 'error';

export default function ContactoPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setFormState('sending');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Error al enviar');
      }

      setFormState('sent');
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : 'Error al enviar el mensaje.');
      setFormState('error');
    }
  };

  const resetForm = () => {
    setName(''); setEmail(''); setSubject(''); setMessage('');
    setFormState('idle'); setErrorMsg('');
  };

  const motivos = [
    { icon: 'science', label: 'Colaboración en investigación', desc: 'Proyectos conjuntos, co-autoría, datos clínicos' },
    { icon: 'school', label: 'Programas educativos', desc: 'Diplomados, cursos, tutores inteligentes' },
    { icon: 'code', label: 'Desarrollo de soluciones IA', desc: 'Modelos clínicos, agentes, herramientas' },
    { icon: 'handshake', label: 'Alianzas institucionales', desc: 'FUCS, hospitales, grupos de investigación' },
  ];

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

          {/* Grid principal: formulario + info */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

            {/* Formulario */}
            <div className="lg:col-span-3">
              {formState === 'sent' ? (
                <div className="bg-[var(--color-surface-container-low)] p-10 rounded-[40px] border border-[var(--color-primary)]/10 text-center">
                  <span className="material-symbols-outlined text-5xl text-[var(--color-primary)] block mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>mark_email_read</span>
                  <h3 className="text-2xl font-extrabold text-[var(--color-primary)] mb-2">¡Mensaje enviado!</h3>
                  <p className="text-[var(--color-on-surface-variant)] text-sm mb-8 max-w-sm mx-auto">
                    Tu mensaje llegó correctamente. Te responderemos en un plazo de 48–72 horas hábiles.
                  </p>
                  <button
                    onClick={resetForm}
                    className="px-6 py-3 bg-[var(--color-primary)] text-white font-bold rounded-xl hover:bg-[var(--color-secondary)] transition-colors"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-[var(--color-surface-container-lowest)] p-8 lg:p-10 rounded-[40px] border border-[var(--color-outline-variant)]/20 shadow-sm space-y-6">
                  <h2 className="text-2xl font-extrabold text-[var(--color-primary)] tracking-tight">Escríbenos</h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Nombre */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-[var(--color-outline)] uppercase tracking-wider">
                        Nombre completo <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Tu nombre"
                        className="px-4 py-3 rounded-xl bg-[var(--color-surface-container-low)] border border-[var(--color-outline-variant)]/30 text-[var(--color-on-surface)] placeholder:text-[var(--color-outline)] text-sm focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                      />
                    </div>
                    {/* Correo */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-[var(--color-outline)] uppercase tracking-wider">
                        Correo electrónico <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="tu@correo.com"
                        className="px-4 py-3 rounded-xl bg-[var(--color-surface-container-low)] border border-[var(--color-outline-variant)]/30 text-[var(--color-on-surface)] placeholder:text-[var(--color-outline)] text-sm focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Asunto */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-[var(--color-outline)] uppercase tracking-wider">
                      Asunto
                    </label>
                    <input
                      type="text"
                      value={subject}
                      onChange={e => setSubject(e.target.value)}
                      placeholder="¿De qué quieres hablar?"
                      className="px-4 py-3 rounded-xl bg-[var(--color-surface-container-low)] border border-[var(--color-outline-variant)]/30 text-[var(--color-on-surface)] placeholder:text-[var(--color-outline)] text-sm focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                    />
                  </div>

                  {/* Mensaje */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-[var(--color-outline)] uppercase tracking-wider">
                      Mensaje <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      placeholder="Cuéntanos sobre tu propuesta, duda o idea..."
                      className="px-4 py-3 rounded-xl bg-[var(--color-surface-container-low)] border border-[var(--color-outline-variant)]/30 text-[var(--color-on-surface)] placeholder:text-[var(--color-outline)] text-sm focus:outline-none focus:border-[var(--color-primary)] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formState === 'sending' || !name || !email || !message}
                    className={`w-full py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2 transition-all ${
                      !name || !email || !message
                        ? 'bg-[var(--color-surface-container-high)] text-[var(--color-outline)] cursor-not-allowed'
                        : 'bg-[var(--color-primary)] text-white hover:bg-[var(--color-secondary)] shadow-lg hover:shadow-xl hover:-translate-y-0.5'
                    }`}
                  >
                    {formState === 'sending' ? (
                      <>
                        <span className="material-symbols-outlined animate-spin text-lg">sync</span>
                        Preparando mensaje...
                      </>
                    ) : (
                      <>
                        Enviar mensaje
                        <span className="material-symbols-outlined text-[18px]">send</span>
                      </>
                    )}
                  </button>

                  {formState === 'error' && (
                    <p className="text-red-500 text-sm text-center">{errorMsg}</p>
                  )}
                </form>
              )}
            </div>

            {/* Panel de información */}
            <div className="lg:col-span-2 space-y-6">

              {/* Tiempo de respuesta */}
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

              {/* Institución */}
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

              {/* Áreas de interés */}
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
