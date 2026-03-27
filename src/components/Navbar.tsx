import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#f9f9ff]/80 backdrop-blur-lg dark:bg-[#161c27]/80 shadow-none flex justify-between items-center px-8 py-4 max-w-full">
      <Link href="/" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
        <div className="w-10 h-10 bg-[var(--color-primary)] rounded-xl flex items-center justify-center overflow-hidden">
          {/* We use an external proxy image as in the original HTML, or a local one if available */}
          <img
            className="w-6 h-6 invert"
            alt="ProfundaMente clinical brain logo icon"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDj-s425OZGC_6X3qZMmdLEhBp1bKon8jm5HuX2NBmPRXvM8apNY3wzapiO95Aw19DZNs-DU33IK5kh_4Bt2AUifSzjw5MtvPFIUNK2wbb_MahPv4YfCP1ls-b_XO6xzDYtiZdh6xE0hiF1KnY--FMg7BwIP8b1SdXbdmr0DGhm009vYAGA7eklLADjo8_HQRRwfG30xVA60zuGS-VVwxWfsW8yVT012VFWk7qNKpa9Q47cOo8tRd5Zb8QY0zB8U7PBl-rG156SneU"
          />
        </div>
        <span className="text-xl font-extrabold tracking-tighter text-[#00426a] dark:text-[#f9f9ff] font-[family-name:var(--font-headline)]">
          ProfundaMente
        </span>
      </Link>
      <div className="hidden md:flex items-center gap-8 font-[family-name:var(--font-headline)] font-medium tracking-tight">
        <Link className="text-[#161c27]/70 dark:text-[#f9f9ff]/70 hover:text-[#00426a] dark:hover:text-white transition-colors" href="/explorar">Explorar</Link>
        <Link className="text-[#161c27]/70 dark:text-[#f9f9ff]/70 hover:text-[#00426a] dark:hover:text-white transition-colors" href="/soluciones">Soluciones</Link>
        <Link className="text-[#161c27]/70 dark:text-[#f9f9ff]/70 hover:text-[#00426a] dark:hover:text-white transition-colors" href="/investigacion">Investigación</Link>
        <Link className="text-[#161c27]/70 dark:text-[#f9f9ff]/70 hover:text-[#00426a] dark:hover:text-white transition-colors" href="/noticias">Noticias</Link>
        <Link className="text-[#161c27]/70 dark:text-[#f9f9ff]/70 hover:text-[#00426a] dark:hover:text-white transition-colors" href="/nosotros">Nosotros</Link>
        <Link className="text-[#161c27]/70 dark:text-[#f9f9ff]/70 hover:text-[#00426a] dark:hover:text-white transition-colors" href="/contacto">Contacto</Link>
      </div>
      <div className="flex items-center gap-4">
        <Link href="/contacto" className="hidden lg:flex items-center gap-2 px-5 py-2.5 bg-[var(--color-primary)] text-white rounded-xl font-semibold text-sm transition-all hover:shadow-lg hover:bg-[var(--color-secondary)]">
          Investigar
        </Link>
        <span className="material-symbols-outlined text-[var(--color-primary)] cursor-pointer hover:bg-black/5 p-2 rounded-full">
          language
        </span>
      </div>
    </nav>
  );
}
