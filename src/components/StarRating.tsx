import React from 'react';

export default function StarRating({ rating, count }: { rating: number, count?: number }) {
  const roundedRating = Math.round(rating * 2) / 2; // Rondas de a 0.5

  return (
    <div className="flex items-center gap-2">
      <div className="flex text-amber-400 text-sm">
        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star} className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: `'FILL' ${star <= roundedRating ? 1 : 0}` }}>
            {star - roundedRating === 0.5 ? 'star_half' : 'star'}
          </span>
        ))}
      </div>
      <span className="text-xs font-bold text-[var(--color-on-surface-variant)]">
        {rating.toFixed(1)}
      </span>
      {count !== undefined && (
        <span className="text-xs text-[var(--color-outline)]">
          ({count})
        </span>
      )}
    </div>
  );
}
