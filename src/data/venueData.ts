import { AIPromptItem, VenueSpace, EventPackage, Testimonial } from '../types';

import heroNightImg from '../assets/images/jugnu_hero_night_1789707488275.jpg';
import marqueeInteriorImg from '../assets/images/marquee_interior_1789707501137.jpg';
import stageDecorImg from '../assets/images/stage_decoration_1789707513996.jpg';
import eventLawnImg from '../assets/images/event_lawn_night_1789707526495.jpg';
import diningAreaImg from '../assets/images/dining_area_1789707902819.jpg';
import exteriorDaytimeImg from '../assets/images/exterior_daytime_1789707933706.jpg';
import engagementEventImg from '../assets/images/engagement_event_1789707950776.jpg';

export const AI_PROMPTS: AIPromptItem[] = [
  {
    id: 1,
    title: "1. Hero Image",
    category: "exterior",
    aspectRatio: "16:9",
    image: heroNightImg,
    description: "Grand elegant entrance illuminated at night with warm golden architectural lighting.",
    tags: ["Night", "Exterior", "16:9", "Grand Entrance"],
    prompt: `Create a photorealistic luxury Pakistani wedding marquee and event lawn at night, grand elegant entrance, beautifully illuminated architecture, warm golden lighting, sophisticated wedding décor, landscaped green lawn, elegant floral decorations, luxurious atmosphere, realistic photography, wide cinematic composition, no people, no text, premium event venue photography, 16:9.`
  },
  {
    id: 2,
    title: "2. Marquee Interior",
    category: "interior",
    aspectRatio: "16:9",
    image: marqueeInteriorImg,
    description: "Spacious opulent hall with crystal chandeliers, round guest tables, and royal backdrop.",
    tags: ["Interior", "Chandeliers", "Hall", "16:9"],
    prompt: `Photorealistic luxurious Pakistani wedding marquee interior, spacious elegant hall, beautiful ceiling lights, chandeliers, round guest tables, premium chairs, sophisticated floral decorations, beautifully decorated wedding stage in the background, warm ambient lighting, realistic professional event photography, no people, no text.`
  },
  {
    id: 3,
    title: "3. Wedding Setup",
    category: "interior",
    aspectRatio: "16:9",
    image: marqueeInteriorImg,
    description: "High-end reception setup featuring sophisticated table arrangements and stage lighting.",
    tags: ["Reception", "Table Setup", "Interior"],
    prompt: `High-end Pakistani wedding reception setup inside a luxurious marquee, beautifully decorated stage, elegant floral arrangements, sophisticated table settings, chandeliers, premium seating, warm golden lighting, spacious venue, photorealistic professional photography, no people, no text.`
  },
  {
    id: 4,
    title: "4. Event Lawn",
    category: "lawn",
    aspectRatio: "16:9",
    image: eventLawnImg,
    description: "Open-air landscaped lawn under the night sky with ambient fairy lights and seating.",
    tags: ["Outdoor Lawn", "Evening", "Landscaped"],
    prompt: `Beautiful luxury outdoor event lawn in Pakistan, perfectly maintained green grass, elegant wedding seating, decorative lighting, floral arrangements, stylish stage, trees and landscaped surroundings, evening atmosphere, premium wedding venue photography, photorealistic, no people, no text.`
  },
  {
    id: 5,
    title: "5. Stage Decoration",
    category: "stage",
    aspectRatio: "4:3",
    image: stageDecorImg,
    description: "Opulent floral backdrop with luxury sofa seating and delicate crystal drapery.",
    tags: ["Stage Decor", "Floral Backdrop", "Sofas"],
    prompt: `Luxury Pakistani wedding stage decoration inside an elegant marquee, large sophisticated floral backdrop, premium sofa seating, decorative lights, elegant drapery, luxurious modern wedding décor, realistic details, professional event photography, no people, no text.`
  },
  {
    id: 6,
    title: "6. Dining Area",
    category: "dining",
    aspectRatio: "16:9",
    image: diningAreaImg,
    description: "Upscale dining arrangement with fine porcelain tableware and centerpieces.",
    tags: ["Dining", "Buffet", "Tableware"],
    prompt: `Premium Pakistani wedding dining setup inside a luxury marquee, beautifully arranged round tables, elegant chairs, sophisticated tableware, decorative centerpieces, chandeliers and warm ambient lighting, spacious upscale event venue, photorealistic photography, no people, no text.`
  },
  {
    id: 7,
    title: "7. Exterior Daytime",
    category: "exterior",
    aspectRatio: "16:9",
    image: exteriorDaytimeImg,
    description: "Crisp architectural view of Jugnu venue during golden daylight hours.",
    tags: ["Daytime", "Architecture", "Landscaped"],
    prompt: `Photorealistic daytime exterior of a premium Pakistani wedding marquee and event lawn, grand entrance, modern elegant architecture, landscaped green lawn, beautiful flowers, clean surroundings, sophisticated venue design, professional real estate photography, no people, no text.`
  },
  {
    id: 8,
    title: "8. Night Exterior",
    category: "exterior",
    aspectRatio: "16:9",
    image: heroNightImg,
    description: "Cinematic wide-angle view of illuminated marquee glowing against the dark sky.",
    tags: ["Night", "Exterior", "Cinematic"],
    prompt: `Luxury Pakistani event marquee exterior at night, grand entrance glowing with elegant architectural lighting, beautifully illuminated lawn, wedding decorations, sophisticated atmosphere, cinematic professional venue photography, realistic, no people, no text, wide 16:9 composition.`
  },
  {
    id: 9,
    title: "9. Engagement Event",
    category: "event",
    aspectRatio: "16:9",
    image: "https://i.pinimg.com/736x/01/d0/a8/01d0a8914ce15d8f5a8a83bcedeb15c7.jpg",
    description: "Intimate celebration setup featuring pastel blooms and soft romantic lighting.",
    tags: ["Engagement", "Pastel Decor", "Intimate"],
    prompt: `Elegant Pakistani engagement celebration setup inside a luxury event marquee, sophisticated floral stage, pastel decorations, beautiful lighting, premium guest seating, modern romantic décor, photorealistic professional event photography, no people, no text.`
  },
  {
    id: 10,
    title: "10. Gallery Mix",
    category: "mix",
    aspectRatio: "16:9",
    image: marqueeInteriorImg,
    description: "Comprehensive visual mosaic showcasing venue highlights, lighting, and decor.",
    tags: ["Gallery", "Mosaic", "Full Venue"],
    prompt: `Create a collection of photorealistic luxury Pakistani event venue photographs showing a wedding marquee, decorated interior, wedding stage, outdoor lawn, reception setup, dining area, floral décor and nighttime venue lighting, consistent premium visual style, realistic professional photography, no people, no text.`
  }
];

export const VENUE_SPACES: VenueSpace[] = [
  {
    id: "royal-marquee",
    name: "The Royal Marquee",
    subtitle: "Grand Indoor Air-Conditioned Arena",
    capacity: "500 - 1,200 Guests",
    area: "16,000 Sq. Ft.",
    image: marqueeInteriorImg,
    features: [
      "100% Centralized HVAC Cooling & Heating",
      "Bespoke Crystal Chandeliers & Ambient RGB Lighting",
      "Acoustic Soundproofing & Integrated Audio System",
      "Elevated Stage with 40ft LED Wall Setup",
      "Dedicated Royal VIP Dining Lounge"
    ],
    description: "Designed for royal wedding receptions, grand Barat ceremonies, and international corporate galas. Features soaring ceiling height and clear-span architecture."
  },
  {
    id: "emerald-lawn",
    name: "The Emerald Event Lawn",
    subtitle: "Lush Open-Air Garden Venue",
    capacity: "300 - 1,500 Guests",
    area: "22,000 Sq. Ft.",
    image: eventLawnImg,
    features: [
      "Manicured Bermuda Turf with Natural Drainage",
      "Ambient Canopy Lighting & Illuminating Palm Trees",
      "Open-Sky Live BBQ & Culinary Stalls Area",
      "Dedicated Stage & Covered Gazebo",
      "Private Entrance for Barat Horse / Bride Doli Entry"
    ],
    description: "An enchanting open-air haven perfect for Shendi nights, Valima receptions, Qawwali evenings, and starry outdoor celebrations under Lahore's night sky."
  },
  {
    id: "bridal-suites",
    name: "VIP Bridal & Groom Suites",
    subtitle: "Private Luxury Preparation Sanctuary",
    capacity: "Private Access",
    area: "1,200 Sq. Ft.",
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Vanity Mirror Station with Professional Ring Lighting",
      "En-suite Marble Bathroom & Refreshment Bar",
      "Private Guarded Access with Biometric / PIN Lock",
      "Full Body Fitting Mirrors & Garment Steamer",
      "Comfy Lounge Seating for Family & Stylists"
    ],
    description: "Relax in absolute privacy before your grand entrance with dedicated hospitality staff at your service."
  }
];

export const PACKAGES: EventPackage[] = [
  {
    id: "silver",
    name: "Silver Elegance",
    pricePerGuest: 2800,
    tagline: "Sophisticated basics for intimate & grand celebrations",
    decorTier: "Standard Floral & Drapery",
    includes: [
      "Full Venue Rental (4 Hours)",
      "Standard Stage Setup with Fresh Flowers",
      "Round Guest Tables with Damask Linen",
      "1-Dish Pakistani Menu (Mutton Qorma/Biryani + Naan + Sweet)",
      "Standard Stage & Ambient Hall Lighting",
      "Basic Sound System & Wireless Mics",
      "Guarded Parking & Security Personnel"
    ]
  },
  {
    id: "gold",
    name: "Gold Royal",
    pricePerGuest: 3900,
    popular: true,
    tagline: "Our most requested package for lavish Barat & Valima",
    decorTier: "Premium Fresh Floral & Crystal Theme",
    includes: [
      "Full Venue Rental (Marquee or Lawn - 5 Hours)",
      "Custom Grand Stage Decor with Theme Backdrop",
      "Crystal Chandeliers & Warm Golden Ambiance",
      "3-Course Royal Menu (Mutton Handi, Chicken Kabab, Biryani, 2 Sweets)",
      "Live BBQ Stalls or Mocktail Bar Setup",
      "Dedicated VIP Bridal Suite Access",
      "Valet Parking & Red Carpet Grand Entrance"
    ]
  },
  {
    id: "platinum",
    name: "Platinum Sovereign",
    pricePerGuest: 5400,
    tagline: "Bespoke luxury experience with zero compromise",
    decorTier: "Ultra Luxury Imported Blooms & Custom Architecture",
    includes: [
      "Combined Marquee + Outdoor Lawn Access",
      "Custom Architectural Backdrop & 3D LED Stage",
      "5-Course Gourmet Buffet (Mutton, Live Seafood, Continental Stalls)",
      "Special Effects (Cold Pyros, Fog Entry, Flower Shower)",
      "Concert Grade Audio System & Intelligent Truss Lighting",
      "Exclusive Bridal & Groom Suite Services",
      "Full Valet Service + Dedicated Event Director"
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    coupleName: "Shahmir & Aisha Khan",
    eventType: "Grand Barat Ceremony",
    date: "December 2025",
    quote: "Jugnu Marquee exceeded every expectation! The lighting, grand stage floral backdrop, and warm hospitality made our Barat unforgettable. Our 900 guests were served seamlessly.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "2",
    coupleName: "Zayn & Fatima Malik",
    eventType: "Outdoor Shendi Night",
    date: "January 2026",
    quote: "We hosted our Shendi on the Emerald Lawn. The fairy lights on the trees and live Qawwali stage setup felt like a fairy tale. Highly recommended!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "3",
    coupleName: "Hamza & Mariam Chaudhry",
    eventType: "Royal Valima Reception",
    date: "February 2026",
    quote: "The air conditioning and soundproofing inside the Royal Marquee are top notch. Food was served hot and fresh. The AI prompt library on their site helped us visualize decor beforehand!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=400&q=80"
  }
];
