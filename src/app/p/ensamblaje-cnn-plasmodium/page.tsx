'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { mockContent } from '@/lib/mockData';
import SolutionDisclaimerWrapper from '@/components/SolutionDisclaimerWrapper';

export default function PlasmodiumDetectionPage() {
  const research = mockContent.find(c => c.slug === 'ensamblaje-cnn-plasmodium');

  if (!research) return <div>Contenido no encontrado</div>;

  return (
    <SolutionDisclaimerWrapper category="research" subsections={['Deep Learning', 'Visión por computador']}>
      <Navbar />
      <main className="flex-grow bg-[var(--color-surface)] min-h-screen pt-32 pb-24 text-[var(--color-on-surface)]">
        <div className="max-w-5xl mx-auto px-8 lg:px-12">
          
          {/* Logo */}
          <div className="mb-8">
            <div className="w-16 h-16 bg-[var(--color-surface-container)] rounded-2xl flex items-center justify-center text-[var(--color-secondary)] shadow-sm border border-[var(--color-outline-variant)]/30">
              <span className="material-symbols-outlined text-4xl">{research.logo_icon || 'biotech'}</span>
            </div>
          </div>

          {/* Nombre y Descripción */}
          <header className="mb-16">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-[var(--color-primary)] mb-6 font-[family-name:var(--font-headline)] tracking-tight leading-tight">
              {research.title}
            </h1>
            <div className="prose prose-lg max-w-none text-[var(--color-on-surface-variant)] leading-relaxed">
              <p className="text-xl font-light italic border-l-4 border-[var(--color-secondary)] pl-6 py-2 bg-[var(--color-secondary)]/5 rounded-r-xl">
                {research.excerpt}
              </p>
              <div className="mt-8 space-y-4 font-[family-name:var(--font-body)]">
                <p>
                  Este artículo presenta el desarrollo y validación de modelos de inteligencia artificial basados en redes neuronales convolucionales (CNN) y estrategias de ensamblaje estadístico para la identificación automática de Plasmodium falciparum en extendidos de sangre periférica.
                </p>
                <p>
                  Se evaluaron múltiples arquitecturas de CNN y se integraron mediante diferentes estrategias de votación ponderada, demostrando mejoras significativas en el desempeño diagnóstico frente a modelos individuales.
                </p>
              </div>
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
                <p>La malaria continúa siendo una enfermedad de alta carga global, cuya detección oportuna es fundamental para reducir complicaciones y mortalidad.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { title: 'Dependencia de Expertos', desc: 'Sistemas convencionales requieren microscopistas altamente entrenados.' },
                    { title: 'Variabilidad', desc: 'Alta variabilidad interobservador en la visualización manual.' },
                    { title: 'Procesos Lentos', desc: 'Estimación de 30–60 minutos por muestra para un conteo rigoroso.' }
                  ].map((j, i) => (
                    <div key={i} className="p-5 bg-[var(--color-surface)] rounded-2xl border border-[var(--color-outline-variant)]/10">
                      <h4 className="font-bold text-[var(--color-primary)] text-xs mb-2">{j.title}</h4>
                      <p className="text-[10px] leading-relaxed italic">{j.desc}</p>
                    </div>
                  ))}
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
                    Desarrollar y validar modelos de ensamblaje de redes neuronales convolucionales para la identificación automática de Plasmodium falciparum en imágenes de sangre periférica.
                  </p>
                </div>
                <div className="bg-[var(--color-secondary)]/5 p-8 rounded-3xl border border-[var(--color-secondary)]/10">
                  <h3 className="font-bold text-[var(--color-secondary)] mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined">architecture</span> Objetivos específicos
                  </h3>
                  <ul className="text-[var(--color-on-surface-variant)] text-xs space-y-3">
                    <li>• Entrenar múltiples arquitecturas de CNN para clasificación de eritrocitos infectados.</li>
                    <li>• Evaluar el desempeño de cada modelo individual.</li>
                    <li>• Implementar estrategias de ensamblaje basadas en métricas estadísticas.</li>
                    <li>• Comparar el rendimiento de modelos individuales vs. ensamblados.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Metodología */}
            <section className="bg-[var(--color-surface-container-high)] p-8 lg:p-12 rounded-[40px]">
              <div className="flex items-center gap-4 mb-10">
                <span className="w-2 h-8 bg-[var(--color-secondary)] rounded-full"></span>
                <h2 className="text-2xl font-bold text-[var(--color-primary)] uppercase tracking-widest text-sm">Metodología</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h4 className="font-bold text-[var(--color-primary)] flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">database</span> Datos y Procesamiento
                  </h4>
                  <ul className="text-xs text-[var(--color-on-surface-variant)] space-y-4">
                    <li className="flex gap-3">
                      <span className="font-black text-[var(--color-secondary)]">27,560</span>
                      <span>Imágenes de eritrocitos (50% infectados / 50% sanos) validadas por expertos.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="material-symbols-outlined text-[var(--color-secondary)] text-sm">source</span>
                      <span>Dataset del Chittagong Medical College Hospital (Bangladesh).</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="material-symbols-outlined text-[var(--color-secondary)] text-sm">brush</span>
                      <span>Data Augmentation: Rotación, zoom e inversión para mejorar generalización.</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-6">
                  <h4 className="font-bold text-[var(--color-primary)] flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">layers</span> Estrategias de Ensamblaje
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {['Votación Simple (Bagging)', 'Votación Ponderada por PPV', 'Votación por Likelihood Ratios', 'AdaBoost', 'Secuencias Sensibilidad/Especificidad'].map(tech => (
                      <div key={tech} className="px-4 py-2 bg-white/50 rounded-lg text-[10px] font-medium border border-[var(--color-outline-variant)]/20 shadow-sm">
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Resultados y Artículo */}
            <section className="space-y-12">
              <div className="flex items-center gap-4">
                <span className="w-2 h-8 bg-[var(--color-secondary)] rounded-full"></span>
                <h2 className="text-2xl font-bold text-[var(--color-primary)] uppercase tracking-widest text-sm">Resultados y Publicación</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Desempeño */}
                <div className="bg-white p-8 rounded-3xl border border-[var(--color-outline-variant)]/30 shadow-sm">
                  <h3 className="font-bold text-[var(--color-on-surface)] text-sm uppercase mb-6 tracking-widest">Optimización de Ensamblaje</h3>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between text-xs font-bold mb-2">
                        <span>Exactitud Mejor Modelo (VP)</span>
                        <span className="text-[var(--color-secondary)]">99.1%</span>
                      </div>
                      <div className="h-2 bg-[var(--color-surface-container-high)] rounded-full overflow-hidden">
                        <div className="h-full bg-[var(--color-secondary)]" style={{ width: '99.1%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs font-bold mb-2">
                        <span>Sensibilidad</span>
                        <span className="text-[var(--color-primary)]">98.8%</span>
                      </div>
                      <div className="h-2 bg-[var(--color-surface-container-high)] rounded-full overflow-hidden">
                        <div className="h-full bg-[var(--color-primary)]" style={{ width: '98.8%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs font-bold mb-2">
                        <span>Especificidad</span>
                        <span className="text-[var(--color-tertiary)]">99.5%</span>
                      </div>
                      <div className="h-2 bg-[var(--color-surface-container-high)] rounded-full overflow-hidden">
                        <div className="h-full bg-[var(--color-tertiary)]" style={{ width: '99.5%' }}></div>
                      </div>
                    </div>
                  </div>
                  <p className="mt-8 text-[10px] text-[var(--color-on-surface-variant)] leading-relaxed italic">
                    * El ensamblaje ponderado logra métricas superiores sin solapamiento de intervalos de confianza (95%) respecto a modelos individuales (73.5% – 95.8%).
                  </p>
                </div>

                {/* Referencia Artículo */}
                <div className="bg-[var(--color-secondary)]/5 p-8 rounded-3xl border border-[var(--color-secondary)]/20 flex flex-col justify-between">
                  <div>
                    <span className="px-3 py-1 bg-[var(--color-secondary)] text-white text-[10px] font-bold rounded-full uppercase tracking-widest">Articulo Científico</span>
                    <p className="mt-6 text-sm font-bold text-[var(--color-primary)] leading-snug">
                       Weighted convolutional neural networks assembly via a statistical strategy for automatic identification of Plasmodium Falciparum.
                    </p>
                    <p className="mt-4 text-xs text-[var(--color-on-surface-variant)] leading-relaxed">
                      Sprockel J, Pulido-Medina C, Parra ML. Revista Repertorio de Medicina y Cirugía. 2026;35(1):42-9.
                    </p>
                  </div>
                  <a 
                    href="https://revistas.fucsalud.edu.co/index.php/repertorio/article/view/1748" 
                    target="_blank"
                    className="mt-8 inline-flex items-center gap-2 text-[var(--color-secondary)] font-bold hover:underline"
                  >
                    Ver Artículo Completo
                    <span className="material-symbols-outlined text-sm">open_in_new</span>
                  </a>
                </div>
              </div>
            </section>

            {/* Impacto y Equipo */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-[var(--color-outline-variant)]/20 pt-16">
              <div>
                <h3 className="font-bold text-[var(--color-primary)] mb-6 uppercase tracking-widest text-xs">Instituciones Colaboradoras</h3>
                <div className="space-y-4">
                  {[
                    'Fundación Universitaria de Ciencias de la Salud (FUCS)', 
                    'Hospital de San José (Bogotá)', 
                    'Hospital El Tunal (Bogotá)',
                    'Universidad Pedagógica y Tecnológica de Colombia'
                  ].map(inst => (
                    <div key={inst} className="text-xs font-medium text-[var(--color-on-surface-variant)] flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-[var(--color-secondary)] rounded-full"></span> {inst}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-bold text-[var(--color-primary)] mb-6 uppercase tracking-widest text-xs">Autores</h3>
                <div className="space-y-2">
                  {[
                    'John Jaime Sprockel', 'Cristian Pulido-Medina', 'María Lucía Parra'
                  ].map(m => (
                    <div key={m} className="text-sm font-bold text-[var(--color-on-surface)]">
                      {m}
                    </div>
                  ))}
                </div>
              </div>
            </section>


          </div>
        </div>
      </main>
      <Footer />
    </SolutionDisclaimerWrapper>
  );
}
