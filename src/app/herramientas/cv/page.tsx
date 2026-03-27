'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InteractiveToolContainer from '@/components/InteractiveToolContainer';
import RatingFeedback from '@/components/RatingFeedback';
import { useState } from 'react';

export default function ComputerVisionToolPage() {
  const [fileSelected, setFileSelected] = useState(false);

  const mockResult = {
    findings: [
      { region: 'Lóbulo Superior Derecho', label: 'Opacidad Consolidativa', confidence: 94.2 },
      { region: 'Ángulo Costofrénico Izquierdo', label: 'Derrame Pleural Leve', confidence: 81.5 },
      { region: 'Silueta Cardíaca', label: 'Dentro de límites normales', confidence: 99.1 },
    ],
    heatmapUrl: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800', // Mock XRay 
    diagnosis: 'Alta probabilidad de Neumonía Lobar atípica.',
  };

  return (
    <>
      <Navbar />
      <main className="flex-grow pt-32 pb-24 bg-[var(--color-surface)] min-h-screen">
        <div className="max-w-7xl mx-auto px-8 lg:px-24">
          <InteractiveToolContainer
            toolName="Diagnóstico por Imagen Automatizado"
            toolType="CV"
            publishedAt="2025-11-20T00:00:00Z"
            description="Red Neuronal Convolucional (ResNet-50 modificada) para el cribado automatizado de hallazgos anormales en radiografías de tórax AP/PA."
            mockInferenceDelayMs={3500}
            mockResultData={mockResult}
            renderResult={(data) => (
              <>
                <div className="space-y-6 flex-grow">
                  
                  {/* Visión del Modelo (Heatmap Simulada) */}
                  <div className="relative rounded-2xl overflow-hidden bg-black aspect-square max-h-[300px] w-full border border-[var(--color-outline-variant)]/30 mx-auto group">
                    <img 
                      src={data.heatmapUrl} 
                      alt="X-Ray Heatmap Simulation" 
                      className="w-full h-full object-cover opacity-80 mix-blend-screen grayscale group-hover:grayscale-0 transition-all duration-1000"
                    />
                    {/* Simulated Heatmap overlays */}
                    <div className="absolute top-[20%] right-[30%] w-24 h-24 bg-[var(--color-error)] rounded-full blur-[40px] opacity-60 mix-blend-screen animate-pulse"></div>
                    <div className="absolute bottom-[10%] left-[20%] w-16 h-16 bg-[var(--color-secondary)] rounded-full blur-[20px] opacity-40 mix-blend-screen"></div>
                    
                    <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 text-white text-[10px] font-mono tracking-wider">
                      Grad-CAM Activation Map Acquired
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-[var(--color-on-surface-variant)] uppercase tracking-widest mb-3">Detecciones (Nivel de Confianza)</h4>
                    <div className="space-y-3">
                      {data.findings.map((finding: any, i: number) => (
                        <div key={i} className="bg-white p-3 rounded-xl border border-[var(--color-outline-variant)]/30 shadow-sm flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-lg flex items-center justify-center font-bold text-xs ${
                            finding.confidence > 90 
                              ? 'bg-[var(--color-error)]/10 text-[var(--color-error)]' 
                              : finding.confidence > 80 
                                ? 'bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]'
                                : 'bg-[var(--color-tertiary)]/10 text-[var(--color-tertiary)]'
                          }`}>
                            {finding.confidence.toFixed(1)}%
                          </div>
                          <div>
                            <p className="text-sm font-bold text-[var(--color-on-surface)]">{finding.label}</p>
                            <p className="text-xs text-[var(--color-on-surface-variant)]">{finding.region}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-[var(--color-surface-container-high)] p-4 rounded-xl text-sm font-bold text-[var(--color-on-surface)] text-center shadow-inner">
                    <span className="material-symbols-outlined align-middle mr-2 text-[var(--color-primary)]">medical_information</span>
                    {data.diagnosis}
                  </div>
                </div>

                <RatingFeedback publicationId="3" category="solution" />
              </>
            )}
          >
            {/* INPUTS para Computer Vision */}
            <div className="space-y-4">
              <label className="block text-sm font-bold text-[var(--color-on-surface-variant)]">Carga de Imagen Médica (DICOM, PNG, JPG)</label>
              
              <div 
                className={`border-2 border-dashed rounded-2xl p-8 flex flex-col items-center justify-center gap-4 transition-all cursor-pointer ${
                  fileSelected 
                    ? 'border-[var(--color-primary)] bg-[var(--color-primary)]/5' 
                    : 'border-[var(--color-outline-variant)] bg-[var(--color-surface)] hover:bg-[var(--color-surface-container-high)] hover:border-[var(--color-primary)]/50'
                }`}
                onClick={() => setFileSelected(!fileSelected)}
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center ${fileSelected ? 'bg-[var(--color-primary)] text-white shadow-lg shadow-[var(--color-primary)]/30' : 'bg-white text-[var(--color-outline)] shadow-sm'}`}>
                  <span className="material-symbols-outlined text-3xl">
                    {fileSelected ? 'check' : 'cloud_upload'}
                  </span>
                </div>
                <div className="text-center">
                  <p className="text-sm font-bold text-[var(--color-on-surface)]">
                    {fileSelected ? 'radiografia_torax_anonimizada.png' : 'Click para subir Rx de Tórax'}
                  </p>
                  <p className="text-xs text-[var(--color-on-surface-variant)] mt-1">
                    {fileSelected ? '2.4 MB - Listo para inferencia' : 'Máx 50MB. Sólo datos anonimizados.'}
                  </p>
                </div>
              </div>
            </div>
          </InteractiveToolContainer>
        </div>
      </main>
      <Footer />
    </>
  );
}
