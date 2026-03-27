import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SolutionDisclaimerWrapper from '@/components/SolutionDisclaimerWrapper';
import RatingFeedback from '@/components/RatingFeedback';
import prisma from '@/lib/prisma';
import GMMClassifier, { C } from './GMMClassifier';

export default async function ModeloGMMSepsisPage() {
  const pub = await prisma.publication.findUnique({
    where: { slug: 'modelo-gmm-sepsis' },
    include: { solutionSummary: true },
  });

  return (
    <>
      <Navbar />
      <SolutionDisclaimerWrapper category="solution" subsections={['Machine Learning']}>
        <main style={{ backgroundColor: C.bg, minHeight: '100vh', paddingTop: '5rem', color: C.text }}>

          <GMMClassifier />

          {/* ── Valoración del lector ── */}
          <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem 4rem' }}>
            <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: '2.5rem' }}>
              <p style={{ fontSize: '.72rem', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: C.muted, marginBottom: '1.5rem' }}>
                Valoración del lector
              </p>
              {pub ? (
                <RatingFeedback publicationId={pub.id} category={pub.category} />
              ) : (
                <p style={{ fontSize: '.8rem', color: C.muted, fontStyle: 'italic' }}>
                  La valoración estará disponible una vez el contenido sea registrado en la base de datos.
                </p>
              )}
            </div>
          </div>

        </main>
      </SolutionDisclaimerWrapper>
      <Footer />
    </>
  );
}
