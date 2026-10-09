import React from 'react';
import { Github, Linkedin, Mail, FileText, ArrowRight, Sparkles, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { CodeCard } from '../components/CodeCard';
export const Hero = ({
  onOpenResume
}) => {
  return <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grid-pattern">
      {/* Background ambient radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-300 shadow-sm backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-medium text-emerald-400">{PERSONAL_INFO.status}</span>
              <span className="text-slate-600 hidden sm:inline">|</span>
              <span className="text-slate-400 hidden sm:inline flex items-center gap-1">
                <MapPin className="w-3 h-3 text-cyan-400 inline" /> {PERSONAL_INFO.location}
              </span>
            </div>

            {/* Headings */}
            <div className="space-y-3">
              <p className="text-cyan-400 font-mono text-sm sm:text-base font-semibold tracking-wide">
                Hi, I'm Pravind Sah.
              </p>
              <h1 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
                Frontend Developer{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
                  building modern web experiences.
                </span>
              </h1>
            </div>

            {/* Supporting Description */}
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {PERSONAL_INFO.supportingText}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a href="#projects" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-bold rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all active:scale-95 text-sm sm:text-base">
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </a>

              <a href="#react-lab" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-cyan-950/40 hover:bg-cyan-900/40 text-cyan-300 font-semibold border border-cyan-800/80 rounded-xl transition-all active:scale-95 text-sm sm:text-base">
                <span>React.js Lab</span>
                <Sparkles className="w-4 h-4 text-cyan-400" />
              </a>

              <button onClick={onOpenResume} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-slate-900/90 hover:bg-slate-800 text-white font-medium border border-slate-700/80 rounded-xl transition-all hover:border-slate-600 active:scale-95 text-sm sm:text-base cursor-pointer">
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Resume</span>
              </button>
            </div>

            {/* Social Icons & Quick Info */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <span className="text-xs text-slate-500 font-mono uppercase tracking-wider">Connect:</span>
              <div className="flex items-center gap-2.5">
                <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors" aria-label="GitHub Profile" title="GitHub: @college-sah">
                  <Github className="w-4 h-4" />
                </a>

                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-slate-700 transition-colors" aria-label="LinkedIn Profile (Placeholder)" title="LinkedIn Profile">
                  <Linkedin className="w-4 h-4" />
                </a>

                <a href={`mailto:${PERSONAL_INFO.email}`} className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-slate-700 transition-colors" aria-label="Email Pravind" title={`Email: ${PERSONAL_INFO.email}`}>
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              <div className="hidden sm:flex items-center gap-2 text-xs text-slate-500 font-mono pl-3 border-l border-slate-800">
                <span className="text-cyan-400 font-medium">B.Sc. CSIT</span>
                <span>·</span>
                <span>AIMS College</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Code Card */}
          <div className="lg:col-span-5 flex justify-center">
            <CodeCard />
          </div>
        </div>
      </div>
    </section>;
};