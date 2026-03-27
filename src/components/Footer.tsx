'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  const hideCta = pathname === '/contacto';

  return (
    <>
      {/* FINAL CTA — oculto en /contacto para evitar redundancia */}
      {!hideCta && (
        <section className="py-32 px-8 text-center bg-[var(--color-surface)]">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-extrabold text-[var(--color-primary)]">Explora, prueba y colabora en el desarrollo de IA aplicada a la salud</h2>
            <p className="text-[var(--color-on-surface-variant)] text-lg">Únete a la vanguardia de la tecnología médica en Colombia. Estamos construyendo el mañana, hoy.</p>
            <div className="flex justify-center flex-wrap gap-4">
              <Link href="/contacto" className="px-10 py-4 bg-[var(--color-primary)] text-white rounded-xl font-bold shadow-lg shadow-[var(--color-primary)]/30 hover:bg-[var(--color-secondary)] transition-all">
                Conectar
              </Link>
              <Link href="/explorar" className="px-10 py-4 bg-[var(--color-surface-container)] text-[var(--color-primary)] rounded-xl font-bold hover:bg-[var(--color-surface-container-high)] transition-all">
                Explorar contenido
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* FOOTER */}
      <footer className="bg-[#f9f9ff] dark:bg-[#161c27] flex flex-col md:flex-row justify-between items-center px-12 py-10 gap-6 w-full border-t border-[var(--color-surface-container)]">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[var(--color-primary)] rounded-lg flex items-center justify-center">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkHUVH926Db0JCSe7ViKcqKEplEpCtnrq3OrA903lIGWXazXEFVNULI4Xs0QQ1RurlnGDY0wCH7vJvsd6fS6fqzD9CjwZ2qh4sR1OBga70UCGg1ikw7_iPV_4vpcDxPECIb8ATw3bvTCAmMez2iKZ0biHZwImFEQq985zaLPgf4YYAVN-BPoFAlt4Nqwr6dgbQCqa3f7c1kwOtbmGkqlxFdt_Pi-Diw_L9Ri0dzOlRSeW26tUZ8lXlgmHxMDuFsklwFTq9UXiqyyY" 
                alt="ProfundaMente logo icon" 
                className="w-4 h-4 invert"
              />
            </div>
            <span className="text-lg font-bold text-[#00426a] dark:text-white font-[family-name:var(--font-headline)]">ProfundaMente</span>
          </div>
          <p className="text-xs text-[#161c27]/60 dark:text-[#f9f9ff]/50 font-[family-name:var(--font-body)]">© {new Date().getFullYear()} ProfundaMente Research Lab. En alianza con FUCS y Sociedad de Cirugía de Bogotá.</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 text-sm tracking-wide font-[family-name:var(--font-body)]">
          <Link href="#" className="text-[#161c27]/60 dark:text-[#f9f9ff]/50 hover:text-[#00426a] dark:hover:text-white underline transition-all">Ética IA</Link>
          <Link href="#" className="text-[#161c27]/60 dark:text-[#f9f9ff]/50 hover:text-[#00426a] dark:hover:text-white underline transition-all">Publicaciones</Link>
          <Link href="#" className="text-[#161c27]/60 dark:text-[#f9f9ff]/50 hover:text-[#00426a] dark:hover:text-white underline transition-all">Prensa</Link>
          <Link href="#" className="text-[#161c27]/60 dark:text-[#f9f9ff]/50 hover:text-[#00426a] dark:hover:text-white underline transition-all">Privacidad</Link>
        </div>
        
        <div className="flex gap-4">
          <Link href="#" className="w-10 h-10 rounded-full flex items-center justify-center text-[#161c27]/60 border border-[var(--color-surface-container)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all">
            <span className="material-symbols-outlined text-sm">share</span>
          </Link>
          <Link href="#" className="w-10 h-10 rounded-full flex items-center justify-center text-[#161c27]/60 border border-[var(--color-surface-container)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all">
            <span className="material-symbols-outlined text-sm">alternate_email</span>
          </Link>
        </div>
      </footer>
    </>
  );
}
