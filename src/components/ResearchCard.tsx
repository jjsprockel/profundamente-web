import Image from 'next/image';
import Link from 'next/link';
import { Content } from '@/types/database';

interface ResearchCardProps {
  content: Content;
}

export default function ResearchCard({ content }: ResearchCardProps) {
  // Determinamos los colores según categoría research principal
  const mainColorClass = 'text-[var(--color-secondary)]';
  const badgeClass = 'bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]';
  
  const getStatusColor = (status?: string) => {
    switch(status) {
      case 'En elaboración': return 'text-gray-600 bg-gray-500/10 border-gray-500/20';
      case 'En Desarrollo': return 'text-amber-600 bg-amber-500/10 border-amber-500/20';
      case 'Consolidación de resultados': return 'text-blue-600 bg-blue-500/10 border-blue-500/20';
      case 'Terminado': return 'text-emerald-600 bg-emerald-500/10 border-emerald-500/20';
      default: return 'text-gray-600 bg-gray-500/10 border-gray-500/20';
    }
  }

  const fundingText = content.funding_type || 'No';

  return (
    <article className="group bg-[var(--color-secondary)]/[0.04] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-[var(--color-surface-container-highest)]/50 flex flex-col h-full">
      
      {/* 1. Imagen Hero */}
      <div className="relative w-full h-48 bg-[var(--color-surface-container-low)] overflow-hidden">
        {content.image_url ? (
          <Image 
            src={content.image_url} 
            alt={content.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        ) : (
          <div className="absolute inset-0 opacity-20 bg-[var(--color-secondary)]/10" />
        )}
      </div>

      <div className="p-8 flex flex-col flex-grow">
        
        {/* Logo */}
        <div className="mb-4">
          <div className={`w-10 h-10 rounded-xl bg-[var(--color-surface-container)] flex items-center justify-center ${mainColorClass} shadow-sm border border-[var(--color-surface-container-highest)]`}>
            <span className="material-symbols-outlined">{content.logo_icon || 'science'}</span>
          </div>
        </div>

        {/* 4. Subsección */}
        <div className="flex flex-wrap gap-2 mb-3">
          {content.subsections && content.subsections.length > 0 ? content.subsections.map(sub => (
            <span key={sub} className={`px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-widest rounded-md ${badgeClass}`}>
              {sub}
            </span>
          )) : (
            <span className={`px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-widest rounded-md ${badgeClass}`}>
              Investigación
            </span>
          )}
        </div>

        {/* 5. Título */}
        <h3 className="text-xl font-bold text-[var(--color-on-surface)] mb-2 leading-tight group-hover:text-[var(--color-secondary)] transition-colors">
          {content.title}
        </h3>
        
        {/* 6. Descripción */}
        <p className="text-[var(--color-on-surface-variant)] text-sm mb-6 flex-grow line-clamp-3">
          {content.excerpt}
        </p>

        {/* 7 & 8. Financiación y Estado */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 mb-6 border-t border-[var(--color-outline-variant)]/20 pt-4">
          <div>
            <span className="text-[10px] text-[var(--color-outline)] uppercase font-bold tracking-wider block mb-1">Financiación</span>
            <span className="text-sm font-medium text-[var(--color-on-surface)]">{fundingText}</span>
          </div>
          <div>
            <span className="text-[10px] text-[var(--color-outline)] uppercase font-bold tracking-wider block mb-1">Estado</span>
            <span className={`inline-block px-2 py-0.5 text-[9px] font-bold rounded-md border text-center ${getStatusColor(content.research_status)}`}>
              {content.research_status || 'En elaboración'}
            </span>
          </div>
          <div>
            <span className="text-[10px] text-[var(--color-outline)] uppercase font-bold tracking-wider block mb-1">Publicación</span>
            <span className="text-[11px] font-medium text-[var(--color-on-surface-variant)]">
              {new Date(content.published_at).toLocaleDateString('es-ES', { month: 'short', year: 'numeric' })}
            </span>
          </div>
        </div>
        
        {/* 9. Hashtags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {content.tags.map(tag => (
            <span key={tag} className="text-[11px] text-[var(--color-outline)] bg-[var(--color-surface)] px-2 py-1 rounded-md border border-[var(--color-outline-variant)]/30">
              #{tag}
            </span>
          ))}
        </div>

        {/* 10. Link */}
        <Link 
          href={`/p/${content.slug}`} 
          className="mt-auto inline-flex justify-center items-center gap-2 py-3 px-4 w-full text-sm font-bold rounded-xl transition-all text-[#161c27] bg-[var(--color-surface-container-high)] hover:bg-[var(--color-secondary)] hover:text-white border border-[var(--color-outline-variant)]/30"
        >
          Ampliar Información
          <span className="material-symbols-outlined text-[16px]">open_in_new</span>
        </Link>
      </div>
    </article>
  );
}
