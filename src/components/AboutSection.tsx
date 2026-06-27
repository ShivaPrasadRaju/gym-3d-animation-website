import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Counter animation
      const counters = gsap.utils.toArray<HTMLElement>('.counter-value');
      
      counters.forEach((counter) => {
        const targetValue = parseInt(counter.getAttribute('data-target') || '0', 10);
        
        ScrollTrigger.create({
          trigger: counter,
          start: 'top 80%',
          once: true,
          onEnter: () => {
            gsap.to(counter, {
              innerHTML: targetValue,
              duration: 2,
              snap: { innerHTML: 1 },
              ease: 'power3.out',
            });
          }
        });
      });

      // Fade up content
      gsap.from('.about-fade-up', {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-secondary rounded-[32px] md:rounded-[40px] p-8 md:p-16 lg:p-24 overflow-hidden shadow-2xl border border-white/5 relative">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent pointer-events-none rounded-r-[40px]"></div>

      <div className="relative z-10 flex flex-col xl:flex-row gap-16 lg:gap-24 items-center">
        
        {/* Left - Typography */}
        <div className="w-full xl:w-1/2">
          <h3 className="about-fade-up text-accent font-heading text-lg tracking-[0.2em] mb-4">
            BEYOND THE IRON
          </h3>
          <h2 className="about-fade-up text-4xl md:text-5xl lg:text-6xl font-heading leading-tight mb-8">
            WE DON'T JUST BUILD MUSCLE. <br/> WE BUILD <span className="text-accent">CHARACTER.</span>
          </h2>
          <p className="about-fade-up text-secondaryText text-lg leading-relaxed mb-6">
            Ironclad Fitness is more than a gym. It is a sanctuary for those who demand excellence. Located in the heart of the city, we provide a premium, luxury environment designed specifically for high-performance training.
          </p>
          <p className="about-fade-up text-secondaryText text-lg leading-relaxed">
            Our philosophy is rooted in strength, discipline, and legacy. Surrounded by elite equipment and world-class coaches, you have everything you need to forge your strongest self.
          </p>
        </div>

        {/* Right - Counters */}
        <div className="w-full xl:w-1/2 grid grid-cols-2 gap-8 md:gap-12">
          
          <div className="about-fade-up border-l border-white/10 pl-6 py-2">
            <div className="flex items-baseline gap-1 font-heading text-5xl lg:text-7xl mb-2">
              <span className="counter-value" data-target="500">0</span>
              <span className="text-accent">+</span>
            </div>
            <div className="text-secondaryText font-medium uppercase tracking-wider text-sm">
              Elite Members
            </div>
          </div>

          <div className="about-fade-up border-l border-white/10 pl-6 py-2">
            <div className="flex items-baseline gap-1 font-heading text-5xl lg:text-7xl mb-2">
              <span className="counter-value" data-target="10">0</span>
              <span className="text-accent">+</span>
            </div>
            <div className="text-secondaryText font-medium uppercase tracking-wider text-sm">
              Expert Coaches
            </div>
          </div>

          <div className="about-fade-up border-l border-white/10 pl-6 py-2">
            <div className="flex items-baseline gap-1 font-heading text-5xl lg:text-7xl mb-2">
              <span className="counter-value" data-target="8">0</span>
              <span className="text-accent">+</span>
            </div>
            <div className="text-secondaryText font-medium uppercase tracking-wider text-sm">
              Years Experience
            </div>
          </div>

          <div className="about-fade-up border-l border-white/10 pl-6 py-2">
            <div className="flex items-baseline gap-1 font-heading text-5xl lg:text-7xl mb-2">
              <span className="counter-value" data-target="15">0</span>
              <span className="text-accent">K+</span>
            </div>
            <div className="text-secondaryText font-medium uppercase tracking-wider text-sm">
              Transformations
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
