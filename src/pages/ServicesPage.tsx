import React, { useState } from 'react';
import { PageId } from '../types';
import { servicesData, processSteps } from '../data/servicesData';
import {
  Laptop,
  Megaphone,
  Check,
  ArrowRight,
  Calculator,
  Clock,
  Sparkles,
  CreditCard,
  Zap,
  ShieldCheck,
  Send
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onPreselectService?: (serviceName: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onPreselectService }) => {
  const [filter, setFilter] = useState<'all' | 'web-dev' | 'paid-ads'>('all');

  // Interactive Scope Calculator State
  const [selectedAddons, setSelectedAddons] = useState<string[]>([
    'wordpress-core',
    'meta-ads',
    'payments'
  ]);

  const addonOptions = [
    { id: 'wordpress-core', label: 'Custom WordPress & WooCommerce Platform', price: 450, days: 10, icon: 'WP' },
    { id: 'shopify-store', label: 'Shopify Plus Custom Liquid Storefront', price: 550, days: 12, icon: 'Shopify' },
    { id: 'payments', label: 'Payment Gateway (Stripe, JazzCash, Easypaisa)', price: 250, days: 4, icon: 'Pay' },
    { id: 'meta-ads', label: 'Meta (Facebook & IG) Full-Funnel Ads & CAPI', price: 350, days: 7, icon: 'Meta' },
    { id: 'google-ads', label: 'Google Search & Performance Max (High-Intent)', price: 400, days: 7, icon: 'Google' },
    { id: 'tiktok-ads', label: 'TikTok Creative & Spark Ads Testing', price: 350, days: 7, icon: 'TikTok' },
    { id: 'speed-boost', label: '95+ Core Web Vitals & Sub-Second Speed Tune', price: 200, days: 3, icon: 'Speed' }
  ];

  const toggleAddon = (id: string) => {
    if (selectedAddons.includes(id)) {
      if (selectedAddons.length > 1) {
        setSelectedAddons(selectedAddons.filter((item) => item !== id));
      }
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  const calculatedTotal = selectedAddons.reduce((acc, id) => {
    const item = addonOptions.find((opt) => opt.id === id);
    return acc + (item ? item.price : 0);
  }, 0);

  const calculatedDays = selectedAddons.reduce((acc, id) => {
    const item = addonOptions.find((opt) => opt.id === id);
    return acc + (item ? item.days : 0);
  }, 0);

  const filteredServices = servicesData.filter((s) => {
    if (filter === 'all') return true;
    return s.category === filter;
  });

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/20 text-cyan-300 text-xs font-mono font-bold tracking-wider mb-3">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span>FULL CAPABILITIES CATALOG</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-black tracking-tight text-white mb-4">
            Engineered For Speed. Built For Sales.
          </h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Every service is tailored directly to your revenue targets. We build conversion-ready architectures and drive qualified traffic that generates real customer orders.
          </p>

          {/* Filter Segmented Control */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <div className="p-1 rounded-xl bg-navy-950 border border-slate-800 flex flex-wrap gap-1">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-bold uppercase transition-all cursor-pointer ${
                  filter === 'all'
                    ? 'bg-cyan-400 text-slate-950 shadow-[0_0_15px_rgba(0,245,255,0.4)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                All Capabilities ({servicesData.length})
              </button>
              <button
                onClick={() => setFilter('web-dev')}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-bold uppercase transition-all cursor-pointer flex items-center gap-1.5 ${
                  filter === 'web-dev'
                    ? 'bg-cyan-400 text-slate-950 shadow-[0_0_15px_rgba(0,245,255,0.4)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Laptop className="w-3.5 h-3.5" />
                <span>Web Development</span>
              </button>
              <button
                onClick={() => setFilter('paid-ads')}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-bold uppercase transition-all cursor-pointer flex items-center gap-1.5 ${
                  filter === 'paid-ads'
                    ? 'bg-cyan-400 text-slate-950 shadow-[0_0_15px_rgba(0,245,255,0.4)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Megaphone className="w-3.5 h-3.5" />
                <span>Paid Ads &amp; Leads</span>
              </button>
            </div>
          </div>
        </div>

        {/* Detailed Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="glass-card rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group hover:border-cyan-400/50"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-display font-black text-cyan-400/50 group-hover:text-cyan-400 transition-colors">
                    {service.number}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-cyan-300 px-2.5 py-1 rounded bg-navy-950 border border-cyan-400/30">
                      Starts at {service.startingPrice}
                    </span>
                    <span className="text-xs font-mono text-slate-400 px-2 py-1 rounded bg-navy-900">
                      {service.turnaround}
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs font-mono text-cyan-400 mb-4">
                  {service.tagline}
                </p>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features breakdown */}
                <div className="space-y-3 mb-6">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-navy-950/60 border border-slate-800/80">
                      <div className="flex items-center gap-2 text-xs font-bold text-slate-200 mb-1">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{feat.title}</span>
                      </div>
                      <p className="text-xs text-slate-400 ml-5 leading-normal">
                        {feat.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {service.technologies.map((tech, i) => (
                    <span key={i} className="text-[11px] font-mono px-2 py-0.5 rounded bg-navy-900 text-slate-300 border border-slate-800">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono">
                  Upwork Escrow Safe
                </span>
                <button
                  onClick={() => {
                    if (onPreselectService) onPreselectService(service.title);
                    onNavigate('free-demo');
                  }}
                  className="px-4 py-2 rounded-lg bg-cyan-400/10 hover:bg-cyan-400 text-cyan-300 hover:text-slate-950 font-bold text-xs uppercase font-mono tracking-wider transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Request Demo Scope</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ==================== INTERACTIVE SCOPE & COST ESTIMATOR ==================== */}
        <section className="glass-card rounded-3xl p-8 sm:p-12 border border-cyan-400/40 mb-24 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-300 font-bold mb-2">
              <Calculator className="w-4 h-4 text-cyan-400" />
              <span>TRANSPARENT VALUE CALCULATOR</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-display font-black text-white">
              Instant Project Scope &amp; Investment Estimator
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Select the modules your business needs to calculate estimated investment and delivery timeline in real-time.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Options Selector */}
            <div className="lg:col-span-8 space-y-3">
              {addonOptions.map((opt) => {
                const isSelected = selectedAddons.includes(opt.id);
                return (
                  <div
                    key={opt.id}
                    onClick={() => toggleAddon(opt.id)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                      isSelected
                        ? 'bg-cyan-400/10 border-cyan-400 text-white shadow-[0_0_15px_rgba(0,245,255,0.15)]'
                        : 'bg-navy-900/50 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold transition-colors ${
                          isSelected ? 'bg-cyan-400 text-slate-950' : 'bg-navy-950 border border-slate-700'
                        }`}
                      >
                        {isSelected && <Check className="w-4 h-4 stroke-[3]" />}
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold">{opt.label}</h4>
                        <span className="text-[11px] font-mono text-slate-400">Estimated duration: ~{opt.days} days</span>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-sm font-mono font-bold text-cyan-300">
                        +${opt.price}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Calculated Summary Box */}
            <div className="lg:col-span-4 p-6 rounded-2xl bg-navy-950 border border-cyan-400/30 space-y-6">
              <h3 className="text-base font-display font-bold text-white border-b border-slate-800 pb-3">
                Estimated Scope Summary
              </h3>

              <div className="space-y-3 text-xs font-mono">
                <div className="flex items-center justify-between text-slate-400">
                  <span>Selected Modules:</span>
                  <span className="text-cyan-300 font-bold">{selectedAddons.length} Components</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>Estimated Sprint:</span>
                  <span className="text-white font-bold">~{Math.min(calculatedDays, 28)} Days</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>Prototype Guarantee:</span>
                  <span className="text-emerald-400 font-bold">FREE Demo 1st</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <span className="text-xs font-mono text-slate-400 block uppercase">Estimated Investment:</span>
                <div className="text-3xl font-display font-black text-cyan-400 mt-1">
                  ${calculatedTotal}
                </div>
                <span className="text-[11px] text-slate-500 font-mono">Zero deposit required for the free demo prototype.</span>
              </div>

              <button
                onClick={() => onNavigate('free-demo')}
                className="w-full py-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs font-mono uppercase tracking-wider transition-colors shadow-[0_0_20px_rgba(0,245,255,0.4)] flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 fill-slate-950" />
                <span>Claim Free Demo With This Scope</span>
              </button>

              <div className="text-center">
                <a
                  href={`mailto:abdulmoeen524@gmail.com?subject=Inquiry for Scope Package ($${calculatedTotal})`}
                  className="text-xs text-slate-400 hover:text-cyan-300 font-mono underline"
                >
                  Or email directly: abdulmoeen524@gmail.com
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* ==================== 4-STEP SPRINT PROCESS ==================== */}
        <section className="mb-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">Step-By-Step Execution</h2>
            <p className="text-3xl sm:text-4xl font-display font-black text-white mt-2">
              How We Work Together
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div key={step.step} className="glass-card rounded-2xl p-6 relative">
                <div className="text-4xl font-display font-black text-cyan-400/30 mb-3">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};
