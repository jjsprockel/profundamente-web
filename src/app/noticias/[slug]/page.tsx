import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { mockContent } from '@/lib/mockData';

export function generateStaticParams() {
  return mockContent
    .filter(c => c.category === 'news')
    .map(c => ({ slug: c.slug }));
}

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const news = mockContent.find(c => c.slug === slug && c.category === 'news');

  if (!news) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Noticia no encontrada</h1>
        <Link href="/noticias" className="text-[var(--color-primary)] underline">Volver a noticias</Link>
      </div>
    );
  }

  const formattedDate = new Intl.DateTimeFormat('es-CO', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(new Date(news.published_at));

  return (
    <>
      <Navbar />
      <main className="flex-grow bg-[var(--color-surface)] min-h-screen pt-32 pb-24">
        <article className="max-w-4xl mx-auto px-6 lg:px-8">

          <div className="mb-8">
            <div className="flex items-center gap-3 bg-[var(--color-primary)]/5 px-4 py-2 rounded-full border border-[var(--color-primary)]/10 inline-flex">
              <span className="material-symbols-outlined text-[var(--color-primary)] text-sm">calendar_today</span>
              <span className="text-xs font-bold text-[var(--color-primary)] uppercase tracking-tighter italic">
                {slug === 'constitucion-singularidad' ? 'Bogotá D.C., 16 de junio de 2025' : formattedDate}
              </span>
            </div>
          </div>

          <h1 className="text-4xl lg:text-5xl font-extrabold text-[var(--color-primary)] mb-8 font-[family-name:var(--font-headline)] leading-tight tracking-tight">
            {news.title}
          </h1>

          {news.image_url && (
            <div className="relative w-full aspect-video mb-12 rounded-[40px] overflow-hidden shadow-2xl border-8 border-[var(--color-surface-container-lowest)]">
              <Image
                src={news.image_url}
                alt={news.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          <div className="prose prose-lg max-w-none text-[var(--color-on-surface-variant)] leading-relaxed space-y-6">
            <div className="whitespace-pre-wrap">{news.body_content || ''}</div>
          </div>

          <footer className="mt-16 pt-8 border-t border-[var(--color-outline-variant)]/30 flex flex-wrap justify-between items-center gap-6">
            <div className="flex flex-wrap gap-2">
              {(news.tags || []).map(tag => (
                <span key={tag} className="text-xs font-bold text-[var(--color-outline)] bg-[var(--color-surface-container-lowest)] px-3 py-1 rounded-lg border border-[var(--color-outline-variant)]/30">
                  #{tag}
                </span>
              ))}
            </div>
            <Link href="/noticias" className="text-sm font-bold text-[var(--color-primary)] flex items-center gap-2 hover:underline">
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              Volver a noticias
            </Link>
          </footer>

        </article>
      </main>
      <Footer />
    </>
  );
}
