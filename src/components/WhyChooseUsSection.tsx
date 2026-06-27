import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Settings, Target, Trophy, Heart, Coffee } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  {
    title: 'Elite Equipment',
    description: 'Train with industry-leading brands like Eleiko and Rogue, ensuring maximum performance and safety.',
    icon: <Settings className="w-6 h-6 text-accent" />
  },
  {
    title: 'Certified Coaches',
    description: 'Our coaching staff comprises elite athletes and certified professionals dedicated to your success.',
    icon: <Trophy className="w-6 h-6 text-accent" />
  },
  {
    title: 'Personal Programs',
    description: 'No generic templates. Every program is meticulously crafted to fit your biomechanics and goals.',
    icon: <Target className="w-6 h-6 text-accent" />
  },
  {
    title: 'Recovery & Nutrition',
    description: 'Access state-of-the-art recovery tools and tailored nutritional guidance to maximize your gains.',
    icon: <Heart className="w-6 h-6 text-accent" />
  },
  {
    title: 'Luxury Environment',
    description: 'Experience a pristine, uncrowded facility with premium amenities designed for the focused athlete.',
    icon: <Coffee className="w-6 h-6 text-accent" />
  }
];

const WhyChooseUsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.reason-row', {
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
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
    <section ref={containerRef} className="py-20 bg-secondary rounded-[32px] p-8 md:p-16 lg:p-24 border border-white/5 relative overflow-hidden shadow-2xl">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/5 to-transparent pointer-events-none rounded-r-[40px]"></div>
      
      <div className="flex flex-col xl:flex-row gap-16 lg:gap-24 items-start relative z-10">
        
        {/* Left Typography */}
        <div className="w-full xl:w-1/3 sticky top-32">
          <h3 className="text-accent font-heading text-lg tracking-[0.2em] mb-4">
            UNCOMPROMISING STANDARD
          </h3>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading uppercase leading-tight mb-6">
            Why Choose <br/>
            <span className="text-white/40">Ironclad</span>
          </h2>
          <p className="text-secondaryText text-lg leading-relaxed">
            We refuse to settle for mediocrity. From our hand-selected equipment to our meticulous cleanliness, every detail is engineered for those who take their training seriously.
          </p>
        </div>

        {/* Right Horizontal Cards */}
        <div className="w-full xl:w-2/3 flex flex-col space-y-4">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="reason-row group flex items-start gap-6 bg-black/40 p-6 md:p-8 rounded-[24px] border border-white/5 hover:border-accent/30 hover:bg-black/60 transition-all duration-300"
            >
              <div className="flex-shrink-0 bg-white/5 p-4 rounded-full group-hover:bg-accent/10 transition-colors duration-300">
                {reason.icon}
              </div>
              <div>
                <h4 className="text-xl font-heading tracking-wide mb-2 text-white group-hover:text-accent transition-colors duration-300">
                  {reason.title}
                </h4>
                <p className="text-secondaryText leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
