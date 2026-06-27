import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: "Ironclad isn't just a gym; it's a proving ground. The equipment is flawless, but the community of focused individuals is what truly sets it apart.",
    author: "James Harrington",
    role: "Professional Athlete"
  },
  {
    quote: "The level of detail in the coaching and the facility itself is unmatched. If you are serious about your potential, this is the only place to be.",
    author: "Elena Rostova",
    role: "Powerlifting Champion"
  },
  {
    quote: "A true sanctuary for strength. The minimalist, luxury environment removes all distractions and allows you to focus purely on the work.",
    author: "Marcus Chen",
    role: "Entrepreneur"
  }
];

const TestimonialsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.testimonial-content', {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={containerRef} className="py-20 bg-secondary rounded-[32px] p-8 md:p-16 lg:p-24 border border-white/5 relative overflow-hidden shadow-2xl">
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto text-center testimonial-content relative z-10">
        <Quote className="w-12 h-12 text-accent/50 mx-auto mb-8" />
        
        <div className="min-h-[200px] flex flex-col justify-center">
          <p className="text-2xl md:text-3xl lg:text-4xl font-body font-light italic leading-relaxed text-white mb-10 transition-all duration-500">
            "{testimonials[currentIndex].quote}"
          </p>
          
          <div>
            <h5 className="font-heading text-xl tracking-wide text-white mb-1">
              {testimonials[currentIndex].author}
            </h5>
            <p className="text-secondaryText text-sm uppercase tracking-widest font-semibold">
              {testimonials[currentIndex].role}
            </p>
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center justify-center space-x-6 mt-12">
          <button 
            onClick={prev}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <div className="flex space-x-2">
            {testimonials.map((_, idx) => (
              <div 
                key={idx} 
                className={`h-1 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-accent' : 'w-2 bg-white/20'}`}
              ></div>
            ))}
          </div>

          <button 
            onClick={next}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors duration-300"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
