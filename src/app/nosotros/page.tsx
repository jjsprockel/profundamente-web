'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function NosotrosPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-32 pb-24 bg-[var(--color-surface)] min-h-screen">
        
        {/* Hero Section - Introducción */}
        <section className="max-w-7xl mx-auto px-8 lg:px-24 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <span className="text-[var(--color-secondary)] font-bold tracking-[0.2em] uppercase text-xs block">
                🔷 Nosotros
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--color-primary)] tracking-tight leading-tight">
                Investigación e Innovación en <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]">
                  Inteligencia Artificial aplicada a la Salud
                </span>
              </h1>
              <p className="text-[var(--color-on-surface-variant)] text-lg leading-relaxed">
                ProfundaMente es un laboratorio de investigación e innovación orientado al desarrollo de soluciones basadas en evidencia, la formación de talento y la transformación de los procesos clínicos, investigativos y educativos.
              </p>
              <p className="text-[var(--color-on-surface-variant)] text-lg leading-relaxed opacity-80">
                El laboratorio integra un equipo interdisciplinario de profesionales con experiencia en medicina, ciencias biomédicas, ciencia de datos e inteligencia artificial, comprometidos con la generación de conocimiento y su aplicación responsable en el contexto del sistema de salud.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-square rounded-[40px] overflow-hidden shadow-2xl bg-[var(--color-surface-container-low)]"
            >
              <Image 
                src="/images/Visual principal.png" 
                alt="ProfundaMente Vision" 
                fill
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary)]/20 to-transparent" />
            </motion.div>
          </div>
        </section>

        {/* Liderazgo Section */}
        <section className="max-w-7xl mx-auto px-8 lg:px-24 mb-32">
          <div className="flex items-center gap-4 mb-16">
            <span className="text-[var(--color-secondary)] font-bold tracking-widest uppercase text-sm">🔹 Liderazgo</span>
            <div className="flex-grow h-px bg-[var(--color-outline-variant)]/30" />
          </div>

          <div className="space-y-24">
            
            {/* John Jaime Sprockel Díaz */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start"
            >
              <div className="md:col-span-4 lg:col-span-3">
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-xl border-4 border-white dark:border-[var(--color-surface-container)]">
                  <Image 
                    src="/images/team-john.jpg" 
                    alt="John Jaime Sprockel Díaz, MD, MSc, MBA" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-6 flex justify-center gap-4">
                  <a href="https://www.linkedin.com/in/john-jaime-sprockel-diaz-6961921b1/" target="_blank" className="p-2 bg-[var(--color-surface-container-high)] rounded-full text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-all shadow-sm">
                    <span className="material-symbols-outlined text-sm">link</span>
                  </a>
                  <a href="https://www.researchgate.net/profile/John-Sprockel?ev=hdr_xprf" target="_blank" className="p-2 bg-[var(--color-surface-container-high)] rounded-full text-[var(--color-secondary)] hover:bg-[var(--color-secondary)] hover:text-white transition-all shadow-sm">
                    <span className="material-symbols-outlined text-sm">science</span>
                  </a>
                </div>
              </div>
              <div className="md:col-span-8 lg:col-span-9 space-y-6">
                <div>
                  <h3 className="text-3xl font-extrabold text-[var(--color-primary)] leading-tight">John Jaime Sprockel Díaz</h3>
                  <p className="text-[var(--color-secondary)] font-bold text-lg">MD, MSc, MBA</p>
                </div>
                <p className="text-[var(--color-on-surface)] font-bold text-lg leading-relaxed">
                  Médico internista, profesor e investigador con enfoque en inteligencia artificial aplicada a la salud, analítica clínica y desarrollo de modelos predictivos.
                </p>
                <div className="space-y-4 text-[var(--color-on-surface-variant)] leading-relaxed">
                  <p>
                    Cuenta con formación de maestría y MBA, y experiencia en el diseño, implementación y validación de soluciones basadas en inteligencia artificial en contextos clínicos y académicos. Su trabajo se centra en la integración de modelos de machine learning, deep learning y procesamiento de lenguaje natural en procesos asistenciales, investigación clínica y educación médica.
                  </p>
                  <p>
                    Ha liderado iniciativas de innovación en salud digital, incluyendo el desarrollo de sistemas de apoyo a la decisión clínica, plataformas de análisis de datos y proyectos de patología digital, promoviendo la articulación entre investigación, tecnología y práctica clínica.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Arley Gómez López */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start border-t border-[var(--color-outline-variant)]/20 pt-24"
            >
              <div className="md:col-span-4 lg:col-span-3">
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-xl border-4 border-white dark:border-[var(--color-surface-container)]">
                  <Image 
                    src="/images/team-arley.jpg" 
                    alt="Arley Gómez López, MD, PhD" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-6 flex justify-center gap-4">
                  <a href="https://www.linkedin.com/in/arley-gómez-086a7b24/" target="_blank" className="p-2 bg-[var(--color-surface-container-high)] rounded-full text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-all shadow-sm">
                    <span className="material-symbols-outlined text-sm">link</span>
                  </a>
                  <a href="https://www.researchgate.net/profile/Arley-Gomez-Lopez" target="_blank" className="p-2 bg-[var(--color-surface-container-high)] rounded-full text-[var(--color-secondary)] hover:bg-[var(--color-secondary)] hover:text-white transition-all shadow-sm">
                    <span className="material-symbols-outlined text-sm">science</span>
                  </a>
                </div>
              </div>
              <div className="md:col-span-8 lg:col-span-9 space-y-6">
                <div>
                  <h3 className="text-3xl font-extrabold text-[var(--color-primary)] leading-tight">Arley Gómez López</h3>
                  <p className="text-[var(--color-secondary)] font-bold text-lg">MD, PhD</p>
                </div>
                <p className="text-[var(--color-on-surface)] font-bold text-lg leading-relaxed">
                  Docente investigador de la Fundación Universitaria de Ciencias de la Salud (FUCS), con formación interdisciplinaria en medicina, biología y ciencias biomédicas.
                </p>
                <div className="space-y-4 text-[var(--color-on-surface-variant)] leading-relaxed">
                  <p>
                    Médico cirujano y biólogo, cuenta con maestría en biología molecular y biotecnología, doctorado en ciencias biomédicas y formación posdoctoral en nanotecnología aplicada a la medicina.
                  </p>
                  <p>
                    Posee amplia experiencia en investigación biomédica, medicina traslacional y nanomedicina, así como en la formación de estudiantes de pregrado y posgrado en medicina. Ha participado como evaluador de proyectos de investigación clínica y biomédica, así como en programas de formación doctoral, y cuenta con experiencia en el desarrollo de redes académicas y científicas a nivel nacional e internacional.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* Enfoque Section */}
        <section className="bg-[var(--color-surface-container-low)] py-24 mb-32">
          <div className="max-w-7xl mx-auto px-8 lg:px-24">
            <div className="flex items-center gap-4 mb-16">
              <span className="text-[var(--color-secondary)] font-bold tracking-widest uppercase text-sm">🔹 Enfoque</span>
              <div className="flex-grow h-px bg-[var(--color-outline-variant)]/30" />
            </div>
            
            <p className="text-xl text-[var(--color-primary)] font-medium mb-12">El equipo de ProfundaMente trabaja bajo un modelo que articula:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { title: 'Investigación científica rigurosa', icon: 'science' },
                { title: 'Desarrollo tecnológico aplicado', icon: 'developer_board' },
                { title: 'Validación clínica y metodológica', icon: 'verified' },
                { title: 'Implementación responsable', icon: 'security' }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="bg-[var(--color-surface-container-lowest)] p-6 rounded-3xl border border-[var(--color-outline-variant)]/10 shadow-sm"
                >
                  <span className="material-symbols-outlined text-[var(--color-secondary)] text-3xl mb-4 block">{item.icon}</span>
                  <h4 className="text-lg font-extrabold text-[var(--color-primary)] leading-tight">{item.title}</h4>
                </motion.div>
              ))}
            </div>
            
            <p className="mt-12 text-[var(--color-on-surface-variant)] leading-relaxed max-w-4xl italic">
              Este enfoque permite garantizar que las soluciones desarrolladas no solo respondan a necesidades reales del sistema de salud, sino que se sustenten en marcos éticos, regulatorios y científicos robustos.
            </p>
          </div>
        </section>

        {/* Propósito Section */}
        <section className="max-w-7xl mx-auto px-8 lg:px-24 mb-24">
          <div className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] p-12 lg:p-16 rounded-[48px] text-white shadow-2xl relative overflow-hidden text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="relative z-10 space-y-8">
              <span className="font-bold tracking-widest uppercase text-sm opacity-80">🔹 Propósito</span>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight max-w-4xl mx-auto">
                Contribuir a la transformación del sistema de salud mediante el desarrollo e implementación de inteligencia artificial basada en evidencia.
              </h2>
              <p className="text-lg lg:text-xl opacity-90 max-w-3xl mx-auto font-medium">
                Promoviendo la equidad, la eficiencia y la calidad en la atención, así como la formación de nuevas generaciones de profesionales en salud digital.
              </p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
