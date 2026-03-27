'use client';

import { useState } from 'react';

interface RatingMetrics {
  avgRating: number;
  totalRatings: number;
  weightedRating: number;
  dynamicScore: number;
}

export default function RatingFeedback({
  publicationId,
  category,
  onRatingSuccess
}: {
  publicationId: string;
  category: string;
  onRatingSuccess?: (newMetrics: RatingMetrics) => void;
}) {
  const [rating, setRating] = useState<number | null>(null);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [updatedMetrics, setUpdatedMetrics] = useState<RatingMetrics | null>(null);

  const handleSubmit = async () => {
    if (rating === null) return;

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/rate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ publicationId, category, rating }),
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || 'Error al enviar valoración');
      }

      const result = await response.json();
      setUpdatedMetrics(result.data);
      setIsSubmitted(true);
      if (onRatingSuccess) onRatingSuccess(result.data);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Error al enviar valoración');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted && updatedMetrics) {
    return (
      <div className="bg-[var(--color-surface-container-low)] p-8 rounded-3xl border border-[var(--color-primary)]/10 mt-8 animate-fade-in">
        <div className="flex flex-col lg:flex-row items-start gap-6">
          <span className="material-symbols-outlined text-4xl text-[var(--color-primary)] flex-shrink-0 fill-1">verified</span>
          <div className="flex-grow">
            <p className="font-extrabold text-xl text-[var(--color-primary)]">¡Valoración Registrada!</p>
            <p className="text-[var(--color-on-surface-variant)] text-sm mt-1 mb-6">
              Tu feedback es fundamental para el refinamiento continuo de nuestros modelos clínicos y algoritmos de IA.
            </p>

            {/* Métricas actualizadas */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-[var(--color-surface-container-lowest)] rounded-2xl p-4 text-center border border-[var(--color-outline-variant)]/20">
                <p className="text-[10px] text-[var(--color-outline)] uppercase font-bold tracking-wider mb-1">Tu Voto</p>
                <div className="flex justify-center gap-0.5 mb-1">
                  {[1,2,3,4,5].map(s => (
                    <span key={s} className={`material-symbols-outlined text-[14px] ${s <= (rating ?? 0) ? 'text-amber-400' : 'text-[var(--color-outline-variant)]'}`}
                      style={{ fontVariationSettings: `'FILL' ${s <= (rating ?? 0) ? 1 : 0}` }}>star</span>
                  ))}
                </div>
                <p className="text-xl font-extrabold text-[var(--color-primary)]">{rating}/5</p>
              </div>

              <div className="bg-[var(--color-surface-container-lowest)] rounded-2xl p-4 text-center border border-[var(--color-outline-variant)]/20">
                <p className="text-[10px] text-[var(--color-outline)] uppercase font-bold tracking-wider mb-1">Promedio</p>
                <div className="flex justify-center gap-0.5 mb-1">
                  {[1,2,3,4,5].map(s => (
                    <span key={s} className={`material-symbols-outlined text-[14px] ${s <= Math.round(updatedMetrics.avgRating) ? 'text-amber-400' : 'text-[var(--color-outline-variant)]'}`}
                      style={{ fontVariationSettings: `'FILL' ${s <= Math.round(updatedMetrics.avgRating) ? 1 : 0}` }}>star</span>
                  ))}
                </div>
                <p className="text-xl font-extrabold text-[var(--color-primary)]">{updatedMetrics.avgRating.toFixed(1)}</p>
              </div>

              <div className="bg-[var(--color-surface-container-lowest)] rounded-2xl p-4 text-center border border-[var(--color-outline-variant)]/20">
                <p className="text-[10px] text-[var(--color-outline)] uppercase font-bold tracking-wider mb-1">Valoraciones</p>
                <span className="material-symbols-outlined text-[var(--color-secondary)] text-2xl">group</span>
                <p className="text-xl font-extrabold text-[var(--color-primary)]">{updatedMetrics.totalRatings.toLocaleString('es-ES')}</p>
              </div>

              <div className="bg-[var(--color-surface-container-lowest)] rounded-2xl p-4 text-center border border-[var(--color-outline-variant)]/20">
                <p className="text-[10px] text-[var(--color-outline)] uppercase font-bold tracking-wider mb-1">Score</p>
                <span className="material-symbols-outlined text-[var(--color-tertiary)] text-2xl">trending_up</span>
                <p className="text-xl font-extrabold text-[var(--color-primary)]">{(updatedMetrics.dynamicScore * 100).toFixed(1)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[var(--color-surface-container-lowest)] p-8 rounded-[40px] border border-[var(--color-outline-variant)]/20 mt-12 shadow-sm">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
        <div className="max-w-md">
          <h3 className="text-2xl font-extrabold text-[var(--color-primary)] mb-2 tracking-tight">Tu opinión es vital</h3>
          <p className="text-[var(--color-on-surface-variant)] text-sm leading-relaxed">
            ¿Qué tan pertinente e innovador resulta este contenido para tu práctica o formación clínica? Tu calificación nos ayuda a priorizar líneas de investigación.
          </p>
        </div>

        <div className="flex flex-col items-center lg:items-end gap-6">
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                type="button"
                disabled={isSubmitting}
                onMouseEnter={() => setHoverRating(value)}
                onMouseLeave={() => setHoverRating(null)}
                onClick={() => setRating(value)}
                className="relative p-1 transition-transform hover:scale-110 active:scale-95"
              >
                <span
                  className={`material-symbols-outlined text-4xl transition-all duration-300 ${
                    (hoverRating !== null ? value <= hoverRating : rating !== null && value <= rating)
                    ? 'text-amber-400 opacity-100 scale-110'
                    : 'text-[var(--color-outline-variant)] opacity-40'
                  }`}
                  style={{
                    fontVariationSettings: `'FILL' ${(hoverRating !== null ? value <= hoverRating : rating !== null && value <= rating) ? 1 : 0}`
                  }}
                >
                  star
                </span>
              </button>
            ))}
          </div>

          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}

          <button
            onClick={handleSubmit}
            disabled={rating === null || isSubmitting}
            className={`px-8 py-3 rounded-xl font-bold transition-all flex items-center gap-2 ${
              rating === null
                ? 'bg-[var(--color-surface-container-high)] text-[var(--color-outline)] cursor-not-allowed'
                : 'bg-[var(--color-primary)] text-white hover:bg-[var(--color-secondary)] shadow-lg hover:shadow-xl hover:-translate-y-0.5'
            }`}
          >
            {isSubmitting ? (
              <>
                <span className="material-symbols-outlined animate-spin text-lg">sync</span>
                Enviando...
              </>
            ) : (
              <>
                Enviar Valoración
                <span className="material-symbols-outlined text-[18px]">send</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
