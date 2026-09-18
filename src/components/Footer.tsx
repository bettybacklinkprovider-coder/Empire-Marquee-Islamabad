import { Sparkles, Phone, Mail, MapPin, Clock, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#05070c] border-t border-slate-800 text-slate-400 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Col 1: Brand */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center shadow-lg">
                <Sparkles className="w-5 h-5 text-slate-950" />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-wider text-gold-gradient block leading-none">
                  JUGNU
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-slate-400 block mt-1">
                  Marquee &amp; Event Lawn
                </span>
              </div>
            </a>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Jugnu Marquee &amp; Event Lawn is Lahore’s landmark luxury destination for royal Barat receptions, vibrant Shendi nights, Valima banquets, and grand corporate galas.
            </p>

            <div className="pt-2 text-xs space-y-2">
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Main Raiwind Road / Bedian Avenue, Lahore, Punjab, Pakistan</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:+923005846800" className="hover:text-amber-300 transition-colors">
                  +92 300 JUGNU-00 (+92 300 5846800)
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="mailto:events@jugnumarquee.pk" className="hover:text-amber-300 transition-colors">
                  events@jugnumarquee.pk
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="font-serif font-bold text-slate-200 text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#overview" className="hover:text-amber-400 transition-colors">
                  Overview &amp; Highlights
                </a>
              </li>
              <li>
                <a href="#ai-prompts" className="hover:text-amber-400 transition-colors flex items-center gap-1.5 text-amber-300 font-semibold">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  AI Image Prompt Studio
                </a>
              </li>
              <li>
                <a href="#venues" className="hover:text-amber-400 transition-colors">
                  Royal Marquee &amp; Lawn
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-amber-400 transition-colors">
                  Event Cost Estimator
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-amber-400 transition-colors">
                  Wedding Packages
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-400 transition-colors">
                  Photo Showcase
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: AI Prompt Categories */}
          <div>
            <h4 className="font-serif font-bold text-slate-200 text-sm mb-4">10 AI Prompt Deck</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>1. Hero Image Prompt</li>
              <li>2. Marquee Interior Prompt</li>
              <li>3. Wedding Setup Prompt</li>
              <li>4. Event Lawn Prompt</li>
              <li>5. Stage Decoration Prompt</li>
              <li>6. Dining Area Setup</li>
              <li>7. Exterior Daytime</li>
              <li>8. Night Exterior</li>
            </ul>
          </div>

          {/* Col 4: Timings & Visits */}
          <div>
            <h4 className="font-serif font-bold text-slate-200 text-sm mb-4">Venue Visit Hours</h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-slate-200">Monday - Sunday</span>
                  <span className="text-slate-400">11:00 AM - 10:00 PM</span>
                </div>
              </div>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Prior appointment recommended for private bridal suite and hall walk-throughs.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© 2026 Jugnu Marquee &amp; Event Lawn. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-amber-300 hover:border-amber-500/30 transition-all flex items-center gap-2"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
