import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Always dark background on non-home pages for readability
  const isHome = location.pathname === '/';
  const navClasses = `fixed top-0 w-full z-50 transition-all duration-300 ${
    isScrolled || !isHome ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'
  }`;

  const linkClass = (path: string) => 
    `hover:text-tesla-red transition-colors ${location.pathname === path ? 'text-tesla-red' : ''}`;

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3 cursor-pointer">
           {/* Official Tesla 'T' Logo Path */}
           <svg className="h-6 w-auto fill-current text-white" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
             <path d="M50 0C27.1 0 4.8 4 0 6.1V23h4.6c2 0 4.3-.3 6.3-.9 4.6-1.1 9.4-1.7 14.3-1.7 10.3 0 15.4 3.7 15.4 10.9V85.4c0 9.4 6 14.6 18 14.6 12 0 18-5.1 18-14.6V31.3c0-7.1 5.1-10.9 15.4-10.9 4.9 0 9.7.6 14.3 1.7 2 .6 4.3.9 6.3.9H100V6.1C95.2 4 72.9 0 50 0z"/>
           </svg>
           <div className="h-6 w-px bg-zinc-600 mx-2"></div>
           <span className="text-sm tracking-[0.25em] font-bold text-zinc-300 pt-1">TRADE</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-sm font-medium tracking-wide">
          <Link to="/specs" className={linkClass('/specs')}>SPECS</Link>
          <Link to="/fleet-os" className={linkClass('/fleet-os')}>FLEET OS</Link>
          <Link to="/charging" className={linkClass('/charging')}>CHARGING</Link>
          <Link to="/blog" className={linkClass('/blog')}>BLOG</Link>
        </div>

        <div className="hidden md:block">
          <Link to="/order">
            <button className="bg-tesla-red text-white px-6 py-2 rounded text-sm font-semibold hover:bg-red-700 transition-colors duration-300">
              ORDER NOW
            </button>
          </Link>
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
        <div className="absolute top-full left-0 w-full bg-zinc-900 border-t border-zinc-800 p-6 flex flex-col space-y-6 md:hidden shadow-2xl h-screen">
          <Link to="/specs" onClick={() => setMobileMenuOpen(false)} className="block text-lg hover:text-tesla-red">Specs</Link>
          <Link to="/fleet-os" onClick={() => setMobileMenuOpen(false)} className="block text-lg hover:text-tesla-red">FleetOS</Link>
          <Link to="/charging" onClick={() => setMobileMenuOpen(false)} className="block text-lg hover:text-tesla-red">Charging</Link>
          <Link to="/blog" onClick={() => setMobileMenuOpen(false)} className="block text-lg hover:text-tesla-red">Blog</Link>
          <Link to="/order" onClick={() => setMobileMenuOpen(false)}>
            <button className="w-full bg-tesla-red text-white py-3 rounded font-bold hover:bg-red-700">
              ORDER NOW
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;