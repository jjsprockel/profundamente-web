'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InteractiveToolContainer from '@/components/InteractiveToolContainer';
import RatingFeedback from '@/components/RatingFeedback';
import { useState } from 'react';

export default function PrediccionToolPage() {
  const [params, setParams] = useState({
    age: 72,
    heartRate: 115,
    sysBP: 85,
    respRate: 28,
    temp: 38.5,
    o2sat: 91,
    lactate: 4.2,
  });

  const mockResult = {
    riskScore: 87, // %
    riskLevel: 'CRÍTICO',
    predictedEvent: 'Shock Séptico / Falla Multiorgánica',
    timeHorizon: '< 12 horas',
    keyDrivers: [
      { factor: 'Lactato Sérico', val: '4.2 mmol/L', impact: '+35%' },
      { factor: 'Presión Arterial Sistólica', val: '85 mmHg', impact: '+25%' },
      { factor: 'Frecuencia Respiratoria', val: '28 rpm', impact: '+15%' },
    ],
  };

  return (
    <>
      <Navbar />
      <main className="flex-grow pt-32 pb-24 bg-[var(--color-surface)] min-h-screen">
        <div className="max-w-7xl mx-auto px-8 lg:px-24">
          <InteractiveToolContainer
            toolName="Predicción de Riesgo Intrahospitalario"
            toolType="ML"
            publishedAt="2024-05-15T00:00:00Z"
            description="Modelo predictivo (Random Forest Ensemble) entrenado con datos MIMIC-IV para identificar deterioro inminente en pacientes de cuidados intermedios/intensivos basándose en signos vitales y marcadores de laboratorio."
            mockInferenceDelayMs={1500}
            mockResultData={mockResult}
            renderResult={(data) => (
              <>
                <div className="space-y-8 flex-grow">
                  
                  {/* Gauge/Score Display */}
                  <div className="flex flex-col items-center justify-center py-6 bg-white rounded-2xl border border-[var(--color-outline-variant)]/30 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1">
                      <div className="h-full bg-gradient-to-r from-[var(--color-tertiary)] via-yellow-400 to-[var(--color-error)]" style={{ width: `${data.riskScore}%` }}></div>
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--color-on-surface-variant)] mb-2">SCORE DE RIESGO DE DETERIORO</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-7xl font-extrabold text-[var(--color-error)]">{data.riskScore}</span>
                      <span className="text-xl font-bold text-[var(--color-error)]/50">%</span>
                    </div>
                    <span className="mt-2 px-4 py-1 bg-[var(--color-error)] text-white text-xs font-bold uppercase rounded-full tracking-widest shadow-lg shadow-[var(--color-error)]/30 animate-pulse">
                      {data.riskLevel}: {data.predictedEvent} en {data.timeHorizon}
                    </span>
                  </div>

                  {/* Factores Clave */}
                  <div>
                    <h4 className="text-sm font-bold text-[var(--color-on-surface-variant)] uppercase tracking-widest mb-4">Drivers Principales del Riesgo (SHAP Values)</h4>
                    <div className="space-y-3">
                      {data.keyDrivers.map((driver: any, i: number) => (
                        <div key={i} className="flex items-center gap-4">
                          <div className="w-16 text-right text-xs font-bold text-[var(--color-error)]">{driver.impact}</div>
                          <div className="flex-grow h-2 bg-[var(--color-surface-container-high)] rounded-full overflow-hidden">
                            <div className="h-full bg-[var(--color-error)] opacity-80" style={{ width: driver.impact.replace('+','') }}></div>
                          </div>
                          <div className="w-1/3 text-xs font-medium text-[var(--color-on-surface)] flex justify-between">
                            <span>{driver.factor}</span>
                            <span className="text-[var(--color-on-surface-variant)] font-mono">{driver.val}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <RatingFeedback publicationId="2" category="solution" />
              </>
            )}
          >
            {/* INPUTS para ML Predictivo */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Edad', key: 'age', unit: 'años' },
                { label: 'Frecuencia Cardíaca', key: 'heartRate', unit: 'lpm' },
                { label: 'PAS', key: 'sysBP', unit: 'mmHg' },
                { label: 'Frecuencia Respiratoria', key: 'respRate', unit: 'rpm' },
                { label: 'Temperatura', key: 'temp', unit: '°C' },
                { label: 'Saturación O2', key: 'o2sat', unit: '%' },
                { label: 'Lactato Sérico', key: 'lactate', unit: 'mmol/L' },
              ].map((field) => (
                <div key={field.key} className="space-y-1">
                  <label className="text-xs font-bold text-[var(--color-on-surface-variant)]">{field.label}</label>
                  <div className="relative">
                    <input 
                      type="number" 
                      value={(params as any)[field.key]}
                      onChange={(e) => setParams({...params, [field.key]: Number(e.target.value)})}
                      className="w-full bg-white border border-[var(--color-outline-variant)] rounded-lg p-2.5 text-sm text-[var(--color-on-surface)] focus:ring-2 focus:ring-[var(--color-primary)] font-mono shadow-inner"
                    />
                    <span className="absolute right-3 top-2.5 text-xs text-[var(--color-outline)]">{field.unit}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-[var(--color-secondary)]/10 p-4 rounded-xl text-xs text-[var(--color-on-surface-variant)] mt-4">
              <span className="font-bold text-[var(--color-secondary)]">Nota Técnica:</span> El modelo imputa automáticamente los valores de laboratorio faltantes utilizando K-Nearest Neighbors basado en la historia del paciente si no se proveen.
            </div>
          </InteractiveToolContainer>
        </div>
      </main>
      <Footer />
    </>
  );
}
