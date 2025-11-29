import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-zinc-900 text-zinc-500 text-xs">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex space-x-6">
          <Link to="/" className="hover:text-white transition-colors">Tesla Trade © 2025</Link>
          <Link to="/legal" className="hover:text-white transition-colors">Privacy & Legal</Link>
          <Link to="/recalls" className="hover:text-white transition-colors">Vehicle Recalls</Link>
          <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
        </div>
        <div>
          <p>Mockup for Educational Purposes Only</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;