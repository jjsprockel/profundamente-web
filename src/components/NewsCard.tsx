'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Content } from '@/types/database';
import StarRating from './StarRating';

export default function NewsCard({ content }: { content: Content }) {
  // Use a fallback image if none exists
  const safeImageUrl = content.image_url || 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&auto=format&fit=crop';

  return (
    <article className="group bg-[var(--color-primary)]/[0.02] rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl border border-[var(--color-outline-variant)]/20 transition-all duration-300 flex flex-col h-full hover:-translate-y-1">
      {/* Hero Image */}
      <div className="relative h-48 w-full overflow-hidden bg-[var(--color-surface-container)]">
        <Image
          src={safeImageUrl}
          alt={content.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface-container-lowest)] to-transparent opacity-80" />
        
        {/* Calificación y Logo Flotando */}
        <div className="absolute bottom-3 left-4 right-4 flex justify-between items-end">
          <div className="w-12 h-12 bg-[var(--color-surface)] shadow-lg rounded-xl flex flex-shrink-0 items-center justify-center">
            <span className="material-symbols-outlined text-[var(--color-primary)] text-2xl">
              {content.logo_icon || 'article'}
            </span>
          </div>
          {content.rating_count > 0 && (
            <div className="bg-[var(--color-surface)]/90 backdrop-blur-md px-3 py-1 rounded-full shadow-sm">
              <StarRating rating={content.weighted_rating ?? content.average_rating} count={content.rating_count} />
            </div>
          )}
        </div>
      </div>

      <div className="p-6 flex-grow flex flex-col">
        {/* Fecha de publicación */}
        <div className="flex items-center gap-2 text-[var(--color-outline)] text-xs mb-3 font-medium">
          <span className="material-symbols-outlined text-[14px]">calendar_today</span>
          <span>{new Date(content.published_at).toLocaleDateString('es-ES', { day: '2-digit', month: 'long', year: 'numeric' })}</span>
        </div>

        {/* Título & Desc */}
        <h3 className="text-xl font-bold text-[var(--color-primary)] font-[family-name:var(--font-headline)] leading-tight mb-3 line-clamp-2">
          {content.title}
        </h3>
        
        <p className="text-[var(--color-on-surface-variant)] text-sm leading-relaxed mb-6 line-clamp-3 font-[family-name:var(--font-body)]">
          {content.excerpt}
        </p>

        <div className="mt-auto space-y-4">
          {/* Link a redes si aplica */}
          {content.social_links && content.social_links.length > 0 && (
            <div className="flex gap-2">
              {content.social_links.map((link, idx) => (
                <a 
                  key={idx} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--color-surface-container-high)] text-[var(--color-on-surface-variant)] hover:bg-[var(--color-primary)] hover:text-white transition-colors"
                  aria-label={`Enlace a ${link.platform}`}
                >
                  <span className="material-symbols-outlined text-[16px]">
                    {link.icon || 'link'}
                  </span>
                </a>
              ))}
            </div>
          )}

          {/* Hashtags */}
          {content.tags && content.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {content.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="text-xs font-medium text-[var(--color-secondary)] bg-[var(--color-secondary)]/10 px-2 py-1 rounded">
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Link: "Ver Noticia" */}
          <Link
            href={`/p/${content.slug}`}
            className="w-full mt-2 py-3 bg-transparent border-2 border-[var(--color-primary)] text-[var(--color-primary)] rounded-xl font-bold hover:bg-[var(--color-primary)] hover:text-white transition-colors flex items-center justify-center gap-2"
          >
            Ver Noticia
            <span className="material-symbols-outlined text-[18px]">read_more</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
