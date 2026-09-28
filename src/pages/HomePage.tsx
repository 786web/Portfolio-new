import React, { useState, useEffect } from 'react';
import { PageId, Project } from '../types';
import { projectsData } from '../data/projectsData';
import { testimonialsData } from '../data/testimonialsData';
import { HeroCanvas } from '../components/HeroCanvas';
import {
  Zap,
  ArrowRight,
  Sparkles,
  Laptop,
  Megaphone,
  Check,
  Star,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Globe,
  TrendingUp,
  MessageCircle,
  Mail,
  Send
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onSelectProject: (project: Project) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onSelectProject }) => {
  // Dynamic Typewriter state
  const phrases = [
    "WordPress & Shopify Specialist",
    "High-Quality Leads & Sales Machine",
    "Meta, TikTok & Google Ads Architect",
    "Payment Gateway Integrations"
  ];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      timer = setTimeout(() => {
        setText(currentPhrase.substring(0, text.length - 1));
        if (text.length <= 1) {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }, 40);
    } else {
      timer = setTimeout(() => {
        setText(currentPhrase.substring(0, text.length + 1));
        if (text.length === currentPhrase.length) {
          timer = setTimeout(() => setIsDeleting(true), 2000);
        }
      }, 70);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIndex]);

  // Testimonial slider state
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonialsData.length);
  };
  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  // Quick form state
  const [quickForm, setQuickForm] = useState({ name: '', phone: '', biz: '', budget: '$600 - $1,500' });
  const [submitted, setSubmitted] = useState(false);

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="relative min-h-screen">
      
      {/* ==================== 1. HERO SECTION ==================== */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-10 pb-20">
        <HeroCanvas />

        {/* Background Ambient Neon Glow Orbs */}
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-cyan-400/15 rounded-full filter blur-[100px] pointer-events-none animate-glow-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/15 rounded-full filter blur-[110px] pointer-events-none animate-float-slow" />

        {/* Floating Code Badges (Cosmetic Tech Elements) */}
        <div className="hidden lg:flex absolute top-28 left-16 glass-card px-3 py-1.5 rounded-lg border-cyan-400/30 text-xs font-mono text-cyan-300 items-center gap-2 animate-float pointer-events-none">
          <span className="text-pink-400">&lt;div</span> class="leads-rocket"<span className="text-pink-400">&gt;</span>
        </div>
        <div className="hidden lg:flex absolute bottom-28 left-24 glass-card px-3 py-1.5 rounded-lg border-cyan-400/30 text-xs font-mono text-cyan-300 items-center gap-2 animate-float-slow pointer-events-none">
          <span className="text-amber-400">const</span> roi = traffic.convert(<span className="text-emerald-300">10x</span>);
        </div>
        <div className="hidden lg:flex absolute top-36 right-20 glass-card px-3 py-1.5 rounded-lg border-cyan-400/30 text-xs font-mono text-cyan-300 items-center gap-2 animate-float pointer-events-none">
          <span className="text-cyan-400">&lt;/&gt;</span> Shopify / WP Engine Ready
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
          
          {/* 3D Geometric "T" Agency Emblem */}
          <div className="cube-container mb-6 animate-float">
            <div className="isometric-t w-24 h-24 sm:w-28 sm:h-28 relative flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/20 via-transparent to-blue-500/20 rounded-2xl border border-cyan-400/50 backdrop-blur-md shadow-[0_0_35px_rgba(0,245,255,0.4)]" />
              <div className="absolute -inset-2 border border-cyan-400/20 rounded-3xl animate-spin" style={{ animationDuration: '22s' }} />

              <svg className="w-14 h-14 sm:w-16 sm:h-16 drop-shadow-[0_0_12px_rgba(0,245,255,0.9)]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 22C15 17.5817 18.5817 14 23 14H77C81.4183 14 85 17.5817 85 22V32C85 36.4183 81.4183 40 77 40H63V80C63 84.4183 59.4183 88 55 88H45C40.5817 88 37 84.4183 37 80V40H23C18.5817 40 15 36.4183 15 32V22Z" fill="url(#t-gradient-home)" stroke="#00F5FF" strokeWidth="2.5" />
                <path d="M25 22H75M48 40V78" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.8" />
                <defs>
                  <linearGradient id="t-gradient-home" x1="15" y1="14" x2="85" y2="88" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00F5FF" />
                    <stop offset="0.5" stopColor="#0077B6" />
                    <stop offset="1" stopColor="#0A192F" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* Trust Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-800/80 border border-cyan-400/30 text-xs sm:text-sm font-medium text-cyan-300 mb-6 backdrop-blur-md">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
            </span>
            <span>TRINOVA &bull; Web Developer &amp; High-Yield Digital Marketer</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tight leading-[1.1] max-w-5xl mb-6">
            We Build Websites That Bring <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-sky-400 drop-shadow-[0_0_25px_rgba(0,245,255,0.4)]">
              REAL Sales,
            </span>{' '}
            Not Just Clicks.
          </h1>

          {/* Dynamic Typing Subtext */}
          <div className="h-10 mb-6 flex items-center justify-center">
            <p className="text-lg sm:text-2xl font-mono text-slate-300">
              TRINOVA &mdash; <span className="text-cyan-400 font-semibold border-r-2 border-cyan-400 pr-1">{text}</span>
            </p>
          </div>

          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mb-10 leading-relaxed font-light">
            Custom high-performance eCommerce, bespoke WordPress &amp; Shopify builds backed by hyper-targeted Meta &amp; Google ad funnels built to generate qualified leads and measurable revenue.
          </p>

          {/* Hero CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
            <button
              onClick={() => onNavigate('free-demo')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-sm sm:text-base tracking-wider uppercase transition-all duration-300 shadow-[0_0_30px_rgba(0,245,255,0.45)] hover:shadow-[0_0_40px_rgba(0,245,255,0.7)] flex items-center justify-center gap-3 cursor-pointer"
            >
              <Zap className="w-5 h-5 fill-slate-950" />
              <span>Get FREE Demo</span>
            </button>

            <button
              onClick={() => onNavigate('portfolio')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl glass-card text-white hover:text-cyan-400 border border-slate-700 hover:border-cyan-400/80 font-semibold text-sm sm:text-base tracking-wider transition-all duration-300 flex items-center justify-center gap-3 group cursor-pointer"
            >
              <span>View Portfolio</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Trust Counters */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-slate-800/80 w-full max-w-4xl text-left">
            <div>
              <div className="text-2xl sm:text-3xl font-black font-display text-white">50+</div>
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mt-1">Websites Shipped</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black font-display text-white">$1.8M+</div>
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mt-1">Client Sales Generated</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black font-display text-white">100%</div>
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mt-1">Upwork Success</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black font-display text-white">&lt; 1.2s</div>
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mt-1">Avg Load Time</div>
            </div>
          </div>

        </div>
      </section>

      {/* ==================== 2. ZERO-RISK SPECIAL OFFER BANNER ==================== */}
      <section className="relative z-30 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 mb-20">
        <div className="relative overflow-hidden rounded-3xl p-8 sm:p-10 border-2 border-cyan-400 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 neon-border-glow">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-400/20 text-cyan-300 text-xs font-mono font-bold tracking-wider mb-3">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>ZERO RISK GUARANTEE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight leading-snug">
                &ldquo;I will make a <span className="text-cyan-400 underline decoration-cyan-400/50 underline-offset-4">FREE demo homepage</span> + show you how I will bring you leads. You pay only if you like it.&rdquo;
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2">
                No upfront deposit required. See the exact design and customer acquisition system before spending a single dollar.
              </p>
            </div>

            <div className="shrink-0">
              <button
                onClick={() => onNavigate('free-demo')}
                className="px-8 py-4 rounded-xl bg-cyan-400 hover:bg-white text-slate-950 font-black text-sm tracking-wider uppercase transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_25px_rgba(0,245,255,0.7)] flex items-center gap-3 cursor-pointer"
              >
                <span>Shall I send your free demo + leads plan?</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 3. DUAL-ENGINE SERVICES PREVIEW ==================== */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">Dual-Engine Growth Model</h2>
            <p className="text-3xl sm:text-5xl font-display font-black tracking-tight text-white mt-2">
              Engineering Meets Conversion.
            </p>
            <p className="text-slate-400 mt-4 text-sm sm:text-base">
              A great website without traffic is useless. Traffic without a high-converting site burns cash. TRINOVA unites both under one roof.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* Column A: High-Velocity Web Development */}
            <div className="glass-card rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden group">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 group-hover:scale-105 transition-all">
                    <Laptop className="w-8 h-8" />
                  </div>
                  <span className="text-xs font-mono text-cyan-300 px-3 py-1 rounded-full bg-navy-900 border border-cyan-400/20">
                    Engine A &bull; Web Engineering
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
                  High-Velocity Web Development
                </h3>
                <p className="text-slate-400 text-sm sm:text-base mb-6 leading-relaxed">
                  We engineer custom, blazingly fast WordPress and Shopify architectures configured specifically to turn visitors into buyers with 0% bloat.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="p-1 rounded bg-cyan-400/20 text-cyan-400 mt-0.5">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Custom WordPress &amp; Shopify Stores</h4>
                      <p className="text-xs text-slate-400">Headless, custom themes, ACF, liquid templating, no slow multi-plugins.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-1 rounded bg-cyan-400/20 text-cyan-400 mt-0.5">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Turnkey E-Commerce &amp; Payment Gateway Integrations</h4>
                      <p className="text-xs text-slate-400">Global &amp; localized checkout solutions with frictionless checkout flows.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-1 rounded bg-cyan-400/20 text-cyan-400 mt-0.5">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Google Core Web Vitals Ready (95+ Speed Score)</h4>
                      <p className="text-xs text-slate-400">Mobile-first responsive UX, technical SEO schemas, sub-second TTFB.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Logos Integration Block */}
              <div className="pt-6 border-t border-slate-800">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-3">
                  Integrated Payment Engines:
                </span>
                <div className="grid grid-cols-4 gap-3 text-center">
                  <div className="p-2 rounded-lg bg-navy-950 border border-slate-700/60 flex items-center justify-center font-bold text-xs tracking-wider text-slate-200">
                    VISA
                  </div>
                  <div className="p-2 rounded-lg bg-navy-950 border border-slate-700/60 flex items-center justify-center font-bold text-xs tracking-wider text-slate-200">
                    Stripe
                  </div>
                  <div className="p-2 rounded-lg bg-navy-950 border border-slate-700/60 flex items-center justify-center font-bold text-xs tracking-wider text-red-400">
                    JazzCash
                  </div>
                  <div className="p-2 rounded-lg bg-navy-950 border border-slate-700/60 flex items-center justify-center font-bold text-xs tracking-wider text-emerald-400">
                    Easypaisa
                  </div>
                </div>

                <div className="mt-5 text-right">
                  <button
                    onClick={() => onNavigate('services')}
                    className="text-xs font-mono text-cyan-400 hover:text-white inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>View all development capabilities</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Column B: Paid Acquisition & Leads */}
            <div className="glass-card rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden group">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 group-hover:scale-105 transition-all">
                    <Megaphone className="w-8 h-8" />
                  </div>
                  <span className="text-xs font-mono text-cyan-300 px-3 py-1 rounded-full bg-navy-900 border border-cyan-400/20">
                    Engine B &bull; High-Yield Growth
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
                  Paid Acquisition &amp; High-Yield Leads
                </h3>
                <p className="text-slate-400 text-sm sm:text-base mb-6 leading-relaxed">
                  We cut out vanity impressions and build laser-targeted paid funnels that bring paying customers directly to your pipeline or checkout cart.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="p-1 rounded bg-cyan-400/20 text-cyan-400 mt-0.5">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Meta Ads (Facebook &amp; Instagram)</h4>
                      <p className="text-xs text-slate-400">CBO scaling, creative testing framework, Pixel &amp; CAPI server-side tracking.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-1 rounded bg-cyan-400/20 text-cyan-400 mt-0.5">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">TikTok Ads &amp; High-Retention Creatives</h4>
                      <p className="text-xs text-slate-400">Viral hook formulation, UGC-style scripts, Spark Ads amplification.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-1 rounded bg-cyan-400/20 text-cyan-400 mt-0.5">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Google Search &amp; Performance Max</h4>
                      <p className="text-xs text-slate-400">Intent-driven capture for high-ticket services and immediate buyer queries.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Highlight Box: REAL LEADS NOT CLICKS */}
              <div>
                <div className="relative overflow-hidden rounded-2xl p-5 border border-cyan-400/60 bg-gradient-to-r from-cyan-400/10 via-navy-950 to-navy-900 shadow-[0_0_20px_rgba(0,245,255,0.15)] mb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-xs font-mono font-bold tracking-widest text-cyan-300">CORE PROMISE</span>
                  </div>
                  <p className="font-display font-black text-white text-base sm:text-lg tracking-tight uppercase leading-snug">
                    I PROVIDE REAL, HIGH-QUALITY LEADS &amp; SALES &mdash; <span className="text-cyan-400">NOT JUST CLICKS</span>
                  </p>
                </div>

                <div className="text-right">
                  <button
                    onClick={() => onNavigate('services')}
                    className="text-xs font-mono text-cyan-400 hover:text-white inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Explore ad funnels &amp; ROAS calculators</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ==================== 4. FEATURED PORTFOLIO HIGHLIGHTS ==================== */}
      <section className="py-20 bg-navy-950/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">Selected Work</h2>
              <p className="text-3xl sm:text-5xl font-display font-black text-white mt-2">
                Engineered For Conversion
              </p>
            </div>

            <button
              onClick={() => onNavigate('portfolio')}
              className="mt-4 md:mt-0 text-sm font-mono text-cyan-400 hover:text-white flex items-center gap-2 cursor-pointer"
            >
              <span>View All 6+ Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectsData.slice(0, 3).map((project) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="glass-card rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300 hover:-translate-y-1.5"
              >
                <div className="h-52 bg-navy-800 relative overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent z-10" />
                  <div className="absolute top-4 left-4 z-20 px-2.5 py-1 rounded bg-navy-950/80 border border-cyan-400/40 text-[10px] font-mono text-cyan-300">
                    {project.badge}
                  </div>
                  <div className="absolute top-4 right-4 z-20 px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold">
                    {project.metric}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold font-display text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm mt-2 mb-4 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="text-[11px] font-mono text-slate-300 bg-navy-900 px-2 py-0.5 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center justify-between text-xs font-mono text-cyan-400">
                    <span>Read full case study</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ==================== 5. WHY TRINOVA ==================== */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">The TRINOVA Advantage</h2>
            <p className="text-3xl sm:text-5xl font-display font-black text-white mt-2">Why Global Brands Hire Us</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card rounded-2xl p-6 border-l-4 border-l-cyan-400 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-cyan-400/10 text-cyan-400 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Upwork Verified Pro</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                100% Job Success score, Top Rated agency standing, verified contracts, and rock-solid escrow security.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 border-l-4 border-l-cyan-400 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-cyan-400/10 text-cyan-400 flex items-center justify-center mb-4">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Worldwide Clients</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Proven track record working with founders across USA, UK, UAE, Australia, and Pakistan with seamless timezone sync.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 border-l-4 border-l-cyan-400 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-cyan-400/10 text-cyan-400 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Fast Delivery</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Fast sprints with milestone releases. Live staging environments updated daily without unnecessary bureaucracy.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 border-l-4 border-l-cyan-400 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-cyan-400/10 text-cyan-400 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Results-Driven</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Every button, hero banner, and ad funnel is engineered solely to decrease CAC and accelerate customer acquisition.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ==================== 6. VERIFIED UPWORK REVIEWS SLIDER ==================== */}
      <section className="py-20 relative bg-navy-950/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">Upwork Client Feedback</h2>
            <p className="text-3xl sm:text-5xl font-display font-black text-white mt-2">What Real Clients Say</p>
          </div>

          <div className="relative glass-card rounded-3xl p-8 sm:p-12 border border-cyan-400/30">
            {testimonialsData.map((t, idx) => {
              if (idx !== activeTestimonial) return null;
              return (
                <div key={t.id} className="w-full transition-opacity duration-300">
                  <div className="flex items-center gap-1 text-amber-400 mb-6">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="ml-3 text-xs font-mono text-cyan-300 px-2 py-0.5 bg-navy-900 rounded">
                      Verified Upwork Contract &bull; {t.projectType}
                    </span>
                  </div>

                  <p className="text-base sm:text-xl text-slate-200 italic leading-relaxed mb-6 font-light">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-cyan-400/20 border border-cyan-400 flex items-center justify-center font-display font-bold text-cyan-300">
                      {t.avatarInitials}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base">{t.clientName}</h4>
                      <p className="text-xs text-slate-400">{t.clientRole} &bull; {t.location}</p>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="flex items-center justify-between pt-8 mt-6 border-t border-slate-800">
              <div className="flex gap-2">
                <button
                  onClick={prevTestimonial}
                  aria-label="Previous Testimonial"
                  className="p-2.5 rounded-lg bg-navy-900 hover:bg-cyan-400 hover:text-slate-950 text-slate-300 transition-colors border border-slate-700 cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  aria-label="Next Testimonial"
                  className="p-2.5 rounded-lg bg-navy-900 hover:bg-cyan-400 hover:text-slate-950 text-slate-300 transition-colors border border-slate-700 cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div className="flex items-center gap-2">
                {testimonialsData.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTestimonial(i)}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                      i === activeTestimonial ? 'w-4 bg-cyan-400' : 'w-1.5 bg-slate-700'
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ==================== 7. FAST CONTACT & EMAIL HIGHLIGHT ==================== */}
      <section className="py-20 relative bg-navy-950/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Col: Direct Reach & Email */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-400/20 text-cyan-300 text-xs font-mono font-bold tracking-wider">
                READY TO SCALE?
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight leading-tight">
                Elevate Your Business with Data-Driven Strategies &mdash;{' '}
                <span className="text-cyan-400">Conversions That Matter</span>
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Connect directly with Lead Engineer Abdul Moeen. Response guaranteed within 15 minutes.
              </p>

              <div className="space-y-4 pt-2">
                {/* Email Card featuring abdulmoeen524@gmail.com */}
                <div className="p-4 rounded-xl glass-card border border-cyan-400/40 bg-navy-900/60">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-lg bg-cyan-400/20 text-cyan-400 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="truncate">
                      <span className="text-[11px] font-mono text-slate-400 block uppercase">Founder Direct Email</span>
                      <a
                        href="mailto:abdulmoeen524@gmail.com"
                        className="text-sm sm:text-base font-mono font-bold text-cyan-300 hover:text-white transition-colors"
                      >
                        abdulmoeen524@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Card */}
                <a
                  href="https://wa.me/923417497785?text=Hi%20Abdul%20Moeen,%20I%20would%20like%20to%20claim%20my%20Free%20Demo."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl glass-card hover:border-emerald-400 transition-all bg-emerald-950/20 border-emerald-500/30 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-emerald-400 font-bold block uppercase">Fastest Response (WhatsApp)</span>
                      <span className="text-sm font-mono font-bold text-white">+92 341 7497785</span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Col: Instant Demo Request */}
            <div className="lg:col-span-7">
              <div className="glass-card rounded-3xl p-8 sm:p-10 border border-cyan-400/30">
                <h3 className="text-2xl font-bold font-display text-white mb-2">
                  Claim Your Free Demo + Leads Plan
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm mb-6">
                  Zero risk. Pay only if you like the prototype.
                </p>

                {submitted ? (
                  <div className="p-6 rounded-2xl bg-emerald-500/20 border border-emerald-400 text-center space-y-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/30 text-emerald-300 flex items-center justify-center mx-auto">
                      <Check className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-white">Proposal Request Received!</h4>
                    <p className="text-xs sm:text-sm text-slate-300">
                      We have received your details and will prepare your free demo homepage within 48 hours. You can also forward this right now to WhatsApp:
                    </p>
                    <a
                      href={`https://wa.me/923417497785?text=${encodeURIComponent(
                        `Hi Abdul Moeen,\nName: ${quickForm.name}\nPhone: ${quickForm.phone}\nBusiness: ${quickForm.biz}\nBudget: ${quickForm.budget}\nI want to claim my Free Demo Homepage.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs uppercase tracking-wider"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Open in WhatsApp (+92 341 7497785)
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleQuickSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase text-slate-300 mb-1">Your Name *</label>
                        <input
                          type="text"
                          required
                          value={quickForm.name}
                          onChange={(e) => setQuickForm({ ...quickForm, name: e.target.value })}
                          placeholder="Alex Turner"
                          className="w-full px-4 py-2.5 rounded-xl bg-navy-950/80 border border-slate-700 focus:border-cyan-400 text-white placeholder-slate-500 text-sm outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase text-slate-300 mb-1">WhatsApp / Phone *</label>
                        <input
                          type="text"
                          required
                          value={quickForm.phone}
                          onChange={(e) => setQuickForm({ ...quickForm, phone: e.target.value })}
                          placeholder="+92 341 7497785"
                          className="w-full px-4 py-2.5 rounded-xl bg-navy-950/80 border border-slate-700 focus:border-cyan-400 text-white placeholder-slate-500 text-sm outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase text-slate-300 mb-1">Business Industry *</label>
                        <input
                          type="text"
                          required
                          value={quickForm.biz}
                          onChange={(e) => setQuickForm({ ...quickForm, biz: e.target.value })}
                          placeholder="e.g. E-Commerce / Real Estate"
                          className="w-full px-4 py-2.5 rounded-xl bg-navy-950/80 border border-slate-700 focus:border-cyan-400 text-white placeholder-slate-500 text-sm outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase text-slate-300 mb-1">Target Budget</label>
                        <select
                          value={quickForm.budget}
                          onChange={(e) => setQuickForm({ ...quickForm, budget: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-navy-950/80 border border-slate-700 focus:border-cyan-400 text-white text-sm outline-none"
                        >
                          <option value="$300 - $600">$300 - $600 (Starter)</option>
                          <option value="$600 - $1,500">$600 - $1,500 (Growth)</option>
                          <option value="$1,500 - $3,000">$1,500 - $3,000 (Scale)</option>
                          <option value="$3,000+">$3,000+ (Enterprise)</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-black text-xs uppercase tracking-wider transition-all duration-200 shadow-[0_0_20px_rgba(0,245,255,0.4)] flex items-center justify-center gap-2 cursor-pointer mt-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Shall I send your free demo + leads plan?</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
