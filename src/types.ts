export interface AIPromptItem {
  id: number;
  title: string;
  category: 'exterior' | 'interior' | 'stage' | 'lawn' | 'dining' | 'event' | 'mix';
  aspectRatio: string;
  prompt: string;
  image: string;
  description: string;
  tags: string[];
}

export interface VenueSpace {
  id: string;
  name: string;
  subtitle: string;
  capacity: string;
  area: string;
  image: string;
  features: string[];
  description: string;
}

export interface EventPackage {
  id: string;
  name: string;
  pricePerGuest: number; // in PKR
  popular?: boolean;
  tagline: string;
  includes: string[];
  decorTier: string;
}

export interface Testimonial {
  id: string;
  coupleName: string;
  eventType: string;
  date: string;
  quote: string;
  rating: number;
  image: string;
}

export interface BookingForm {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  guestCount: number;
  venueChoice: string;
  notes: string;
}
