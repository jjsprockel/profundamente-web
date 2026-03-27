'use client';

import { useState, useEffect } from 'react';

export default function BetaDisclaimer({ onAccept }: { onAccept: () => void }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Escuchar si el usuario ya aceptó en esta sesión (opcional para persistencia)
    // Por ahora forzamos la aparición para seguridad regulatoria simulada.
    setIsVisible(true);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Backdrop con Blur y Gradiente */}
      <div className="absolute inset-0 bg-[#0a0f18]/90 backdrop-blur-xl animate-fade-in" />
      
      {/* Modal Container */}
      <div className="relative bg-[var(--color-surface-container-lowest)] rounded-[40px] max-w-2xl w-full shadow-[0_32px_128px_rgba(0,0,0,0.5)] border border-[var(--color-outline-variant)]/20 overflow-hidden animate-scale-up">
        
        {/* Decoración Superior */}
        <div className="h-2 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-tertiary)]" />

        <div className="p-10 lg:p-14">
          {/* Header con Icono de Alerta Premium */}
          <div className="flex flex-col items-center text-center mb-10">
            <div className="w-20 h-20 bg-amber-500/10 rounded-full flex items-center justify-center mb-6 border border-amber-500/20 shadow-inner">
              <span className="material-symbols-outlined text-amber-500 text-5xl font-light">gavel</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[var(--color-on-surface)] tracking-tight">
              Aviso de Seguridad e Inferencia IA
            </h2>
            <p className="text-[var(--color-secondary)] font-bold mt-2 uppercase tracking-[0.2em] text-xs">
              Protocolo de Validación Investigativa
            </p>
          </div>
          
          {/* Contenido Legal Expandido */}
          <div className="space-y-6 text-[var(--color-on-surface-variant)] text-sm leading-relaxed overflow-y-auto max-h-[50vh] pr-4 custom-scrollbar">
            <div className="p-6 bg-[var(--color-surface-container-low)] rounded-3xl border border-[var(--color-outline-variant)]/20">
              <h4 className="font-bold text-[var(--color-on-surface)] mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">science</span>
                Naturaleza de la Herramienta
              </h4>
              <p>
                Este sistema utiliza modelos de lenguaje (LLM), visión computacional y aprendizaje automático en fase <strong>Alpha/Beta</strong>. Los resultados son generados mediante redes neuronales profundas y pueden contener imprecisiones técnicas o sesgos inherentes al dataset de entrenamiento.
              </p>
            </div>

            <div className="p-6 bg-red-500/5 rounded-3xl border border-red-500/10">
              <h4 className="font-bold text-red-600 mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">health_and_safety</span>
                Restricción de Uso Médico
              </h4>
              <p className="text-red-900/80">
                ProfundaMente <strong>NO es un dispositivo médico certificado</strong>. No debe utilizarse bajo ninguna circunstancia para el diagnóstico, tratamiento o prevención de enfermedades en entornos asistenciales reales sin la supervisión de un especialista facultado.
              </p>
            </div>

            <div className="p-6 bg-blue-500/5 rounded-3xl border border-blue-500/10">
              <h4 className="font-bold text-blue-600 mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">assignment_ind</span>
                Responsabilidad Profesional
              </h4>
              <p className="text-blue-900/80">
                Al presionar "Aceptar", usted reconoce que es un profesional de la salud o investigador calificado y que el uso de esta información para la toma de decisiones clínicas es de su <strong>entera y exclusiva responsabilidad</strong>.
              </p>
            </div>

            <div className="p-6 bg-[var(--color-surface-container-lowest)] rounded-3xl border border-[var(--color-outline-variant)]/20 shadow-inner">
              <h4 className="font-bold text-[var(--color-primary)] mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">privacy_tip</span>
                Privacidad de Datos
              </h4>
              <p>
                No introduzca información que permita identificar pacientes (PHI). El laboratorio ProfundaMente se adhiere a la Ley 1581 de 2012 pero este entorno es estrictamente experimental.
              </p>
            </div>
          </div>

          {/* Acciones */}
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => window.history.back()}
              className="flex-1 px-8 py-5 font-bold text-[var(--color-on-surface-variant)] hover:bg-[var(--color-surface-container-high)] rounded-2xl transition-all border border-[var(--color-outline-variant)]/30 active:scale-95 text-center"
            >
              No Acepto / Regresar
            </button>
            <button 
              onClick={() => {
                setIsVisible(false);
                onAccept();
              }}
              className="flex-[1.5] px-8 py-5 font-bold bg-gradient-to-br from-[var(--color-primary)] to-[#004d40] text-white hover:shadow-[0_8px_32px_rgba(0,121,107,0.3)] hover:-translate-y-1 rounded-2xl transition-all active:scale-95 text-center border-t border-white/20"
            >
              Entiendo y Acepto Continuar
            </button>
          </div>
        </div>

        {/* Footer pequeño institucional */}
        <div className="bg-[var(--color-surface-container-highest)]/10 py-4 px-10 text-center border-t border-[var(--color-outline-variant)]/10">
          <p className="text-[10px] text-[var(--color-outline)] uppercase font-bold tracking-[0.3em]">
            ProfundaMente • Laboratorio de Innovación IA • FUCS
          </p>
        </div>
      </div>

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .animate-scale-up {
          animation: scaleUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: var(--color-outline-variant);
          border-radius: 10px;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleUp {
          from { opacity: 0; transform: scale(0.9) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
}
