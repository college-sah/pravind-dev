import React from 'react';
import { X, ExternalLink, Github, CheckCircle, AlertTriangle, Lightbulb, Layers, Play } from 'lucide-react';
export const ProjectModal = ({
  project,
  onClose,
  onOpenLiveDemo
}) => {
  if (!project) return null;
  return <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-[#090d1f] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="flex items-start justify-between p-5 sm:p-6 bg-[#0f172a] border-b border-slate-800">
          <div className="space-y-1 pr-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-cyan-400 bg-cyan-950/80 border border-cyan-800/80 px-2.5 py-0.5 rounded">
                Frontend Project
              </span>
              {project.badge && <span className="text-xs font-medium text-amber-400 bg-amber-950/80 border border-amber-800/80 px-2.5 py-0.5 rounded">
                  {project.badge}
                </span>}
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">{project.tagline}</p>
          </div>

          <button onClick={onClose} className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer" aria-label="Close modal">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1 text-slate-300 text-sm leading-relaxed">
          {/* Overview */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
              Overview
            </h4>
            <p className="text-slate-300">{project.detailedOverview}</p>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/90 space-y-2">
              <div className="flex items-center gap-2 text-rose-400 font-medium text-xs">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>The Engineering Challenge</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400">{project.problem}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/90 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-medium text-xs">
                <Lightbulb className="w-4 h-4 shrink-0" />
                <span>The Implementation Solution</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400">{project.solution}</p>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
              Key Features & Architectural Details
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feature, i) => <div key={i} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-[#0b1022] border border-slate-800/80 text-xs sm:text-sm">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-slate-300">{feature}</span>
                </div>)}
            </div>
          </div>

          {/* Technologies Used */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold flex items-center gap-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Technologies & Tools</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map(tech => <span key={tech} className="px-3 py-1 bg-slate-800 text-slate-200 border border-slate-700 rounded-lg text-xs font-mono">
                  {tech}
                </span>)}
            </div>
          </div>

          {/* Key Challenges & Learnings */}
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2.5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
              Key Technical Challenges Overcome
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              {project.challenges.map((c, i) => <li key={i} className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-0.5">▹</span>
                  <span>{c}</span>
                </li>)}
            </ul>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-5 bg-[#0f172a] border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <button onClick={() => {
          onClose();
          onOpenLiveDemo(project);
        }} className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 text-slate-950 font-semibold rounded-lg text-xs sm:text-sm transition-all shadow-md shadow-cyan-500/20 cursor-pointer">
            <Play className="w-4 h-4 fill-slate-950" />
            <span>Test Interactive Demo</span>
          </button>

          <div className="flex items-center gap-2">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors">
              <Github className="w-3.5 h-3.5" />
              <span>GitHub Repo</span>
            </a>

            <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-cyan-400 hover:text-cyan-300 bg-cyan-950/60 hover:bg-cyan-900/60 border border-cyan-800/80 rounded-lg transition-colors">
              <span>Live Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>;
};