import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StarRating from '@/components/StarRating';
import { mockContent } from '@/lib/mockData';
import Link from 'next/link';
import SolutionDisclaimerWrapper from '@/components/SolutionDisclaimerWrapper';

export function generateStaticParams() {
  return mockContent.map(c => ({ slug: c.slug }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const mockInfo = mockContent.find((c) => c.slug === slug);

  if (!mockInfo) {
    return (
      <>
        <Navbar />
        <main className="flex-grow pt-40 pb-24 text-center text-[var(--color-on-surface-variant)] min-h-screen">
          <h1 className="text-2xl font-bold mb-4">Artículo no encontrado</h1>
          <Link href="/explorar" className="text-[var(--color-primary)] hover:underline">
            Volver a Explorar
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  const category = mockInfo.category || 'news';
  const publishedAt = new Date(mockInfo.published_at || Date.now());
  const title = mockInfo.title || '';
  const excerpt = mockInfo.excerpt || '';
  const bodyContent = mockInfo.body_content || '';
  const displayRating = mockInfo.weighted_rating ?? mockInfo.average_rating ?? 0;
  const totalRatings = mockInfo.rating_count ?? 0;
  const isFeatureTool = mockInfo.solution_url !== null && mockInfo.solution_url !== undefined;

  return (
    <SolutionDisclaimerWrapper category={category} subsections={mockInfo.subsections}>
      <Navbar />
      <main className="flex-grow bg-[var(--color-surface)] min-h-screen">

        <header className="bg-[var(--color-surface-container-lowest)] border-b border-[var(--color-outline-variant)]/20 pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-8 lg:px-0">
            <Link href="/explorar" className="inline-flex items-center gap-2 text-sm text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] mb-8 transition-colors">
              <span className="material-symbols-outlined text-[16px]">arrow_back</span>
              Volver al repositorio
            </Link>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-[var(--color-surface-container-high)] text-[var(--color-on-surface)] text-xs font-bold uppercase tracking-widest rounded-full">
                {category}
              </span>
              <span className="text-sm font-medium text-[var(--color-on-surface-variant)] flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px] opacity-60">calendar_today</span>
                {category === 'news' ? 'Publicado: ' :
                 category === 'solution' ? 'Desarrollado: ' :
                 category === 'research' ? 'Publicado: ' : 'Programa Lanzado: '}
                {new Date(publishedAt).toLocaleDateString('es-ES', { day: '2-digit', month: 'long', year: 'numeric' })}
              </span>
              <div className="flex items-center gap-2 ml-auto">
                <span className="text-sm font-bold text-[var(--color-on-surface-variant)]">Rating Global:</span>
                <StarRating rating={displayRating} count={totalRatings} />
              </div>
            </div>

            <h1 className="text-4xl lg:text-5xl font-extrabold text-[var(--color-primary)] mb-6 leading-tight">
              {title}
            </h1>

            <p className="text-xl text-[var(--color-on-surface-variant)] font-light leading-relaxed">
              {excerpt}
            </p>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-8 lg:px-0 py-16">

          <div className="prose prose-lg prose-slate max-w-none text-[var(--color-on-surface)] font-[family-name:var(--font-body)] leading-loose whitespace-pre-wrap">
            {bodyContent}
          </div>

          {isFeatureTool && mockInfo.solution_url && (
            <div className="mt-16 bg-gradient-to-br from-[var(--color-primary-container)] to-[var(--color-secondary)]/20 p-8 rounded-3xl border border-[var(--color-primary)]/20 text-center shadow-lg">
              <h3 className="text-2xl font-bold text-[var(--color-on-primary-container)] mb-4">Módulo Interactivo Disponible</h3>
              <p className="text-[var(--color-on-primary-container)]/80 mb-8 max-w-xl mx-auto">
                La herramienta mencionada en este artículo médico tiene un sandbox interactivo (beta) abierto para evaluación.
              </p>
              <Link
                href={mockInfo.solution_url}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-primary)] text-white font-bold rounded-xl hover:bg-[var(--color-secondary)] hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                Abrir Herramienta Simulada
                <span className="material-symbols-outlined">monitor_heart</span>
              </Link>
            </div>
          )}

          <div className="mt-16 pt-8 border-t border-[var(--color-outline-variant)]/30">
            <h3 className="text-2xl font-bold text-[var(--color-on-surface)] mb-2">Tu opinión es vital</h3>
            <p className="text-[var(--color-on-surface-variant)] mb-6">
              Califica qué tan pertinente e innovador resulta este {category === 'solution' ? 'módulo de IA' : 'artículo'} para tu práctica clínica.
            </p>
            <div className="p-6 bg-[var(--color-primary)]/5 rounded-2xl border border-[var(--color-primary)]/10 text-[var(--color-on-surface-variant)] text-sm">
              La valoración interactiva estará disponible en la versión completa de la plataforma.
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </SolutionDisclaimerWrapper>
  );
}
