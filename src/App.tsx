import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PromptStudio } from './components/PromptStudio';
import { VenuesSection } from './components/VenuesSection';
import { CostEstimator } from './components/CostEstimator';
import { PackagesSection } from './components/PackagesSection';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BookingModal } from './components/BookingModal';
import { Footer } from './components/Footer';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [prefilledBookingDetails, setPrefilledBookingDetails] = useState<{
    guestCount?: number;
    packageId?: string;
    totalEstimatedPKR?: number;
  }>({});

  const handleOpenBooking = () => {
    setPrefilledBookingDetails({});
    setBookingModalOpen(true);
  };

  const handleOpenBookingWithDetails = (details: { guestCount: number; packageId: string; totalEstimatedPKR: number }) => {
    setPrefilledBookingDetails(details);
    setBookingModalOpen(true);
  };

  const handleOpenBookingWithPackage = (packageId: string) => {
    setPrefilledBookingDetails({ packageId });
    setBookingModalOpen(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-100 selection:bg-amber-500 selection:text-slate-950">
      {/* Navigation Header */}
      <Navbar
        onOpenBooking={handleOpenBooking}
        onNavigateToPromptStudio={() => scrollToSection('ai-prompts')}
        onNavigateToEstimator={() => scrollToSection('calculator')}
      />

      {/* Hero Section */}
      <Hero
        onOpenBooking={handleOpenBooking}
        onNavigateToPrompts={() => scrollToSection('ai-prompts')}
        onNavigateToCalculator={() => scrollToSection('calculator')}
      />

      {/* Main AI Image Prompt Studio (Centered on User Request) */}
      <PromptStudio />

      {/* Venues & Spaces */}
      <VenuesSection onOpenBooking={handleOpenBooking} />

      {/* Event Budget Calculator */}
      <CostEstimator onOpenBookingWithDetails={handleOpenBookingWithDetails} />

      {/* Hospitality Packages */}
      <PackagesSection onOpenBookingWithPackage={handleOpenBookingWithPackage} />

      {/* Gallery Showcase */}
      <GallerySection />

      {/* Reviews & Testimonials */}
      <TestimonialsSection />

      {/* Footer */}
      <Footer />

      {/* Reservation & Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        prefilledDetails={prefilledBookingDetails}
      />
    </div>
  );
}

