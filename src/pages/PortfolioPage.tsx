import React, { useState } from 'react';
import { PageId, Project } from '../types';
import { projectsData, projectCategories } from '../data/projectsData';
import { ProjectImage } from '../components/ProjectImage';
import { Search, ArrowRight, Sparkles, Filter, ExternalLink } from 'lucide-react';

interface PortfolioPageProps {
  onNavigate: (page: PageId) => void;
  onSelectProject: (project: Project) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onNavigate, onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory =
      selectedCategory === 'all' || project.category === selectedCategory;
    const matchesQuery =
      searchQuery.trim() === '' ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((t) =>
        t.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/20 text-cyan-300 text-xs font-mono font-bold tracking-wider mb-3">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>REAL RESULTS &bull; VERIFIED CONVERSIONS</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-black tracking-tight text-white mb-4">
            Engineered For Conversion
          </h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Every project below represents a custom platform designed for high velocity, flawless checkout, and laser-targeted customer acquisition funnels.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-800">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {projectCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-cyan-400 text-slate-950 shadow-[0_0_15px_rgba(0,245,255,0.4)]'
                    : 'bg-navy-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by tech or keyword..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-navy-950 border border-slate-800 focus:border-cyan-400 text-white placeholder-slate-500 text-xs font-mono outline-none"
            />
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 glass-card rounded-3xl p-8 border border-slate-800">
            <p className="text-base text-slate-400 font-mono mb-4">
              No projects found matching &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-lg bg-cyan-400 text-slate-950 font-bold text-xs uppercase font-mono cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="glass-card rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  <div className="h-56 bg-navy-900 relative overflow-hidden">
                    <ProjectImage
                      src={project.imageUrl}
                      alt={project.title}
                      fallbackIcon={project.fallbackIcon}
                      className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent z-10 pointer-events-none" />
                    
                    <div className="absolute top-4 left-4 z-20 px-2.5 py-1 rounded bg-navy-950/85 border border-cyan-400/40 text-[10px] font-mono text-cyan-300 font-semibold">
                      {project.badge}
                    </div>

                    <div className="absolute top-4 right-4 z-20 px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold">
                      {project.metric}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="text-[11px] font-mono text-slate-400 mb-1">
                      {project.client}
                    </div>
                    <h3 className="text-xl font-bold font-display text-white group-hover:text-cyan-400 transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm line-clamp-2 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800">
                      {project.technologies.slice(0, 4).map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-mono text-slate-300 bg-navy-900 px-2 py-0.5 rounded border border-slate-800/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <div className="flex items-center justify-between text-xs font-mono text-cyan-400 group-hover:text-white transition-colors">
                    <span>View Case Study Breakdown</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Callout */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-cyan-400/30 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white mb-2">
            Want A Similar High-Yield Platform Built For Your Brand?
          </h3>
          <p className="text-slate-400 text-sm max-w-xl mx-auto mb-6">
            We will design a custom homepage demo prototype and mapped leads strategy before you spend a single cent.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('free-demo')}
              className="px-8 py-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs font-mono uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(0,245,255,0.4)] flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 fill-slate-950" />
              <span>Claim Your Free Demo</span>
            </button>

            <a
              href="mailto:abdulmoeen524@gmail.com?subject=Project Inquiry from Portfolio"
              className="px-6 py-3.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-cyan-300 border border-cyan-400/30 text-xs font-mono font-bold transition-colors"
            >
              Email abdulmoeen524@gmail.com
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
