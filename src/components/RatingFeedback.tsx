'use client';

export default function RatingFeedback({
  publicationId: _publicationId,
  category: _category,
  onRatingSuccess: _onRatingSuccess,
}: {
  publicationId: string;
  category: string;
  onRatingSuccess?: (metrics: unknown) => void;
}) {
  return (
    <div className="bg-[var(--color-surface-container-lowest)] p-8 rounded-[40px] border border-[var(--color-outline-variant)]/20 mt-12 shadow-sm">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
        <div className="max-w-md">
          <h3 className="text-2xl font-extrabold text-[var(--color-primary)] mb-2 tracking-tight">Tu opinión es vital</h3>
          <p className="text-[var(--color-on-surface-variant)] text-sm leading-relaxed">
            ¿Qué tan pertinente e innovador resulta este contenido para tu práctica o formación clínica?
          </p>
        </div>
        <div className="p-5 bg-[var(--color-primary)]/5 rounded-2xl border border-[var(--color-primary)]/10 text-[var(--color-on-surface-variant)] text-sm italic max-w-xs text-center">
          La valoración interactiva estará disponible en la versión completa de la plataforma.
        </div>
      </div>
    </div>
  );
}
