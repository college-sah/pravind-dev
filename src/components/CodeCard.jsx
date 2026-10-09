import React, { useState } from 'react';
import { Copy, Check, MapPin } from 'lucide-react';
export const CodeCard = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('developer');
  const developerCode = `const developer = {
  name: "Pravind Sah",
  role: "Frontend Developer",
  skills: ["React", "JavaScript", "Tailwind"],
  location: "Nepal"
};`;
  const stackCode = `// Pravind's Current Focus
export const currentFocus = {
  college: "AIMS College, Biratnagar",
  degree: "B.Sc. CSIT (4th Sem)",
  seeking: "Frontend Developer Internship",
  tools: ["React 19", "Tailwind CSS", "Vite", "Axios"]
};`;
  const handleCopy = () => {
    const textToCopy = activeTab === 'developer' ? developerCode : stackCode;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
      {/* Background ambient glow */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000"></div>

      {/* Main card */}
      <div className="relative rounded-xl bg-[#090d1f] border border-slate-800 shadow-2xl overflow-hidden">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#0f172a]/80 border-b border-slate-800/80">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
            </div>
            <div className="ml-3 flex items-center gap-1 bg-slate-900/90 rounded-md p-0.5 border border-slate-800">
              <button onClick={() => setActiveTab('developer')} className={`px-2.5 py-1 text-xs font-mono rounded transition-colors ${activeTab === 'developer' ? 'bg-slate-800 text-cyan-300 font-medium' : 'text-slate-400 hover:text-slate-200'}`}>
                developer.js
              </button>
              <button onClick={() => setActiveTab('stack')} className={`px-2.5 py-1 text-xs font-mono rounded transition-colors ${activeTab === 'stack' ? 'bg-slate-800 text-cyan-300 font-medium' : 'text-slate-400 hover:text-slate-200'}`}>
                focus.ts
              </button>
            </div>
          </div>

          <button onClick={handleCopy} className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-300 px-2 py-1 rounded bg-slate-900/60 hover:bg-slate-800 border border-slate-800 transition-colors" title="Copy code" aria-label="Copy code to clipboard">
            {copied ? <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-mono">Copied</span>
              </> : <>
                <Copy className="w-3.5 h-3.5" />
                <span className="font-mono">Copy</span>
              </>}
          </button>
        </div>

        {/* Code Content */}
        <div className="p-5 font-mono text-xs sm:text-sm overflow-x-auto leading-relaxed">
          {activeTab === 'developer' ? <div className="space-y-1">
              <div className="flex">
                <span className="text-slate-600 select-none w-7 text-right pr-3">1</span>
                <span>
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-blue-400">developer</span> = &#123;
                </span>
              </div>
              <div className="flex">
                <span className="text-slate-600 select-none w-7 text-right pr-3">2</span>
                <span className="pl-4">
                  <span className="text-slate-300">name</span>: <span className="text-emerald-300">"Pravind Sah"</span>,
                </span>
              </div>
              <div className="flex">
                <span className="text-slate-600 select-none w-7 text-right pr-3">3</span>
                <span className="pl-4">
                  <span className="text-slate-300">role</span>: <span className="text-emerald-300">"Frontend Developer"</span>,
                </span>
              </div>
              <div className="flex">
                <span className="text-slate-600 select-none w-7 text-right pr-3">4</span>
                <span className="pl-4">
                  <span className="text-slate-300">skills</span>: [
                  <span className="text-cyan-300">"React"</span>,{' '}
                  <span className="text-cyan-300">"JavaScript"</span>,{' '}
                  <span className="text-cyan-300">"Tailwind"</span>
                  ],
                </span>
              </div>
              <div className="flex">
                <span className="text-slate-600 select-none w-7 text-right pr-3">5</span>
                <span className="pl-4">
                  <span className="text-slate-300">location</span>: <span className="text-emerald-300">"Nepal"</span>
                </span>
              </div>
              <div className="flex">
                <span className="text-slate-600 select-none w-7 text-right pr-3">6</span>
                <span>&#125;;</span>
              </div>
            </div> : <div className="space-y-1">
              <div className="flex">
                <span className="text-slate-600 select-none w-7 text-right pr-3">1</span>
                <span className="text-slate-500">// Pravind's Current Focus</span>
              </div>
              <div className="flex">
                <span className="text-slate-600 select-none w-7 text-right pr-3">2</span>
                <span>
                  <span className="text-purple-400">export const</span>{' '}
                  <span className="text-blue-400">currentFocus</span> = &#123;
                </span>
              </div>
              <div className="flex">
                <span className="text-slate-600 select-none w-7 text-right pr-3">3</span>
                <span className="pl-4">
                  <span className="text-slate-300">college</span>: <span className="text-emerald-300">"AIMS College, Biratnagar"</span>,
                </span>
              </div>
              <div className="flex">
                <span className="text-slate-600 select-none w-7 text-right pr-3">4</span>
                <span className="pl-4">
                  <span className="text-slate-300">degree</span>: <span className="text-emerald-300">"B.Sc. CSIT (4th Sem)"</span>,
                </span>
              </div>
              <div className="flex">
                <span className="text-slate-600 select-none w-7 text-right pr-3">5</span>
                <span className="pl-4">
                  <span className="text-slate-300">seeking</span>: <span className="text-cyan-300">"Frontend Developer Internship"</span>,
                </span>
              </div>
              <div className="flex">
                <span className="text-slate-600 select-none w-7 text-right pr-3">6</span>
                <span className="pl-4">
                  <span className="text-slate-300">tools</span>: [<span className="text-amber-300">"React 19"</span>, <span className="text-amber-300">"Tailwind"</span>, <span className="text-amber-300">"Vite"</span>]
                </span>
              </div>
              <div className="flex">
                <span className="text-slate-600 select-none w-7 text-right pr-3">7</span>
                <span>&#125;;</span>
              </div>
            </div>}
        </div>

        {/* Footer Quick Status Bar */}
        <div className="px-4 py-3 bg-[#0d1326] border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2 text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-medium">Open to Internship</span>
          </div>

          <div className="flex items-center gap-3 text-slate-400 font-mono">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-cyan-400" /> Biratnagar, NP
            </span>
            <span>·</span>
            <span className="text-cyan-300">React.js</span>
          </div>
        </div>
      </div>
    </div>;
};