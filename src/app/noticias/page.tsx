'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NewsCard from '@/components/NewsCard';
import { getRankedContent } from '@/lib/mockData';

export default function NoticiasPage() {
  const newsItems = getRankedContent('news', undefined, 'date');

  return (
    <>
      <Navbar />
      <main className="flex-grow bg-[var(--color-surface)] min-h-screen">
        <header className="bg-[var(--color-surface-container-lowest)] border-b border-[var(--color-outline-variant)]/20 pt-32 pb-16">
          <div className="max-w-7xl mx-auto px-8 lg:px-12 text-center">
            <span className="inline-block px-3 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold uppercase tracking-widest rounded-full mb-6">
              Actualidad ProfundaMente
            </span>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-[#161c27] dark:text-[#f9f9ff] mb-6 font-[family-name:var(--font-headline)] tracking-tight">
              Noticias y Novedades
            </h1>
            <p className="text-xl text-[var(--color-on-surface-variant)] max-w-2xl mx-auto font-light leading-relaxed">
              Mantente al tanto de nuestros últimos logros, actualizaciones de modelos y eventos en la intersección de la IA y la medicina.
            </p>
          </div>
        </header>

        <section className="py-16 max-w-7xl mx-auto px-8 lg:px-12">
          {newsItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsItems.map((news) => (
                <div key={news.id} className="h-full">
                  <NewsCard content={news} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-[var(--color-on-surface-variant)] py-12">
              No hay noticias disponibles en este momento.
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
