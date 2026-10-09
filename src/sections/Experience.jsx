import React from 'react';
import { CheckCircle, Rocket, BookOpen, Target } from 'lucide-react';
import { JOURNEY } from '../data/portfolioData';
export const Experience = ({
  onOpenResume
}) => {
  return <section id="journey" className="py-20 bg-[#090d1f]/40 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-2">
            <span>04.</span>
            <span>Path</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            My Development Journey
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-3"></div>
          <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-2xl">
            A transparent overview of my computer science studies, self-directed frontend project building,
            and preparation for my upcoming internship.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l border-slate-800 space-y-12 max-w-4xl mx-auto">
          {JOURNEY.map((item, index) => {
          const isLast = index === JOURNEY.length - 1;
          return <div key={item.stage} className="relative group">
                {/* Node icon on line */}
                <div className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center border-2 ${isLast ? 'bg-cyan-500 border-cyan-300 text-slate-950 shadow-lg shadow-cyan-500/40 animate-pulse' : 'bg-slate-900 border-slate-700 text-cyan-400 group-hover:border-cyan-400 transition-colors'}`}>
                  {index === 0 && <BookOpen className="w-3.5 h-3.5" />}
                  {index === 1 && <Rocket className="w-3.5 h-3.5" />}
                  {index === 2 && <Target className="w-3.5 h-3.5" />}
                </div>

                {/* Milestone Card */}
                <div className="rounded-2xl bg-[#0b1022] border border-slate-800/90 group-hover:border-slate-700 p-6 sm:p-7 shadow-xl transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800/80">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-cyan-400 font-bold">
                        Phase {item.stage}
                      </span>
                      <span className="text-slate-600">·</span>
                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                        {item.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">
                        {item.badge}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 mt-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Highlight items */}
                  <div className="mt-4 pt-3 border-t border-slate-800/60">
                    <h4 className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                      Key Focus Areas
                    </h4>
                    <ul className="space-y-1.5">
                      {item.highlights.map((hl, i) => <li key={i} className="flex items-start gap-2 text-xs text-slate-400">
                          <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>)}
                    </ul>
                  </div>
                </div>
              </div>;
        })}
        </div>

        {/* Recruiter Callout */}
        <div className="mt-14 max-w-4xl mx-auto p-6 rounded-2xl bg-gradient-to-r from-blue-950/40 via-cyan-950/30 to-slate-900 border border-cyan-800/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold text-white">
              Ready to bring this momentum to your frontend team
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              Actively interviewing for Summer/Fall 2026 Frontend Internships and Junior Frontend roles.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button onClick={onOpenResume} className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-xs font-medium text-white rounded-lg border border-slate-700 transition-colors cursor-pointer">
              Review Resume
            </button>
            <a href="#contact" className="px-4 py-2 bg-cyan-400 hover:bg-cyan-300 text-slate-950 text-xs font-bold rounded-lg transition-colors shadow-sm">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>;
};