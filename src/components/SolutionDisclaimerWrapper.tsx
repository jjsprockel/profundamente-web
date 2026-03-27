'use client';

import { useState, useEffect } from 'react';
import BetaDisclaimer from './BetaDisclaimer';

interface SolutionDisclaimerWrapperProps {
  children: React.ReactNode;
  category: string;
  subsections?: string[];
}

export default function SolutionDisclaimerWrapper({ 
  children, 
  category, 
  subsections = [] 
}: SolutionDisclaimerWrapperProps) {
  const [isAccepted, setIsAccepted] = useState(false);
  
  // Lista de subtipos críticos que requieren disclaimer obligatorio
  const criticalSubtypes = ['LLM/NLP', 'Deep Learning', 'Machine Learning', 'Agentes', 'Visión por computador'];
  
  const requiresDisclaimer = 
    category === 'solution' && 
    (subsections.some(s => criticalSubtypes.includes(s)) || subsections.length === 0);

  if (!requiresDisclaimer || isAccepted) {
    return <>{children}</>;
  }

  return (
    <>
      <BetaDisclaimer onAccept={() => setIsAccepted(true)} />
      <div className="opacity-20 blur-xl pointer-events-none transition-all duration-1000">
        {children}
      </div>
    </>
  );
}
