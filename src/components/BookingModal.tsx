import { useState, useEffect } from 'react';
import { X, Calendar, Phone, Mail, User, Sparkles, CheckCircle2, MessageSquare } from 'lucide-react';
import { PACKAGES } from '../data/venueData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledDetails?: {
    guestCount?: number;
    packageId?: string;
    totalEstimatedPKR?: number;
  };
}

export function BookingModal({ isOpen, onClose, prefilledDetails }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: 'Barat Ceremony',
    eventDate: '',
    guestCount: prefilledDetails?.guestCount || 400,
    venueChoice: 'Royal Marquee (Indoor Air-Conditioned)',
    packageChoice: prefilledDetails?.packageId || 'gold',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (prefilledDetails) {
      setFormData((prev) => ({
        ...prev,
        guestCount: prefilledDetails.guestCount || prev.guestCount,
        packageChoice: prefilledDetails.packageId || prev.packageChoice,
      }));
    }
  }, [prefilledDetails]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const selectedPkgName = PACKAGES.find((p) => p.id === formData.packageChoice)?.name || 'Gold Royal';

  const waMessage = encodeURIComponent(
    `Assalam-o-Alaikum Jugnu Marquee team!\nI would like to inquire about booking availability for:\n- Name: ${formData.name}\n- Ceremony: ${formData.eventType}\n- Date: ${formData.eventDate || 'TBD'}\n- Guests: ${formData.guestCount}\n- Package: ${selectedPkgName}\n- Phone: ${formData.phone}`
  );

  const waUrl = `https://wa.me/923005846800?text=${waMessage}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
      <div className="bg-slate-900 border border-amber-500/30 rounded-2xl max-w-xl w-full p-6 sm:p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-slate-950 text-slate-400 hover:text-slate-100 border border-slate-800"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Calendar className="w-4 h-4" />
              <span>Reservation &amp; Availability Inquiry</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-slate-100 mb-1">
              Book Your Celebration at Jugnu
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Provide your ceremony details below. Our event director will review date availability and contact you within 2 hours.
            </p>

            {prefilledDetails?.totalEstimatedPKR && (
              <div className="bg-slate-950 p-3 rounded-xl border border-amber-500/30 mb-6 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase">Estimated Quote</span>
                  <span className="font-serif font-bold text-amber-300 text-sm">
                    PKR {prefilledDetails.totalEstimatedPKR.toLocaleString()}
                  </span>
                </div>
                <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-500/30">
                  {formData.guestCount} Guests
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Your Full Name *</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Shahmir Chaudhry"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-3 py-2 text-slate-200 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">WhatsApp / Mobile *</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="+92 300 1234567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-3 py-2 text-slate-200 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Email Address</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      placeholder="shahmir@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-3 py-2 text-slate-200 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Ceremony Type *</label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:border-amber-500"
                  >
                    <option value="Barat Ceremony">Barat Ceremony</option>
                    <option value="Royal Valima">Royal Valima Reception</option>
                    <option value="Shendi / Mehendi">Shendi / Mehendi</option>
                    <option value="Engagement">Engagement Celebration</option>
                    <option value="Corporate Event">Corporate Gala</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Target Ceremony Date</label>
                  <input
                    type="date"
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Expected Guests</label>
                  <input
                    type="number"
                    min="50"
                    max="2000"
                    value={formData.guestCount}
                    onChange={(e) => setFormData({ ...formData, guestCount: Number(e.target.value) })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Venue Preference</label>
                  <select
                    value={formData.venueChoice}
                    onChange={(e) => setFormData({ ...formData, venueChoice: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:border-amber-500"
                  >
                    <option value="Royal Marquee (Indoor Air-Conditioned)">The Royal Marquee (Indoor)</option>
                    <option value="Emerald Event Lawn (Outdoor Garden)">The Emerald Event Lawn (Outdoor)</option>
                    <option value="Both Marquee & Lawn (Combined)">Combined Indoor + Outdoor Lawn</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Special Requirements / Notes</label>
                <textarea
                  rows={2}
                  placeholder="e.g. Stage LED preferences, Qawwali stage setup, specific catering menu requests..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-slate-200 focus:outline-none focus:border-amber-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gold-gradient text-slate-950 font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all shadow-lg mt-2"
              >
                Submit Reservation Request
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40">
              <CheckCircle2 className="w-8 h-8 text-emerald-400" />
            </div>

            <h3 className="font-serif text-2xl font-bold text-slate-100">
              Inquiry Received!
            </h3>
            <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
              Thank you, <span className="text-amber-300 font-semibold">{formData.name}</span>! Your venue inquiry for <span className="text-amber-300 font-semibold">{formData.eventType}</span> ({formData.guestCount} guests) has been submitted to the Jugnu Marquee management team.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                Chat Directly on WhatsApp
              </a>

              <button
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-950 text-slate-300 border border-slate-800 text-xs font-semibold hover:bg-slate-800"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
