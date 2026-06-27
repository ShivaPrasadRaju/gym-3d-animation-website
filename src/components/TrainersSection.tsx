import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const trainers = [
  {
    name: 'Marcus Vance',
    specialty: 'Head Powerlifting Coach',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800',
    bio: 'Former national champion with 12 years of coaching elite strength athletes.'
  },
  {
    name: 'Sarah Chen',
    specialty: 'Functional Fitness Lead',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=800',
    bio: 'CrossFit Games competitor specializing in high-intensity metabolic conditioning.'
  },
  {
    name: 'David Reynolds',
    specialty: 'Hypertrophy Specialist',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800',
    bio: 'Biomechanics expert focused on optimal muscle growth and injury prevention.'
  }
];

const TrainersSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.trainer-card', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
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
          ELITE GUIDANCE
        </h3>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading uppercase">
          Meet The <span className="text-white/40">Architects</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {trainers.map((trainer, index) => (
          <div 
            key={index} 
            className="trainer-card group relative bg-secondary rounded-[32px] overflow-hidden border border-white/5 hover:border-accent/30 transition-all duration-500"
          >
            {/* Image Container */}
            <div className="relative h-[400px] w-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent z-10"></div>
              <img 
                src={trainer.image} 
                alt={trainer.name}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            
            {/* Content Details */}
            <div className="absolute bottom-0 left-0 w-full p-8 z-20 flex flex-col justify-end">
              <h4 className="text-3xl font-heading tracking-wide mb-1 text-white">
                {trainer.name}
              </h4>
              <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">
                {trainer.specialty}
              </p>
              
              {/* Hover Reveal Details */}
              <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 ease-out translate-y-4 group-hover:translate-y-0">
                <p className="text-secondaryText text-sm leading-relaxed border-t border-white/10 pt-4 mt-2">
                  {trainer.bio}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrainersSection;
