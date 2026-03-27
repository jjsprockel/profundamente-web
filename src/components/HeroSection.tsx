import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-8 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-[var(--color-primary)] leading-[1.1] tracking-tight">
            Transformamos la práctica en salud mediante <span className="text-[var(--color-secondary)]">inteligencia artificial</span> basada en evidencia
          </h1>
          <p className="text-lg text-[var(--color-on-surface-variant)] font-[family-name:var(--font-body)] max-w-xl">
            Desarrollamos y validamos soluciones de IA adaptadas al contexto clínico colombiano, uniendo la precisión técnica con la calidez humana.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/soluciones" className="px-8 py-4 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-container)] text-white rounded-xl font-bold transition-all hover:scale-[1.02] shadow-xl shadow-[var(--color-primary)]/10">
              Explorar soluciones
            </Link>
            <Link href="/explorar" className="px-8 py-4 bg-[var(--color-surface-container-high)] text-[var(--color-on-primary-fixed-variant)] rounded-xl font-bold transition-all hover:bg-[var(--color-surface-bright)]">
              Probar herramientas
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-[var(--color-secondary)]/5 rounded-full blur-3xl"></div>
          <div className="relative bg-[var(--color-surface-container-lowest)] rounded-3xl p-4 shadow-2xl overflow-hidden">
            <Image 
              src="/images/Visual principal.png" 
              alt="Advanced medical AI predictive analysis dashboard" 
              width={800} 
              height={500} 
              className="rounded-2xl w-full h-[500px] object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
