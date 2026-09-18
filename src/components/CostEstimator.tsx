import { useState } from 'react';
import { Calculator, Sparkles, Check, ChevronRight, DollarSign, Users, Award, Calendar } from 'lucide-react';
import { PACKAGES } from '../data/venueData';

interface CostEstimatorProps {
  onOpenBookingWithDetails: (details: { guestCount: number; packageId: string; totalEstimatedPKR: number }) => void;
}

export function CostEstimator({ onOpenBookingWithDetails }: CostEstimatorProps) {
  const [guestCount, setGuestCount] = useState<number>(400);
  const [eventType, setEventType] = useState<string>('Barat Ceremony');
  const [venueType, setVenueType] = useState<'marquee' | 'lawn' | 'both'>('marquee');
  const [selectedPackageId, setSelectedPackageId] = useState<string>('gold');

  // Add-ons state
  const [addons, setAddons] = useState({
    pyros: false,
    ledWall: true,
    trussLighting: false,
    qawwaliStage: false,
    valetService: true
  });

  const selectedPkg = PACKAGES.find((p) => p.id === selectedPackageId) || PACKAGES[1];

  // Base catering cost = guestCount * pricePerGuest
  const cateringCost = guestCount * selectedPkg.pricePerGuest;

  // Venue base rental charge depending on choice
  let venueBaseCost = 0;
  if (venueType === 'marquee') venueBaseCost = 250000;
  if (venueType === 'lawn') venueBaseCost = 200000;
  if (venueType === 'both') venueBaseCost = 380000;

  // Calculate Addon total
  let addonCost = 0;
  if (addons.pyros) addonCost += 45000;
  if (addons.ledWall) addonCost += 60000;
  if (addons.trussLighting) addonCost += 85000;
  if (addons.qawwaliStage) addonCost += 120000;
  if (addons.valetService) addonCost += 35000;

  const totalEstimatedPKR = cateringCost + venueBaseCost + addonCost;

  // Format currency in PKR
  const formatPKR = (amount: number) => {
    return new Intl.NumberFormat('en-PK', {
      style: 'currency',
      currency: 'PKR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const handleProceedToBooking = () => {
    onOpenBookingWithDetails({
      guestCount,
      packageId: selectedPackageId,
      totalEstimatedPKR
    });
  };

  return (
    <section id="calculator" className="py-20 bg-[#080b11] relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-3">
            <Calculator className="w-4 h-4 text-amber-400" />
            <span>Transparent Event Budgeting</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-slate-100 mb-4">
            Instant <span className="text-gold-gradient">Event Cost Estimator</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Calculate your wedding or event budget in real time based on guest count, venue choice, menu package, and customized production add-ons.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            {/* 1. Guest Count Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-200 flex items-center gap-2">
                  <Users className="w-4 h-4 text-amber-400" />
                  Estimated Guests
                </label>
                <span className="px-3 py-1 rounded-lg bg-amber-500/20 text-amber-300 font-serif font-bold text-lg border border-amber-500/30">
                  {guestCount} Guests
                </span>
              </div>
              <input
                type="range"
                min="100"
                max="1500"
                step="25"
                value={guestCount}
                onChange={(e) => setGuestCount(Number(e.target.value))}
                className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                <span>100 Guests (Intimate)</span>
                <span>800 Guests</span>
                <span>1,500+ Guests (Grand)</span>
              </div>
            </div>

            {/* 2. Event Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-200 mb-2">
                Event Ceremony
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {['Barat Ceremony', 'Royal Valima', 'Shendi / Mehendi', 'Engagement', 'Qawwali Night', 'Corporate Gala'].map((evt) => (
                  <button
                    key={evt}
                    onClick={() => setEventType(evt)}
                    className={`py-2 px-3 rounded-lg text-xs font-medium transition-all ${
                      eventType === evt
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/50 font-bold'
                        : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-slate-200'
                    }`}
                  >
                    {evt}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Venue Choice */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-200 mb-2">
                Venue Preference
              </label>
              <div className="grid grid-cols-3 gap-3">
                <button
                  onClick={() => setVenueType('marquee')}
                  className={`p-3 rounded-xl text-xs font-semibold text-center transition-all ${
                    venueType === 'marquee'
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/50'
                      : 'bg-slate-950 text-slate-400 border border-slate-800'
                  }`}
                >
                  <span className="block font-serif text-sm">Royal Marquee</span>
                  <span className="text-[10px] text-slate-500 block">Indoor Air-Conditioned</span>
                </button>

                <button
                  onClick={() => setVenueType('lawn')}
                  className={`p-3 rounded-xl text-xs font-semibold text-center transition-all ${
                    venueType === 'lawn'
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/50'
                      : 'bg-slate-950 text-slate-400 border border-slate-800'
                  }`}
                >
                  <span className="block font-serif text-sm">Emerald Lawn</span>
                  <span className="text-[10px] text-slate-500 block">Open-Air Garden</span>
                </button>

                <button
                  onClick={() => setVenueType('both')}
                  className={`p-3 rounded-xl text-xs font-semibold text-center transition-all ${
                    venueType === 'both'
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/50'
                      : 'bg-slate-950 text-slate-400 border border-slate-800'
                  }`}
                >
                  <span className="block font-serif text-sm">Both Venues</span>
                  <span className="text-[10px] text-slate-500 block">Indoor + Outdoor</span>
                </button>
              </div>
            </div>

            {/* 4. Menu Package Choice */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-200 mb-2">
                Catering &amp; Menu Package
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {PACKAGES.map((pkg) => {
                  const isSelected = pkg.id === selectedPackageId;
                  return (
                    <button
                      key={pkg.id}
                      onClick={() => setSelectedPackageId(pkg.id)}
                      className={`p-3.5 rounded-xl text-left border transition-all relative ${
                        isSelected
                          ? 'bg-slate-950 border-amber-500 text-amber-300 shadow-md'
                          : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      {pkg.popular && (
                        <span className="absolute -top-2 right-2 px-1.5 py-0.5 rounded bg-amber-500 text-slate-950 text-[9px] font-bold uppercase">
                          Most Popular
                        </span>
                      )}
                      <span className="block font-serif text-sm font-bold text-slate-200">
                        {pkg.name}
                      </span>
                      <span className="block text-xs font-semibold text-amber-400 mt-1">
                        Rs. {pkg.pricePerGuest.toLocaleString()} / head
                      </span>
                      <span className="block text-[10px] text-slate-500 mt-1">
                        {pkg.decorTier}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 5. Production Add-ons */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-200 mb-2">
                Special Enhancements &amp; Production
              </label>
              <div className="space-y-2">
                <label className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950 border border-slate-800 cursor-pointer text-xs">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={addons.ledWall}
                      onChange={(e) => setAddons({ ...addons, ledWall: e.target.checked })}
                      className="accent-amber-400 rounded"
                    />
                    <span className="text-slate-300 font-medium">40ft Ultra-HD LED Stage Backdrop Wall</span>
                  </div>
                  <span className="text-amber-400 font-semibold">+ PKR 60,000</span>
                </label>

                <label className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950 border border-slate-800 cursor-pointer text-xs">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={addons.pyros}
                      onChange={(e) => setAddons({ ...addons, pyros: e.target.checked })}
                      className="accent-amber-400 rounded"
                    />
                    <span className="text-slate-300 font-medium">Grand Entrance Cold Pyros &amp; Heavy Fog</span>
                  </div>
                  <span className="text-amber-400 font-semibold">+ PKR 45,000</span>
                </label>

                <label className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950 border border-slate-800 cursor-pointer text-xs">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={addons.trussLighting}
                      onChange={(e) => setAddons({ ...addons, trussLighting: e.target.checked })}
                      className="accent-amber-400 rounded"
                    />
                    <span className="text-slate-300 font-medium">Concert Truss &amp; Moving Head Intelligent Lights</span>
                  </div>
                  <span className="text-amber-400 font-semibold">+ PKR 85,000</span>
                </label>

                <label className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950 border border-slate-800 cursor-pointer text-xs">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={addons.valetService}
                      onChange={(e) => setAddons({ ...addons, valetService: e.target.checked })}
                      className="accent-amber-400 rounded"
                    />
                    <span className="text-slate-300 font-medium">VIP Valet Parking &amp; Red Carpet Security Crew</span>
                  </div>
                  <span className="text-amber-400 font-semibold">+ PKR 35,000</span>
                </label>
              </div>
            </div>
          </div>

          {/* Budget Breakdown Summary Side */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border border-amber-500/30 rounded-2xl p-6 sm:p-8 space-y-6 sticky top-28 shadow-2xl">
            <div className="pb-4 border-b border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-amber-400 uppercase tracking-widest font-bold block">
                  Estimated Summary
                </span>
                <h3 className="font-serif text-2xl font-bold text-slate-100">Budget Breakdown</h3>
              </div>
              <Sparkles className="w-6 h-6 text-amber-400" />
            </div>

            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400">Ceremony &amp; Guests:</span>
                <span className="font-medium text-slate-200">{eventType} ({guestCount} Guests)</span>
              </div>

              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400">Catering ({selectedPkg.name}):</span>
                <span className="font-semibold text-amber-300">{formatPKR(cateringCost)}</span>
              </div>

              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400">Venue Base Charge:</span>
                <span className="font-semibold text-amber-300">{formatPKR(venueBaseCost)}</span>
              </div>

              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400">Selected Production Add-ons:</span>
                <span className="font-semibold text-amber-300">{formatPKR(addonCost)}</span>
              </div>
            </div>

            {/* Total Highlight Box */}
            <div className="bg-slate-950 p-5 rounded-xl border border-amber-500/40 text-center">
              <span className="text-[10px] uppercase tracking-widest text-slate-400 block mb-1">
                Total Estimated Cost
              </span>
              <span className="font-serif text-3xl sm:text-4xl font-bold text-gold-gradient block mb-1">
                {formatPKR(totalEstimatedPKR)}
              </span>
              <span className="text-[11px] text-slate-400 block">
                ≈ PKR {Math.round(totalEstimatedPKR / guestCount).toLocaleString()} per guest overall
              </span>
            </div>

            <button
              onClick={handleProceedToBooking}
              className="w-full py-3.5 rounded-xl bg-gold-gradient text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition-all shadow-lg"
            >
              <Calendar className="w-4 h-4" />
              Lock Date with Estimated Quote
            </button>

            <p className="text-[10px] text-slate-500 text-center italic">
              *Estimates include standard government taxes and hall decor setup. Final customized menu options can be discussed with our event manager.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
