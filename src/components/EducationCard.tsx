'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Content } from '@/types/database';

export default function EducationCard({ content }: { content: Content }) {
  const safeImageUrl = content.image_url || 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop';

  return (
    <article className="group bg-[var(--color-tertiary)]/[0.04] rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl border border-[var(--color-outline-variant)]/20 transition-all duration-300 flex flex-col h-full hover:-translate-y-1">
      {/* Hero Image */}
      <div className="relative h-48 w-full overflow-hidden bg-[var(--color-surface-container)]">
        <Image
          src={safeImageUrl}
          alt={content.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface-container-lowest)] to-transparent opacity-80" />
        
        {/* Logo Flotando */}
        <div className="absolute bottom-3 left-4">
          <div className="w-12 h-12 bg-white shadow-lg rounded-xl flex flex-shrink-0 items-center justify-center">
            <span className="material-symbols-outlined text-[var(--color-tertiary)] text-2xl">
              {content.logo_icon || 'school'}
            </span>
          </div>
        </div>
      </div>

      <div className="p-6 flex-grow flex flex-col">
        {/* Subtipo */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
          <span className="px-3 py-1 bg-[var(--color-tertiary)]/10 text-[var(--color-tertiary)] text-[10px] font-bold uppercase tracking-widest rounded-full border border-[var(--color-tertiary)]/20">
            {content.education_subtype || 'Módulo Educativo'}
          </span>
          <span className="text-[10px] text-[var(--color-outline)] font-bold uppercase tracking-tighter">
            Lanzamiento: {new Date(content.published_at).toLocaleDateString('es-ES', { month: 'short', year: 'numeric' })}
          </span>
        </div>

        {/* Título & Desc */}
        <h3 className="text-xl font-bold text-[var(--color-primary)] font-[family-name:var(--font-headline)] leading-tight mb-3 line-clamp-2">
          {content.title}
        </h3>
        
        <p className="text-[var(--color-on-surface-variant)] text-sm leading-relaxed mb-6 line-clamp-3 font-[family-name:var(--font-body)]">
          {content.excerpt}
        </p>

        <div className="mt-auto space-y-4">
          
          {/* Área y Fechas */}
          <div className="space-y-3 text-sm border-l-2 border-[var(--color-tertiary)]/20 pl-4 py-1">
            {content.education_area && content.education_area.length > 0 && (
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-[var(--color-tertiary)]">
                  <span className="material-symbols-outlined text-[18px]">category</span>
                  <span className="font-bold text-[var(--color-primary)] uppercase tracking-wider text-[11px]">Área:</span>
                </div>
                <span className="text-[var(--color-on-surface)] font-medium leading-tight">
                  {content.education_area.join(', ')}
                </span>
              </div>
            )}
            
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-[var(--color-tertiary)]">
                <span className="material-symbols-outlined text-[18px]">event</span>
                <span className="font-bold text-[var(--color-primary)] uppercase tracking-wider text-[11px]">Fechas de inicio y finalización:</span>
              </div>
              <span className="text-[var(--color-on-surface-variant)] font-medium">
                {content.start_date ? new Date(content.start_date).toLocaleDateString('es-ES', { day: '2-digit', month: 'long', year: 'numeric' }) : 'Por definir'}
                {' — '}
                {content.end_date ? new Date(content.end_date).toLocaleDateString('es-ES', { day: '2-digit', month: 'long', year: 'numeric' }) : 'Por definir'}
              </span>
            </div>
          </div>

          {/* Hashtags */}
          {content.tags && content.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2 border-t border-[var(--color-outline-variant)]/20">
              {content.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="text-xs font-medium text-[var(--color-outline)] bg-[var(--color-surface-container-high)] px-2 py-1 rounded">
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Link: "Ver el Programa" */}
          <Link
            href={content.solution_url && content.solution_url.startsWith('http') ? content.solution_url : `/p/${content.slug}`}
            target={content.solution_url && content.solution_url.startsWith('http') ? '_blank' : '_self'}
            className="w-full mt-2 py-3 bg-[var(--color-tertiary)] text-[var(--color-on-primary)] rounded-xl font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
          >
            Ver el Programa
            <span className="material-symbols-outlined text-[18px]">school</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
