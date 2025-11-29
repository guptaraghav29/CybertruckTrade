import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = `fixed top-0 w-full z-50 transition-all duration-300 ${
    isScrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
  }`;

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
           {/* Official Tesla 'T' Logo Path */}
           <svg className="h-6 w-auto fill-current text-white" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
             <path d="M50 0C27.1 0 4.8 4 0 6.1V23h4.6c2 0 4.3-.3 6.3-.9 4.6-1.1 9.4-1.7 14.3-1.7 10.3 0 15.4 3.7 15.4 10.9V85.4c0 9.4 6 14.6 18 14.6 12 0 18-5.1 18-14.6V31.3c0-7.1 5.1-10.9 15.4-10.9 4.9 0 9.7.6 14.3 1.7 2 .6 4.3.9 6.3.9H100V6.1C95.2 4 72.9 0 50 0z"/>
           </svg>
           <div className="h-6 w-px bg-zinc-600 mx-2"></div>
           <span className="text-sm tracking-[0.25em] font-bold text-zinc-300 pt-1">TRADE</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-sm font-medium tracking-wide">
          <a href="#specs" className="hover:text-tesla-red transition-colors">SPECS</a>
          <a href="#fleetos" className="hover:text-tesla-red transition-colors">FLEET OS</a>
          <a href="#charging" className="hover:text-tesla-red transition-colors">CHARGING</a>
          <a href="#blog" className="hover:text-tesla-red transition-colors">BLOG</a>
        </div>

        <div className="hidden md:block">
          <button className="bg-tesla-red text-white px-6 py-2 rounded text-sm font-semibold hover:bg-red-700 transition-colors duration-300">
            ORDER NOW
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white hover:text-tesla-red">
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-zinc-900 border-t border-zinc-800 p-6 flex flex-col space-y-6 md:hidden shadow-2xl">
          <a href="#specs" onClick={() => setMobileMenuOpen(false)} className="block text-lg hover:text-tesla-red">Specs</a>
          <a href="#fleetos" onClick={() => setMobileMenuOpen(false)} className="block text-lg hover:text-tesla-red">FleetOS</a>
          <a href="#charging" onClick={() => setMobileMenuOpen(false)} className="block text-lg hover:text-tesla-red">Charging</a>
          <a href="#blog" onClick={() => setMobileMenuOpen(false)} className="block text-lg hover:text-tesla-red">Blog</a>
          <button className="w-full bg-tesla-red text-white py-3 rounded font-bold hover:bg-red-700">
            ORDER NOW
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;