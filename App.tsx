import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SpecGrid from './components/SpecGrid';
import FeatureSection from './components/FeatureSection';
import BlogSection from './components/BlogSection';
import ChatAssistant from './components/ChatAssistant';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-tesla-red selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <SpecGrid />
        
        <FeatureSection
          id="chassis"
          title="Engineered for Utility."
          subtitle="CHASSIS & DESIGN"
          description="The all-new aluminum alloy frame replaces the exoskeleton for a 15% weight reduction, lowering insurance costs while maintaining rugged durability. The Tacoma-inspired rectangular geometry allows for easy modification and standard tool compatibility."
          imageUrl="https://images.unsplash.com/photo-1581093458791-9f302e6d816b?q=80&w=2070&auto=format&fit=crop"
          features={[
            "Aluminum Alloy Frame",
            "Rectangular Bed Geometry",
            "Rounded Edges & 360° Perception",
            "Optional Right-Hand Drive"
          ]}
        />

        <FeatureSection
          id="fleetos"
          title="Intelligence at Scale."
          subtitle="SOFTWARE & CONNECTIVITY"
          description="FleetOS comes standard, integrating job routing, driver metrics, and predictive maintenance. Manage your entire operation from the dashboard or the Trade App."
          imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop"
          reversed={true}
          features={[
            "Real-time Job Routing",
            "Predictive Maintenance (OTA)",
            "Driver Compliance Metrics",
            "Hybrid Tactile/Touch Interface"
          ]}
        />

        <FeatureSection
          id="charging"
          title="Power Without Pause."
          subtitle="CHARGING ECOSYSTEM"
          description="Introduce Trade Hubs—Superchargers designed with pull-through bays for trailers and heavy equipment. Plus, modular battery swapping ensures you never wait for a charge during critical jobs."
          imageUrl="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2000&auto=format&fit=crop"
          features={[
            "Drive-through Trade Hubs",
            "Modular Battery Swapping",
            "Dual-load-mode Battery",
            "Solar Base Pack Compatible"
          ]}
        />

        <BlogSection />
      </main>

      <Footer />
      <ChatAssistant />
    </div>
  );
}

export default App;