import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const images = [
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=800'
];

const GallerySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.gallery-item', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-20">
      <div className="text-center mb-16 md:mb-24">
        <h3 className="text-accent font-heading text-lg tracking-[0.2em] mb-4">
          THE FACILITY
        </h3>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading uppercase">
          Where Legends <span className="text-white/40">Are Made</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {images.map((img, index) => (
          <div 
            key={index}
            className={`gallery-item relative overflow-hidden rounded-[24px] border border-white/5 ${
              index === 0 || index === 3 ? 'lg:col-span-2 lg:row-span-2 h-[400px] lg:h-[600px]' : 'h-[400px] lg:h-[288px]'
            }`}
          >
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
            <img 
              src={img} 
              alt={`Facility Image ${index + 1}`}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000 ease-out"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
