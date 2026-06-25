'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InteractiveToolContainer from '@/components/InteractiveToolContainer';
import { useState } from 'react';

export default function SintesisToolPage() {
  const [clinicalNote, setClinicalNote] = useState(
    'Paciente masculino de 65 años ingresa a urgencias con cuadro de 4h de evolución consistente en dolor torácico opresivo, irradiado a miembro superior izquierdo, asociado a diaforesis y disnea. Antecedentes de HTA severa y DM2 mal controlada. PA 160/90, FC 110 lpm. ECG muestra supradesnivel del ST en V2-V5.'
  );

  const mockResult = {
    summary: 'Infarto Agudo de Miocardio con Elevación del ST (IAMCEST) Anteroseptal.',
    extractedEntities: [
      { type: 'Síntoma', value: 'Dolor torácico opresivo', criticality: 'high' },
      { type: 'Radiación', value: 'Brazo izquierdo', criticality: 'medium' },
      { type: 'Signo Clínico', value: 'Diaforesis, Disnea', criticality: 'high' },
      { type: 'Antecedentes', value: 'HTA severa, DM2', criticality: 'high' },
      { type: 'Hallazgo ECG', value: 'Supradesnivel ST V2-V5', criticality: 'critical' },
    ],
    recommendedActions: [
      'Activar Código Infarto.',
      'Aspirina 300mg VO masticada.',
      'Contacto inmediato con Hemodinamia para ICP primaria.',
    ]
  };

  return (
    <>
      <Navbar />
      <main className="flex-grow pt-32 pb-24 bg-[var(--color-surface)] min-h-screen">
        <div className="max-w-7xl mx-auto px-8 lg:px-24">
          <InteractiveToolContainer
            toolName="Síntesis Clínica Inteligente"
            toolType="LLM"
            publishedAt="2024-12-10T00:00:00Z"
            description="Modelo de Procesamiento de Lenguaje Natural para extraer entidades clínicas de riesgo y estructurar el plan de manejo a partir de notas de evolución."
            mockInferenceDelayMs={2500}
            mockResultData={mockResult}
            renderResult={(data) => (
              <>
                <div className="space-y-6 flex-grow">
                  <div>
                    <h4 className="text-sm font-bold text-[var(--color-on-surface-variant)] uppercase tracking-widest mb-2">Impresión Diagnóstica Sintetizada</h4>
                    <p className="text-lg font-bold text-[var(--color-error)] bg-[var(--color-error-container)]/30 p-4 rounded-xl border border-[var(--color-error)]/20">
                      {data.summary}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-[var(--color-on-surface-variant)] uppercase tracking-widest mb-2">Entidades Extraídas</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {data.extractedEntities.map((ent: any, i: number) => (
                        <div key={i} className="bg-white p-3 rounded-lg border border-[var(--color-outline-variant)]/30 flex justify-between items-center shadow-sm">
                          <span className="text-xs font-bold text-[var(--color-primary)]">{ent.type}</span>
                          <span className="text-sm text-[var(--color-on-surface)] text-right font-medium">{ent.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-[var(--color-on-surface-variant)] uppercase tracking-widest mb-2">Sugerencias de Manejo Guía Clínica</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-[var(--color-on-surface)] font-[family-name:var(--font-body)]">
                      {data.recommendedActions.map((action: string, i: number) => (
                        <li key={i}>{action}</li>
                      ))}
                    </ul>
                  </div>
                </div>

              </>
            )}
          >
            {/* INPUTS para LLM */}
            <div className="space-y-4">
              <label className="block text-sm font-bold text-[var(--color-on-surface-variant)]">Nota Clínica en Lenguaje Natural</label>
              <textarea 
                value={clinicalNote}
                onChange={(e) => setClinicalNote(e.target.value)}
                rows={8}
                className="w-full bg-white border border-[var(--color-outline-variant)] rounded-xl p-4 text-sm text-[var(--color-on-surface)] focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all shadow-inner"
                placeholder="Pegue la nota de triage o evolución aquí..."
              />
              <p className="text-xs text-[var(--color-outline)] italic">
                Asegúrese de omitir o anonimizar cualquier Información de Salud Protegida (PHI) como nombres o documentos antes de enviar al modelo.
              </p>
            </div>
          </InteractiveToolContainer>
        </div>
      </main>
      <Footer />
    </>
  );
}
