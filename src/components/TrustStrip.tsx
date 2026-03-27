import Image from 'next/image';

export default function TrustStrip() {
  return (
    <section className="py-12 bg-[var(--color-surface-container-low)]">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all">
        <p className="text-sm font-bold uppercase tracking-widest text-[var(--color-on-surface-variant)]">Somos Parte de:</p>
        <div className="flex items-center gap-16">
          <Image 
            src="/images/Logo FUCS.png" 
            alt="FUCS University institutional logo" 
            width={120}
            height={48}
            className="h-12 w-auto object-contain"
          />
          <Image 
            src="/images/Logo Sociedad de Cirugía de Bogota.jpg" 
            alt="Sociedad de Cirugía de Bogotá institutional logo" 
            width={120}
            height={48}
            className="h-12 w-auto object-contain mixes-blend-multiply" 
          />
        </div>
      </div>
    </section>
  );
}
