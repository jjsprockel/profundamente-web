'use client';

import { useState } from 'react';
import SolutionCard from '@/components/SolutionCard';
import { getRankedContent } from '@/lib/mockData';

export default function SolucionesSubseccionClient({ subseccionFilter }: { subseccionFilter: string }) {
  const [sortBy, setSortBy] = useState<'ranking' | 'date' | 'views'>('ranking');
  const solutions = getRankedContent('solution', subseccionFilter, sortBy);

  return (
    <section className="max-w-7xl mx-auto px-8 lg:px-24">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-[var(--color-outline-variant)]/20 pb-4">
        <div>
          <h2 className="text-2xl font-bold text-[var(--color-on-surface)]">Directorio de Modelos</h2>
          <p className="text-[var(--color-on-surface-variant)] text-sm mt-1">{solutions.length} soluciones experimentales encontradas.</p>
        </div>

        <div className="flex bg-[var(--color-surface-container-high)] p-1 rounded-xl mt-4 md:mt-0 shadow-inner overflow-hidden">
          <button
            onClick={() => setSortBy('ranking')}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors ${sortBy === 'ranking' ? 'bg-white text-[var(--color-primary)] shadow-sm' : 'text-[var(--color-on-surface-variant)] hover:text-[var(--color-on-surface)]'}`}
          >
            Pertinencia
          </button>
          <button
            onClick={() => setSortBy('date')}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors ${sortBy === 'date' ? 'bg-white text-[var(--color-primary)] shadow-sm' : 'text-[var(--color-on-surface-variant)] hover:text-[var(--color-on-surface)]'}`}
          >
            Más Recientes
          </button>
          <button
            onClick={() => setSortBy('views')}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors ${sortBy === 'views' ? 'bg-white text-[var(--color-primary)] shadow-sm' : 'text-[var(--color-on-surface-variant)] hover:text-[var(--color-on-surface)]'}`}
          >
            Más Accesos
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {solutions.map((tool) => (
          <SolutionCard key={tool.id} content={tool} />
        ))}
      </div>

      {solutions.length === 0 && (
        <div className="text-center py-20 text-[var(--color-on-surface-variant)]">
          No se encontraron soluciones públicas en estado interactivo para esta arquitectura aún.
        </div>
      )}
    </section>
  );
}
