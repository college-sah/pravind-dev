import React from 'react';
import { GraduationCap, Building, Target, MapPin, Clock, Sparkles, Layers, Code2, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
export const About = () => {
  return <section id="about" className="py-20 bg-[#020617] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-2">
            <span>01.</span>
            <span>Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-3"></div>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Narrative & Frontend Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed">
              <p>
                I'm a <strong className="text-white font-semibold">B.Sc. CSIT student</strong> and aspiring{' '}
                <strong className="text-cyan-400 font-semibold">Frontend Developer</strong> with hands-on
                experience building responsive web applications. I enjoy transforming ideas into clean,
                functional and user-friendly interfaces.
              </p>
              <p className="text-slate-400">
                My current focus is strengthening my React and JavaScript skills while learning modern
                frontend development practices and building real-world projects. I believe in writing
                maintainable code, prioritizing mobile ergonomics, and paying attention to subtle details
                that make digital experiences memorable.
              </p>
            </div>

            {/* Core Development Values */}
            <div className="pt-4 border-t border-slate-800/80">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-4">
                What I Bring To A Team
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-1.5">
                  <div className="flex items-center gap-2 text-white font-medium text-sm">
                    <Code2 className="w-4 h-4 text-cyan-400" />
                    <span>Clean & Semantic Code</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Accessible HTML5, standard JavaScript conventions, and decoupled reusable React components.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-1.5">
                  <div className="flex items-center gap-2 text-white font-medium text-sm">
                    <Layers className="w-4 h-4 text-cyan-400" />
                    <span>Responsive By Default</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Pixel-precise styling on 360px mobile screens up to multi-monitor 4K desktop viewports.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-1.5">
                  <div className="flex items-center gap-2 text-white font-medium text-sm">
                    <Target className="w-4 h-4 text-cyan-400" />
                    <span>Fast Learner & Adaptable</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Quick to absorb team conventions, modern tooling pipelines, and git collaborative flows.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-1.5">
                  <div className="flex items-center gap-2 text-white font-medium text-sm">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    <span>Internship Preparedness</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Eager to contribute immediately to real sprints under the mentorship of senior engineers.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Developer Information Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#090d1f] border border-slate-800 shadow-xl overflow-hidden p-6 sm:p-7 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-slate-950 text-base shadow-md">
                    PS
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">{PERSONAL_INFO.name}</h3>
                    <p className="text-xs text-cyan-400 font-mono">{PERSONAL_INFO.title}</p>
                  </div>
                </div>

                <span className="text-[11px] font-mono bg-emerald-950/80 text-emerald-400 border border-emerald-800/80 px-2 py-0.5 rounded">
                  Active
                </span>
              </div>

              {/* Information Rows */}
              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-slate-800/80 text-cyan-400 shrink-0 mt-0.5">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 text-xs block">Education</span>
                    <span className="text-white font-medium">B.Sc. CSIT — 4th Semester</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-slate-800/80 text-cyan-400 shrink-0 mt-0.5">
                    <Building className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 text-xs block">College</span>
                    <span className="text-white font-medium">{PERSONAL_INFO.college}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-slate-800/80 text-cyan-400 shrink-0 mt-0.5">
                    <Target className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 text-xs block">Focus</span>
                    <span className="text-white font-medium">Frontend Development & React</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-slate-800/80 text-cyan-400 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 text-xs block">Location</span>
                    <span className="text-white font-medium">{PERSONAL_INFO.location}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-slate-800/80 text-emerald-400 shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 text-xs block">Availability</span>
                    <span className="text-emerald-400 font-medium">Open to Internship Opportunities</span>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Action */}
              <div className="pt-4 border-t border-slate-800">
                <a href="#contact" className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors">
                  <span>Connect with Pravind</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};