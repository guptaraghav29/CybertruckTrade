import { SpecItem, BlogPost } from './types';

export const SYSTEM_INSTRUCTION = `
You are the AI Assistant for the "Tesla Cybertruck Trade" website. 
Your goal is to answer questions about the new Cybertruck Trade edition based STRICTLY on the following product specifications.
Do not make up features not listed here. Keep answers concise, professional, and on-brand for Tesla (minimalist, confident).

Product Specs:
1. Pricing: Base $60,000. Max $75,000. 
2. Powertrain: Dual-motor (400hp, 500lb-ft), 0-60 < 5s. 500mi range standard, 350mi heavy tow.
3. Chassis: Aluminum alloy frame (not stainless exoskeleton), rectangular bed (Tacoma-inspired), lighter weight.
4. Interior: Hybrid interface (Touch + Physical buttons), 2/3/5 seat layouts, recycled fabrics.
5. Software: FleetOS for routing/metrics. TradeCare subscription.
6. Charging: Trade Hubs with truck-bay access.
7. Warranty: 5yr/150k vehicle, 8yr/200k battery.
8. Sustainability: 90% recyclable components.
9. Target: Construction, Farming, Fleets.

Tone: Helpful, technical but accessible, encouraging fleet adoption.
`;

export const KEY_SPECS: SpecItem[] = [
  { label: 'Base Price', value: '$60,000' },
  { label: 'Range', value: '500', unit: 'mi' },
  { label: 'Towing', value: '14,000', unit: 'lbs' },
  { label: '0-60 mph', value: '< 5.0', unit: 's' },
  { label: 'Warranty', value: '150,000', unit: 'mi' },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Introducing FleetOS: The Brain of the Trade',
    excerpt: 'How our new operating system integrates job routing, driver metrics, and predictive maintenance directly into the dashboard.',
    content: 'FleetOS represents a paradigm shift in fleet management. Unlike third-party telematics dongles that just read OBD-II data, FleetOS is deeply integrated into the vehicle\'s core architecture. It provides real-time access to thermal metrics, payload distribution, and predictive maintenance alerts that can schedule service before a failure occurs. \n\nFor fleet managers, the FleetOS Dashboard provides a god-eye view of every asset. You can route drivers based on state-of-charge, traffic, and job priority. The driver compliance metrics allow for granular tracking of safety performance, reducing insurance premiums by up to 20%.',
    category: 'Software',
    date: 'Feb 12, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop',
    readTime: '5 min read'
  },
  {
    id: '2',
    title: 'Aluminum vs. Stainless: Why We Switched',
    excerpt: 'The move to an aluminum alloy frame reduces weight by 15%, lowering insurance costs while maintaining structural integrity for heavy loads.',
    content: 'The original Cybertruck\'s stainless steel exoskeleton was a marvel of engineering, but for the Trade edition, we needed to prioritize repairability and weight efficiency. By switching to a high-strength aluminum alloy frame, we have reduced the curb weight by 15%. \n\nThis weight saving directly translates to payload capacity and range. Furthermore, aluminum body panels are significantly easier for standard body shops to repair, reducing downtime after minor job-site collisions. This decision was driven entirely by feedback from our commercial partners who need trucks back on the road, fast.',
    category: 'Engineering',
    date: 'Jan 28, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1565034946487-077786996e27?q=80&w=2000&auto=format&fit=crop',
    readTime: '4 min read'
  },
  {
    id: '3',
    title: 'The Trade Hub Network',
    excerpt: 'We are rolling out truck-bay accessible superchargers designed specifically for trailers and heavy haulers.',
    content: 'One of the biggest friction points for towing with EVs has been charging infrastructure. Standard stalls are not designed for a 20-foot trailer. Enter the Trade Hub Network. \n\nThese new Supercharger locations feature pull-through bays, similar to gas stations, allowing drivers to charge without unhitching. Located strategically along major logistics corridors, Trade Hubs also feature driver lounges with high-speed amenities, recognizing that the truck is often a mobile office.',
    category: 'Infrastructure',
    date: 'Jan 15, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2000&auto=format&fit=crop',
    readTime: '3 min read'
  },
  {
    id: '4',
    title: 'ROI Analysis: Electric vs Diesel Fleets',
    excerpt: 'A comprehensive breakdown of the total cost of ownership over 5 years. See how Cybertruck Trade pays for itself.',
    content: 'The sticker price is only part of the story. When you factor in the elimination of fuel costs, the 30% reduction in maintenance (no oil changes, fewer moving parts), and the higher residual value guaranteed by our buy-back program, the Cybertruck Trade beats comparable diesel pickups by year 2. \n\nOur analysis of a standard 15-truck construction fleet shows an average annual saving of $120,000 in operating costs alone. Combined with federal and state fleet electrification incentives, the ROI horizon is shorter than ever.',
    category: 'Finance',
    date: 'Mar 01, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop',
    readTime: '6 min read'
  },
  {
    id: '5',
    title: 'Safety Features: ADAS for Heavy Loads',
    excerpt: 'How our Adaptive Driver-Assist Package handles trailer sway and blind spots differently than consumer vehicles.',
    content: 'Towing a 10,000 lb load requires different physics calculations than driving empty. The Cybertruck Trade\'s ADAS (Adaptive Driver-Assist System) automatically detects trailer weight and length upon hookup. \n\nIt adjusts the regenerative braking curve to prevent jackknifing and modifies blind-spot monitoring to account for the trailer\'s length. In high winds, the active suspension works in tandem with torque vectoring to neutralize sway before the driver even feels it.',
    category: 'Safety',
    date: 'Mar 10, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=2000&auto=format&fit=crop',
    readTime: '4 min read'
  },
  {
    id: '6',
    title: 'Customization: The Modular Bed System',
    excerpt: 'From tool racks to mobile cranes. Explore the official accessory ecosystem designed for the trade.',
    content: 'One truck, endless possibilities. The Cybertruck Trade features a modular bed rail system that accepts a wide range of official and third-party accessories. \n\nNeed a heavy-duty ladder rack? It snaps in. Need a bed-mounted crane for lifting generators? We have a mount for that. The bed also features multiple high-voltage outlets (120V and 240V) powered directly by the main battery, effectively turning the truck into a massive mobile generator for your power tools.',
    category: 'Customization',
    date: 'Mar 22, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2000&auto=format&fit=crop',
    readTime: '5 min read'
  }
];