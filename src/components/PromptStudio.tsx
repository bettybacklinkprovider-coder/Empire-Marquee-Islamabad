import { useState } from 'react';
import { Sparkles, Copy, Check, Search, Filter, Eye, Download, Sliders, Info, Wand2, Share2 } from 'lucide-react';
import { AI_PROMPTS } from '../data/venueData';
import { AIPromptItem } from '../types';

export function PromptStudio() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [activeModalPrompt, setActiveModalPrompt] = useState<AIPromptItem | null>(null);

  // Custom Prompt Builder state
  const [customEventType, setCustomEventType] = useState('Pakistani Wedding Reception');
  const [customLighting, setCustomLighting] = useState('warm golden lighting');
  const [customStyle, setCustomStyle] = useState('photorealistic luxury photography');
  const [copiedCustom, setCopiedCustom] = useState(false);

  const categories = [
    { id: 'all', label: 'All 10 Prompts' },
    { id: 'interior', label: 'Marquee Interior' },
    { id: 'exterior', label: 'Exterior & Architecture' },
    { id: 'lawn', label: 'Outdoor Lawn' },
    { id: 'stage', label: 'Stage & Decor' },
    { id: 'dining', label: 'Dining Area' },
    { id: 'event', label: 'Engagement & Special' },
  ];

  const filteredPrompts = AI_PROMPTS.filter((item) => {
    const matchesCategory =
      selectedCategory === 'all' ||
      item.category === selectedCategory ||
      (selectedCategory === 'exterior' && (item.category === 'exterior' || item.id === 8)) ||
      (selectedCategory === 'interior' && (item.category === 'interior' || item.id === 3));

    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.prompt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const handleCopyPrompt = (id: number, promptText: string) => {
    navigator.clipboard.writeText(promptText);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handleExportAllPrompts = () => {
    const textContent = AI_PROMPTS.map(
      (p) => `### ${p.title}\nDescription: ${p.description}\nPrompt:\n"${p.prompt}"\n\n`
    ).join('');

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Jugnu_Marquee_AI_Image_Prompts.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const generatedCustomPrompt = `Photorealistic luxury ${customEventType} setup at Jugnu Marquee & Event Lawn, ${customLighting}, elegant floral arrangements, royal backdrop stage, ${customStyle}, wide 16:9 composition, no people, no text.`;

  return (
    <section id="ai-prompts" className="py-20 bg-[#080b11] border-t border-slate-800/80 relative">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-4">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Ready-To-Use AI Image Prompts</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-slate-100 mb-4 tracking-tight">
            Jugnu Marquee <span className="text-gold-gradient">AI Image Prompt Studio</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Copy and use these 10 curated photorealistic prompts in AI Studio, Midjourney, DALL-E 3, or website builder image generators to render stunning imagery for Jugnu Marquee &amp; Event Lawn.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={handleExportAllPrompts}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 border border-amber-500/30 text-amber-300 text-xs font-semibold hover:bg-slate-800 transition-all"
            >
              <Download className="w-4 h-4" />
              Download All 10 Prompts (.txt)
            </button>
            <span className="text-xs text-slate-400">
              Compatible with Midjourney v6, Flux.1, Imagen 3 &amp; DALL-E 3
            </span>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm'
                    : 'bg-slate-950/50 text-slate-400 border border-slate-800 hover:text-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search prompt keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950/80 border border-slate-800 rounded-lg pl-9 pr-3 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500/50"
            />
          </div>
        </div>

        {/* Prompts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredPrompts.map((item) => {
            const isCopied = copiedId === item.id;
            return (
              <div
                key={item.id}
                className="group bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between shadow-lg"
              >
                {/* Visual Preview */}
                <div className="relative aspect-video overflow-hidden bg-slate-950">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                  {/* Header Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-slate-950/80 border border-amber-500/30 text-amber-300 font-serif font-bold text-xs">
                      {item.title}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-slate-900/80 text-[10px] text-slate-300 border border-slate-800">
                      {item.aspectRatio}
                    </span>
                  </div>

                  <button
                    onClick={() => setActiveModalPrompt(item)}
                    className="absolute bottom-3 right-3 p-2 rounded-lg bg-slate-950/80 text-slate-300 hover:text-amber-300 border border-slate-800 hover:border-amber-500/40 transition-all"
                    title="Inspect Prompt Details"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Prompt Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <p className="text-xs text-slate-400 mb-2">{item.description}</p>
                    {/* Prompt Box */}
                    <div className="bg-slate-950/90 border border-slate-800/90 rounded-xl p-3 font-mono text-[11px] text-slate-300 leading-relaxed max-h-28 overflow-y-auto select-all">
                      "{item.prompt}"
                    </div>
                  </div>

                  {/* Tags & Action */}
                  <div className="pt-2 border-t border-slate-800/60 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.slice(0, 2).map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded bg-slate-800/50 text-[10px] text-slate-400"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => handleCopyPrompt(item.id, item.prompt)}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                        isCopied
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                          : 'bg-amber-500/10 text-amber-300 border border-amber-500/30 hover:bg-amber-500/20'
                      }`}
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          Copy Prompt
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Prompt Builder Widget */}
        <div className="bg-slate-900/90 border border-amber-500/30 rounded-2xl p-6 sm:p-8 backdrop-blur-md relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-6 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-1">
                <Wand2 className="w-4 h-4" />
                <span>AI Prompt Generator</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-slate-100">
                Custom Jugnu Venue Prompt Customizer
              </h3>
              <p className="text-slate-400 text-xs mt-1">
                Tweak event parameters to generate tailored AI image prompts for your specific ceremony.
              </p>
            </div>

            <button
              onClick={() => {
                navigator.clipboard.writeText(generatedCustomPrompt);
                setCopiedCustom(true);
                setTimeout(() => setCopiedCustom(false), 2000);
              }}
              className={`px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all ${
                copiedCustom
                  ? 'bg-emerald-500 text-slate-950'
                  : 'bg-gold-gradient text-slate-950 hover:brightness-110'
              }`}
            >
              {copiedCustom ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copiedCustom ? 'Prompt Copied!' : 'Copy Custom Prompt'}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                Event Ceremony Type
              </label>
              <select
                value={customEventType}
                onChange={(e) => setCustomEventType(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
              >
                <option value="Pakistani Wedding Barat Reception">Pakistani Barat Reception</option>
                <option value="Royal Valima Ceremony">Royal Valima Ceremony</option>
                <option value="Vibrant Outdoor Shendi / Mehendi">Vibrant Shendi / Mehendi</option>
                <option value="Elegant Engagement Celebration">Engagement Celebration</option>
                <option value="Sufi Qawwali Musical Night">Sufi Qawwali Night</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                Lighting &amp; Atmosphere
              </label>
              <select
                value={customLighting}
                onChange={(e) => setCustomLighting(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
              >
                <option value="warm golden architectural lighting with chandeliers">Warm Golden Architectural</option>
                <option value="romantic fairy lights under evening twilight sky">Evening Fairy Light Canopy</option>
                <option value="pastel pink & gold soft ambient glow">Pastel &amp; Soft Ambiance</option>
                <option value="emerald green and royal gold festive lights">Emerald &amp; Royal Gold</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                Visual Style
              </label>
              <select
                value={customStyle}
                onChange={(e) => setCustomStyle(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
              >
                <option value="photorealistic luxury venue photography, 8k resolution">Photorealistic 8K Photography</option>
                <option value="cinematic wide-angle architectural shot">Cinematic Architectural Shot</option>
                <option value="editorial wedding photography style">Editorial Wedding Magazine Style</option>
              </select>
            </div>
          </div>

          {/* Generated Result Box */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
            <span className="text-[10px] uppercase tracking-wider text-amber-400 font-bold block mb-1">
              Generated Prompt Result:
            </span>
            <p className="font-mono text-xs text-slate-200 leading-relaxed select-all">
              "{generatedCustomPrompt}"
            </p>
          </div>
        </div>
      </div>

      {/* Modal Inspector for Individual Prompt */}
      {activeModalPrompt && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="bg-slate-900 border border-amber-500/30 rounded-2xl max-w-2xl w-full p-6 relative shadow-2xl space-y-4">
            <button
              onClick={() => setActiveModalPrompt(null)}
              className="absolute top-4 right-4 p-1.5 rounded-lg bg-slate-950 text-slate-400 hover:text-slate-100"
            >
              ✕
            </button>

            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 text-xs font-bold">
                {activeModalPrompt.title}
              </span>
              <span className="text-xs text-slate-400">Aspect Ratio: {activeModalPrompt.aspectRatio}</span>
            </div>

            <div className="aspect-video rounded-xl overflow-hidden bg-slate-950">
              <img
                src={activeModalPrompt.image}
                alt={activeModalPrompt.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div>
              <h4 className="text-sm font-semibold text-slate-200 mb-1">Full Prompt Text:</h4>
              <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 font-mono text-xs text-slate-300 select-all leading-relaxed">
                {activeModalPrompt.prompt}
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-slate-400">
                Optimized for: Midjourney v6, Flux, DALL-E 3, Imagen 3
              </span>
              <button
                onClick={() => {
                  handleCopyPrompt(activeModalPrompt.id, activeModalPrompt.prompt);
                  setActiveModalPrompt(null);
                }}
                className="px-4 py-2 rounded-lg bg-gold-gradient text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2"
              >
                <Copy className="w-3.5 h-3.5" />
                Copy Prompt
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
