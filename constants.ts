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
    category: 'Software',
    date: 'Oct 24, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1554743365-a80c1243316e?q=80&w=800&auto=format&fit=crop',
    readTime: '5 min read'
  },
  {
    id: '2',
    title: 'Aluminum vs. Stainless: Why We Switched',
    excerpt: 'The move to an aluminum alloy frame reduces weight by 15%, lowering insurance costs while maintaining structural integrity for heavy loads.',
    category: 'Engineering',
    date: 'Oct 18, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1533106958155-d2dce134263c?q=80&w=800&auto=format&fit=crop',
    readTime: '4 min read'
  },
  {
    id: '3',
    title: 'The Trade Hub Network',
    excerpt: 'We are rolling out truck-bay accessible superchargers designed specifically for trailers and heavy haulers.',
    category: 'Infrastructure',
    date: 'Oct 10, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1621258816785-5a7a78378d38?q=80&w=800&auto=format&fit=crop',
    readTime: '3 min read'
  }
];