import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cta-reveal', {
        y: 60,
        opacity: 0,
        duration: 1,
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
    <footer ref={containerRef} className="pt-20">
      {/* Final CTA */}
      <div className="text-center mb-24 cta-reveal">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-heading uppercase leading-[0.9] mb-6">
          READY TO BUILD <br/> <span className="text-accent">YOUR LEGACY?</span>
        </h2>
        <p className="text-secondaryText text-xl md:text-2xl mb-10 max-w-2xl mx-auto font-light">
          Join the strongest community.
        </p>
        <button className="bg-accent text-white px-12 py-5 rounded-full font-bold tracking-[0.2em] uppercase text-lg hover:bg-white hover:text-accent transition-colors duration-300 shadow-[0_0_40px_rgba(193,18,31,0.4)]">
          JOIN IRONCLAD FITNESS
        </button>
      </div>

      {/* Footer Content */}
      <div className="bg-black rounded-[32px] p-8 md:p-16 border border-white/5 relative overflow-hidden">
        {/* Top thin red divider logic can be a border-t */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mt-8">
          
          {/* Brand Info */}
          <div className="md:col-span-2">
            <h3 className="font-heading text-3xl tracking-widest text-white mb-6">
              IRONCLAD <span className="text-accent">FITNESS</span>
            </h3>
            <p className="text-secondaryText text-sm leading-relaxed max-w-sm mb-8">
              Premium strength training facility dedicated to those who demand excellence. Forge your strongest self.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white text-xs font-bold tracking-wider hover:bg-accent transition-colors duration-300">
                IG
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white text-xs font-bold tracking-wider hover:bg-accent transition-colors duration-300">
                TW
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white text-xs font-bold tracking-wider hover:bg-accent transition-colors duration-300">
                YT
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg tracking-widest mb-6">Navigation</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-secondaryText hover:text-white transition-colors text-sm">Home</a></li>
              <li><a href="#" className="text-secondaryText hover:text-white transition-colors text-sm">About Us</a></li>
              <li><a href="#" className="text-secondaryText hover:text-white transition-colors text-sm">Programs</a></li>
              <li><a href="#" className="text-secondaryText hover:text-white transition-colors text-sm">Trainers</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg tracking-widest mb-6">Contact</h4>
            <ul className="space-y-3">
              <li className="text-secondaryText text-sm">123 Iron Avenue, NY 10001</li>
              <li className="text-secondaryText text-sm">info@ironcladfitness.com</li>
              <li className="text-secondaryText text-sm">+1 (555) 123-4567</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondaryText text-xs">
            © {new Date().getFullYear()} Ironclad Fitness. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0 text-secondaryText text-xs">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
