import React from 'react';
import { Project, PageId } from '../types';
import { X, CheckCircle2, Calendar, Layers, ArrowRight, ExternalLink } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onNavigate: (page: PageId) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onNavigate }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div
        className="relative w-full max-w-3xl glass-card rounded-3xl border border-cyan-400/40 bg-navy-950/95 shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Banner Image */}
        <div className="h-64 sm:h-72 w-full relative overflow-hidden bg-navy-900">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-navy-950/80 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors border border-slate-700 cursor-pointer"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title and Badge Overlay */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs font-mono text-cyan-300 px-3 py-1 rounded bg-navy-950/90 border border-cyan-400/40 font-semibold">
                {project.categoryLabel}
              </span>
              <span className="text-xs font-mono text-emerald-400 px-3 py-1 rounded bg-emerald-950/80 border border-emerald-500/40 font-bold">
                {project.metric}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-black text-white">
              {project.title}
            </h2>
            <p className="text-xs text-slate-400 font-mono mt-0.5">
              Client: {project.client} &bull; Timeline: {project.fullCaseStudy.timeline}
            </p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          
          {/* Executive Overview */}
          <div>
            <h3 className="text-xs font-mono uppercase text-cyan-400 tracking-wider font-bold mb-2">
              Project Overview
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-800">
            <div className="p-4 rounded-xl bg-navy-900/60 border border-rose-500/20">
              <h4 className="text-xs font-mono text-rose-400 font-bold uppercase mb-2">
                The Bottleneck / Challenge
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.fullCaseStudy.challenge}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-navy-900/60 border border-cyan-400/20">
              <h4 className="text-xs font-mono text-cyan-400 font-bold uppercase mb-2">
                TRINOVA Engineering &amp; Strategy
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.fullCaseStudy.solution}
              </p>
            </div>
          </div>

          {/* Measurable Results */}
          <div className="pt-4 border-t border-slate-800">
            <h4 className="text-xs font-mono text-emerald-400 font-bold uppercase mb-3">
              Verified Business Outcomes
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.fullCaseStudy.results.map((result, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-navy-900/40 border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-200">{result}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack & Deliverables */}
          <div className="pt-4 border-t border-slate-800 flex flex-wrap justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-slate-400 block mb-2">Technologies Used:</span>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="text-xs font-mono px-2.5 py-1 rounded bg-navy-900 text-cyan-300 border border-slate-800">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <span className="text-xs font-mono text-slate-400 block mb-2">Deliverables:</span>
              <div className="flex flex-wrap gap-1.5">
                {project.fullCaseStudy.deliverables.map((item, i) => (
                  <span key={i} className="text-xs font-mono px-2.5 py-1 rounded bg-navy-900 text-slate-300 border border-slate-800">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer CTA */}
        <div className="p-6 bg-navy-900/90 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <span className="text-xs text-slate-400 block">Want similar results for your business?</span>
            <span className="text-sm font-bold text-white">We can build your free demo homepage in 48 hours.</span>
          </div>

          <button
            onClick={() => {
              onClose();
              onNavigate('free-demo');
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs font-mono uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(0,245,255,0.4)]"
          >
            <span>Claim Free Demo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
