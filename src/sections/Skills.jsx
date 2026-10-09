import React, { useState } from 'react';
import { Code, Palette, Terminal, Atom, Sparkles, Layers, Cpu, Compass, Share2, Box, Globe, Send, Network, FileJson, GitBranch, GitPullRequest, Monitor, Zap, Package } from 'lucide-react';
import { SKILLS } from '../data/portfolioData';
const iconMap = {
  Code,
  Palette,
  Terminal,
  Atom,
  Sparkles,
  Layers,
  Cpu,
  Compass,
  Share2,
  Box,
  Globe,
  Send,
  Network,
  FileJson,
  GitBranch,
  GitPullRequest,
  Monitor,
  Zap,
  Package
};
export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const categories = [{
    id: 'all',
    label: 'All Skills'
  }, {
    id: 'frontend',
    label: 'Frontend'
  }, {
    id: 'react',
    label: 'React Ecosystem'
  }, {
    id: 'apis',
    label: 'APIs & Data'
  }, {
    id: 'tools',
    label: 'Tools & Workflow'
  }];
  const filteredSkills = SKILLS.filter(skill => activeCategory === 'all' || skill.category === activeCategory);
  const getLevelBadgeColor = level => {
    switch (level) {
      case 'Comfortable':
        return 'text-emerald-400 bg-emerald-950/50 border-emerald-800/60';
      case 'Intermediate':
        return 'text-cyan-400 bg-cyan-950/50 border-cyan-800/60';
      case 'Learning':
        return 'text-amber-400 bg-amber-950/50 border-amber-800/60';
    }
  };
  return <section id="skills" className="py-20 bg-[#090d1f]/40 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-2">
              <span>02.</span>
              <span>Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Technical Skills
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-3"></div>
            <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-xl">
              Practical competencies acquired through B.Sc. CSIT coursework and hands-on frontend application development.
            </p>
          </div>

          {/* Interactive Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900/90 border border-slate-800 rounded-xl self-start md:self-auto">
            {categories.map(cat => <button key={cat.id} onClick={() => setActiveCategory(cat.id)} className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${activeCategory === cat.id ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-semibold shadow-sm' : 'text-slate-400 hover:text-white hover:bg-slate-800/60'}`}>
                {cat.label}
              </button>)}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredSkills.map(skill => {
          const IconComponent = iconMap[skill.iconName] || Code;
          return <div key={skill.name} className="group p-4 rounded-xl bg-[#0b1022] border border-slate-800/80 hover:border-slate-700 hover:bg-[#0f172a] transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/20 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:border-cyan-500/40 group-hover:text-cyan-300 transition-colors">
                      <IconComponent className="w-4 h-4" />
                    </div>

                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${getLevelBadgeColor(skill.level)}`}>
                      {skill.level}
                    </span>
                  </div>

                  <h3 className="text-sm font-semibold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                <div className="mt-4 pt-2.5 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span className="capitalize">{skill.category}</span>
                  <span className="text-slate-600 group-hover:text-cyan-400/80 transition-colors">● verified</span>
                </div>
              </div>;
        })}
        </div>

        {/* Skill Category Summary Strip */}
        <div className="mt-12 p-5 rounded-2xl bg-[#090d1f] border border-slate-800 flex flex-wrap items-center justify-around gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-white font-mono">6+</div>
            <div className="text-xs text-slate-400 mt-0.5">Frontend Foundations</div>
          </div>
          <div className="w-px h-8 bg-slate-800 hidden sm:block"></div>
          <div>
            <div className="text-2xl font-bold text-cyan-400 font-mono">4</div>
            <div className="text-xs text-slate-400 mt-0.5">React Ecosystem Tools</div>
          </div>
          <div className="w-px h-8 bg-slate-800 hidden sm:block"></div>
          <div>
            <div className="text-2xl font-bold text-blue-400 font-mono">4</div>
            <div className="text-xs text-slate-400 mt-0.5">API & Data Standards</div>
          </div>
          <div className="w-px h-8 bg-slate-800 hidden sm:block"></div>
          <div>
            <div className="text-2xl font-bold text-indigo-400 font-mono">5</div>
            <div className="text-xs text-slate-400 mt-0.5">Development Tools</div>
          </div>
        </div>
      </div>
    </section>;
};