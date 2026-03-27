import Image from 'next/image';
import Link from 'next/link';
import StarRating from './StarRating';
import { Content } from '@/types/database';

interface SolutionCardProps {
  content: Content;
}

export default function SolutionCard({ content }: SolutionCardProps) {
  // Determinamos los colores del badge y logotipo dependiendo de la subsección principal
  let mainColorClass = 'text-[var(--color-primary)]';
  let badgeClass = 'bg-[var(--color-primary)]/10 text-[var(--color-primary)]';
  
  const mainSub = content.subsections && content.subsections.length > 0 ? content.subsections[0] : '';
  
  if (mainSub.includes('Machine')) {
    mainColorClass = 'text-[var(--color-secondary)]';
    badgeClass = 'bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]';
  } else if (mainSub.includes('LLM') || mainSub.includes('NLP')) {
    mainColorClass = 'text-[var(--color-tertiary)]';
    badgeClass = 'bg-[var(--color-tertiary)]/10 text-[var(--color-tertiary)]';
  } else if (mainSub.includes('Agentes')) {
    mainColorClass = 'text-[var(--color-outline)]';
    badgeClass = 'bg-[var(--color-outline)]/10 text-[var(--color-outline)]';
  }

  const getStatusColor = (status?: string) => {
    switch(status) {
      case 'Experimental': return 'text-amber-600 bg-amber-500/10 border-amber-500/20';
      case 'Validado': return 'text-blue-600 bg-blue-500/10 border-blue-500/20';
      case 'Implementado': return 'text-emerald-600 bg-emerald-500/10 border-emerald-500/20';
      default: return 'text-gray-600 bg-gray-500/10 border-gray-500/20';
    }
  }

  return (
    <article className="group bg-[var(--color-primary)]/[0.04] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-[var(--color-surface-container-highest)]/50 flex flex-col h-full">
      
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
          <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-[var(--color-secondary)]/10 to-[var(--color-primary)]/20" />
        )}
      </div>

      <div className="p-8 flex flex-col flex-grow">
        
        {/* 2 & 3. Logo en línea con Calificación */}
        <div className="flex justify-between items-center mb-4">
          <div className={`w-10 h-10 rounded-xl bg-[var(--color-surface-container)] flex items-center justify-center ${mainColorClass} shadow-sm border border-[var(--color-surface-container-highest)]`}>
            <span className="material-symbols-outlined">{content.logo_icon || 'science'}</span>
          </div>
          <StarRating rating={content.weighted_rating ?? content.average_rating} count={content.rating_count} />
        </div>

        {/* 4. Subsección */}
        <div className="flex flex-wrap gap-2 mb-3">
          {content.subsections?.map(sub => (
            <span key={sub} className={`px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-widest rounded-md ${badgeClass}`}>
              {sub}
            </span>
          ))}
        </div>

        {/* 5. Título */}
        <h3 className="text-xl font-bold text-[var(--color-on-surface)] mb-2 leading-tight group-hover:text-[var(--color-primary)] transition-colors">
          {content.title}
        </h3>
        
        {/* 6. Descripción */}
        <p className="text-[var(--color-on-surface-variant)] text-sm mb-6 flex-grow line-clamp-3">
          {content.excerpt}
        </p>

        {/* 7 & 8. Tipo y Estado */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-6 border-t border-[var(--color-outline-variant)]/20 pt-4">
          <div>
            <span className="text-[10px] text-[var(--color-outline)] uppercase font-bold tracking-wider block mb-1">Tipo</span>
            <span className="text-sm font-medium text-[var(--color-on-surface)]">{content.tool_type || 'Herramienta'}</span>
          </div>
          <div>
            <span className="text-[10px] text-[var(--color-outline)] uppercase font-bold tracking-wider block mb-1">Estado</span>
            <span className={`inline-block px-2 py-0.5 text-[10px] font-bold rounded-md border ${getStatusColor(content.status)}`}>
              {content.status || 'Experimental'}
            </span>
          </div>
          <div>
            <span className="text-[10px] text-[var(--color-outline)] uppercase font-bold tracking-wider block mb-1">Desarrollo</span>
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
          href={content.solution_url || `/p/${content.slug}`} 
          className={`mt-auto inline-flex justify-center items-center gap-2 py-3 px-4 w-full text-sm font-bold rounded-xl transition-all ${
            content.status === 'Experimental' 
            ? 'bg-[var(--color-surface-container-high)] text-[var(--color-on-surface)] hover:bg-[var(--color-primary)] hover:text-white'
            : 'bg-[var(--color-primary)] text-white hover:bg-[var(--color-secondary)] shadow-md hover:shadow-lg'
          }`}
        >
          Usar Herramienta
          <span className="material-symbols-outlined text-[16px]">open_in_new</span>
        </Link>
      </div>
    </article>
  );
}
