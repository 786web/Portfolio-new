import React, { useState } from 'react';
import { MessageCircle, Mail, Sparkles, Check, Copy } from 'lucide-react';
import { PageId } from '../types';

interface FloatingActionsProps {
  onNavigate: (page: PageId) => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onNavigate }) => {
  const [copied, setCopied] = useState(false);
  const [showEmailTooltip, setShowEmailTooltip] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText('abdulmoeen524@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <aside aria-label="Quick contact actions" className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto">
      
      {/* Quick Email Popover on Hover / Click */}
      {showEmailTooltip && (
        <div className="glass-card p-3 rounded-xl border border-cyan-400/40 bg-navy-950/95 text-xs font-mono shadow-2xl animate-fadeIn mb-1">
          <div className="text-slate-400 text-[10px] uppercase tracking-wider mb-1">Direct Email:</div>
          <div className="flex items-center gap-2">
            <a
              href="mailto:abdulmoeen524@gmail.com"
              className="text-cyan-300 font-bold hover:underline"
            >
              abdulmoeen524@gmail.com
            </a>
            <button
              onClick={handleCopy}
              className="p-1 rounded bg-navy-800 text-cyan-400 hover:text-white"
              title="Copy email"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>
      )}

      <div className="flex items-center gap-2">
        {/* Email Shortcut Button */}
        <button
          onClick={() => setShowEmailTooltip(!showEmailTooltip)}
          onMouseEnter={() => setShowEmailTooltip(true)}
          className="p-3 rounded-full bg-navy-800/90 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-400/40 shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer"
          aria-label="Direct Email Abdul Moeen"
          title="Direct Email: abdulmoeen524@gmail.com"
        >
          <Mail className="w-5 h-5" />
        </button>

        {/* Free Demo Trigger */}
        <button
          onClick={() => onNavigate('free-demo')}
          className="hidden sm:flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-display font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(0,245,255,0.4)] hover:scale-105 transition-all duration-200 cursor-pointer"
        >
          <Sparkles className="w-4 h-4 fill-slate-950" />
          <span>Free Demo</span>
        </button>

        {/* WhatsApp Floating CTA */}
        <a
          href="https://wa.me/923417497785?text=Hi%20TRINOVA,%20I%20am%20interested%20in%20a%20website%20and%20leads%20plan."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold shadow-[0_0_25px_rgba(16,185,129,0.55)] hover:scale-105 transition-all duration-200"
          aria-label="Chat with TRINOVA on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 fill-slate-950" />
          <span className="hidden md:inline text-xs font-mono tracking-wider font-extrabold">
            WhatsApp
          </span>
        </a>
      </div>
    </aside>
  );
};
