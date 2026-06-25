import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SolutionDisclaimerWrapper from '@/components/SolutionDisclaimerWrapper';
import GMMClassifier, { C } from './GMMClassifier';

export default function ModeloGMMSepsisPage() {
  return (
    <>
      <Navbar />
      <SolutionDisclaimerWrapper category="solution" subsections={['Machine Learning']}>
        <main style={{ backgroundColor: C.bg, minHeight: '100vh', paddingTop: '5rem', color: C.text }}>

          <GMMClassifier />

          <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem 4rem' }}>
            <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: '2.5rem' }}>
              <p style={{ fontSize: '.72rem', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: C.muted, marginBottom: '1.5rem' }}>
                Valoración del lector
              </p>
              <p style={{ fontSize: '.8rem', color: C.muted, fontStyle: 'italic' }}>
                La valoración interactiva estará disponible en la versión completa de la plataforma.
              </p>
            </div>
          </div>

        </main>
      </SolutionDisclaimerWrapper>
      <Footer />
    </>
  );
}
