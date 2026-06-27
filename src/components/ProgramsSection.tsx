import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Dumbbell, Activity, ShieldCheck, Flame } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const programs = [
  {
    title: 'Strength Training',
    description: 'Build foundational strength with programming tailored to maximize muscle hypertrophy and raw power.',
    icon: <Dumbbell className="w-8 h-8 text-accent" />
  },
  {
    title: 'Powerlifting',
    description: 'Focus on the big three: Squat, Bench, and Deadlift. Professional coaching to increase your one-rep max.',
    icon: <ShieldCheck className="w-8 h-8 text-accent" />
  },
  {
    title: 'Functional Fitness',
    description: 'Enhance your daily performance, agility, and endurance with high-intensity functional movements.',
    icon: <Activity className="w-8 h-8 text-accent" />
  },
  {
    title: 'Personal Coaching',
    description: '1-on-1 elite coaching tailored to your specific goals, biomechanics, and lifestyle requirements.',
    icon: <Flame className="w-8 h-8 text-accent" />
  }
];

const ProgramsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.program-card', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
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
      <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <h3 className="text-accent font-heading text-lg tracking-[0.2em] mb-4">
            ELITE PROTOCOLS
          </h3>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading uppercase">
            Signature <br /> <span className="text-white/40">Programs</span>
          </h2>
        </div>
        <div className="max-w-md">
          <p className="text-secondaryText text-lg">
            Our training methodologies are scientifically backed and designed for absolute peak performance.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {programs.map((program, index) => (
          <div 
            key={index}
            className="program-card group relative bg-secondary rounded-[32px] p-8 border border-white/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(193,18,31,0.1)] hover:border-accent/30 overflow-hidden"
          >
            {/* Hover subtle red glow bg */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[32px]"></div>
            
            <div className="relative z-10">
              <div className="bg-black/50 w-16 h-16 rounded-full flex items-center justify-center border border-white/5 mb-8 group-hover:scale-110 transition-transform duration-500 ease-out">
                {program.icon}
              </div>
              
              <h4 className="text-2xl font-heading tracking-wide mb-4 text-white">
                {program.title}
              </h4>
              
              <p className="text-secondaryText leading-relaxed mb-8">
                {program.description}
              </p>
              
              <button className="flex items-center text-sm font-semibold tracking-widest uppercase text-white group-hover:text-accent transition-colors duration-300">
                Explore Protocol
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProgramsSection;
