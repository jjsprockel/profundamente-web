export default function ProcessTimeline() {
  return (
    <section className="py-24 px-8 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-[var(--color-primary)] mb-16">Nuestra Metodología</h2>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative">
          {/* Connector Line (hidden on mobile) */}
          <div className="hidden md:block absolute top-[32px] left-0 w-full h-px bg-[var(--color-outline-variant)] -z-10"></div>
          
          {/* Step 1 */}
          <div className="flex flex-col items-center gap-4 bg-[var(--color-surface)] px-6">
            <div className="w-16 h-16 rounded-full bg-[var(--color-surface-container-highest)] flex items-center justify-center text-[var(--color-primary)] font-bold text-xl border-4 border-[var(--color-surface)] shadow-sm">1</div>
            <div className="text-center">
              <p className="font-bold text-[var(--color-on-surface)]">Datos</p>
              <p className="text-xs text-[var(--color-on-surface-variant)]">Curación clínica</p>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="flex flex-col items-center gap-4 bg-[var(--color-surface)] px-6">
            <div className="w-16 h-16 rounded-full bg-[var(--color-surface-container-highest)] flex items-center justify-center text-[var(--color-primary)] font-bold text-xl border-4 border-[var(--color-surface)] shadow-sm">2</div>
            <div className="text-center">
              <p className="font-bold text-[var(--color-on-surface)]">Modelos IA</p>
              <p className="text-xs text-[var(--color-on-surface-variant)]">Entrenamiento robusto</p>
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="flex flex-col items-center gap-4 bg-[var(--color-surface)] px-6">
            <div className="w-16 h-16 rounded-full bg-[var(--color-surface-container-highest)] flex items-center justify-center text-[var(--color-primary)] font-bold text-xl border-4 border-[var(--color-surface)] shadow-sm">3</div>
            <div className="text-center">
              <p className="font-bold text-[var(--color-on-surface)]">Validación</p>
              <p className="text-xs text-[var(--color-on-surface-variant)]">Pruebas en entorno real</p>
            </div>
          </div>
          
          {/* Step 4 */}
          <div className="flex flex-col items-center gap-4 bg-[var(--color-surface)] px-6">
            <div className="w-16 h-16 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white font-bold text-xl border-4 border-[var(--color-surface)] shadow-sm">4</div>
            <div className="text-center">
              <p className="font-bold text-[var(--color-on-surface)]">Implementación</p>
              <p className="text-xs text-[var(--color-on-surface-variant)]">Escalamiento clínico</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
