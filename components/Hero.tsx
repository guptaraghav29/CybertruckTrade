import React, { useState, useEffect } from 'react';
import { ChevronDown, Zap } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { Link } from 'react-router-dom';

// Distinct prompts for variety in the carousel
const SCENE_PROMPTS = [
  "A hyper-realistic, wide-angle 4k image of a silver Tesla Cybertruck Trade edition at a massive construction site. Cranes in background, dusty tires, rugged heavy duty atmosphere. Cinematic lighting.",
  "A futuristic shipping port logistics hub at dusk. A silver Tesla Cybertruck Trade edition towing a heavy trailer container. Industrial lights, wet pavement reflections, red tail lights glowing.",
  "A wide landscape shot of a Tesla Cybertruck Trade edition on a large modern farm or ranch. Off-road tires, hauling equipment, dusty golden hour lighting. Commercial grade durability."
];

const Hero: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isGenerating, setIsGenerating] = useState(true);

  // Auto-rotate carousel every 3 seconds
  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Generate carousel images on mount
  const generateCarousel = async () => {
    const apiKey = process.env.API_KEY;
    if (!apiKey) return;

    setIsGenerating(true);
    const ai = new GoogleGenAI({ apiKey });

    SCENE_PROMPTS.forEach(async (prompt) => {
      try {
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: { parts: [{ text: prompt }] },
        });
        const part = response.candidates?.[0]?.content?.parts?.[0];
        if (part && part.inlineData) {
          const newImage = `data:image/png;base64,${part.inlineData.data}`;
          setImages((prev) => [...prev, newImage]);
        }
      } catch (e) {
        console.error("Individual image generation failed", e);
      }
    });
  };

  useEffect(() => {
    generateCarousel();
  }, []);

  useEffect(() => {
    if (images.length > 0) {
      setIsGenerating(false);
    }
  }, [images]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-zinc-900">
      {/* Loading State */}
      {images.length === 0 && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-950 z-30">
          <Zap className="w-16 h-16 text-tesla-red animate-pulse mb-6" />
          <h2 className="text-2xl font-bold text-white tracking-widest uppercase animate-pulse">Initializing Fleet Systems</h2>
          <p className="text-zinc-500 text-sm mt-2">Generating environment simulation...</p>
        </div>
      )}

      {/* Image Carousel */}
      {images.map((img, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === activeIndex ? 'opacity-100 z-0' : 'opacity-0 z-[-1]'
          }`}
        >
          <img 
            src={img} 
            alt={`Cybertruck Scene ${index + 1}`} 
            className="w-full h-full object-cover object-center"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
          {/* Subtle Red Brand Tint */}
          <div className="absolute inset-0 bg-red-950/10 pointer-events-none" />
        </div>
      ))}

      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 pt-16">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-white drop-shadow-2xl">
          CYBERTRUCK <span className="text-tesla-red">TRADE</span>
        </h1>
        <p className="text-xl md:text-2xl text-zinc-100 max-w-2xl mb-8 font-light drop-shadow-lg shadow-black/50">
          Built for the job. Engineered for the fleet.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4">
          <Link to="/order" className="bg-tesla-red text-white px-8 py-3 rounded font-semibold hover:bg-red-700 transition-colors w-full md:w-auto shadow-lg shadow-red-900/40">
            Order Now - $60,000
          </Link>
          <Link to="/order" className="border border-white text-white px-8 py-3 rounded font-medium hover:bg-white/10 transition-colors w-full md:w-auto backdrop-blur-sm">
            View Inventory
          </Link>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white z-20">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;