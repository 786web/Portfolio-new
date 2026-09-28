import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Clock,
  MessageCircle,
  Mail,
  Send,
  ArrowRight,
  HelpCircle,
  Zap
} from 'lucide-react';

interface FreeDemoPageProps {
  onNavigate: (page: PageId) => void;
  initialServiceScope?: string;
}

export const FreeDemoPage: React.FC<FreeDemoPageProps> = ({ onNavigate, initialServiceScope }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    websiteUrl: '',
    industry: 'E-Commerce & D2C Store',
    goals: initialServiceScope || 'Build high-converting website and scale sales',
    budget: '$600 - $1,500'
  });

  useEffect(() => {
    if (initialServiceScope) {
      setFormData((prev) => ({
        ...prev,
        goals: initialServiceScope
      }));
    }
  }, [initialServiceScope]);

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hi Abdul Moeen,\n\nI want to claim my FREE Demo Homepage & Leads Plan!\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nBusiness: ${formData.businessName || 'N/A'}\nWebsite: ${formData.websiteUrl || 'New Project'}\nIndustry: ${formData.industry}\nTarget Budget: ${formData.budget}\nGoal: ${formData.goals}`
  );

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/20 text-cyan-300 text-xs font-mono font-bold tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>100% ZERO-RISK GUARANTEE</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-display font-black tracking-tight text-white mb-4">
            Get Your Free Demo Homepage + Leads Plan
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            &ldquo;I will make a <span className="text-cyan-400 font-bold underline decoration-cyan-400/50 underline-offset-4">FREE demo homepage</span> + show you how I will bring you leads. You pay only if you like it.&rdquo;
          </p>
        </div>

        {/* 3 Step Process Box */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="glass-card rounded-2xl p-6 border-t-2 border-t-cyan-400">
            <div className="w-8 h-8 rounded-lg bg-cyan-400/20 text-cyan-300 flex items-center justify-center font-mono font-bold text-sm mb-3">
              01
            </div>
            <h3 className="text-base font-bold text-white mb-1">Submit Your Project Brief</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Tell us about your brand, current site, or product idea in the form below. Takes less than 60 seconds.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 border-t-2 border-t-cyan-400">
            <div className="w-8 h-8 rounded-lg bg-cyan-400/20 text-cyan-300 flex items-center justify-center font-mono font-bold text-sm mb-3">
              02
            </div>
            <h3 className="text-base font-bold text-white mb-1">Receive Live Interactive Prototype</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Within 48 hours, Abdul Moeen engineers a tailored interactive homepage and maps out a profitable Meta/Google ad funnel.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 border-t-2 border-t-emerald-400">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-mono font-bold text-sm mb-3">
              03
            </div>
            <h3 className="text-base font-bold text-white mb-1">Decide With Zero Pressure</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              If you love the design and strategy, we proceed with the full sprint. If not, you owe absolutely nothing.
            </p>
          </div>
        </div>

        {/* Main Form Box */}
        <div
          className={`glass-card rounded-3xl p-8 sm:p-12 relative overflow-hidden mb-16 shadow-2xl transition-all duration-700 ${
            submitted
              ? 'border-2 border-emerald-400/60 bg-gradient-to-b from-[#061A2B] via-[#0A192F] to-[#040D1A] shadow-[0_0_60px_rgba(16,185,129,0.22)]'
              : 'border-2 border-cyan-400/40 bg-gradient-to-b from-navy-900 to-navy-950'
          }`}
        >
          {submitted ? (
            <div className="text-center py-6 sm:py-8 space-y-6 relative z-10 animate-fade-up">
              {/* Gentle ambient glow orbs behind success icon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-400/15 rounded-full blur-[90px] pointer-events-none animate-gentle-glow" />
              <div className="absolute -top-6 right-1/4 w-48 h-48 bg-cyan-400/10 rounded-full blur-[70px] pointer-events-none" />

              {/* Animated SVG Checkmark with gentle glowing ring */}
              <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
                {/* Gentle ripple ring */}
                <div
                  className="absolute inset-0 rounded-full border border-emerald-400/40 animate-ping opacity-40 pointer-events-none"
                  style={{ animationDuration: '3s' }}
                />
                {/* Backing glass halo */}
                <div className="absolute inset-1 rounded-full bg-gradient-to-tr from-emerald-500/25 via-teal-400/15 to-cyan-400/20 border border-emerald-400/50 backdrop-blur-md shadow-[0_0_35px_rgba(16,185,129,0.4)]" />
                
                {/* Stroke animated SVG icon */}
                <svg className="w-12 h-12 relative z-10" viewBox="0 0 52 52" fill="none">
                  <circle
                    cx="26"
                    cy="26"
                    r="23"
                    stroke="#10B981"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    className="animate-circle-draw"
                  />
                  <path
                    d="M15 27L22.5 34.5L37 19"
                    stroke="#00F5FF"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="animate-check-draw"
                  />
                </svg>
              </div>

              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-mono font-bold tracking-wider mb-3 border border-emerald-500/30">
                  <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>REQUEST RECEIVED &bull; 48-HOUR SLA</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-display font-black text-white">
                  Demo Request Confirmed!
                </h3>
                <p className="text-slate-300 text-sm max-w-lg mx-auto mt-2 leading-relaxed">
                  Thank you, <strong className="text-white">{formData.name}</strong>! Lead Engineer Abdul Moeen has received your specifications and will begin crafting your free prototype within 48 hours.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-navy-950/90 border border-emerald-500/30 max-w-md mx-auto text-left text-xs font-mono space-y-2 shadow-inner">
                <div className="flex justify-between text-slate-400">
                  <span>Contact:</span>
                  <span className="text-white font-medium">{formData.email} &bull; {formData.phone}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Business / Industry:</span>
                  <span className="text-cyan-300 font-medium">{formData.businessName || formData.industry}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Target Budget:</span>
                  <span className="text-emerald-400 font-medium">{formData.budget}</span>
                </div>
                <div className="pt-2 border-t border-slate-800 flex justify-between text-slate-400">
                  <span>Scope:</span>
                  <span className="text-slate-200 truncate max-w-[200px]">{formData.goals}</span>
                </div>
              </div>

              {/* Instant WhatsApp & Email Push */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={`https://wa.me/923417497785?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase font-mono tracking-wider flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Forward Details to WhatsApp (+92 341 7497785)</span>
                </a>

                <a
                  href={`mailto:abdulmoeen524@gmail.com?subject=Free Demo Request - ${formData.name}&body=${whatsappMessage}`}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-cyan-300 border border-cyan-400/30 text-xs font-mono font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email abdulmoeen524@gmail.com</span>
                </a>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-mono text-slate-400 hover:text-cyan-300 transition-colors underline cursor-pointer"
                >
                  Edit requirements or submit another proposal
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="mb-8">
                <h3 className="text-2xl sm:text-3xl font-display font-black text-white">
                  Shall I send your free demo + leads plan?
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm mt-1">
                  Fill in your details below. You can also reach Lead Engineer Abdul Moeen directly at <a href="mailto:abdulmoeen524@gmail.com" className="text-cyan-300 underline font-mono">abdulmoeen524@gmail.com</a>.
                </p>
              </div>

              {formData.goals.includes('Selected Project:') && (
                <div className="mb-6 p-4 rounded-2xl bg-cyan-400/10 border border-cyan-400/40 flex items-center justify-between gap-3 shadow-[0_0_15px_rgba(0,245,255,0.15)]">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-cyan-400/20 text-cyan-300">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-cyan-400 tracking-wider block font-bold">Fast Proceed Activated</span>
                      <span className="text-xs sm:text-sm font-semibold text-white">{formData.goals}</span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-400 text-xs font-mono font-bold shrink-0">
                    Prototype Pre-Linked
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Turner"
                      className="w-full px-4 py-3 rounded-xl bg-navy-950/80 border border-slate-700 focus:border-cyan-400 text-white placeholder-slate-500 text-sm outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                      Your Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@yourbrand.com"
                      className="w-full px-4 py-3 rounded-xl bg-navy-950/80 border border-slate-700 focus:border-cyan-400 text-white placeholder-slate-500 text-sm outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                      WhatsApp / Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+92 341 7497785 / +1 555-0199"
                      className="w-full px-4 py-3 rounded-xl bg-navy-950/80 border border-slate-700 focus:border-cyan-400 text-white placeholder-slate-500 text-sm outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                      Business or Brand Name
                    </label>
                    <input
                      type="text"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      placeholder="e.g. Chronos Apparel"
                      className="w-full px-4 py-3 rounded-xl bg-navy-950/80 border border-slate-700 focus:border-cyan-400 text-white placeholder-slate-500 text-sm outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                      Industry / Niche *
                    </label>
                    <select
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-navy-950/80 border border-slate-700 focus:border-cyan-400 text-white text-sm outline-none cursor-pointer"
                    >
                      <option value="E-Commerce & D2C Store">E-Commerce &amp; D2C Store</option>
                      <option value="Real Estate & High-Ticket">Real Estate &amp; High-Ticket</option>
                      <option value="Restaurant & Hospitality">Restaurant &amp; Hospitality</option>
                      <option value="Healthcare & Dental">Healthcare &amp; Clinic</option>
                      <option value="B2B Wholesale / Services">B2B Wholesale / Services</option>
                      <option value="Other Industry">Other Industry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                      Existing Website URL (if any)
                    </label>
                    <input
                      type="text"
                      value={formData.websiteUrl}
                      onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                      placeholder="https://..."
                      className="w-full px-4 py-3 rounded-xl bg-navy-950/80 border border-slate-700 focus:border-cyan-400 text-white placeholder-slate-500 text-sm outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                      Expected Sprint Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-navy-950/80 border border-slate-700 focus:border-cyan-400 text-white text-sm outline-none cursor-pointer"
                    >
                      <option value="$300 - $600">$300 - $600 (Starter)</option>
                      <option value="$600 - $1,500">$600 - $1,500 (Growth)</option>
                      <option value="$1,500 - $3,000">$1,500 - $3,000 (Scale)</option>
                      <option value="$3,000+">$3,000+ (Custom Enterprise)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                    What are your primary goals or biggest conversion hurdles?
                  </label>
                  <textarea
                    rows={3}
                    value={formData.goals}
                    onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                    placeholder="e.g. Current site is slow, need 1-click checkout with Stripe and local payment gateways, want Meta ads to bring paying customers..."
                    className="w-full px-4 py-3 rounded-xl bg-navy-950/80 border border-slate-700 focus:border-cyan-400 text-white placeholder-slate-500 text-sm outline-none resize-none"
                  />
                </div>

                <div className="p-3 rounded-xl bg-navy-950/60 border border-cyan-400/20 text-xs text-slate-400 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>
                    No credit card or upfront deposit required. You only decide after inspecting the live interactive demo.
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-black text-sm uppercase tracking-wider transition-all duration-300 shadow-[0_0_25px_rgba(0,245,255,0.45)] hover:shadow-[0_0_35px_rgba(0,245,255,0.7)] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Yes, send my free demo homepage + leads plan</span>
                </button>
              </form>
            </div>
          )}

        </div>

        {/* FAQ Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-display font-bold text-white mb-4">
            Frequently Asked Questions About The Free Demo
          </h3>

          <div className="glass-card rounded-2xl p-5 border border-slate-800">
            <h4 className="text-sm font-semibold text-cyan-300 mb-1">
              Is the demo homepage really 100% free?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              Yes. We believe the best way to earn your trust is by showing actual execution instead of pitching empty promises. We design an interactive prototype of your homepage and map out your leads strategy. You only pay if you decide to proceed with the full website build.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-5 border border-slate-800">
            <h4 className="text-sm font-semibold text-cyan-300 mb-1">
              How long does it take to receive my demo?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              Prototypes are typically deployed to a live interactive preview link within 48 to 72 hours of receiving your project specifications.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-5 border border-slate-800">
            <h4 className="text-sm font-semibold text-cyan-300 mb-1">
              What if I need local payment gateways like JazzCash or Easypaisa?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              We specialize in native integration of local payment methods alongside international gateways like Stripe and PayPal. We can demonstrate how checkout will work directly in your prototype.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
