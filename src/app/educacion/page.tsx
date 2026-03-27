import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EducationCard from '@/components/EducationCard';
import { PublicationService } from '@/lib/services/publicationService';

export default async function EducacionPage() {
  const educationItems = (await PublicationService.getAllPublications()).filter(p => p.category === 'education');

  return (
    <>
      <Navbar />
      <main className="flex-grow bg-[var(--color-surface)] min-h-screen">
        <header className="bg-[var(--color-surface-container-lowest)] border-b border-[var(--color-tertiary)]/20 pt-32 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-tertiary)]/5 to-transparent z-0"></div>
          <div className="max-w-7xl mx-auto px-8 lg:px-12 text-center relative z-10">
            <span className="inline-block px-3 py-1 bg-[var(--color-tertiary)]/10 text-[var(--color-tertiary)] text-xs font-bold uppercase tracking-widest rounded-full mb-6">
              Academia ProfundaMente
            </span>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-[#161c27] dark:text-[#f9f9ff] mb-6 font-[family-name:var(--font-headline)] tracking-tight">
              Oferta Educativa
            </h1>
            <p className="text-xl text-[var(--color-on-surface-variant)] max-w-2xl mx-auto font-light leading-relaxed">
              Programas diseñados para empoderar al talento clínico en la adopción, desarrollo y análisis crítico de tecnologías de Inteligencia Artificial en salud.
            </p>
          </div>
        </header>

        <section className="py-16 max-w-7xl mx-auto px-8 lg:px-12">
          {educationItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {educationItems.map((edu) => (
                <div key={edu.id} className="h-full">
                  <EducationCard content={edu} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-[var(--color-on-surface-variant)] py-12">
              No hay programas educativos disponibles en este momento.
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
