import React, { useState } from 'react';
import { PageId } from '../types';
import {
  ShieldCheck,
  Award,
  Code2,
  Cpu,
  Mail,
  MessageCircle,
  Copy,
  Check,
  CheckCircle2,
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('abdulmoeen524@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const techSkills = [
    { category: 'Web Engineering', items: ['React 19 & Next.js', 'TypeScript & Modern ES', 'Tailwind CSS', 'Shopify Liquid', 'WordPress Core (PHP 8.3)', 'WooCommerce Advanced'] },
    { category: 'Performance & Speed', items: ['Google Core Web Vitals (95+)', 'Sub-Second TTFB', 'WebP & AVIF Compression', 'Browser Caching Engines', 'Zero-Bloat Assets'] },
    { category: 'Payment Gateways', items: ['Stripe 3D Secure 2.0', 'PayPal SDK', 'JazzCash Direct IPG', 'Easypaisa Gateway', 'Automated Webhooks'] },
    { category: 'Paid Acquisition & Tracking', items: ['Meta Ads & CBO Scaling', 'Server-Side CAPI Tracking', 'Google Search & PMax', 'Google Tag Manager', 'TikTok Spark Ads'] }
  ];

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Profile / Agency Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/20 text-cyan-300 text-xs font-mono font-bold tracking-wider">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>ABOUT FOUNDER &amp; LEAD ENGINEER</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-display font-black tracking-tight text-white leading-tight">
              Abdul Moeen &mdash; <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400">
                Lead Full-Stack Web Developer &amp; Performance Marketer
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              I run <strong className="text-white">TRINOVA Digital Labs</strong>, a specialized digital studio focused on a simple, uncompromising mission: <em className="text-cyan-300 font-semibold not-italic">building high-velocity websites that generate real, measurable sales rather than vanity clicks</em>.
            </p>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Too many businesses pay thousands for beautiful websites that take 5 seconds to load and convert at less than 1%. Or they spend money on ads that send people to confusing, clunky pages. I solve both sides of this equation by coupling custom-engineered WordPress &amp; Shopify code with high-intent Meta and Google ad pipelines.
            </p>

            {/* Direct Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {/* Email */}
              <div className="p-4 rounded-2xl glass-card border border-cyan-400/30 bg-navy-950/80">
                <span className="text-[11px] font-mono text-slate-400 block uppercase mb-1">Direct Email</span>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href="mailto:abdulmoeen524@gmail.com"
                    className="text-xs sm:text-sm font-mono font-bold text-cyan-300 hover:text-white truncate"
                  >
                    abdulmoeen524@gmail.com
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg bg-navy-800 hover:bg-cyan-500/30 text-cyan-400 shrink-0"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/923417497785?text=Hi%20Abdul%20Moeen,%20I%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl glass-card border border-emerald-500/30 bg-emerald-950/20 hover:border-emerald-400 transition-colors block"
              >
                <span className="text-[11px] font-mono text-emerald-400 font-bold block uppercase mb-1">WhatsApp Direct</span>
                <div className="text-xs sm:text-sm font-mono font-bold text-white flex items-center gap-1.5">
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>+92 341 7497785</span>
                </div>
              </a>
            </div>
          </div>

          {/* Upwork Verified Pro Scorecard Card */}
          <div className="lg:col-span-5">
            <div className="glass-card rounded-3xl p-8 border-2 border-cyan-400/40 relative overflow-hidden bg-gradient-to-b from-navy-900 to-navy-950 shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/10 rounded-full blur-2xl" />

              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-cyan-400/20 border border-cyan-400 flex items-center justify-center font-display font-black text-2xl text-cyan-300">
                  AM
                </div>
                <div>
                  <h3 className="text-xl font-bold font-display text-white">Abdul Moeen</h3>
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Top Rated Agency on Upwork</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-xs font-mono border-y border-slate-800 py-6 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Job Success Score:</span>
                  <span className="text-emerald-400 font-bold">100% Guaranteed</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Total Projects Shipped:</span>
                  <span className="text-white font-bold">50+ Worldwide</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Average Response Time:</span>
                  <span className="text-cyan-300 font-bold">&lt; 15 Minutes</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Escrow Security:</span>
                  <span className="text-white font-bold">100% Upwork Safe</span>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => onNavigate('free-demo')}
                  className="w-full py-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs font-mono uppercase tracking-wider transition-colors shadow-[0_0_20px_rgba(0,245,255,0.4)] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 fill-slate-950" />
                  <span>Claim Free Demo Homepage</span>
                </button>

                <a
                  href="https://www.upwork.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-navy-900 hover:bg-navy-800 text-slate-300 hover:text-white font-mono text-xs flex items-center justify-center gap-2 border border-slate-800 transition-colors"
                >
                  <Award className="w-4 h-4 text-cyan-400" />
                  <span>View Verified Upwork Profile</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Pillars of Excellence */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">Core Standards</h2>
            <p className="text-3xl sm:text-4xl font-display font-black text-white mt-2">
              The TRINOVA Development Manifesto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card rounded-2xl p-6 border-l-4 border-l-cyan-400">
              <h3 className="text-lg font-bold text-white mb-2">01. Zero Plugin Bloat</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                We never install heavy multi-purpose themes with 40 unnecessary plugins that grind your database to a halt. Everything we write is lightweight, clean, and modular.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 border-l-4 border-l-cyan-400">
              <h3 className="text-lg font-bold text-white mb-2">02. Verified Attribution Tracking</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                With iOS 14+ and cookie restrictions, standard browser tracking misses up to 40% of sales. We implement server-side Meta CAPI and Google Tag Manager containers so every dollar of ad spend is attributed.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 border-l-4 border-l-cyan-400">
              <h3 className="text-lg font-bold text-white mb-2">03. Frictionless Local &amp; Global Checkout</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Whether your target audience is in New York, London, Dubai, or Pakistan, we integrate native payment systems (Stripe, JazzCash, Easypaisa) so buyers can complete checkout in under 30 seconds.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 border-l-4 border-l-cyan-400">
              <h3 className="text-lg font-bold text-white mb-2">04. The Zero-Risk Free Demo Guarantee</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                We eliminate all hiring anxiety. We will design a custom interactive demo homepage and lay out your exact leads plan before requesting any payment. If you do not love it, you walk away with zero penalty.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Skills Matrix */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-slate-800 mb-16">
          <h3 className="text-2xl font-display font-bold text-white mb-6">
            Technical Skillset &amp; Production Stack
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techSkills.map((grp, idx) => (
              <div key={idx} className="space-y-3">
                <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                  {grp.category}
                </h4>
                <ul className="space-y-2">
                  {grp.items.map((item, i) => (
                    <li key={i} className="text-xs sm:text-sm text-slate-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
