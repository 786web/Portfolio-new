import React, { useState } from 'react';
import { PageId } from '../types';
import {
  Mail,
  MessageCircle,
  Copy,
  Check,
  Send,
  Award,
  Clock,
  Globe2,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    channel: 'Email',
    industry: 'E-Commerce / D2C',
    budget: '$600 - $1,500',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('abdulmoeen524@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+923417497785');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const forwardWhatsAppText = encodeURIComponent(
    `Hi Abdul Moeen,\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nPreferred Channel: ${formData.channel}\nIndustry: ${formData.industry}\nBudget: ${formData.budget}\nMessage: ${formData.message}`
  );

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/20 text-cyan-300 text-xs font-mono font-bold tracking-wider mb-3">
            <Mail className="w-4 h-4 text-cyan-400" />
            <span>LET&rsquo;S START A CONVERSATION</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-display font-black tracking-tight text-white mb-4">
            Connect With TRINOVA
          </h1>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Have a question, need a quote, or want to claim your free demo prototype? Reach Lead Full-Stack Developer Abdul Moeen directly through any channel below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          
          {/* Left Column: Direct Communication Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Email Card (abdulmoeen524@gmail.com) */}
            <div className="p-6 rounded-3xl glass-card border-2 border-cyan-400/40 bg-gradient-to-br from-navy-900 to-navy-950 relative overflow-hidden shadow-xl">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-300 font-bold flex items-center gap-1.5">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  Primary Business Email
                </span>
                <span className="text-[10px] font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/40 font-bold">
                  Active 24/7
                </span>
              </div>

              <a
                href="mailto:abdulmoeen524@gmail.com"
                className="text-base sm:text-lg font-mono font-extrabold text-white hover:text-cyan-300 transition-colors block break-all mb-3"
              >
                abdulmoeen524@gmail.com
              </a>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg bg-navy-800 hover:bg-cyan-500/30 text-cyan-400 text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer border border-cyan-400/20"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied to Clipboard!' : 'Copy Email'}</span>
                </button>

                <a
                  href="mailto:abdulmoeen524@gmail.com"
                  className="px-3 py-1.5 rounded-lg bg-cyan-400 text-slate-950 text-xs font-mono font-bold flex items-center gap-1.5 hover:bg-cyan-300 transition-colors"
                >
                  <span>Open Mail Client</span>
                </a>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="p-6 rounded-3xl glass-card border border-emerald-500/30 bg-emerald-950/20">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-1.5">
                  <MessageCircle className="w-4 h-4" />
                  Direct WhatsApp Hotline
                </span>
                <span className="text-[10px] font-mono text-cyan-300 px-2 py-0.5 rounded bg-navy-950 border border-cyan-400/30 font-bold">
                  &lt; 15 min reply
                </span>
              </div>

              <div className="text-base sm:text-lg font-mono font-extrabold text-white mb-3">
                +92 341 7497785
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="https://wa.me/923417497785?text=Hi%20Abdul%20Moeen,%20I%20would%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-emerald-500 text-slate-950 text-xs font-mono font-bold flex items-center gap-1.5 hover:bg-emerald-400 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Start WhatsApp Chat</span>
                </a>

                <button
                  onClick={handleCopyPhone}
                  className="px-3 py-1.5 rounded-lg bg-navy-800 text-slate-300 hover:text-white text-xs font-mono flex items-center gap-1 transition-colors cursor-pointer border border-slate-700"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Upwork Verified Card */}
            <div className="p-6 rounded-3xl glass-card border border-slate-800 bg-navy-900/40">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-cyan-400" />
                  Upwork Escrow Protection
                </span>
                <span className="text-[10px] font-mono text-emerald-400 font-bold">
                  Top Rated
                </span>
              </div>
              <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                Prefer hiring through Upwork with milestone escrow protection? We maintain a 100% Job Success score and top-rated standing.
              </p>
              <a
                href="https://www.upwork.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-cyan-400 hover:text-white underline inline-flex items-center gap-1"
              >
                <span>Hire via Verified Upwork Contract</span>
              </a>
            </div>

            {/* Availability details */}
            <div className="p-5 rounded-2xl bg-navy-950/80 border border-slate-800 space-y-2 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2 text-slate-300">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span>Working Hours: Mon &ndash; Sat (24/7 client coverage)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Globe2 className="w-4 h-4 text-cyan-400" />
                <span>Timezone Flexibility: US, UK, UAE &amp; Asia aligned</span>
              </div>
            </div>

          </div>

          {/* Right Column: Full Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-8 sm:p-10 border border-cyan-400/30 bg-navy-950/90 shadow-2xl">
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold font-display text-white">
                  Send A Project Inquiry
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Have a specific scope in mind? Fill out this quick form or email directly to <a href="mailto:abdulmoeen524@gmail.com" className="text-cyan-300 font-mono underline">abdulmoeen524@gmail.com</a>.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-500/20 border border-emerald-400 text-center space-y-5">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/30 text-emerald-300 flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-display font-bold text-white">
                    Inquiry Successfully Received!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                    Abdul Moeen will get back to you within 15 minutes. To accelerate response, click below to open your inquiry directly in WhatsApp:
                  </p>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`https://wa.me/923417497785?text=${forwardWhatsAppText}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs uppercase font-mono tracking-wider"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Open in WhatsApp (+92 341 7497785)</span>
                    </a>

                    <a
                      href={`mailto:abdulmoeen524@gmail.com?subject=Inquiry from ${formData.name}&body=${forwardWhatsAppText}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-navy-900 text-cyan-300 border border-cyan-400/30 text-xs font-mono font-bold"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Email Directly</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Turner"
                        className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-slate-700 focus:border-cyan-400 text-white placeholder-slate-500 text-sm outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-slate-700 focus:border-cyan-400 text-white placeholder-slate-500 text-sm outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                        WhatsApp / Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+92 341 7497785"
                        className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-slate-700 focus:border-cyan-400 text-white placeholder-slate-500 text-sm outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                        Preferred Contact Method
                      </label>
                      <select
                        value={formData.channel}
                        onChange={(e) => setFormData({ ...formData, channel: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-slate-700 focus:border-cyan-400 text-white text-sm outline-none"
                      >
                        <option value="WhatsApp">WhatsApp (+92 341 7497785)</option>
                        <option value="Email">Email (abdulmoeen524@gmail.com)</option>
                        <option value="Upwork">Upwork Direct Message</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                        Industry / Business Type
                      </label>
                      <input
                        type="text"
                        value={formData.industry}
                        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                        placeholder="e.g. E-Commerce, Real Estate, Local"
                        className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-slate-700 focus:border-cyan-400 text-white placeholder-slate-500 text-sm outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                        Estimated Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-slate-700 focus:border-cyan-400 text-white text-sm outline-none"
                      >
                        <option value="$300 - $600">$300 - $600 (Starter)</option>
                        <option value="$600 - $1,500">$600 - $1,500 (Growth)</option>
                        <option value="$1,500 - $3,000">$1,500 - $3,000 (Scale)</option>
                        <option value="$3,000+">$3,000+ (Custom Enterprise)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                      Project Details / Requirements *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please describe what you are looking to build or what challenges you want to solve..."
                      className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-slate-700 focus:border-cyan-400 text-white placeholder-slate-500 text-sm outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-black text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(0,245,255,0.4)] flex items-center justify-center gap-2 cursor-pointer mt-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry to Abdul Moeen</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
