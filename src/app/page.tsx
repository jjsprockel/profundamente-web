import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustStrip from "@/components/TrustStrip";
import SolutionsGrid from "@/components/SolutionsGrid";
import ExploreBento from "@/components/ExploreBento";
import ProcessTimeline from "@/components/ProcessTimeline";
import SingularidadSection from "@/components/SingularidadSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <TrustStrip />
        <SolutionsGrid />
        <ExploreBento />
        <ProcessTimeline />
        <SingularidadSection />
      </main>
      <Footer />
    </>
  );
}
