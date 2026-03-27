import Image from 'next/image';
import Link from 'next/link';
import StarRating from './StarRating';

export default function ExploreBento() {
  return (
    <section className="py-24 bg-[var(--color-surface-container-low)] px-8 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          <Link href="/explorar" className="text-4xl font-extrabold text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors">Explorar contenido</Link>
          <div className="flex flex-wrap gap-2">
            <Link href="/explorar" className="px-4 py-2 bg-[var(--color-primary)] text-white text-sm font-bold rounded-full hover:bg-[var(--color-secondary)] transition-colors">Todos</Link>
            <Link href="/soluciones" className="px-4 py-2 bg-[var(--color-surface)] hover:bg-[var(--color-surface-container-high)] transition-colors text-sm font-bold rounded-full text-[var(--color-on-surface)]">Soluciones</Link>
            <Link href="/investigacion" className="px-4 py-2 bg-[var(--color-surface)] hover:bg-[var(--color-surface-container-high)] transition-colors text-sm font-bold rounded-full text-[var(--color-on-surface)]">Investigaciones</Link>
            <Link href="/educacion" className="px-4 py-2 bg-[var(--color-surface)] hover:bg-[var(--color-surface-container-high)] transition-colors text-sm font-bold rounded-full text-[var(--color-on-surface)]">Educación</Link>
            <Link href="/noticias" className="px-4 py-2 bg-[var(--color-surface)] hover:bg-[var(--color-surface-container-high)] transition-colors text-sm font-bold rounded-full text-[var(--color-on-surface)]">Noticias</Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Featured Item */}
          <div className="md:col-span-2 md:row-span-2 bg-[var(--color-surface-container-lowest)] rounded-3xl overflow-hidden shadow-sm group relative">
            <Image
              src="https://lh3.googleusercontent.com/aida/ADBb0uiH8WM6MyjJjvntJCyHPkQNKfYp467Zc4lnkG9muCOU9sfLgWB9HcjXPnE1Jv1wD-J8SlbLOt9gZdKnfIk0pJkHAH0BEwQkoucZiZf2H-KlQo_KYu_uSwCWV-szC0X9J5fQldKhPA0TcxpK66wmGO4zV3qM8ayyjdsNAEfpt9JfnL0tH01ZI8pqnnijT2jO8kxu79o83QuLucoeayl9FqeT1O2HLPl5OBFEQQQwJdql1KoPSKe9kaozpaLhPaBD1BJlRS2Kz3EL3w"
              alt="Microscopic view of cells in a lab setting"
              width={600}
              height={300}
              className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="p-8">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-bold text-[var(--color-secondary)] uppercase tracking-widest">Investigación Destacada</span>
                <StarRating rating={4.7} count={45} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[var(--color-on-surface)]">Proyecto GLORIA</h3>
              <p className="text-[var(--color-on-surface-variant)] text-sm mb-6">La primera red de telepatología digital de Latinoamérica potenciada con inteligencia artificial.</p>
              <Link href="/p/proyecto-gloria" className="text-[var(--color-primary)] font-bold inline-flex items-center gap-2 hover:text-[var(--color-secondary)] transition-colors">
                Leer artículo completo <span className="material-symbols-outlined text-sm">open_in_new</span>
              </Link>
            </div>
          </div>

          {/* Education Block */}
          <Link href="/p/protocolos-eticos" className="bg-[var(--color-primary)] text-white p-8 rounded-3xl flex flex-col justify-between shadow-sm hover:opacity-90 transition-opacity">
            <span className="material-symbols-outlined text-4xl mb-4">menu_book</span>
            <div>
              <h4 className="text-lg font-bold mb-2">Protocolos Éticos</h4>
              <p className="text-xs text-white/70">Guía práctica para el uso de IA en entornos clínicos.</p>
            </div>
          </Link>

          {/* Masterclass Block */}
          <Link href="/educacion" className="bg-[var(--color-secondary)] p-8 rounded-3xl flex flex-col justify-between text-white shadow-sm hover:opacity-90 transition-opacity">
            <span className="material-symbols-outlined text-4xl mb-4">school</span>
            <div>
              <h4 className="text-lg font-bold mb-2">Masterclass IA</h4>
              <p className="text-xs text-white/70">Formación avanzada para profesionales de la salud.</p>
            </div>
          </Link>

          {/* Newsletter Block */}
          <div className="md:col-span-2 bg-[var(--color-tertiary)] text-white p-8 rounded-3xl relative overflow-hidden flex items-center gap-8 shadow-sm">
            <div className="relative z-10 space-y-4 w-full">
              <h4 className="text-2xl font-bold">Boletín Científico</h4>
              <p className="text-sm text-white/80 max-w-xs">Suscríbete para recibir los últimos avances en IA aplicada a la medicina.</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/50"
                />
                <button className="bg-white text-[var(--color-tertiary)] px-4 py-2 rounded-lg font-bold text-sm hover:bg-gray-100 transition-colors">OK</button>
              </div>
            </div>
            <span className="material-symbols-outlined text-[120px] absolute -right-4 -bottom-4 opacity-10">mail</span>
          </div>
        </div>
      </div>
    </section>
  );
}
