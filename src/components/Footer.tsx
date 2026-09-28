import React, { useState } from 'react';
import { PageId } from '../types';
import { Mail, MessageCircle, Copy, Check, ExternalLink, ShieldCheck, ArrowRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [copied, setCopied] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleCopy = () => {
    navigator.clipboard.writeText('abdulmoeen524@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="bg-[#040D1A] border-t border-cyan-400/20 pt-16 pb-12 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Pre-footer Callout */}
        <div className="glass-card rounded-2xl p-8 mb-16 border border-cyan-400/30 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-300 font-bold mb-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              100% RISK-FREE PROPOSITION
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
              Ready to see your Free Demo Homepage &amp; Leads Plan?
            </h3>
            <p className="text-sm text-slate-400 mt-1">
              Zero upfront commitment. Pay only if you love the prototype.
            </p>
          </div>

          <button
            onClick={() => onNavigate('free-demo')}
            className="px-6 py-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs font-mono uppercase tracking-wider transition-all duration-200 shadow-[0_0_20px_rgba(0,245,255,0.4)] flex items-center gap-2 cursor-pointer whitespace-nowrap shrink-0"
          >
            <span>Claim Free Demo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          
          {/* Brand Info (Cols 1-5) */}
          <div className="md:col-span-5 space-y-4">
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-3 text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 rounded"
            >
              <div className="w-9 h-9 rounded-lg bg-cyan-400/20 border border-cyan-400 flex items-center justify-center">
                <span className="font-display font-black text-xl text-cyan-400">T</span>
              </div>
              <span className="font-display font-black text-2xl text-white tracking-wider">TRINOVA</span>
            </button>

            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Full-Stack Web Development &amp; Paid Acquisition Agency founded by Abdul Moeen. We engineer ultra-fast WordPress &amp; Shopify websites paired with high-intent Meta &amp; Google ad funnels that deliver verifiable business sales.
            </p>

            <div className="pt-2">
              <span className="text-xs font-mono text-cyan-300 block">
                Top Rated on Upwork &bull; 100% Job Success Score &bull; Remote Worldwide
              </span>
            </div>
          </div>

          {/* Direct Contact & Email (Cols 6-8) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-widest text-slate-200 uppercase">
              Direct Inquiries
            </h4>

            {/* Email Box highlighting abdulmoeen524@gmail.com */}
            <div className="p-3 rounded-xl bg-navy-900/90 border border-cyan-400/30 space-y-1.5">
              <span className="text-[11px] font-mono text-slate-400 block">Official Business Email:</span>
              <div className="flex items-center justify-between gap-2">
                <a
                  href="mailto:abdulmoeen524@gmail.com"
                  className="text-xs sm:text-sm font-mono font-bold text-cyan-300 hover:text-white transition-colors truncate"
                  title="Send email"
                >
                  abdulmoeen524@gmail.com
                </a>
                <button
                  onClick={handleCopy}
                  className="p-1.5 rounded-md bg-navy-800 hover:bg-cyan-500/30 text-cyan-400 transition-colors shrink-0"
                  aria-label="Copy email"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-navy-900/90 border border-slate-700/60 space-y-1">
              <span className="text-[11px] font-mono text-slate-400 block">Instant WhatsApp:</span>
              <a
                href="https://wa.me/923417497785?text=Hi%20TRINOVA,%20I%20have%20an%20inquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm font-mono font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5"
              >
                <MessageCircle className="w-4 h-4" />
                <span>+92 341 7497785</span>
              </a>
            </div>
          </div>

          {/* Pages & Navigation (Cols 9-12) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-widest text-slate-200 uppercase">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-cyan-400 transition-colors">
                  Home Overview
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-cyan-400 transition-colors">
                  Services &amp; Pricing
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('portfolio')} className="hover:text-cyan-400 transition-colors">
                  Case Studies &amp; Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-cyan-400 transition-colors">
                  About TRINOVA &amp; Abdul Moeen
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('free-demo')} className="text-cyan-300 hover:underline">
                  Free Demo Offer
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-cyan-400 transition-colors">
                  Contact &amp; Schedule
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            &copy; {currentYear} TRINOVA Digital Agency &bull; Lead Engineer: Abdul Moeen (abdulmoeen524@gmail.com)
          </div>

          <div className="flex items-center gap-6">
            <span className="text-slate-400">Upwork Verified Agency</span>
            <span className="text-slate-600">&bull;</span>
            <button onClick={() => onNavigate('free-demo')} className="text-cyan-400 hover:underline">
              Free Demo Prototype
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
