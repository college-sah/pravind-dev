import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Code2, FileText, Atom } from 'lucide-react';
export const Navbar = ({
  onOpenResume
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
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
    name: 'React Lab',
    href: '#react-lab'
  }, {
    name: 'Projects',
    href: '#projects'
  }, {
    name: 'Journey',
    href: '#journey'
  }, {
    name: 'Education',
    href: '#education'
  }, {
    name: 'GitHub',
    href: '#github'
  }, {
    name: 'Contact',
    href: '#contact'
  }];
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Active section detection
      const sections = ['home', 'about', 'skills', 'react-lab', 'projects', 'journey', 'education', 'github', 'contact'];
      const scrollPosition = window.scrollY + 120;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleNavClick = href => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#020617]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3.5' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group text-xl sm:text-2xl font-bold tracking-tight text-white">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <Code2 className="w-5 h-5 text-slate-950 stroke-[2.5]" />
            </div>
            <div className="flex items-center gap-2">
              <span>
                Pravind<span className="text-cyan-400">.</span>
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono font-medium text-cyan-400 bg-cyan-950/70 border border-cyan-800/60 px-2 py-0.5 rounded">
                <Atom className="w-3 h-3 text-cyan-400 animate-spin" style={{
                animationDuration: '8s'
              }} />
                <span>React.js</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map(link => {
            const isActive = activeSection === link.href.substring(1);
            return <button key={link.name} onClick={() => handleNavClick(link.href)} className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors relative ${isActive ? 'text-cyan-400 font-semibold' : 'text-slate-300 hover:text-white hover:bg-slate-800/50'}`}>
                  {link.name}
                  {isActive && <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-cyan-400 rounded-full" />}
                </button>;
          })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button onClick={onOpenResume} className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-colors cursor-pointer" title="Preview / Download Resume">
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>Resume</span>
            </button>

            <a href="#contact" onClick={e => {
            e.preventDefault();
            handleNavClick('#contact');
          }} className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 rounded-lg shadow-sm shadow-cyan-500/20 transition-all hover:shadow-cyan-500/30 active:scale-95">
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button onClick={onOpenResume} className="sm:hidden p-2 text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg" title="Resume">
              <FileText className="w-4 h-4 text-cyan-400" />
            </button>

            <button type="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500" aria-label="Toggle navigation menu">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && <div className="lg:hidden bg-[#090d1f] border-b border-slate-800 px-4 pt-3 pb-6 shadow-2xl transition-all">
          <div className="flex flex-col space-y-1">
            {navLinks.map(link => {
          const isActive = activeSection === link.href.substring(1);
          return <button key={link.name} onClick={() => handleNavClick(link.href)} className={`text-left px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${isActive ? 'text-cyan-400 bg-slate-800/80 font-semibold' : 'text-slate-300 hover:text-white hover:bg-slate-800/50'}`}>
                  {link.name}
                </button>;
        })}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-800/80 flex flex-col gap-2.5">
            <button onClick={() => {
          setMobileMenuOpen(false);
          onOpenResume();
        }} className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg">
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>Preview / Download Resume</span>
            </button>

            <button onClick={() => handleNavClick('#contact')} className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 rounded-lg shadow-sm">
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>}
    </header>;
};