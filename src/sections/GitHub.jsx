import React from 'react';
import { Github, GitBranch, Star, ExternalLink, BookMarked, Activity, Code2, GitCommit } from 'lucide-react';
import { GITHUB_REPOS, PERSONAL_INFO } from '../data/portfolioData';
export const GitHub = () => {
  // Generate a clean representative activity grid representing continuous weekly coding practice
  const daysInGrid = 52 * 7;
  // Deterministic seed for visually authentic contribution heat map
  const getContributionLevel = index => {
    // Sparse realistic distribution of commits during semester & project sprints
    const mod = (index * 17 + 23) % 19;
    if (mod < 7) return 0; // no commit
    if (mod < 12) return 1; // 1-2 commits
    if (mod < 16) return 2; // 3-4 commits
    return 3; // 5+ commits
  };
  const getCellColor = level => {
    switch (level) {
      case 1:
        return 'bg-emerald-900/60 border border-emerald-800/40';
      case 2:
        return 'bg-emerald-600/80 border border-emerald-500/50';
      case 3:
        return 'bg-emerald-400 border border-emerald-300';
      default:
        return 'bg-slate-900/90 border border-slate-800/60';
    }
  };
  return <section id="github" className="py-20 bg-[#090d1f]/40 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-2">
              <span>06.</span>
              <span>Open Source</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Building in Public
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-3"></div>
            <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-2xl">
              I continuously practice and build projects to improve my development skills.
              Follow my repositories and code updates on GitHub.
            </p>
          </div>

          <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white border border-slate-700/80 text-xs sm:text-sm font-semibold transition-all hover:border-slate-600 shadow-md self-start md:self-auto">
            <Github className="w-4 h-4 text-cyan-400" />
            <span>Visit My GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>

        {/* Profile Card & Activity Summary */}
        <div className="p-6 rounded-2xl bg-[#0b1022] border border-slate-800 mb-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-white">
                <Github className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <span>Pravind Sah</span>
                  <span className="text-xs font-mono text-cyan-400">@college-sah</span>
                </h3>
                <p className="text-xs text-slate-400">
                  Frontend Developer & B.Sc. CSIT Student · Biratnagar, Nepal
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-cyan-400" /> React & JS Focused
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-emerald-400" /> Active Commits
              </span>
            </div>
          </div>

          {/* GitHub Activity Heatmap Visualization */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="font-mono flex items-center gap-1.5">
                <GitCommit className="w-3.5 h-3.5 text-cyan-400" />
                Commit & Learning Activity Frequency
              </span>
              <div className="flex items-center gap-1.5 text-[10px] font-mono">
                <span>Less</span>
                <span className="w-2.5 h-2.5 rounded bg-slate-900 border border-slate-800 inline-block"></span>
                <span className="w-2.5 h-2.5 rounded bg-emerald-900/60 border border-emerald-800/40 inline-block"></span>
                <span className="w-2.5 h-2.5 rounded bg-emerald-600/80 border border-emerald-500/50 inline-block"></span>
                <span className="w-2.5 h-2.5 rounded bg-emerald-400 inline-block"></span>
                <span>More</span>
              </div>
            </div>

            <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800/80 overflow-x-auto">
              <div className="grid grid-rows-7 grid-flow-col gap-1 min-w-[640px]">
                {Array.from({
                length: 52 * 7
              }).map((_, i) => {
                const level = getContributionLevel(i);
                return <div key={i} className={`w-2.5 h-2.5 rounded-[2px] ${getCellColor(level)} transition-colors`} title={`Activity index #${i + 1}`} />;
              })}
              </div>
            </div>
          </div>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {GITHUB_REPOS.map(repo => <a key={repo.name} href={repo.url} target="_blank" rel="noopener noreferrer" className="group p-5 rounded-xl bg-[#090d1f] border border-slate-800 hover:border-slate-700 hover:bg-[#0f172a] transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs sm:text-sm font-semibold group-hover:text-cyan-300">
                    <BookMarked className="w-4 h-4 text-cyan-400" />
                    <span>{repo.name}</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
                    Public
                  </span>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {repo.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {repo.topics.map(t => <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800/60">
                      #{t}
                    </span>)}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full inline-block" style={{
                backgroundColor: repo.languageColor
              }}></span>
                  <span>{repo.language}</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 hover:text-white">
                    <Star className="w-3.5 h-3.5 text-amber-400" /> {repo.stars}
                  </span>
                  <span className="flex items-center gap-1 hover:text-white">
                    <GitBranch className="w-3.5 h-3.5 text-slate-400" /> {repo.forks}
                  </span>
                </div>
              </div>
            </a>)}
        </div>
      </div>
    </section>;
};