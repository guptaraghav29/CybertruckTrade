import React, { useState } from 'react';
import { ChevronDown, Sparkles, RefreshCw } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const Hero: React.FC = () => {
  // Use a highly reliable Wikimedia source as default to ensure it renders
  const [bgImage, setBgImage] = useState("https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Tesla_Cybertruck_outside_unveiling_event_Nov_2019.jpg/2560px-Tesla_Cybertruck_outside_unveiling_event_Nov_2019.jpg");
  const [isGenerating, setIsGenerating] = useState(false);

  const generateBackground = async () => {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      alert("API Key missing");
      return;
    }

    setIsGenerating(true);
    try {
      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [
            {
              text: 'A hyper-realistic, wide-angle 4k image of a silver Tesla Cybertruck in a rugged construction site at dusk. Cinematic lighting, industrial atmosphere, wet concrete ground, red tail lights glowing, heavy duty tires. Commercial fleet aesthetic. High detail, photorealistic.',
            },
          ],
        },
      });

      // Extract image from response
      const parts = response.candidates?.[0]?.content?.parts;
      if (parts) {
        for (const part of parts) {
           if (part.inlineData) {
             const base64String = part.inlineData.data;
             setBgImage(`data:image/png;base64,${base64String}`);
             break;
           }
        }
      }
    } catch (error) {
      console.error("Failed to generate image:", error);
      alert("Failed to generate AI image. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-zinc-900">
      {/* Background Image */}
      <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out">
        <img 
          src={bgImage} 
          alt="Cybertruck Trade Edition" 
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient Overlay: Dark at bottom for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
        {/* Subtle Red Brand Tint */}
        <div className="absolute inset-0 bg-red-950/20 pointer-events-none mix-blend-overlay" />
      </div>

      {/* AI Generator Control */}
      <div className="absolute top-24 right-6 z-20">
        <button 
          onClick={generateBackground}
          disabled={isGenerating}
          className="flex items-center gap-2 bg-black/50 hover:bg-black/70 text-white backdrop-blur-md px-4 py-2 rounded-full text-xs font-medium border border-white/10 transition-all"
        >
          {isGenerating ? (
            <RefreshCw className="animate-spin w-3 h-3 text-tesla-red" />
          ) : (
            <Sparkles className="w-3 h-3 text-tesla-red" />
          )}
          {isGenerating ? "Generating..." : "Generate AI Background"}
        </button>
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 pt-16">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-white drop-shadow-2xl">
          CYBERTRUCK <span className="text-tesla-red">TRADE</span>
        </h1>
        <p className="text-xl md:text-2xl text-zinc-100 max-w-2xl mb-8 font-light drop-shadow-lg shadow-black/50">
          Built for the job. Engineered for the fleet.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4">
          <button className="bg-tesla-red text-white px-8 py-3 rounded font-semibold hover:bg-red-700 transition-colors w-full md:w-auto shadow-lg shadow-red-900/40">
            Order Now - $60,000
          </button>
          <button className="border border-white text-white px-8 py-3 rounded font-medium hover:bg-white/10 transition-colors w-full md:w-auto backdrop-blur-sm">
            View Inventory
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white z-20">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;