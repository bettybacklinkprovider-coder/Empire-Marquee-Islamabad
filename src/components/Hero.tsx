import { Sparkles, Calendar, Calculator, ChevronRight, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';
import heroNightImg from '../assets/images/jugnu_hero_night_1789707488275.jpg';

interface HeroProps {
  onOpenBooking: () => void;
  onNavigateToPrompts: () => void;
  onNavigateToCalculator: () => void;
}

export function Hero({ onOpenBooking, onNavigateToPrompts, onNavigateToCalculator }: HeroProps) {
  return (
    <section id="overview" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroNightImg}
          alt="Jugnu Marquee & Event Lawn Night Exterior"
          className="w-full h-full object-cover object-center scale-105 transform filter brightness-75"
          referrerPolicy="no-referrer"
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17] via-[#0b0f17]/70 to-[#0b0f17]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0f17]/90 via-[#0b0f17]/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-12">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-amber-500/30 backdrop-blur-md mb-6">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-semibold text-amber-300 tracking-wider uppercase">
              Lahore's Premier Luxury Venue
            </span>
          </div>

          {/* Main Title */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-100 leading-[1.1] mb-6">
            Where Regal <br />
            <span className="text-gold-gradient italic font-normal">Wedding Dreams</span> <br />
            Illuminate the Night
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-8 max-w-2xl">
            Experience Pakistan’s finest event destination. Combining an opulent, fully climate-controlled indoor marquee with a lush 22,000 sq. ft. open-air garden lawn for unforgettable Barat, Valima, Shendi, and corporate galas.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3.5 rounded-xl bg-gold-gradient text-slate-950 font-bold text-sm uppercase tracking-wider shadow-lg shadow-amber-500/20 hover:brightness-110 active:scale-95 transition-all flex items-center gap-2.5"
            >
              <Calendar className="w-4 h-4" />
              Book Date Inquiry
            </button>

            <a
              href="#ai-prompts"
              onClick={onNavigateToPrompts}
              className="px-6 py-3.5 rounded-xl bg-slate-900/90 border border-amber-500/40 text-amber-300 hover:bg-amber-500/10 font-medium text-sm transition-all flex items-center gap-2 backdrop-blur-md"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              Explore 10 AI Image Prompts
            </a>

            <button
              onClick={onNavigateToCalculator}
              className="px-5 py-3.5 rounded-xl bg-slate-900/60 border border-slate-700 text-slate-300 hover:text-slate-100 font-medium text-sm transition-all flex items-center gap-2 backdrop-blur-md"
            >
              <Calculator className="w-4 h-4 text-slate-400" />
              Instant Cost Calculator
            </button>
          </div>

          {/* Quick Specs Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-800/80">
            <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 backdrop-blur-sm">
              <span className="block text-xl font-bold font-serif text-amber-400">1,500+</span>
              <span className="text-xs text-slate-400">Guest Capacity</span>
            </div>
            <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 backdrop-blur-sm">
              <span className="block text-xl font-bold font-serif text-amber-400">22,000</span>
              <span className="text-xs text-slate-400">Sq. Ft. Event Lawn</span>
            </div>
            <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 backdrop-blur-sm">
              <span className="block text-xl font-bold font-serif text-amber-400">100% HVAC</span>
              <span className="text-xs text-slate-400">Climate Control</span>
            </div>
            <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 backdrop-blur-sm">
              <span className="block text-xl font-bold font-serif text-amber-400">Power Backup</span>
              <span className="text-xs text-slate-400">Dual Heavy Gensets</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
