'use client';

import { useState, useEffect } from 'react';
import BetaDisclaimer from './BetaDisclaimer';

interface ToolContainerProps {
  toolName: string;
  toolType: 'LLM' | 'CV' | 'ML';
  description: string;
  publishedAt?: string;
  mockInferenceDelayMs?: number;
  children: React.ReactNode; 
  renderResult: (data: any) => React.ReactNode; 
  mockResultData: any; 
}

export default function InteractiveToolContainer({
  toolName,
  toolType,
  description,
  publishedAt,
  mockInferenceDelayMs = 2000,
  children,
  renderResult,
  mockResultData
}: ToolContainerProps) {
  const [isDisclaimerAccepted, setIsDisclaimerAccepted] = useState(false);
  const [isInferring, setIsInferring] = useState(false);
  const [result, setResult] = useState<any>(null);

  const getToolColor = () => {
    switch (toolType) {
      case 'LLM': return '[var(--color-tertiary)]';
      case 'ML': return '[var(--color-secondary)]';
      case 'CV': return '[var(--color-primary)]';
      default: return '[var(--color-primary)]';
    }
  };

  const simulateInference = () => {
    setIsInferring(true);
    setResult(null);
    
    // Simulando retraso de red y procesamiento de inferencia pesado
    setTimeout(() => {
      setResult(mockResultData);
      setIsInferring(false);
    }, mockInferenceDelayMs);
  };

  return (
    <div className="relative">
      {!isDisclaimerAccepted && (
        <BetaDisclaimer onAccept={() => setIsDisclaimerAccepted(true)} />
      )}

      {/* Main Tool Wrapper */}
      <div className={`transition-all duration-700 ${!isDisclaimerAccepted ? 'opacity-20 blur-md pointer-events-none' : 'opacity-100'}`}>
        
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className={`px-4 py-1.5 text-xs font-bold uppercase tracking-widest rounded-full bg-${getToolColor()}/10 text-${getToolColor()}`}>
              {toolType} Model
            </span>
            <span className="px-4 py-1.5 text-[10px] bg-[var(--color-error-container)] text-[var(--color-on-error-container)] font-bold uppercase tracking-widest rounded-full flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">science</span>
              BETA
            </span>
            {publishedAt && (
              <span className="text-xs font-bold text-[var(--color-on-surface-variant)] flex items-center gap-1 ml-4 py-1.5 px-3 bg-[var(--color-surface-container-high)] rounded-full border border-[var(--color-outline-variant)]/30">
                <span className="material-symbols-outlined text-[14px]">calendar_today</span>
                Desarrollo: {new Date(publishedAt).toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}
              </span>
            )}
          </div>
          <h1 className="text-4xl font-extrabold text-[var(--color-primary)] mb-4">{toolName}</h1>
          <p className="text-[var(--color-on-surface-variant)] text-lg max-w-2xl font-[family-name:var(--font-body)]">
            {description}
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Input Area (Left Column) */}
          <div className="lg:col-span-5 bg-[var(--color-surface-container-lowest)] p-8 rounded-3xl shadow-sm border border-[var(--color-outline-variant)]/30 h-fit">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-[var(--color-secondary)]">input</span>
              Inputs Clínicos
            </h3>
            
            <div className="space-y-6">
              {children}
            </div>

            <button 
              onClick={simulateInference}
              disabled={isInferring}
              className={`w-full mt-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                isInferring 
                  ? 'bg-[var(--color-surface-container)] text-[var(--color-outline)] cursor-wait'
                  : 'bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-container)] text-white hover:shadow-xl hover:scale-[1.01]'
              }`}
            >
              {isInferring ? (
                <>
                  <span className="material-symbols-outlined animate-spin">refresh</span>
                  Procesando...
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined">play_circle</span>
                  Ejecutar Modelo
                </>
              )}
            </button>
          </div>

          {/* Result Area (Right Column) */}
          <div className="lg:col-span-7 bg-[var(--color-surface-container-lowest)] rounded-3xl shadow-sm min-h-[400px] border border-[var(--color-outline-variant)]/30 relative overflow-hidden flex flex-col">
            {/* Header del resultado */}
            <div className="bg-[var(--color-surface-container-low)] px-8 py-6 border-b border-[var(--color-outline-variant)]/20 flex justify-between items-center">
              <h3 className="text-lg font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-[var(--color-primary)]">terminal</span>
                Output de Inferencia
              </h3>
              {result && (
                <span className="text-xs font-bold text-[var(--color-primary)] bg-[var(--color-primary)]/10 px-3 py-1 rounded-full animate-fade-in">
                  Completado en {(mockInferenceDelayMs / 1000).toFixed(1)}s
                </span>
              )}
            </div>

            {/* Contenido / Estado de carga */}
            <div className="flex-grow p-8 bg-[var(--color-surface)]/50 relative">
              {isInferring ? (
                // Skeleton Loader The Clinical Aether style
                <div className="animate-pulse space-y-8 w-full">
                  <div className="h-6 bg-[var(--color-surface-container-highest)]/60 rounded-md w-1/3"></div>
                  <div className="space-y-3">
                    <div className="h-4 bg-[var(--color-surface-container-high)]/50 rounded-md w-full"></div>
                    <div className="h-4 bg-[var(--color-surface-container-high)]/50 rounded-md w-5/6"></div>
                    <div className="h-4 bg-[var(--color-surface-container-high)]/50 rounded-md w-4/6"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-24 bg-[var(--color-secondary)]/5 rounded-2xl w-full"></div>
                    <div className="h-24 bg-[var(--color-tertiary)]/5 rounded-2xl w-full"></div>
                  </div>
                </div>
              ) : result ? (
                <div className="animate-fade-in h-full flex flex-col">
                  {renderResult(result)}
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-[var(--color-on-surface-variant)]/50 space-y-4 pt-12">
                  <span className="material-symbols-outlined text-6xl opacity-30">science</span>
                  <p className="text-sm">Configura los parámetros y ejecuta el modelo para visualizar la inferencia.</p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
