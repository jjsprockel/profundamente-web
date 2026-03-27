import prisma from '@/lib/prisma';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RatingFeedback from '@/components/RatingFeedback';
import StarRating from '@/components/StarRating';
import { mockContent } from '@/lib/mockData';
import Link from 'next/link';
import SolutionDisclaimerWrapper from '@/components/SolutionDisclaimerWrapper';

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Intentar obtener de la base de datos primero
  const pub = await prisma.publication.findUnique({
    where: { slug },
    include: {
      solutionSummary: true,
      researchSummary: true,
      educationSummary: true,
      newsSummary: true,
    }
  });

  // Fallback a mockContent para datos que aún no están en la DB (o campos de texto largo)
  const mockInfo = mockContent.find((c) => c.slug === slug);

  if (!pub && !mockInfo) {
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

  // Combinar datos: Prisma para métricas/fechas, mock para el cuerpo largo si no está en la DB
  const category = pub?.category || mockInfo?.category || 'news';
  const publishedAt = pub?.publishedAt || new Date(mockInfo?.published_at || Date.now());
  const title = pub?.title || mockInfo?.title || '';
  const excerpt = mockInfo?.excerpt || '';
  const bodyContent = mockInfo?.body_content || '';
  
  // Obtener rating desde el resumen de la DB (weighted_rating es la métrica consolidada)
  let displayRating = 0;
  let totalRatings = 0;
  if (pub) {
    const summary = pub.solutionSummary || pub.researchSummary || pub.educationSummary || pub.newsSummary;
    if (summary) {
      displayRating = summary.weightedRating > 0 ? summary.weightedRating : summary.avgRating;
      totalRatings = summary.totalRatings;
    }
  } else if (mockInfo) {
    displayRating = mockInfo.weighted_rating ?? mockInfo.average_rating;
    totalRatings = mockInfo.rating_count;
  }

  const isFeatureTool = mockInfo?.solution_url !== null;

  return (
    <SolutionDisclaimerWrapper category={category} subsections={mockInfo?.subsections}>
      <Navbar />
      <main className="flex-grow bg-[var(--color-surface)] min-h-screen">
        
        {/* Hero de Artículo */}
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

        {/* Cuerpo del Artículo */}
        <div className="max-w-3xl mx-auto px-8 lg:px-0 py-16">
          
          <div className="prose prose-lg prose-slate max-w-none text-[var(--color-on-surface)] font-[family-name:var(--font-body)] leading-loose whitespace-pre-wrap">
            {bodyContent}
          </div>

          {/* Si es una herramienta clínica, muestra un botón gigantesco para usarla */}
          {isFeatureTool && mockInfo?.solution_url && (
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

          {/* Sección de Calificación */}
          <div className="mt-16 pt-8 border-t border-[var(--color-outline-variant)]/30">
            <h3 className="text-2xl font-bold text-[var(--color-on-surface)] mb-2">Tu opinión es vital</h3>
            <p className="text-[var(--color-on-surface-variant)]">
              Califica qué tan pertinente e innovador resulta este {category === 'solution' ? 'módulo de IA' : 'artículo'} para tu práctica clínica.
            </p>
            {/* Si tenemos el ID de la base de datos, habilitamos la valoración real */}
            <div className="-mt-4">
              {pub ? (
                <RatingFeedback 
                  publicationId={pub.id} 
                  category={category} 
                />
              ) : (
                <div className="p-6 bg-amber-50 rounded-2xl border border-amber-200 text-amber-700 text-sm italic">
                  La valoración para este contenido legacy se habilitará tras la sincronización completa.
                </div>
              )}
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </SolutionDisclaimerWrapper>
  );
}
