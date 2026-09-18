import { TESTIMONIALS } from '../data/venueData';
import { Star, Quote } from 'lucide-react';

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-[#0b0f17] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 block mb-2">
            Real Experiences
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-slate-100 mb-4">
            Couples &amp; Families <span className="text-gold-gradient">Love Jugnu</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Discover why Jugnu Marquee &amp; Event Lawn is Lahore’s top-rated venue for memorable wedding celebrations.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 relative flex flex-col justify-between hover:border-amber-500/30 transition-all shadow-xl"
            >
              <Quote className="w-8 h-8 text-amber-500/20 absolute top-6 right-6" />

              <div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center gap-3">
                <img
                  src={t.image}
                  alt={t.coupleName}
                  className="w-10 h-10 rounded-full object-cover border border-amber-500/30"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-serif font-bold text-sm text-slate-100">{t.coupleName}</h4>
                  <span className="text-[10px] text-amber-400 block">{t.eventType} • {t.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
