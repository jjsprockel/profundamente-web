import Image from 'next/image';
import Link from 'next/link';

export default function SingularidadSection() {
  return (
    <section className="py-24 px-8 lg:px-24 bg-[#001d33] text-white rounded-[3rem] mx-4 lg:mx-12 overflow-hidden relative mt-12 mb-24">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[var(--color-primary-container)]/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-8">
          <span className="text-[var(--color-tertiary-fixed)] font-bold tracking-widest text-xs uppercase">Ecosistema de Formación</span>
          <h2 className="text-5xl font-extrabold tracking-tight">Semillero Singularidad</h2>
          <p className="text-lg text-[var(--color-primary-fixed)]/80 leading-relaxed font-[family-name:var(--font-body)]">
            Un espacio dedicado a la investigación formativa donde estudiantes y profesionales convergen para hackear el futuro de la medicina. Fomentamos la innovación desde la base.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/p/singularidad" className="px-8 py-3 bg-[var(--color-tertiary-fixed)] text-[var(--color-on-tertiary-fixed)] rounded-xl font-bold transition-transform hover:scale-105">
              Conocer más
            </Link>
            <Link href="/contacto" className="px-8 py-3 border border-white/20 rounded-xl font-bold hover:bg-white/5 transition-colors">
              Participar
            </Link>
          </div>
        </div>
        
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-tr from-[var(--color-secondary)]/40 to-[var(--color-primary)]/40 rounded-[2rem] blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
          <Image 
            src="https://lh3.googleusercontent.com/aida/ADBb0uh-sHAAyN10xAPNuktNEEeO5c4e1zumer2XTLaMBn6VGvKd7XMbiame3e8nFNcoWLBGOJtkFe2mPbSKqU8vox4EM3ZKheATKqXdMPGj-3ZN7heW7yAC5e5j77U19PTATHIV17kfKdwZ6YJyLjccRfwGeiqbCr0QXT0KI3gIrEjkOMcHu6nV1tLDbP7AqPmORoNEAmvACu04B7n4OjrtGdvurC0Gv8ucTnrfh26urxqoTYcmRzd7i4D0_bCle6YKlTGKmz3G5_Bw3g" 
            alt="Singularidad cosmic eclipse branding image for the research ecosystem" 
            width={700}
            height={400}
            className="rounded-[2rem] w-full aspect-video object-cover shadow-2xl relative z-10 border border-white/10"
          />
        </div>
      </div>
    </section>
  );
}
