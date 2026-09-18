import { useState } from 'react';
import { VENUE_SPACES } from '../data/venueData';
import { CheckCircle, ShieldCheck, Users, Maximize2, Sparkles, ChevronRight } from 'lucide-react';

interface VenuesSectionProps {
  onOpenBooking: () => void;
}

export function VenuesSection({ onOpenBooking }: VenuesSectionProps) {
  const [activeVenueId, setActiveVenueId] = useState(VENUE_SPACES[0].id);

  const currentVenue = VENUE_SPACES.find((v) => v.id === activeVenueId) || VENUE_SPACES[0];

  return (
    <section id="venues" className="py-20 bg-[#0b0f17] relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 block mb-2">
            Unrivaled Elegance
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-slate-100 mb-4">
            Our World-Class <span className="text-gold-gradient">Spaces &amp; Venues</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Whether you envision a grand indoor royal marquee or a romantic open-sky garden lawn, Jugnu provides state-of-the-art facilities crafted for flawless celebrations.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-10 overflow-x-auto pb-2">
          {VENUE_SPACES.map((space) => {
            const isActive = space.id === activeVenueId;
            return (
              <button
                key={space.id}
                onClick={() => setActiveVenueId(space.id)}
                className={`px-5 py-3 rounded-xl font-medium text-xs sm:text-sm tracking-wide transition-all flex items-center gap-2 ${
                  isActive
                    ? 'bg-gold-gradient text-slate-950 font-bold shadow-lg shadow-amber-500/20'
                    : 'bg-slate-900 border border-slate-800 text-slate-300 hover:border-amber-500/30'
                }`}
              >
                {space.name}
              </button>
            );
          })}
        </div>

        {/* Selected Venue Showcase */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Image Side */}
          <div className="lg:col-span-7 relative min-h-[340px] sm:min-h-[420px]">
            <img
              src={currentVenue.image}
              alt={currentVenue.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-slate-900/90" />

            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
              <span className="px-3 py-1 rounded-full bg-slate-950/80 border border-amber-500/30 text-amber-300 text-xs font-semibold backdrop-blur-md">
                {currentVenue.subtitle}
              </span>
            </div>
          </div>

          {/* Details Side */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              <h3 className="font-serif text-3xl font-bold text-slate-100 mb-2">
                {currentVenue.name}
              </h3>
              <p className="text-xs text-amber-400 font-medium mb-4">{currentVenue.subtitle}</p>

              {/* Stats badges */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-3">
                  <Users className="w-5 h-5 text-amber-400" />
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Capacity</span>
                    <span className="text-xs font-bold text-slate-200">{currentVenue.capacity}</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-3">
                  <Maximize2 className="w-5 h-5 text-amber-400" />
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Floor Area</span>
                    <span className="text-xs font-bold text-slate-200">{currentVenue.area}</span>
                  </div>
                </div>
              </div>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                {currentVenue.description}
              </p>

              {/* Features List */}
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">
                Key Venue Highlights
              </h4>
              <ul className="space-y-2 mb-6">
                {currentVenue.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={onOpenBooking}
              className="w-full py-3 rounded-xl bg-gold-gradient text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition-all shadow-lg"
            >
              <span>Inquire Venue Availability</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
