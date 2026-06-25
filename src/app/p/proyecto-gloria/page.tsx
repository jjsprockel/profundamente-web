'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SolutionCard from '@/components/SolutionCard';
import EducationCard from '@/components/EducationCard';
import { mockContent } from '@/lib/mockData';
import Link from 'next/link';

export default function ProyectoGloriaPage() {
  const article = mockContent.find((c) => c.slug === 'proyecto-gloria');
  const medGemma = mockContent.find((c) => c.slug === 'medgemma-27b');
  const tallerEducacion = mockContent.find((c) => c.slug === 'taller-patologia-computacional');

  if (!article) return null;

  return (
    <>
      <Navbar />
      <main className="flex-grow bg-[var(--color-surface)] min-h-screen">
        
        {/* Hero de Artículo */}
        <header className="bg-[var(--color-surface-container-lowest)] border-b border-[var(--color-outline-variant)]/20 pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-8 lg:px-0">
            <Link href="/investigacion" className="inline-flex items-center gap-2 text-sm text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] mb-8 transition-colors">
              <span className="material-symbols-outlined text-[16px]">arrow_back</span>
              Volver a Investigación
            </Link>
            
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-[var(--color-surface-container-high)] text-[var(--color-on-surface)] text-xs font-bold uppercase tracking-widest rounded-full">
                {article.category}
              </span>
              <span className="text-sm font-medium text-[var(--color-on-surface-variant)]">
                Publicado: {new Date(article.published_at).toLocaleDateString()}
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-extrabold text-[var(--color-primary)] mb-6 leading-tight">
              GLORIA — Globalización de la Telepatología en Red con Aplicaciones de Inteligencia Artificial
            </h1>
            
            <p className="text-xl text-[var(--color-on-surface-variant)] font-light leading-relaxed">
              El programa GLORIA es una iniciativa de investigación e innovación orientada a la implementación de un modelo de patología digital basado en una red de telepatología, integrada con herramientas de inteligencia artificial.
            </p>
          </div>
        </header>

        {/* Cuerpo del Artículo Customizado */}
        <div className="max-w-4xl mx-auto px-8 lg:px-0 py-16">
          
          <div className="space-y-16 text-[var(--color-on-surface)] font-[family-name:var(--font-body)] leading-loose">
            
            <section>
              <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-[var(--color-secondary)]">description</span>
                Descripción
              </h2>
              <p className="text-[var(--color-on-surface-variant)] text-lg leading-relaxed mb-4">
                El programa GLORIA es una iniciativa de investigación e innovación orientada a la implementación de un modelo de patología digital basado en una red de telepatología, integrada con herramientas de inteligencia artificial. Su propósito es mejorar el acceso, la oportunidad y la calidad del diagnóstico en salud, particularmente en el contexto de enfermedades oncológicas de alta complejidad.
              </p>
              <p className="text-[var(--color-on-surface-variant)] text-lg leading-relaxed">
                El programa articula infraestructura tecnológica, desarrollo científico y colaboración interinstitucional para facilitar la transmisión, análisis e interpretación de imágenes histopatológicas, así como la generación de datos estructurados que permitan el desarrollo y validación de modelos de inteligencia artificial en salud.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-[var(--color-secondary)]">assignment</span>
                Justificación
              </h2>
              <p className="text-[var(--color-on-surface-variant)] text-lg leading-relaxed mb-4">
                El diagnóstico oportuno y preciso del cáncer continúa siendo un desafío en sistemas de salud con limitaciones en la distribución de especialistas y en la infraestructura tecnológica. En Colombia, existen brechas significativas en el acceso a servicios de patología, especialmente en regiones apartadas, lo que se traduce en retrasos diagnósticos y afectación del pronóstico clínico.
              </p>
              <p className="text-[var(--color-on-surface-variant)] text-lg leading-relaxed">
                Adicionalmente, la creciente complejidad de la medicina oncológica exige herramientas que permitan mejorar la eficiencia, la estandarización y la reproducibilidad de los procesos diagnósticos. En este contexto, la telepatología y la inteligencia artificial emergen como soluciones estratégicas para fortalecer la capacidad diagnóstica, optimizar recursos y reducir inequidades en el acceso a la atención especializada.
              </p>
            </section>

            <section className="bg-[var(--color-surface-container-lowest)] p-8 rounded-3xl border border-[var(--color-surface-container-highest)]/50">
              <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-[var(--color-secondary)]">flag</span>
                Objetivos
              </h2>
              
              <h3 className="text-lg font-bold text-[var(--color-on-surface)] mb-2">Objetivo general</h3>
              <p className="text-[var(--color-on-surface-variant)] mb-6">Diseñar e implementar una red de telepatología integrada con herramientas de inteligencia artificial que permita mejorar la calidad, oportunidad y equidad en el diagnóstico de patologías complejas en Colombia.</p>
              
              <h3 className="text-lg font-bold text-[var(--color-on-surface)] mb-4">Objetivos específicos</h3>
              <ul className="list-disc list-inside text-[var(--color-on-surface-variant)] space-y-2 ml-2">
                <li>Implementar una infraestructura de patología digital mediante sistemas de digitalización de láminas histopatológicas.</li>
                <li>Desarrollar una red de telepatología que facilite la interacción entre centros periféricos y especialistas.</li>
                <li>Crear una base de datos estructurada de imágenes histopatológicas para investigación y desarrollo de modelos de IA.</li>
                <li>Diseñar y validar modelos de inteligencia artificial orientados al análisis de imágenes y apoyo diagnóstico.</li>
                <li>Evaluar el impacto del programa en tiempos diagnósticos, acceso a especialistas y calidad del proceso asistencial.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-[var(--color-secondary)]">science</span>
                Metodología
              </h2>
              <p className="text-[var(--color-on-surface-variant)] text-lg mb-4">El programa GLORIA se desarrolla bajo un enfoque metodológico mixto, que integra componentes tecnológicos, clínicos y de investigación aplicada.</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[var(--color-primary)] mt-1">check_circle</span>
                  <p className="text-[var(--color-on-surface-variant)]"><strong>Implementación de infraestructura digital:</strong> adquisición y uso de sistemas de Whole Slide Imaging para la digitalización de muestras histopatológicas.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[var(--color-primary)] mt-1">check_circle</span>
                  <p className="text-[var(--color-on-surface-variant)]"><strong>Modelo de red tipo hub-and-spoke:</strong> conexión de centros de digitalización satélite con centros de referencia para teleconsulta sincrónica y asincrónica.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[var(--color-primary)] mt-1">check_circle</span>
                  <p className="text-[var(--color-on-surface-variant)]"><strong>Gestión y estructuración de datos:</strong> creación de repositorios de imágenes y datos clínicos asociados, bajo estándares de seguridad y gobernanza de datos.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[var(--color-primary)] mt-1">check_circle</span>
                  <p className="text-[var(--color-on-surface-variant)]"><strong>Desarrollo de modelos de IA:</strong> aplicación de técnicas de aprendizaje profundo y aprendizaje automático para el análisis de imágenes y predicción de variables clínicas relevantes.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[var(--color-primary)] mt-1">check_circle</span>
                  <p className="text-[var(--color-on-surface-variant)]"><strong>Evaluación de impacto:</strong> análisis cuantitativo y cualitativo de indicadores clínicos, operativos y de adopción tecnológica.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[var(--color-primary)] mt-1">check_circle</span>
                  <p className="text-[var(--color-on-surface-variant)]"><strong>Cumplimiento ético y regulatorio:</strong> aprobación por comités de ética, protección de datos y cumplimiento de normativas en investigación en salud.</p>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-[var(--color-secondary)]">analytics</span>
                Resultados
              </h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-[var(--color-on-surface)] mb-4 border-b border-[var(--color-outline-variant)]/20 pb-2">Ponencias</h3>
                <p className="text-[var(--color-on-surface-variant)] mb-4">El programa GLORIA ha sido presentado en múltiples escenarios académicos y científicos, destacándose:</p>
                <ul className="list-disc list-inside text-[var(--color-on-surface-variant)] space-y-2 ml-4">
                  <li><strong>Conferencia Internacional CLARIFY (Valencia, España, 2024):</strong> presentación del protocolo del programa GLORIA.</li>
                  <li><strong>Curso virtual “CITOLOGÍA.COM” (Sociedad Latinoamericana de Citopatología, 2024):</strong> socialización de la experiencia colombiana del proyecto.</li>
                  <li><strong>44 Congreso Colombiano de Patología (Santa Marta, 2024):</strong>
                    <ul className="list-[circle] list-inside ml-8 mt-2 space-y-1 text-sm">
                      <li>Presentación sobre la red GLORIA y su impacto en la reducción de desigualdades diagnósticas</li>
                      <li>Reconocimiento con segundo puesto en una de las presentaciones</li>
                    </ul>
                  </li>
                  <li><strong>Foro de Investigación FUCS (TEDx) (Bogotá, 2024):</strong> divulgación del proyecto en formato de alto impacto académico y divulgativo.</li>
                </ul>
                <p className="text-[var(--color-on-surface-variant)] mt-4 mb-2">Adicionalmente, se han presentado posters científicos en escenarios como:</p>
                <ul className="list-disc list-inside text-[var(--color-on-surface-variant)] space-y-1 ml-4 text-sm font-medium">
                  <li>Jornada de Investigación de Posgrados FUCS (2024)</li>
                  <li>AACR Conference on Cancer Health Disparities (San Diego, 2024)</li>
                </ul>
              </div>

              <div className="mb-12">
                <h3 className="text-xl font-bold text-[var(--color-on-surface)] mb-4 border-b border-[var(--color-outline-variant)]/20 pb-2">Artículos</h3>
                <ul className="space-y-4">
                  <li className="bg-[var(--color-surface-container-lowest)] p-4 rounded-xl border border-[var(--color-outline-variant)]/20 text-sm text-[var(--color-on-surface-variant)] leading-relaxed">
                    Mosquera-Zamudio A, Gomez-Suarez M, Sprockel J, Riaño-Moreno JC, Janssen EAM, Pantanowitz L, et al.{' '}
                    <a 
                      href="https://www.sciencedirect.com/science/article/pii/S2153353924000336"
                      target="_blank" rel="noopener noreferrer"
                      className="text-[var(--color-primary)] font-bold hover:underline"
                    >
                      Globalization of a telepathology network with artificial intelligence applications in Colombia: The GLORIA program study protocol.
                    </a>{' '}
                    <em>Journal of Pathology Informatics</em>. 2024;15:100394.
                  </li>
                  <li className="bg-[var(--color-surface-container-lowest)] p-4 rounded-xl border border-[var(--color-outline-variant)]/20 text-sm text-[var(--color-on-surface-variant)] leading-relaxed">
                    Parra-Medina R, Guerron-Gomez G, Mendivelso-González D, Gil-Gómez JH, Alzate JP, Gomez-Suarez M, et al.{' '}
                    <a 
                      href="https://tlcr.amegroups.org/article/view/100446/html"
                      target="_blank" rel="noopener noreferrer"
                      className="text-[var(--color-primary)] font-bold hover:underline"
                    >
                      Deep learning in histopathology images for prediction of oncogenic driver molecular alterations in lung cancer: a systematic review and meta-analysis.
                    </a>{' '}
                    <em>Transl Lung Cancer Res</em>. 30 de mayo de 2025;14(5):1756-69. doi:10.21037/tlcr-2024-1196.
                  </li>
                </ul>
              </div>

              <div className="mb-12">
                <h3 className="text-xl font-bold text-[var(--color-on-surface)] mb-6 border-b border-[var(--color-outline-variant)]/20 pb-2">Actividades de Formación</h3>
                <p className="text-[var(--color-on-surface-variant)] mb-6">El programa GLORIA desarrolla actividades de formación continua para profesionales de la salud en patología digital e inteligencia artificial:</p>
                {tallerEducacion && (
                  <div className="max-w-sm">
                    <EducationCard content={tallerEducacion} />
                  </div>
                )}
              </div>

              <div>
                <h3 className="text-xl font-bold text-[var(--color-on-surface)] mb-6 border-b border-[var(--color-outline-variant)]/20 pb-2">Modelos Desarrollados</h3>
                <p className="text-[var(--color-on-surface-variant)] mb-6">El macroproyecto ha impulsado modelos avanzados de inteligencia artificial. A continuación, presentamos nuestra más reciente liberación:</p>
                {medGemma && (
                  <div className="max-w-sm">
                    <SolutionCard content={medGemma} />
                  </div>
                )}
              </div>
            </section>

            <section className="bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-secondary)]/10 p-8 rounded-3xl border border-[var(--color-primary)]/20 shadow-sm mt-12">
              <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-[var(--color-primary)]">online_prediction</span>
                Impacto esperado
              </h2>
              <p className="text-[var(--color-on-surface-variant)] mb-6">El programa GLORIA busca generar impacto en múltiples dimensiones:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/50 backdrop-blur-sm p-4 rounded-xl">
                  <strong className="text-[var(--color-primary)] block mb-1">Clínica</strong>
                  <span className="text-sm text-[var(--color-on-surface-variant)]">Reducción de tiempos diagnósticos y mejora en la precisión del diagnóstico.</span>
                </div>
                <div className="bg-white/50 backdrop-blur-sm p-4 rounded-xl">
                  <strong className="text-[var(--color-primary)] block mb-1">Acceso</strong>
                  <span className="text-sm text-[var(--color-on-surface-variant)]">Disminución de brechas en la disponibilidad de servicios especializados.</span>
                </div>
                <div className="bg-white/50 backdrop-blur-sm p-4 rounded-xl">
                  <strong className="text-[var(--color-primary)] block mb-1">Científica</strong>
                  <span className="text-sm text-[var(--color-on-surface-variant)]">Fortalecimiento de la investigación en patología digital e inteligencia artificial.</span>
                </div>
                <div className="bg-white/50 backdrop-blur-sm p-4 rounded-xl">
                  <strong className="text-[var(--color-primary)] block mb-1">Tecnológica</strong>
                  <span className="text-sm text-[var(--color-on-surface-variant)]">Desarrollo de infraestructura y capacidades en salud digital.</span>
                </div>
                <div className="bg-white/50 backdrop-blur-sm p-4 rounded-xl">
                  <strong className="text-[var(--color-primary)] block mb-1">Formativa</strong>
                  <span className="text-sm text-[var(--color-on-surface-variant)]">Formación de talento humano en áreas emergentes.</span>
                </div>
                <div className="bg-white/50 backdrop-blur-sm p-4 rounded-xl">
                  <strong className="text-[var(--color-primary)] block mb-1">Sistémica</strong>
                  <span className="text-sm text-[var(--color-on-surface-variant)]">Contribución a la transformación digital del sistema de salud.</span>
                </div>
              </div>
              <p className="text-[var(--color-on-surface-variant)] mt-6 font-medium text-center">Asimismo, se proyecta como un modelo replicable en otros contextos con limitaciones similares, promoviendo la equidad en el acceso a tecnologías avanzadas.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-[var(--color-secondary)]">handshake</span>
                Instituciones Colaboradoras
              </h2>
              <p className="text-[var(--color-on-surface-variant)] mb-6">El programa GLORIA se desarrolla mediante la articulación de múltiples actores del sector salud, académico y tecnológico, incluyendo:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
                <li className="flex items-center gap-3 bg-[var(--color-surface-container-lowest)] p-4 rounded-xl border border-[var(--color-outline-variant)]/20 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-tertiary)] shrink-0"></span>
                  <span className="text-sm font-bold text-[var(--color-on-surface)]">Fundación Universitaria de Ciencias de la Salud (FUCS)</span>
                </li>
                <li className="flex items-center gap-3 bg-[var(--color-surface-container-lowest)] p-4 rounded-xl border border-[var(--color-outline-variant)]/20 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-secondary)] shrink-0"></span>
                  <span className="text-sm font-bold text-[var(--color-on-surface)]">Sociedad de Cirugía de Bogotá – Hospital de San José</span>
                </li>
                <li className="flex items-center gap-3 bg-[var(--color-surface-container-lowest)] p-4 rounded-xl border border-[var(--color-outline-variant)]/20 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] shrink-0"></span>
                  <span className="text-sm font-bold text-[var(--color-on-surface)]">Hospital Infantil Universitario de San José</span>
                </li>
                <li className="flex items-center gap-3 bg-[var(--color-surface-container-lowest)] p-4 rounded-xl border border-[var(--color-outline-variant)]/20 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-outline)] shrink-0"></span>
                  <span className="text-sm font-bold text-[var(--color-on-surface)]">Instituto Nacional de Cancerología</span>
                </li>
                <li className="flex items-center gap-3 bg-[var(--color-surface-container-lowest)] p-4 rounded-xl border border-[var(--color-outline-variant)]/20 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-indigo-400 shrink-0"></span>
                  <span className="text-sm font-bold text-[var(--color-on-surface)]">Laboratorios de patología públicos y privados</span>
                </li>
                <li className="flex items-center gap-3 bg-[var(--color-surface-container-lowest)] p-4 rounded-xl border border-[var(--color-outline-variant)]/20 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0"></span>
                  <span className="text-sm font-bold text-[var(--color-on-surface)]">Redes de investigación nacionales e internacionales</span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-[var(--color-secondary)]">groups</span>
                Miembros del Equipo
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                {/* 1. Dirección y Coordinación */}
                <div className="bg-[var(--color-surface-container-lowest)] p-6 rounded-2xl border border-[var(--color-surface-container-highest)]/50 shadow-sm h-full">
                  <h3 className="text-lg font-bold text-[var(--color-primary)] mb-4 border-b border-[var(--color-outline-variant)]/20 pb-2">Dirección y coordinación</h3>
                  <ul className="text-sm text-[var(--color-on-surface-variant)] space-y-3">
                    <li><strong className="text-[var(--color-on-surface)]">Rafael Parra</strong><span className="block text-[11px] text-[var(--color-outline)]">Director General del Proyecto</span></li>
                    <li><strong className="text-[var(--color-on-surface)]">Marcela Gómez</strong><span className="block text-[11px] text-[var(--color-outline)]">Líder componente necesidades en telepatología</span></li>
                    <li><strong className="text-[var(--color-on-surface)]">John Sprockel</strong><span className="block text-[11px] text-[var(--color-outline)]">Líder componente de cáncer de pulmón</span></li>
                    <li><strong className="text-[var(--color-on-surface)]">Andrés Mosquera</strong><span className="block text-[11px] text-[var(--color-outline)]">Coordinador general</span></li>
                    <li><strong className="text-[var(--color-on-surface)]">Carolina Rincón</strong><span className="block text-[11px] text-[var(--color-outline)]">Coordinación administrativa</span></li>
                  </ul>
                </div>

                {/* 2. Investigadores */}
                <div className="bg-[var(--color-surface-container-lowest)] p-6 rounded-2xl border border-[var(--color-surface-container-highest)]/50 shadow-sm h-full">
                  <h3 className="text-lg font-bold text-[var(--color-primary)] mb-4 border-b border-[var(--color-outline-variant)]/20 pb-2">Investigadores</h3>
                  <ul className="text-sm text-[var(--color-on-surface)] space-y-[6px]">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[var(--color-outline)] rounded-full"></div> José Fernando Polo</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[var(--color-outline)] rounded-full"></div> Arley Gómez</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[var(--color-outline)] rounded-full"></div> Juan José Diaztagle</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[var(--color-outline)] rounded-full"></div> Edna Carolina Araque</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[var(--color-outline)] rounded-full"></div> Walter Chaves</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[var(--color-outline)] rounded-full"></div> Julián Camilo Riaño</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[var(--color-outline)] rounded-full"></div> Emiel Janssen</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[var(--color-outline)] rounded-full"></div> Liron Pantanowitz</li>
                  </ul>
                </div>

                {/* 3. Estudiantes */}
                <div className="bg-[var(--color-surface-container-lowest)] p-6 rounded-2xl border border-[var(--color-surface-container-highest)]/50 shadow-sm h-full">
                  <h3 className="text-lg font-bold text-[var(--color-primary)] mb-4 border-b border-[var(--color-outline-variant)]/20 pb-2">Estudiantes</h3>
                  <ul className="text-sm text-[var(--color-on-surface)] grid grid-cols-2 gap-x-2 gap-y-[6px]">
                    <li className="flex gap-2"><div className="w-1 h-1 bg-[var(--color-outline-variant)] rounded-full mt-1.5 shrink-0"></div> Javier Gil</li>
                    <li className="flex gap-2"><div className="w-1 h-1 bg-[var(--color-outline-variant)] rounded-full mt-1.5 shrink-0"></div> Carlos Zambrano</li>
                    <li className="flex gap-2"><div className="w-1 h-1 bg-[var(--color-outline-variant)] rounded-full mt-1.5 shrink-0"></div> Mª Alejandra Martínez</li>
                    <li className="flex gap-2"><div className="w-1 h-1 bg-[var(--color-outline-variant)] rounded-full mt-1.5 shrink-0"></div> Félix Murcia</li>
                    <li className="flex gap-2"><div className="w-1 h-1 bg-[var(--color-outline-variant)] rounded-full mt-1.5 shrink-0"></div> Carlos González I.</li>
                    <li className="flex gap-2"><div className="w-1 h-1 bg-[var(--color-outline-variant)] rounded-full mt-1.5 shrink-0"></div> Alejandra González</li>
                    <li className="flex gap-2"><div className="w-1 h-1 bg-[var(--color-outline-variant)] rounded-full mt-1.5 shrink-0"></div> Jairo Montes</li>
                    <li className="flex gap-2"><div className="w-1 h-1 bg-[var(--color-outline-variant)] rounded-full mt-1.5 shrink-0"></div> Karen Muñoz</li>
                    <li className="flex gap-2"><div className="w-1 h-1 bg-[var(--color-outline-variant)] rounded-full mt-1.5 shrink-0"></div> Jhon Navarrete</li>
                  </ul>
                </div>

              </div>

            </section>

          </div>


        </div>
      </main>
      <Footer />
    </>
  );
}
