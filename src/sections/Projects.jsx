import React from 'react';
import { ExternalLink, Github, Play, Info, Layers, Sparkles, Users, Video, ShoppingCart as CartIcon, CheckSquare } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
export const Projects = ({
  onSelectProject,
  onOpenLiveDemo
}) => {
  const getProjectIcon = id => {
    switch (id) {
      case 'youtube-clone':
        return <Video className="w-5 h-5 text-red-400" />;
      case 'shopping-cart':
        return <CartIcon className="w-5 h-5 text-cyan-400" />;
      case 'react-todo-app':
        return <CheckSquare className="w-5 h-5 text-emerald-400" />;
      case 'viperteam7-hackathon':
        return <Users className="w-5 h-5 text-amber-400" />;
      default:
        return <Layers className="w-5 h-5 text-cyan-400" />;
    }
  };
  const getGradientForProject = id => {
    switch (id) {
      case 'youtube-clone':
        return 'from-red-950/80 via-slate-900 to-[#0b1022]';
      case 'shopping-cart':
        return 'from-cyan-950/80 via-slate-900 to-[#0b1022]';
      case 'react-todo-app':
        return 'from-emerald-950/80 via-slate-900 to-[#0b1022]';
      case 'viperteam7-hackathon':
        return 'from-amber-950/80 via-slate-900 to-[#0b1022]';
      default:
        return 'from-blue-950/80 via-slate-900 to-[#0b1022]';
    }
  };
  return <section id="projects" className="py-20 bg-[#020617] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-2">
              <span>03.</span>
              <span>Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Projects
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-3"></div>
            <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-2xl">
              A selection of projects I've built while developing my frontend skills. Click on any card
              to explore architecture details or test the interactive sandbox demo.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            <span>4 Practical Codebases</span>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map(project => <div key={project.id} className="group relative rounded-2xl bg-[#090d1f] border border-slate-800 hover:border-cyan-500/50 shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-cyan-950/20 flex flex-col justify-between">
              {/* Project Card Visual Header / Mockup Preview */}
              <div className={`relative h-48 sm:h-56 bg-gradient-to-br ${getGradientForProject(project.id)} p-6 flex flex-col justify-between border-b border-slate-800/80 overflow-hidden cursor-pointer`} onClick={() => onSelectProject(project)}>
                {/* Background grid lines in mockup header */}
                <div className="absolute inset-0 bg-grid-pattern opacity-30 group-hover:scale-105 transition-transform duration-500"></div>

                {/* Top badges */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-slate-950/80 border border-slate-800 backdrop-blur-sm shadow-sm">
                      {getProjectIcon(project.id)}
                    </div>
                    {project.badge && <span className="text-[11px] font-medium text-amber-300 bg-amber-950/80 border border-amber-800/80 px-2.5 py-0.5 rounded backdrop-blur-sm">
                        {project.badge}
                      </span>}
                  </div>

                  <span className="text-xs font-mono text-slate-400 bg-slate-950/80 border border-slate-800 px-2.5 py-1 rounded backdrop-blur-sm">
                    {project.category.toUpperCase()}
                  </span>
                </div>

                {/* Simulated UI Window Preview */}
                <div className="relative z-10 rounded-xl bg-slate-950/90 border border-slate-800/80 p-3 shadow-lg group-hover:border-slate-700 transition-colors">
                  <div className="flex items-center gap-1.5 mb-2">
                    <span className="w-2 h-2 rounded-full bg-slate-700"></span>
                    <span className="w-2 h-2 rounded-full bg-slate-700"></span>
                    <span className="w-2 h-2 rounded-full bg-slate-700"></span>
                    <span className="text-[10px] text-slate-500 font-mono ml-2 truncate">
                      localhost:3000/{project.id}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-white font-medium truncate">{project.title}</span>
                    <span className="text-cyan-400 text-[11px] flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> View Architecture
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 onClick={() => onSelectProject(project)} className="text-xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors cursor-pointer">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights Bullet Strip */}
                  <div className="mt-3.5 flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-400">
                    {project.highlights.map((h, i) => <span key={i} className="flex items-center gap-1">
                        <span className="text-cyan-400">✔</span> {h}
                      </span>)}
                  </div>
                </div>

                {/* Technologies */}
                <div className="pt-3 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.map(tech => <span key={tech} className="px-2.5 py-1 bg-slate-900 border border-slate-800 rounded-md text-[11px] font-mono text-slate-300 group-hover:border-slate-700 transition-colors">
                        {tech}
                      </span>)}
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-800/60">
                    <div className="flex items-center gap-2">
                      <button onClick={() => onOpenLiveDemo(project)} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 hover:text-cyan-300 border border-cyan-500/30 rounded-lg text-xs font-semibold transition-all cursor-pointer" title="Run simulated interactive preview">
                        <Play className="w-3.5 h-3.5 fill-cyan-400" />
                        <span>Interactive Demo</span>
                      </button>

                      <button onClick={() => onSelectProject(project)} className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer">
                        <Info className="w-3.5 h-3.5" />
                        <span>Details</span>
                      </button>
                    </div>

                    <div className="flex items-center gap-2">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-colors" title="GitHub Repository">
                        <Github className="w-3.5 h-3.5" />
                        <span>GitHub</span>
                      </a>

                      <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-sm" title="Live Demo">
                        <span>Live Demo</span>
                        <ExternalLink className="w-3 h-3 stroke-[2.5]" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};