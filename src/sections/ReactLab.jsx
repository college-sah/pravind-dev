import React, { useState } from 'react';
import { Code2, Play, Copy, Check, RotateCcw, Plus, Minus, Search } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
export const ReactLab = () => {
  const [activeTab, setActiveTab] = useState('counter');
  const [viewCode, setViewCode] = useState(false);
  const [copied, setCopied] = useState(false);

  // Demo 1: Interactive React State Counter
  const [count, setCount] = useState(1);
  const [step, setStep] = useState(1);

  // Demo 2: Debounced Filter
  const [query, setQuery] = useState('');
  const skillsList = ['React.js Components', 'React Hooks (useState, useEffect)', 'Tailwind CSS Utility Classes', 'Axios REST API Integration', 'React Router v6 Navigation', 'JavaScript ES6+ Promises', 'HTML5 Semantic Layouts', 'Vite Build Tooling'];
  const filteredSkills = skillsList.filter(s => s.toLowerCase().includes(query.toLowerCase()));

  // Demo 3: React Theme Context
  const {
    accent,
    setAccent
  } = useTheme();

  // Demo 4: Controlled Form
  const [formInput, setFormInput] = useState({
    name: '',
    role: 'Frontend Intern'
  });
  const [submittedMessage, setSubmittedMessage] = useState('');
  const counterCode = `// React Counter with dynamic step & constraints
import React, { useState } from 'react';

export function ReactCounter() {
  const [count, setCount] = useState(1);
  const [step, setStep] = useState(1);

  const increment = () => setCount(prev => prev + step);
  const decrement = () => setCount(prev => Math.max(0, prev - step));
  const reset = () => setCount(0);

  return (
    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
      <h4 className="text-xl font-bold font-mono">Count: {count}</h4>
      <div className="flex gap-2 mt-3">
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}`;
  const searchCode = `// React Live Filter using derived state
import React, { useState } from 'react';

export function ReactSearchList({ items }) {
  const [query, setQuery] = useState('');

  // Derived state: zero redundant re-renders
  const filtered = items.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input 
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Filter technologies..."
      />
      <ul>
        {filtered.map(item => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}`;
  const themeCode = `// React Context API for Global App Theming
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [accent, setAccent] = useState('cyan');
  return (
    <ThemeContext.Provider value={{ accent, setAccent }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);`;
  const formCode = `// React Controlled Component with real-time feedback
import React, { useState } from 'react';

export function ControlledForm() {
  const [data, setData] = useState({ name: '', role: 'Frontend Intern' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={e => { e.preventDefault(); alert(JSON.stringify(data)); }}>
      <input name="name" value={data.name} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}`;
  const getCurrentCode = () => {
    switch (activeTab) {
      case 'counter':
        return counterCode;
      case 'search':
        return searchCode;
      case 'theme':
        return themeCode;
      case 'form':
        return formCode;
    }
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(getCurrentCode());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return <section id="react-lab" className="py-20 bg-[#020617] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span>React.js Playground</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight flex items-center gap-3">
              <span>React.js in Action</span>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-800/80 font-normal">
                Live Component Lab
              </span>
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-3"></div>
            <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-2xl">
              Interact with real, production-ready React components written with modern functional
              hooks, immutable state updates, and clean component composition.
            </p>
          </div>

          {/* Toggle between Live Preview and Code */}
          <div className="flex items-center gap-2 self-start md:self-auto bg-slate-900 border border-slate-800 p-1 rounded-xl">
            <button onClick={() => setViewCode(false)} className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${!viewCode ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold shadow-sm' : 'text-slate-400 hover:text-white'}`}>
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Interactive UI</span>
            </button>
            <button onClick={() => setViewCode(true)} className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${viewCode ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold shadow-sm' : 'text-slate-400 hover:text-white'}`}>
              <Code2 className="w-3.5 h-3.5" />
              <span>React Code</span>
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center gap-2 mb-6 border-b border-slate-800 pb-3">
          <button onClick={() => setActiveTab('counter')} className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors cursor-pointer ${activeTab === 'counter' ? 'bg-slate-800 text-cyan-300 font-semibold border border-slate-700' : 'text-slate-400 hover:text-white hover:bg-slate-900'}`}>
            1. State & Counter (useState)
          </button>
          <button onClick={() => setActiveTab('search')} className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors cursor-pointer ${activeTab === 'search' ? 'bg-slate-800 text-cyan-300 font-semibold border border-slate-700' : 'text-slate-400 hover:text-white hover:bg-slate-900'}`}>
            2. Live Search & Derived State
          </button>
          <button onClick={() => setActiveTab('theme')} className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors cursor-pointer ${activeTab === 'theme' ? 'bg-slate-800 text-cyan-300 font-semibold border border-slate-700' : 'text-slate-400 hover:text-white hover:bg-slate-900'}`}>
            3. Context API (Live Theme Switcher)
          </button>
          <button onClick={() => setActiveTab('form')} className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors cursor-pointer ${activeTab === 'form' ? 'bg-slate-800 text-cyan-300 font-semibold border border-slate-700' : 'text-slate-400 hover:text-white hover:bg-slate-900'}`}>
            4. Controlled Form & Validation
          </button>
        </div>

        {/* Component Display Card */}
        <div className="rounded-2xl bg-[#090d1f] border border-slate-800 shadow-2xl overflow-hidden">
          {/* Header bar of sandbox */}
          <div className="flex items-center justify-between px-5 py-3.5 bg-[#0f172a] border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
              <span className="text-xs font-mono text-slate-300">
                {activeTab === 'counter' && 'ReactCounterComponent.jsx'}
                {activeTab === 'search' && 'LiveSearchFilter.jsx'}
                {activeTab === 'theme' && 'ThemeContext.jsx'}
                {activeTab === 'form' && 'ControlledForm.jsx'}
              </span>
            </div>

            <button onClick={handleCopy} className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs rounded transition-colors">
              {copied ? <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </> : <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy JSX</span>
                </>}
            </button>
          </div>

          {/* Body: Either Code or Live Interactive UI */}
          <div className="p-6 sm:p-8 min-h-[280px] flex items-center justify-center">
            {viewCode ? <pre className="w-full text-xs sm:text-sm font-mono text-cyan-300 bg-slate-950 p-5 rounded-xl border border-slate-800 overflow-x-auto leading-relaxed">
                <code>{getCurrentCode()}</code>
              </pre> : <div className="w-full max-w-lg">
                {/* 1. Counter Demo */}
                {activeTab === 'counter' && <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-5 text-center">
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block">
                      Reactive Counter Value
                    </span>
                    <div className="text-5xl font-black font-mono text-white tracking-tight">
                      {count}
                    </div>

                    <div className="flex items-center justify-center gap-3">
                      <button onClick={() => setCount(prev => Math.max(0, prev - step))} className="p-3 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white rounded-xl transition-all cursor-pointer hover:border-cyan-500" title="Decrement">
                        <Minus className="w-5 h-5" />
                      </button>

                      <button onClick={() => setCount(0)} className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 text-xs font-mono rounded-xl transition-all cursor-pointer flex items-center gap-1.5" title="Reset">
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Reset</span>
                      </button>

                      <button onClick={() => setCount(prev => prev + step)} className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold rounded-xl transition-all cursor-pointer shadow-lg shadow-cyan-500/20" title="Increment">
                        <Plus className="w-5 h-5 stroke-[2.5]" />
                      </button>
                    </div>

                    <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                      <span>Step Size:</span>
                      <div className="flex gap-1.5">
                        {[1, 5, 10].map(s => <button key={s} onClick={() => setStep(s)} className={`px-2.5 py-1 rounded text-xs font-mono ${step === s ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-slate-900 text-slate-400'}`}>
                            +{s}
                          </button>)}
                      </div>
                    </div>
                  </div>}

                {/* 2. Live Search Demo */}
                {activeTab === 'search' && <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                    <div className="relative">
                      <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input type="text" value={query} onChange={e => setQuery(e.target.value)} placeholder="Filter React capabilities (e.g. Hooks, API)..." className="w-full pl-9 pr-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400" />
                    </div>

                    <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
                      {filteredSkills.length === 0 ? <p className="text-xs text-slate-500 text-center py-4">
                          No matching skills found. Try typing "React" or "CSS".
                        </p> : filteredSkills.map((s, idx) => <div key={idx} className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
                            <span>{s}</span>
                            <span className="text-[10px] font-mono text-cyan-400">matched</span>
                          </div>)}
                    </div>
                  </div>}

                {/* 3. Theme Context Demo */}
                {activeTab === 'theme' && <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-5 text-center">
                    <div>
                      <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-1">
                        React Context API
                      </span>
                      <h4 className="text-base font-bold text-white">
                        Change Portfolio Accent Color Globally
                      </h4>
                      <p className="text-xs text-slate-400 mt-1">
                        Clicking any button updates the React Theme Context and affects buttons and highlights across the entire app!
                      </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
                      {['cyan', 'emerald', 'violet', 'amber'].map(t => <button key={t} onClick={() => setAccent(t)} className={`p-3 rounded-xl border text-xs font-medium capitalize transition-all cursor-pointer flex flex-col items-center gap-1.5 ${accent === t ? 'bg-slate-800 border-white text-white shadow-lg' : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'}`}>
                          <span className={`w-4 h-4 rounded-full ${t === 'cyan' ? 'bg-cyan-400' : t === 'emerald' ? 'bg-emerald-400' : t === 'violet' ? 'bg-purple-400' : 'bg-amber-400'}`} />
                          <span>{t}</span>
                        </button>)}
                    </div>

                    <p className="text-[11px] font-mono text-slate-500">
                      Current Active Context: <strong className="text-white capitalize">{accent}</strong>
                    </p>
                  </div>}

                {/* 4. Controlled Form Demo */}
                {activeTab === 'form' && <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                    <div className="space-y-1">
                      <label className="text-xs font-mono text-slate-400">Developer Name</label>
                      <input type="text" value={formInput.name} onChange={e => setFormInput({
                  ...formInput,
                  name: e.target.value
                })} placeholder="Type a developer name..." className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-cyan-400" />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-mono text-slate-400">Role Selection</label>
                      <select value={formInput.role} onChange={e => setFormInput({
                  ...formInput,
                  role: e.target.value
                })} className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-cyan-400">
                        <option>Frontend Developer Intern</option>
                        <option>Junior React Developer</option>
                        <option>Web UI Developer</option>
                      </select>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-xs text-slate-300 font-mono">
                      State Preview: {JSON.stringify(formInput)}
                    </div>
                  </div>}
              </div>}
          </div>
        </div>
      </div>
    </section>;
};