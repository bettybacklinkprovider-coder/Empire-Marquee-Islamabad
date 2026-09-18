import { PACKAGES } from '../data/venueData';
import { Check, Sparkles, Star, Calendar } from 'lucide-react';

interface PackagesSectionProps {
  onOpenBookingWithPackage: (packageId: string) => void;
}

export function PackagesSection({ onOpenBookingWithPackage }: PackagesSectionProps) {
  return (
    <section id="packages" className="py-20 bg-[#0b0f17] relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 block mb-2">
            Curated Hospitality
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-slate-100 mb-4">
            Curated Wedding &amp; <span className="text-gold-gradient">Event Packages</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Select from our carefully crafted package tiers offering world-class catering, opulent stage decorations, and attentive service tailored for Pakistani celebrations.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PACKAGES.map((pkg) => {
            return (
              <div
                key={pkg.id}
                className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  pkg.popular
                    ? 'bg-slate-900 border-2 border-amber-500 shadow-2xl shadow-amber-500/10 scale-102'
                    : 'bg-slate-900/60 border border-slate-800 hover:border-amber-500/30'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gold-gradient text-slate-950 font-bold text-[10px] uppercase tracking-wider flex items-center gap-1 shadow-md">
                    <Star className="w-3 h-3 fill-slate-950" />
                    Most Popular Choice
                  </div>
                )}

                <div>
                  <div className="text-center pb-6 border-b border-slate-800 mb-6">
                    <h3 className="font-serif text-2xl font-bold text-slate-100 mb-1">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-slate-400 mb-4">{pkg.tagline}</p>

                    <div className="inline-block bg-slate-950 px-4 py-2 rounded-xl border border-slate-800">
                      <span className="font-serif text-3xl font-bold text-gold-gradient">
                        PKR {pkg.pricePerGuest.toLocaleString()}
                      </span>
                      <span className="text-[10px] text-slate-400 block uppercase tracking-wider">
                        Per Guest All-Inclusive
                      </span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <span className="text-[10px] uppercase tracking-wider text-amber-400 font-bold block mb-2">
                      Decor &amp; Ambience Tier:
                    </span>
                    <p className="text-xs font-semibold text-slate-200 bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                      ✨ {pkg.decorTier}
                    </p>
                  </div>

                  {/* Included Items */}
                  <div className="space-y-3 mb-8">
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block">
                      Package Features Included:
                    </span>
                    {pkg.includes.map((inc, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onOpenBookingWithPackage(pkg.id)}
                  className={`w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                    pkg.popular
                      ? 'bg-gold-gradient text-slate-950 hover:brightness-110'
                      : 'bg-slate-950 text-slate-200 border border-slate-800 hover:border-amber-500/40 hover:text-amber-300'
                  }`}
                >
                  <Calendar className="w-3.5 h-3.5" />
                  Select {pkg.name}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
