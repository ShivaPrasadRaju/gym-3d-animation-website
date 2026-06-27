import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProgramsSection from './components/ProgramsSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import TrainersSection from './components/TrainersSection';
import TestimonialsSection from './components/TestimonialsSection';
import GallerySection from './components/GallerySection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-background text-primaryText min-h-screen relative overflow-hidden">
      <Navbar />
      <HeroSection />
      
      {/* Container for subsequent rounded sections */}
      <div className="relative z-10 px-4 md:px-8 space-y-8 md:space-y-12 pb-12">
        <AboutSection />
        <ProgramsSection />
        <WhyChooseUsSection />
        <TrainersSection />
        <TestimonialsSection />
        <GallerySection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
