import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  
  const frameCount = 240;
  
  const currentFrame = (index: number) => 
    `/hero-sequence/ezgif-frame-${index.toString().padStart(3, '0')}.jpg`;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;

    // Set canvas dimensions
    canvas.width = 1920;
    canvas.height = 1080;

    const images: HTMLImageElement[] = [];
    const airpods = { frame: 0 };

    // Preload images
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }

    // Render function
    const render = () => {
      if (images[airpods.frame]) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(images[airpods.frame], 0, 0, canvas.width, canvas.height);
      }
    };

    images[0].onload = render;

    // Scroll animation for sequence
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=300%', // Pin for 3 viewport heights
        pin: true,
        scrub: 0.5, // Smooth scrubbing
      }
    });

    tl.to(airpods, {
      frame: frameCount - 1,
      snap: 'frame',
      ease: 'none',
      onUpdate: render,
    });

    // Text Reveal Animations
    const q = gsap.utils.selector(textRef);
    gsap.fromTo(q('.reveal-text'), 
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        stagger: 0.2, 
        ease: 'power3.out',
        delay: 0.2 
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full bg-background overflow-hidden flex items-center">
      
      {/* Background Canvas - Full Screen Centered */}
      <div className="absolute inset-0 w-full h-full z-0 flex items-center justify-center pointer-events-none mix-blend-screen opacity-50 md:opacity-100">
        <canvas 
          ref={canvasRef} 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Foreground Text Content */}
      <div 
        ref={textRef}
        className="relative z-10 w-full lg:w-[55%] h-full flex flex-col justify-center px-6 md:px-16 lg:px-24 pt-24 lg:pt-0 pointer-events-auto"
      >
        <h2 className="reveal-text text-accent font-heading text-xl md:text-2xl tracking-[0.2em] mb-4">
          IRONCLAD FITNESS
        </h2>
        
        <h1 className="reveal-text text-5xl md:text-7xl lg:text-8xl font-heading leading-[0.9] mb-6 drop-shadow-lg">
          FORGE YOUR <br />
          <span className="text-white">STRONGEST SELF</span>
        </h1>
        
        <div className="reveal-text flex items-center space-x-3 text-sm md:text-base font-semibold tracking-widest text-secondaryText mb-8">
          <span>STRENGTH</span>
          <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
          <span>DISCIPLINE</span>
          <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
          <span>LEGACY</span>
        </div>
        
        <p className="reveal-text text-secondaryText max-w-md text-lg leading-relaxed mb-10">
          Elite strength training designed to build discipline, confidence, and lasting performance.
        </p>
        
        <div className="reveal-text flex flex-col sm:flex-row gap-4">
          <button className="bg-accent text-white px-8 py-4 rounded-full font-bold tracking-wider hover:bg-white hover:text-accent transition-colors duration-300">
            JOIN NOW
          </button>
          <button className="bg-transparent border border-white/20 text-white px-8 py-4 rounded-full font-bold tracking-wider hover:bg-white/10 backdrop-blur-sm transition-colors duration-300">
            BOOK FREE TRIAL
          </button>
        </div>
      </div>
      
    </section>
  );
};

export default HeroSection;
