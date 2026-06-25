'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { mockContent } from '@/lib/mockData';
import SolutionCard from '@/components/SolutionCard';
import NewsCard from '@/components/NewsCard';
import EducationCard from '@/components/EducationCard';
import ResearchCard from '@/components/ResearchCard';
import { Content } from '@/types/database';

const categories = [
  { id: 'all', label: 'Todos' },
  { id: 'solution', label: 'Soluciones' },
  { id: 'research', label: 'Investigaciones' },
  { id: 'education', label: 'Educación' },
  { id: 'news', label: 'Noticias' },
];

export default function ExplorarPage() {
  const [filter, setFilter] = useState('all');

  const allContents = mockContent.filter(item => item.is_active) as Content[];
  const filteredContents = filter === 'all'
    ? allContents
    : allContents.filter(c => c.category === filter);

  return (
    <>
      <Navbar />
      <main className="flex-grow pt-32 pb-24 bg-[var(--color-surface)] min-h-screen">
        <div className="max-w-7xl mx-auto px-8 lg:px-24">

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
            <div className="space-y-4">
              <span className="text-[var(--color-secondary)] font-bold tracking-[0.2em] uppercase text-xs">Repositorio Unificado</span>
              <h1 className="text-4xl font-extrabold text-[var(--color-primary)] tracking-tight">Explorar Conocimiento</h1>
              <p className="text-[var(--color-on-surface-variant)] text-sm max-w-xl">
                Navega a través de nuestras soluciones, investigaciones médicas, y recursos educativos organizados inteligentemente bajo nuestro algoritmo dinámico de relevancia.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setFilter(c.id)}
                className={`px-5 py-2.5 text-sm font-bold rounded-full transition-all ${filter === c.id
                    ? 'bg-[var(--color-primary)] text-white shadow-lg'
                    : 'bg-[var(--color-surface-container-lowest)] text-[var(--color-on-surface)] hover:bg-[var(--color-surface-container-high)] border border-[var(--color-outline-variant)]/30'
                  }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredContents.map((item) => {
              if (item.category === 'news') return <NewsCard key={item.id} content={item} />;
              if (item.category === 'education') return <EducationCard key={item.id} content={item} />;
              if (item.category === 'research') return <ResearchCard key={item.id} content={item} />;
              return <SolutionCard key={item.id} content={item} />;
            })}

            {filteredContents.length === 0 && (
              <div className="col-span-full text-center py-20 text-[var(--color-on-surface-variant)]">
                No hay contenidos en esta categoría.
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
