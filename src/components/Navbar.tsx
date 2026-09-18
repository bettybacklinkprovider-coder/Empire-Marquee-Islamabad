import { useState, useEffect } from 'react';
import { Sparkles, Calendar, Phone, Menu, X, MapPin, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  onNavigateToPromptStudio: () => void;
  onNavigateToEstimator: () => void;
}

export function Navbar({ onOpenBooking, onNavigateToPromptStudio, onNavigateToEstimator }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b0f17]/95 backdrop-blur-md border-b border-amber-500/20 py-3 shadow-2xl shadow-black/80'
          : 'bg-gradient-to-b from-[#0b0f17]/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-600 via-amber-400 to-amber-200 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 text-slate-950 stroke-[2.5]" />
            </div>
            <div>
              <span className="font-serif text-2xl font-bold tracking-wider text-gold-gradient block leading-none">
                JUGNU
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-slate-400 font-medium block mt-1">
                Marquee &amp; Event Lawn
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a href="#overview" className="hover:text-amber-400 transition-colors">
              Overview
            </a>
            <a href="#ai-prompts" className="hover:text-amber-400 transition-colors flex items-center gap-1.5 text-amber-300 font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              AI Prompt Studio
            </a>
            <a href="#venues" className="hover:text-amber-400 transition-colors">
              Venues &amp; Spaces
            </a>
            <a href="#calculator" className="hover:text-amber-400 transition-colors" onClick={onNavigateToEstimator}>
              Cost Estimator
            </a>
            <a href="#packages" className="hover:text-amber-400 transition-colors">
              Packages
            </a>
            <a href="#gallery" className="hover:text-amber-400 transition-colors">
              Gallery
            </a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">
              Contact
            </a>
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+923005846800"
              className="flex items-center gap-2 text-xs font-semibold px-3 py-2 rounded-lg bg-slate-900/80 border border-amber-500/20 text-slate-300 hover:text-amber-300 hover:border-amber-500/40 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              +92 300 JUGNU
            </a>

            <button
              onClick={onOpenBooking}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gold-gradient text-slate-950 font-semibold text-xs uppercase tracking-wider shadow-md hover:brightness-110 active:scale-95 transition-all"
            >
              <Calendar className="w-3.5 h-3.5" />
              Book Venue
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-amber-400 hover:bg-slate-900 border border-slate-800"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0b0f17]/98 border-b border-amber-500/20 px-4 pt-4 pb-6 mt-3 space-y-3">
          <a
            href="#overview"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm text-slate-200 hover:text-amber-400"
          >
            Overview
          </a>
          <a
            href="#ai-prompts"
            onClick={() => {
              setMobileMenuOpen(false);
              onNavigateToPromptStudio();
            }}
            className="flex items-center justify-between py-2 text-sm text-amber-300 font-semibold"
          >
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              AI Image Prompt Studio
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">10 Prompts</span>
          </a>
          <a
            href="#venues"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm text-slate-200 hover:text-amber-400"
          >
            Venues &amp; Spaces
          </a>
          <a
            href="#calculator"
            onClick={() => {
              setMobileMenuOpen(false);
              onNavigateToEstimator();
            }}
            className="block py-2 text-sm text-slate-200 hover:text-amber-400"
          >
            Cost Estimator
          </a>
          <a
            href="#packages"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm text-slate-200 hover:text-amber-400"
          >
            Packages &amp; Menus
          </a>
          <a
            href="#gallery"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm text-slate-200 hover:text-amber-400"
          >
            Photo Gallery
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm text-slate-200 hover:text-amber-400"
          >
            Location &amp; Contact
          </a>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-2.5 rounded-lg bg-gold-gradient text-slate-950 font-bold text-xs uppercase tracking-wider text-center"
            >
              Book Venue Inquiry
            </button>
            <a
              href="tel:+923005846800"
              className="w-full py-2 rounded-lg bg-slate-900 border border-slate-800 text-center text-xs text-amber-300 font-medium flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" /> Call +92 300 5846800
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
