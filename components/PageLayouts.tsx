import React, { useState } from 'react';
import { BLOG_POSTS, KEY_SPECS } from '../constants';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, Shield, Truck, Zap, Calendar, MapPin, Mail, Phone } from 'lucide-react';

// --- ORDER PAGE ---
export const OrderPage: React.FC = () => {
  const [trim, setTrim] = useState<'base' | 'heavy'>('base');
  const [paint, setPaint] = useState('silver');

  const basePrice = 60000;
  const heavyPrice = 75000;
  const currentPrice = trim === 'base' ? basePrice : heavyPrice;

  return (
    <div className="pt-20 min-h-screen bg-zinc-950 flex flex-col md:flex-row">
      <div className="flex-1 bg-zinc-900 relative min-h-[50vh] md:h-auto">
        <img 
          src={paint === 'silver' 
            ? "https://images.unsplash.com/photo-1699566992683-642d99042b08?q=80&w=2000&auto=format&fit=crop"
            : "https://images.unsplash.com/photo-1695648839818-868616ac3a32?q=80&w=2000&auto=format&fit=crop"} // Just using fallback images for demo
          alt="Configurator" 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-10 left-10">
          <h2 className="text-4xl font-bold text-white">Cybertruck Trade</h2>
          <p className="text-zinc-400">Est. Delivery: Late 2025</p>
        </div>
      </div>
      <div className="flex-1 p-8 md:p-12 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-8 text-white">Configure Your Trade</h1>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-4">Trim Level</h3>
            <div className="space-y-4">
              <button 
                onClick={() => setTrim('base')}
                className={`w-full p-4 border rounded flex justify-between items-center ${trim === 'base' ? 'border-tesla-red bg-zinc-900' : 'border-zinc-700 hover:bg-zinc-900'}`}
              >
                <div className="text-left">
                  <div className="font-bold text-white">Standard Range</div>
                  <div className="text-sm text-zinc-400">500mi Range • 11,000lb Towing</div>
                </div>
                <div className="font-bold text-white">$60,000</div>
              </button>
              <button 
                onClick={() => setTrim('heavy')}
                className={`w-full p-4 border rounded flex justify-between items-center ${trim === 'heavy' ? 'border-tesla-red bg-zinc-900' : 'border-zinc-700 hover:bg-zinc-900'}`}
              >
                <div className="text-left">
                  <div className="font-bold text-white">Heavy Haul</div>
                  <div className="text-sm text-zinc-400">Dual Load Mode • 14,000lb Towing</div>
                </div>
                <div className="font-bold text-white">$75,000</div>
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-4">Paint Protection</h3>
            <div className="flex gap-4">
              <button onClick={() => setPaint('silver')} className={`w-12 h-12 rounded-full bg-zinc-400 border-2 ${paint === 'silver' ? 'border-tesla-red' : 'border-transparent'}`} title="Raw Aluminum"></button>
              <button onClick={() => setPaint('black')} className={`w-12 h-12 rounded-full bg-black border-2 ${paint === 'black' ? 'border-tesla-red' : 'border-transparent'}`} title="Matte Black Wrap"></button>
            </div>
          </div>

          <div className="border-t border-zinc-800 pt-8">
            <div className="flex justify-between items-end mb-4">
              <span className="text-xl font-bold text-white">Total Price</span>
              <span className="text-3xl font-bold text-white">${currentPrice.toLocaleString()}</span>
            </div>
            <button className="w-full bg-tesla-red text-white py-4 rounded font-bold hover:bg-red-700 transition-colors">
              PLACE ORDER
            </button>
            <p className="text-xs text-zinc-500 mt-4 text-center">
              Fully refundable $250 deposit required today.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- SPECS PAGE ---
export const SpecsPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-black px-6 pb-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-12 text-white">Technical Specifications</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-xl font-bold text-tesla-red mb-6 uppercase tracking-widest border-b border-zinc-800 pb-2">Performance</h2>
            <ul className="space-y-4">
              <li className="flex justify-between"><span className="text-zinc-400">0-60 mph</span> <span className="text-white font-mono">4.1 sec</span></li>
              <li className="flex justify-between"><span className="text-zinc-400">Top Speed</span> <span className="text-white font-mono">112 mph</span></li>
              <li className="flex justify-between"><span className="text-zinc-400">Range (Standard)</span> <span className="text-white font-mono">500 mi</span></li>
              <li className="flex justify-between"><span className="text-zinc-400">Range (Towing 10k lbs)</span> <span className="text-white font-mono">320 mi</span></li>
              <li className="flex justify-between"><span className="text-zinc-400">Drivetrain</span> <span className="text-white font-mono">Dual Motor AWD</span></li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-xl font-bold text-tesla-red mb-6 uppercase tracking-widest border-b border-zinc-800 pb-2">Utility</h2>
            <ul className="space-y-4">
              <li className="flex justify-between"><span className="text-zinc-400">Towing Capacity</span> <span className="text-white font-mono">14,000 lbs</span></li>
              <li className="flex justify-between"><span className="text-zinc-400">Payload</span> <span className="text-white font-mono">3,500 lbs</span></li>
              <li className="flex justify-between"><span className="text-zinc-400">Bed Length</span> <span className="text-white font-mono">6 ft</span></li>
              <li className="flex justify-between"><span className="text-zinc-400">Storage</span> <span className="text-white font-mono">100 cu ft + Gear Locker</span></li>
              <li className="flex justify-between"><span className="text-zinc-400">Outlets</span> <span className="text-white font-mono">120V & 240V</span></li>
            </ul>
          </div>

           <div>
            <h2 className="text-xl font-bold text-tesla-red mb-6 uppercase tracking-widest border-b border-zinc-800 pb-2">Dimensions</h2>
            <ul className="space-y-4">
              <li className="flex justify-between"><span className="text-zinc-400">Length</span> <span className="text-white font-mono">231.7 in</span></li>
              <li className="flex justify-between"><span className="text-zinc-400">Width</span> <span className="text-white font-mono">84 in</span></li>
              <li className="flex justify-between"><span className="text-zinc-400">Height</span> <span className="text-white font-mono">75 in</span></li>
              <li className="flex justify-between"><span className="text-zinc-400">Ground Clearance</span> <span className="text-white font-mono">16 in (Max)</span></li>
            </ul>
          </div>

           <div>
            <h2 className="text-xl font-bold text-tesla-red mb-6 uppercase tracking-widest border-b border-zinc-800 pb-2">Warranty</h2>
            <ul className="space-y-4">
              <li className="flex justify-between"><span className="text-zinc-400">Basic Vehicle</span> <span className="text-white font-mono">5 years / 60k mi</span></li>
              <li className="flex justify-between"><span className="text-zinc-400">Commercial Powertrain</span> <span className="text-white font-mono">8 years / 200k mi</span></li>
              <li className="flex justify-between"><span className="text-zinc-400">Corrosion</span> <span className="text-white font-mono">12 years / Unlimited</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- FLEET OS PAGE ---
export const FleetOSPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-zinc-950 px-6 pb-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-white">FleetOS</h1>
          <p className="text-xl text-zinc-400">The operating system for modern logistics.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
           <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800">
             <Shield className="w-12 h-12 text-tesla-red mb-6" />
             <h3 className="text-xl font-bold text-white mb-4">Compliance & Safety</h3>
             <p className="text-zinc-400">Automated ELD logging, driver behavior monitoring, and insurance reporting integrated directly into the dashboard.</p>
           </div>
           <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800">
             <MapPin className="w-12 h-12 text-tesla-red mb-6" />
             <h3 className="text-xl font-bold text-white mb-4">Smart Routing</h3>
             <p className="text-zinc-400">Routes optimized for trailer weight, charging stops, and traffic, ensuring on-time delivery estimates.</p>
           </div>
           <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800">
             <Zap className="w-12 h-12 text-tesla-red mb-6" />
             <h3 className="text-xl font-bold text-white mb-4">Predictive Maintenance</h3>
             <p className="text-zinc-400">Sensors detect wear on brakes, tires, and motors, scheduling service automatically before a breakdown occurs.</p>
           </div>
        </div>

        <div className="bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl">
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop" alt="Dashboard" className="w-full h-96 object-cover opacity-80" />
          <div className="p-8">
            <h3 className="text-2xl font-bold text-white mb-4">TradeCare Subscription</h3>
            <p className="text-zinc-400 mb-6">Bundle your connectivity, maintenance, and insurance into one monthly payment.</p>
            <button className="text-tesla-red font-bold hover:underline">LEARN MORE &rarr;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- CHARGING PAGE ---
export const ChargingPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-black px-6 pb-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-12 text-white">The Trade Hub Network</h1>
        
        <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-white mb-6">Built for Towing</h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              Forget unhitching. Our new Trade Hub locations feature pull-through stalls designed for trucks with trailers up to 30 feet. 
              With 350kW charging speeds, you can add 200 miles of range in just 15 minutes.
            </p>
            <ul className="space-y-4 text-zinc-300">
               <li className="flex items-center"><Check className="text-tesla-red mr-2" /> 1MW V4 Supercharging Capable</li>
               <li className="flex items-center"><Check className="text-tesla-red mr-2" /> Pull-through bays</li>
               <li className="flex items-center"><Check className="text-tesla-red mr-2" /> Driver Lounges with WiFi</li>
            </ul>
          </div>
          <div className="flex-1">
            <img src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=1000&auto=format&fit=crop" className="rounded-xl shadow-2xl border border-zinc-800" alt="Supercharger" />
          </div>
        </div>
      </div>
    </div>
  );
};

// --- BLOG LIST PAGE ---
export const BlogListPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="pt-24 min-h-screen bg-white text-black px-6 pb-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">The Trade Journal</h1>
        <p className="text-zinc-600 mb-12 max-w-2xl">Insights, news, and case studies from the world of electric fleet management.</p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="group cursor-pointer flex flex-col h-full" onClick={() => navigate(`/blog/${post.id}`)}>
              <div className="aspect-[16/9] bg-zinc-100 overflow-hidden mb-6 rounded-lg">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center text-xs text-zinc-500 font-medium mb-3 uppercase tracking-wider space-x-2">
                <span className="text-tesla-red font-bold">{post.category}</span>
                <span>•</span>
                <span>{post.date}</span>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-tesla-red transition-colors">
                {post.title}
              </h3>
              <p className="text-zinc-600 text-sm leading-relaxed mb-4 flex-grow">
                {post.excerpt}
              </p>
              <div className="mt-auto pt-4 border-t border-zinc-100">
                <span className="text-xs font-semibold text-zinc-400">{post.readTime}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- BLOG POST PAGE ---
export const BlogPostPage: React.FC = () => {
  const { id } = useParams();
  const post = BLOG_POSTS.find(p => p.id === id);
  const navigate = useNavigate();

  if (!post) return <div className="pt-32 text-center text-white">Post not found</div>;

  return (
    <div className="pt-24 min-h-screen bg-white text-black pb-20">
      <article className="max-w-3xl mx-auto px-6">
        <button onClick={() => navigate('/blog')} className="flex items-center text-sm font-bold text-zinc-500 hover:text-tesla-red mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" /> BACK TO JOURNAL
        </button>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>
        
        <div className="flex items-center text-sm text-zinc-500 mb-8 space-x-4">
          <span className="bg-zinc-100 px-3 py-1 rounded-full font-bold text-tesla-red">{post.category}</span>
          <span>{post.date}</span>
          <span>{post.readTime}</span>
        </div>

        <div className="aspect-video w-full bg-zinc-100 mb-12 rounded-xl overflow-hidden shadow-lg">
           <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
        </div>

        <div className="prose prose-lg prose-zinc mx-auto">
          {post.content.split('\n').map((paragraph, idx) => (
            <p key={idx} className="mb-6 text-zinc-700 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-zinc-200">
          <h3 className="text-xl font-bold mb-4">Share this article</h3>
          <div className="flex gap-4">
            <button className="bg-zinc-100 hover:bg-zinc-200 px-4 py-2 rounded text-sm font-bold">Twitter</button>
            <button className="bg-zinc-100 hover:bg-zinc-200 px-4 py-2 rounded text-sm font-bold">LinkedIn</button>
          </div>
        </div>
      </article>
    </div>
  );
};

// --- CONTACT PAGE ---
export const ContactPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-zinc-950 px-6 pb-20">
       <div className="max-w-2xl mx-auto">
         <h1 className="text-4xl font-bold text-white mb-8">Contact Sales</h1>
         <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 space-y-6">
            <div>
              <label className="block text-sm font-bold text-zinc-400 mb-2">FULL NAME</label>
              <input type="text" className="w-full bg-black border border-zinc-700 rounded p-3 text-white focus:border-tesla-red outline-none" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm font-bold text-zinc-400 mb-2">BUSINESS EMAIL</label>
              <input type="email" className="w-full bg-black border border-zinc-700 rounded p-3 text-white focus:border-tesla-red outline-none" placeholder="john@company.com" />
            </div>
             <div>
              <label className="block text-sm font-bold text-zinc-400 mb-2">FLEET SIZE</label>
              <select className="w-full bg-black border border-zinc-700 rounded p-3 text-white focus:border-tesla-red outline-none">
                <option>1-5 Vehicles</option>
                <option>6-25 Vehicles</option>
                <option>26-100 Vehicles</option>
                <option>100+ Vehicles</option>
              </select>
            </div>
             <div>
              <label className="block text-sm font-bold text-zinc-400 mb-2">MESSAGE</label>
              <textarea className="w-full bg-black border border-zinc-700 rounded p-3 text-white focus:border-tesla-red outline-none h-32" placeholder="Tell us about your needs..."></textarea>
            </div>
            <button className="w-full bg-tesla-red text-white font-bold py-3 rounded hover:bg-red-700 transition-colors">SUBMIT REQUEST</button>
         </div>

         <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="flex items-center text-zinc-400">
              <Mail className="mr-4 text-white" /> sales@teslatrade.com
            </div>
            <div className="flex items-center text-zinc-400">
              <Phone className="mr-4 text-white" /> 1-888-518-3752
            </div>
         </div>
       </div>
    </div>
  );
};

// --- LEGAL / RECALLS ---
export const InfoPage: React.FC<{ title: string; content: string }> = ({ title, content }) => {
  return (
    <div className="pt-24 min-h-screen bg-black px-6 pb-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">{title}</h1>
        <div className="prose prose-invert prose-zinc">
           <p className="text-zinc-400 whitespace-pre-line leading-relaxed">{content}</p>
        </div>
      </div>
    </div>
  );
};