'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ResearchCard from '@/components/ResearchCard';
import { getRankedContent } from '@/lib/mockData';
import Link from 'next/link';

export default function TodasLasInvestigacionesPage() {
  const allResearch = getRankedContent('research').filter(item => item.image_url);

  return (
    <>
      <Navbar />
      <main className="flex-grow pt-32 pb-24 bg-[var(--color-surface)] min-h-screen">
        <div className="max-w-7xl mx-auto px-8 lg:px-24">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
            <div className="space-y-4">
              <Link href="/investigacion" className="text-[var(--color-secondary)] font-bold flex items-center gap-2 hover:underline">
                <span className="material-symbols-outlined text-sm">arrow_back</span>
                Volver a Investigación
              </Link>
              <h1 className="text-4xl font-extrabold text-[var(--color-primary)] tracking-tight">Todas las Investigaciones</h1>
              <p className="text-[var(--color-on-surface-variant)] text-sm max-w-xl">
                Explora el repositorio completo de proyectos científicos, macroproyectos y trabajos de investigación desarrollados en ProfundaMente.
              </p>
            </div>
          </div>

          {/* Grilla de Investigaciones */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allResearch.map((item) => (
              <ResearchCard key={item.id} content={item} />
            ))}

            {allResearch.length === 0 && (
              <div className="col-span-full text-center py-20 text-[var(--color-on-surface-variant)]">
                No hay investigaciones publicadas actualmente.
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
