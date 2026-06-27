import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fade in on scroll
    gsap.fromTo(navRef.current, 
      { opacity: 0, y: -20 },
      {
        opacity: 1, 
        y: 0,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: 'body',
          start: 'top -100px',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  return (
    <nav 
      ref={navRef}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl opacity-0"
    >
      <div className="bg-black/40 backdrop-blur-md rounded-full px-8 py-4 flex items-center justify-between border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
        <div className="text-xl font-heading text-white tracking-widest">
          IRONCLAD FITNESS
        </div>
        
        <div className="hidden lg:flex items-center space-x-8 text-sm font-medium text-secondaryText">
          <a href="#" className="hover:text-white transition-colors duration-300">Home</a>
          <a href="#" className="hover:text-white transition-colors duration-300">About</a>
          <a href="#" className="hover:text-white transition-colors duration-300">Programs</a>
          <a href="#" className="hover:text-white transition-colors duration-300">Membership</a>
          <a href="#" className="hover:text-white transition-colors duration-300">Trainers</a>
          <a href="#" className="hover:text-white transition-colors duration-300">Contact</a>
        </div>

        <button className="bg-accent text-white px-6 py-2 rounded-full font-semibold text-sm hover:bg-white hover:text-accent transition-all duration-300">
          Join Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
