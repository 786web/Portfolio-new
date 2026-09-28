import React, { useState } from 'react';
import { PageId } from '../types';
import { Sparkles, MessageCircle, Mail, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const navLinks: { id: PageId; label: string; isPromo?: boolean }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'about', label: 'About' },
    { id: 'free-demo', label: 'Free Demo', isPromo: true },
    { id: 'contact', label: 'Contact' },
  ];

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText('abdulmoeen524@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <>
      {/* Sticky Trust & Direct Contact Ticker */}
      <div className="w-full bg-[#040D1A]/95 border-b border-cyan-400/20 py-1.5 px-4 text-xs font-mono tracking-wide text-cyan-300 flex items-center justify-between z-50">
        <div className="max-w-7xl mx-auto w-full flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 font-semibold text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              TOP RATED AGENCY ON UPWORK
            </span>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="hidden sm:inline text-slate-400">100% Job Success</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            {/* User's email: abdulmoeen524@gmail.com */}
            <div className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <a
                href="mailto:abdulmoeen524@gmail.com"
                className="hover:text-white transition-colors underline decoration-cyan-400/40 underline-offset-2"
                title="Send email to Abdul Moeen"
              >
                abdulmoeen524@gmail.com
              </a>
              <button
                onClick={handleCopyEmail}
                className="px-1.5 py-0.5 rounded bg-navy-800 text-[10px] text-cyan-300 hover:text-white hover:bg-cyan-500/30 transition-colors ml-1"
                aria-label="Copy email address"
              >
                {copiedEmail ? 'Copied!' : 'Copy'}
              </button>
            </div>

            <span className="text-slate-600 hidden md:inline">|</span>

            <a
              href="https://wa.me/923417497785?text=Hi%20TRINOVA,%20I%20am%20interested%20in%20a%20website%20and%20leads%20plan."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>+92 341 7497785</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header className="sticky top-0 z-40 glass-nav transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Zone 1: Single Brand Element */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-1"
          >
            <div className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-navy-800 border border-cyan-400/40 group-hover:border-cyan-400 transition-all duration-300 shadow-[0_0_15px_rgba(0,245,255,0.2)]">
              <span className="font-display font-black text-2xl text-cyan-400 tracking-tighter">T</span>
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_6px_#00F5FF]"></span>
            </div>
            <div>
              <span className="font-display font-extrabold text-xl sm:text-2xl tracking-wider text-white group-hover:text-cyan-300 transition-colors">
                TRINOVA
              </span>
            </div>
          </button>

          {/* Zone 2: 4-6 Clean Text Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className={`transition-all duration-200 relative py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 rounded cursor-pointer ${
                    isActive
                      ? 'text-cyan-400 font-semibold'
                      : 'hover:text-cyan-300 text-slate-300'
                  } ${link.isPromo ? 'flex items-center gap-1.5 text-cyan-300' : ''}`}
                >
                  {link.isPromo && <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />}
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400 rounded-full shadow-[0_0_8px_#00F5FF]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1-2 Primary Action Points */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/923417497785?text=Hi%20TRINOVA,%20I%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-lg text-xs font-mono font-bold bg-emerald-500/15 border border-emerald-400/40 text-emerald-300 hover:bg-emerald-500 hover:text-slate-950 transition-all duration-200 flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => onNavigate('free-demo')}
              className="relative group px-4 py-2 rounded-lg text-xs font-bold tracking-wider uppercase overflow-hidden border border-cyan-400 bg-cyan-400/10 text-cyan-300 hover:text-slate-950 transition-all duration-200 neon-btn-glow cursor-pointer"
            >
              <span className="absolute inset-0 bg-cyan-400 translate-y-full group-hover:translate-y-0 transition-transform duration-200 ease-out" />
              <span className="relative z-10 flex items-center gap-1.5 font-display font-semibold">
                Get Free Demo
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </button>
          </div>

          {/* Mobile Drawer Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="lg:hidden text-slate-300 hover:text-cyan-400 p-2 focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 rounded"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden glass-card border-x-0 border-t border-cyan-400/20 px-6 py-6 space-y-3 bg-[#0A192F]/98 animate-fadeIn">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left py-2.5 px-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${
                  currentPage === link.id
                    ? 'bg-cyan-400/15 text-cyan-300 font-semibold border-l-2 border-cyan-400'
                    : 'text-slate-200 hover:text-cyan-400 hover:bg-slate-800/40'
                }`}
              >
                <span className="flex items-center gap-2">
                  {link.isPromo && <Sparkles className="w-4 h-4 text-cyan-400" />}
                  {link.label}
                </span>
                <span className="text-xs text-slate-500 font-mono">Page</span>
              </button>
            ))}

            <div className="pt-4 border-t border-slate-800 space-y-2">
              <a
                href="mailto:abdulmoeen524@gmail.com"
                className="w-full py-2.5 px-3 rounded-lg bg-navy-800/70 text-cyan-300 text-xs font-mono flex items-center justify-between border border-cyan-400/20"
              >
                <span className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  abdulmoeen524@gmail.com
                </span>
                <span className="text-[10px] text-slate-400">Direct Email</span>
              </a>

              <a
                href="https://wa.me/923417497785?text=Hi%20TRINOVA,%20I%20want%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 rounded-lg bg-emerald-500 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp (+92 341 7497785)
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
