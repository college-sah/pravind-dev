import React from 'react';
import { GraduationCap, MapPin, BookOpen, CheckCircle } from 'lucide-react';
import { EDUCATION } from '../data/portfolioData';
export const Education = () => {
  return <section id="education" className="py-20 bg-[#020617] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-2">
            <span>05.</span>
            <span>Academics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-3"></div>
          <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-2xl">
            My formal computer science curriculum provides theoretical grounding in algorithms,
            data modeling, and software engineering.
          </p>
        </div>

        {/* Education Timeline Card */}
        <div className="max-w-4xl mx-auto">
          {EDUCATION.map((edu, index) => <div key={index} className="rounded-2xl bg-[#090d1f] border border-slate-800 p-6 sm:p-8 shadow-xl space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-slate-800">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-800 flex items-center justify-center text-cyan-400 shrink-0 mt-1 shadow-md shadow-cyan-950/30">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-mono text-cyan-400 font-semibold">
                      Bachelor's Degree
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      B.Sc. CSIT
                    </h3>
                    <p className="text-sm font-medium text-slate-300">
                      Bachelor of Science in Computer Science & Information Technology
                    </p>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 pt-1">
                      <span className="text-slate-300 font-semibold">{edu.institution}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-cyan-400" /> {edu.location}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-row sm:flex-col items-start sm:items-end gap-2">
                  <span className="px-3 py-1 bg-slate-800/90 border border-slate-700 rounded-lg text-xs font-mono text-cyan-300">
                    {edu.semester}
                  </span>
                  <span className="text-xs text-emerald-400 flex items-center gap-1 font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    {edu.status}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                  Academic Focus & Overview
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {edu.description}
                </p>
              </div>

              {/* Coursework Modules */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Relevant Academic Coursework</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                  {edu.coursework.map((course, i) => <div key={i} className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{course}</span>
                    </div>)}
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};