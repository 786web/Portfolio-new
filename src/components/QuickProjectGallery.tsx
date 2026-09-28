import React, { useState } from 'react';
import { Project, PageId } from '../types';
import { ProjectImage } from './ProjectImage';
import { Zap, MessageCircle, Mail, ArrowRight, Sparkles, CheckCircle2, ChevronRight, Eye } from 'lucide-react';

interface QuickProjectGalleryProps {
  projects: Project[];
  onNavigate: (page: PageId) => void;
  onSelectProject: (project: Project) => void;
  onProceedWithProject?: (project: Project) => void;
}

export const QuickProjectGallery: React.FC<QuickProjectGalleryProps> = ({
  projects,
  onNavigate,
  onSelectProject,
  onProceedWithProject
}) => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const activeProject = projects[activeProjectIndex] || projects[0];

  const handleProceed = (project: Project) => {
    if (onProceedWithProject) {
      onProceedWithProject(project);
    } else {
      onNavigate('free-demo');
    }
  };

  const whatsappProceedText = encodeURIComponent(
    `Hi Abdul Moeen, I am looking at the "${activeProject.title}" project on TRINOVA and want to proceed quickly with a similar website and leads plan for my business.`
  );

  return (
    <div className="glass-card rounded-3xl p-6 sm:p-10 border border-cyan-400/40 relative overflow-hidden bg-gradient-to-b from-[#0B1E38] via-[#0A192F] to-[#040D1A] shadow-2xl mb-16">
      
      {/* Header bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-cyan-400/20">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/20 text-cyan-300 text-xs font-mono font-bold tracking-wider mb-2">
            <Zap className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400" />
            <span>FAST PROCEED &bull; LIVE PROJECT PICTURES</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-black text-white">
            Quick Project Visuals &amp; Instant Start
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            Browse through real production project pictures below. Click to inspect or proceed directly with a free demo.
          </p>
        </div>

        {/* Quick Contact Badge */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="mailto:abdulmoeen524@gmail.com?subject=Quick Project Inquiry"
            className="px-3.5 py-2 rounded-xl bg-navy-900 border border-cyan-400/30 text-xs font-mono text-cyan-300 hover:text-white transition-colors flex items-center gap-1.5"
            title="Email Abdul Moeen"
          >
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            <span>abdulmoeen524@gmail.com</span>
          </a>

          <a
            href={`https://wa.me/923417497785?text=${whatsappProceedText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 rounded-xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 hover:bg-emerald-500 hover:text-slate-950 text-xs font-mono font-bold transition-all flex items-center gap-1.5"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Quick Chat</span>
          </a>
        </div>
      </div>

      {/* Main Showcase Split View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
        
        {/* Left: Featured Project Picture Display */}
        <div className="lg:col-span-7">
          <div className="relative rounded-2xl overflow-hidden border border-cyan-400/40 shadow-[0_0_30px_rgba(0,245,255,0.2)] group bg-navy-950">
            <div className="aspect-[16/10] sm:aspect-[16/9] w-full relative overflow-hidden">
              <ProjectImage
                src={activeProject.imageUrl}
                alt={activeProject.title}
                fallbackIcon={activeProject.fallbackIcon}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent pointer-events-none" />

              {/* Badges on image */}
              <div className="absolute top-4 left-4 flex items-center gap-2 z-20">
                <span className="px-3 py-1 rounded-lg bg-navy-950/90 border border-cyan-400/50 text-xs font-mono text-cyan-300 font-bold">
                  {activeProject.badge}
                </span>
                <span className="px-3 py-1 rounded-lg bg-emerald-500/20 border border-emerald-400/50 text-xs font-mono text-emerald-300 font-extrabold">
                  {activeProject.metric}
                </span>
              </div>

              {/* Quick Case Study Preview Hover Overlay */}
              <button
                onClick={() => onSelectProject(activeProject)}
                className="absolute bottom-4 right-4 z-20 px-3.5 py-2 rounded-xl bg-navy-950/90 hover:bg-cyan-400 hover:text-slate-950 text-xs font-mono text-slate-200 border border-slate-700 transition-all flex items-center gap-1.5 cursor-pointer shadow-lg"
              >
                <Eye className="w-4 h-4" />
                <span>Full Case Study</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right: Project Details & Quick Proceed Action Panel */}
        <div className="lg:col-span-5 space-y-5">
          <div>
            <span className="text-xs font-mono text-cyan-300 uppercase tracking-widest block mb-1">
              {activeProject.categoryLabel}
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-black text-white">
              {activeProject.title}
            </h3>
            <p className="text-xs font-mono text-slate-400 mt-0.5">
              Client: {activeProject.client} &bull; Delivery: {activeProject.fullCaseStudy.timeline}
            </p>
          </div>

          <p className="text-slate-300 text-sm leading-relaxed">
            {activeProject.description}
          </p>

          {/* Key Deliverables Highlights */}
          <div className="space-y-2">
            <span className="text-xs font-mono text-slate-400 block uppercase">Key Deliverables Built:</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {activeProject.fullCaseStudy.deliverables.slice(0, 4).map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-navy-900/60 border border-slate-800 text-xs text-slate-200 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span className="truncate">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Direct Proceed CTAs */}
          <div className="pt-3 space-y-2.5">
            <button
              onClick={() => handleProceed(activeProject)}
              className="w-full py-4 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-black text-xs sm:text-sm font-mono uppercase tracking-wider transition-all duration-200 shadow-[0_0_25px_rgba(0,245,255,0.45)] hover:shadow-[0_0_35px_rgba(0,245,255,0.7)] flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 fill-slate-950" />
              <span>Proceed With This Project Style (FREE Demo)</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="grid grid-cols-2 gap-2.5">
              <a
                href={`https://wa.me/923417497785?text=${whatsappProceedText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 rounded-xl bg-emerald-500/15 hover:bg-emerald-500 hover:text-slate-950 text-emerald-300 border border-emerald-400/40 text-xs font-mono font-bold transition-all flex items-center justify-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Quick WhatsApp</span>
              </a>

              <a
                href={`mailto:abdulmoeen524@gmail.com?subject=Proceed with ${activeProject.title}&body=${whatsappProceedText}`}
                className="py-2.5 px-3 rounded-xl bg-navy-900 hover:bg-navy-800 text-cyan-300 border border-cyan-400/30 text-xs font-mono font-bold transition-all flex items-center justify-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Direct Email</span>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Horizontal Picture Strip (Thumbnail Selector) */}
      <div className="pt-6 border-t border-slate-800">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
            Click Project Picture to Switch &amp; Proceed ({projects.length} Total):
          </span>
          <span className="text-xs font-mono text-cyan-400">
            Selected: {activeProjectIndex + 1} of {projects.length}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {projects.map((proj, idx) => {
            const isCurrent = idx === activeProjectIndex;
            return (
              <button
                key={proj.id}
                onClick={() => setActiveProjectIndex(idx)}
                className={`text-left rounded-xl overflow-hidden border transition-all duration-200 cursor-pointer group relative ${
                  isCurrent
                    ? 'border-cyan-400 ring-2 ring-cyan-400/40 shadow-[0_0_15px_rgba(0,245,255,0.3)] scale-[1.02]'
                    : 'border-slate-800 hover:border-cyan-400/40 bg-navy-950/70'
                }`}
              >
                <div className="h-20 w-full relative overflow-hidden bg-navy-900">
                  <ProjectImage
                    src={proj.imageUrl}
                    alt={proj.title}
                    fallbackIcon={proj.fallbackIcon}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent pointer-events-none" />
                  
                  {isCurrent && (
                    <div className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_6px_#00F5FF]" />
                  )}
                </div>

                <div className="p-2 bg-navy-950/95">
                  <h4 className="text-[11px] font-bold text-white truncate group-hover:text-cyan-300">
                    {proj.title}
                  </h4>
                  <div className="flex items-center justify-between text-[10px] font-mono mt-0.5">
                    <span className="text-slate-400 truncate">{proj.category}</span>
                    <span className="text-emerald-400 font-bold shrink-0">{proj.metric}</span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

    </div>
  );
};
