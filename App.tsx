import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SpecGrid from './components/SpecGrid';
import FeatureSection from './components/FeatureSection';
import BlogSection from './components/BlogSection';
import ChatAssistant from './components/ChatAssistant';
import Footer from './components/Footer';
import { 
  OrderPage, 
  SpecsPage, 
  FleetOSPage, 
  ChargingPage, 
  BlogListPage, 
  BlogPostPage, 
  ContactPage, 
  InfoPage 
} from './components/PageLayouts';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const HomePage: React.FC = () => (
  <>
    <Hero />
    <SpecGrid />
    <FeatureSection
      id="chassis"
      title="Engineered for Utility."
      subtitle="CHASSIS & DESIGN"
      description="The all-new aluminum alloy frame replaces the exoskeleton for a 15% weight reduction, lowering insurance costs while maintaining rugged durability. The Tacoma-inspired rectangular geometry allows for easy modification and standard tool compatibility."
      imageUrl="https://images.unsplash.com/photo-1565034946487-077786996e27?q=80&w=2000&auto=format&fit=crop"
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
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white selection:bg-tesla-red selection:text-white font-sans">
        <ScrollToTop />
        <Navbar />
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/specs" element={<SpecsPage />} />
            <Route path="/fleet-os" element={<FleetOSPage />} />
            <Route path="/charging" element={<ChargingPage />} />
            <Route path="/blog" element={<BlogListPage />} />
            <Route path="/blog/:id" element={<BlogPostPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/legal" element={<InfoPage title="Privacy & Legal" content={`
              Tesla Cybertruck Trade Privacy Policy. 
              Last Updated: March 2025.
              
              We collect data to improve FleetOS services. Your location data is encrypted and only used for routing optimization. 
              Vehicle telemetry is anonymized unless you opt-in for specific diagnostic services.
            `} />} />
            <Route path="/recalls" element={<InfoPage title="Vehicle Recalls" content={`
              No active recalls for 2025 Tesla Cybertruck Trade.
              
              Check your VIN regularly on the official NHTSA website or via the FleetOS dashboard.
            `} />} />
          </Routes>
        </main>

        <Footer />
        <ChatAssistant />
      </div>
    </Router>
  );
}

export default App;