import React from 'react';
import { Code2, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const navLinks = [{
    name: 'Home',
    href: '#home'
  }, {
    name: 'About',
    href: '#about'
  }, {
    name: 'Skills',
    href: '#skills'
  }, {
    name: 'Projects',
    href: '#projects'
  }, {
    name: 'Contact',
    href: '#contact'
  }];
  return <footer className="bg-[#020617] border-t border-slate-900 py-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          {/* Brand */}
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-slate-950 font-bold">
                <Code2 className="w-4 h-4 stroke-[2.5]" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Pravind<span className="text-cyan-400">.</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm">
              Frontend Developer passionate about building clean and user-friendly web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-xs sm:text-sm">
            {navLinks.map(link => <a key={link.name} href={link.href} className="text-slate-400 hover:text-white transition-colors">
                {link.name}
              </a>)}
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors" aria-label="GitHub Profile">
              <Github className="w-4 h-4" />
            </a>

            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-slate-700 transition-colors" aria-label="LinkedIn Profile">
              <Linkedin className="w-4 h-4" />
            </a>

            <a href={`mailto:${PERSONAL_INFO.email}`} className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-slate-700 transition-colors" aria-label="Email Pravind">
              <Mail className="w-4 h-4" />
            </a>

            <button onClick={scrollToTop} className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-2 cursor-pointer" title="Back to Top" aria-label="Scroll back to top">
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© 2026 Pravind Sah. All rights reserved.</p>
          <div className="flex items-center gap-2 font-mono">
            <span>Crafted with React & Tailwind CSS</span>
            <span>·</span>
            <span>Biratnagar, Nepal</span>
          </div>
        </div>
      </div>
    </footer>;
};