import React from 'react';
import { KEY_SPECS } from '../constants';

const SpecGrid: React.FC = () => {
  return (
    <section id="specs" className="bg-black py-20 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
          {KEY_SPECS.map((spec, index) => (
            <div key={index} className="flex flex-col items-center justify-center p-4">
              <span className="text-3xl md:text-4xl font-bold text-white mb-1">
                {spec.value}<span className="text-lg text-zinc-500 font-normal ml-1">{spec.unit}</span>
              </span>
              <span className="text-sm text-zinc-400 uppercase tracking-wider">{spec.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecGrid;