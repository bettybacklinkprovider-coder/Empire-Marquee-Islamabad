import { useState } from 'react';
import { AI_PROMPTS } from '../data/venueData';
import { Sparkles, Maximize2, X, Copy, Check } from 'lucide-react';
import { AIPromptItem } from '../types';

export function GallerySection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeLightboxItem, setActiveLightboxItem] = useState<AIPromptItem | null>(null);
  const [copiedModalPrompt, setCopiedModalPrompt] = useState(false);

  const filters = [
    { id: 'all', label: 'All Photos' },
    { id: 'interior', label: 'Marquee Interior' },
    { id: 'lawn', label: 'Event Lawn' },
    { id: 'stage', label: 'Stage Decor' },
    { id: 'exterior', label: 'Night Exterior' },
  ];

  const galleryItems = AI_PROMPTS.filter((item) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'interior') return item.category === 'interior' || item.id === 2 || item.id === 3;
    if (activeFilter === 'lawn') return item.category === 'lawn' || item.id === 4;
    if (activeFilter === 'stage') return item.category === 'stage' || item.id === 5;
    if (activeFilter === 'exterior') return item.category === 'exterior' || item.id === 1 || item.id === 8;
    return true;
  });

  return (
    <section id="gallery" className="py-20 bg-[#080b11] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 block mb-2">
            Visual Experience
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-slate-100 mb-4">
            Jugnu Venue <span className="text-gold-gradient">Gallery &amp; Ambiance</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Immerse yourself in real photorealistic renders and captures of Jugnu Marquee &amp; Event Lawn across day, night, stage setups, and outdoor celebrations.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeFilter === f.id
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm'
                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-slate-200'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxItem(item)}
              className="group relative aspect-video rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 cursor-pointer hover:border-amber-500/40 transition-all duration-300 shadow-xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <span className="text-xs font-serif font-bold text-amber-300 block">
                    {item.title}
                  </span>
                  <span className="text-[10px] text-slate-400 block line-clamp-1">
                    {item.description}
                  </span>
                </div>
                <div className="p-2 rounded-lg bg-slate-900/80 text-amber-400 border border-slate-800 group-hover:scale-110 transition-transform">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightboxItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md">
          <div className="bg-slate-900 border border-amber-500/30 rounded-2xl max-w-4xl w-full p-6 relative shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveLightboxItem(null)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-slate-950 text-slate-400 hover:text-slate-100 border border-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold">
                {activeLightboxItem.title}
              </span>
              <span className="text-xs text-slate-400">{activeLightboxItem.description}</span>
            </div>

            <div className="rounded-xl overflow-hidden bg-slate-950 max-h-[60vh] flex items-center justify-center">
              <img
                src={activeLightboxItem.image}
                alt={activeLightboxItem.title}
                className="w-full h-full object-contain max-h-[60vh]"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  AI Image Prompt Definition
                </span>

                <button
                  onClick={() => {
                    navigator.clipboard.writeText(activeLightboxItem.prompt);
                    setCopiedModalPrompt(true);
                    setTimeout(() => setCopiedModalPrompt(false), 2000);
                  }}
                  className={`px-3 py-1 rounded text-xs font-semibold flex items-center gap-1.5 transition-all ${
                    copiedModalPrompt
                      ? 'bg-emerald-500 text-slate-950'
                      : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                  }`}
                >
                  {copiedModalPrompt ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  {copiedModalPrompt ? 'Copied' : 'Copy Prompt'}
                </button>
              </div>

              <p className="font-mono text-xs text-slate-300 select-all leading-relaxed">
                "{activeLightboxItem.prompt}"
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
