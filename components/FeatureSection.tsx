import React from 'react';

interface FeatureSectionProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  features: string[];
  reversed?: boolean;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ 
  id, title, subtitle, description, imageUrl, features, reversed = false 
}) => {
  return (
    <section id={id} className="py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16`}>
          
          {/* Text Content */}
          <div className="flex-1 space-y-6">
            <span className="text-sm font-bold text-tesla-red tracking-widest uppercase">{subtitle}</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">{title}</h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              {description}
            </p>
            <ul className="space-y-3 mt-4">
              {features.map((feat, idx) => (
                <li key={idx} className="flex items-start text-zinc-300">
                  <span className="mr-3 text-tesla-red font-bold">•</span>
                  {feat}
                </li>
              ))}
            </ul>
          </div>

          {/* Image Content */}
          <div className="flex-1 w-full">
            <div className="aspect-[4/3] rounded-lg overflow-hidden relative shadow-2xl">
               <img 
                 src={imageUrl} 
                 alt={title} 
                 className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
               />
               <div className="absolute inset-0 border border-white/5 rounded-lg pointer-events-none"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeatureSection;