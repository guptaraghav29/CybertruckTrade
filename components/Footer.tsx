import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-zinc-900 text-zinc-500 text-xs">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex space-x-6">
          <a href="#" className="hover:text-white transition-colors">Tesla Trade © 2024</a>
          <a href="#" className="hover:text-white transition-colors">Privacy & Legal</a>
          <a href="#" className="hover:text-white transition-colors">Vehicle Recalls</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
        <div>
          <p>Mockup for Educational Purposes Only</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;