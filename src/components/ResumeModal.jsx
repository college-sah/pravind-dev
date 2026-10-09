import React, { useState } from 'react';
import { X, Download, Printer, Copy, Check, Mail, Phone, MapPin, Github } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
export const ResumeModal = ({
  isOpen,
  onClose
}) => {
  const [copied, setCopied] = useState(false);
  if (!isOpen) return null;
  const handlePrint = () => {
    window.print();
  };
  const handleDownloadPdf = () => {
    // Standard trigger for /resume.pdf as requested in prompt
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Pravind_Sah_Frontend_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const handleCopyText = () => {
    const text = `
PRAVIND SAH
Frontend Developer Intern
Location: ${PERSONAL_INFO.location}
Email: ${PERSONAL_INFO.email} | Phone: ${PERSONAL_INFO.phone}
GitHub: ${PERSONAL_INFO.github}

PROFESSIONAL SUMMARY:
${PERSONAL_INFO.supportingText}

EDUCATION:
B.Sc. CSIT (Bachelor of Science in Computer Science & Information Technology)
AIMS College, Biratnagar, Nepal — 4th Semester (Ongoing)
Relevant Coursework: Web Technologies, Data Structures & Algorithms, Object-Oriented Programming, Database Systems.

TECHNICAL SKILLS:
- Frontend: HTML5, CSS3, JavaScript (ES6+), React.js, Tailwind CSS, Bootstrap
- React Ecosystem: React Hooks, React Router, Context API, Component Architecture
- APIs & Data: REST APIs, Axios, API Integration, JSON
- Tools & Workflow: Git, GitHub, VS Code, Vite, npm

FEATURED PROJECTS:
1. YouTube Clone (React.js, Tailwind CSS, REST API, Axios, React Router)
- Responsive video platform with video browsing, search, categories, thumbnails and video playback.
- Integrated external REST API data with Axios and configured client-side routing.

2. Shopping Cart (React.js, JavaScript, CSS)
- Component-based e-commerce store with product listing, cart state management, and real-time total calculations.

3. React Todo App (React.js, JavaScript, CSS)
- Responsive CRUD task management application with React hooks, priority filtering, and local storage persistence.

4. ViperTeam7 — Hackathon Project (HTML, CSS, JavaScript)
- Collaborative hackathon sprint project. Implemented responsive frontend UI layout and DOM interactions as part of a development team.
    `.trim();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-[#090d1f] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[95vh]">
        {/* Top toolbar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-[#0f172a] border-b border-slate-800 print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-xs sm:text-sm font-semibold text-white">
              Pravind Sah — Frontend Developer Resume
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button onClick={handleCopyText} className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer" title="Copy resume text">
              {copied ? <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </> : <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Text</span>
                </>}
            </button>

            <button onClick={handlePrint} className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer" title="Print resume">
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print</span>
            </button>

            <button onClick={handleDownloadPdf} className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 rounded-lg shadow-sm cursor-pointer transition-all">
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>

            <button onClick={onClose} className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer ml-1" aria-label="Close resume viewer">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable & ATS-Friendly Resume Document */}
        <div className="p-6 sm:p-10 overflow-y-auto flex-1 bg-white text-slate-900 font-sans print:p-0 print:m-0 print:overflow-visible">
          {/* Header */}
          <div className="border-b-2 border-slate-900 pb-4 mb-5">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              PRAVIND SAH
            </h1>
            <p className="text-sm sm:text-base font-semibold text-blue-700 tracking-wide mt-0.5">
              Frontend Developer Intern | B.Sc. CSIT Student
            </p>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-slate-700 mt-3 font-medium">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-600" /> Biratnagar, Nepal
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-slate-600" /> sahpravind83@gmail.com
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-slate-600" /> +977 9825700506
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Github className="w-3.5 h-3.5 text-slate-600" /> github.com/college-sah
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <section className="mb-5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              B.Sc. CSIT student and aspiring Frontend Developer with hands-on experience building responsive,
              interactive web applications using HTML, CSS, JavaScript, React.js, Tailwind CSS and Bootstrap.
              Passionate about clean component architecture, cross-device responsiveness, and seeking a
              Frontend Developer Internship to contribute to real-world software products.
            </p>
          </section>

          {/* Education */}
          <section className="mb-5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Education
            </h2>
            <div className="space-y-1 text-xs sm:text-sm">
              <div className="flex items-baseline justify-between font-bold text-slate-900">
                <span>Bachelor of Science in Computer Science & Information Technology (B.Sc. CSIT)</span>
                <span className="text-xs text-slate-600 font-normal">2024 – Present</span>
              </div>
              <div className="flex items-baseline justify-between text-xs text-slate-700">
                <span className="font-semibold text-slate-800">AIMS College, Biratnagar, Nepal</span>
                <span className="italic">4th Semester (Ongoing)</span>
              </div>
              <p className="text-xs text-slate-600 mt-1">
                <strong>Key Coursework:</strong> Web Technologies, Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems.
              </p>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="mb-5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-800">
              <div>
                <strong className="text-slate-900">Frontend Fundamentals:</strong> HTML5, CSS3, JavaScript (ES6+), React.js, Tailwind CSS, Bootstrap
              </div>
              <div>
                <strong className="text-slate-900">React Ecosystem:</strong> React Hooks (useState, useEffect), React Router, Context API, Component Architecture
              </div>
              <div>
                <strong className="text-slate-900">APIs & Data:</strong> REST APIs, Axios, Asynchronous Fetching, JSON
              </div>
              <div>
                <strong className="text-slate-900">Tools & Workflow:</strong> Git, GitHub, VS Code, Vite, npm, Chrome DevTools
              </div>
            </div>
          </section>

          {/* Featured Projects */}
          <section className="mb-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Featured Projects
            </h2>

            <div className="space-y-3.5 text-xs sm:text-sm">
              {/* Project 1 */}
              <div>
                <div className="flex items-baseline justify-between font-bold text-slate-900">
                  <span>YouTube Clone — React.js & REST API</span>
                  <span className="text-[11px] font-mono text-slate-600">React.js · Tailwind CSS · Axios</span>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-700 space-y-0.5 mt-1">
                  <li>Built responsive video browsing application featuring search, category pills, thumbnails, and responsive playback.</li>
                  <li>Integrated external video REST API endpoints with Axios and dynamic client-side route handling.</li>
                </ul>
              </div>

              {/* Project 2 */}
              <div>
                <div className="flex items-baseline justify-between font-bold text-slate-900">
                  <span>Shopping Cart Application</span>
                  <span className="text-[11px] font-mono text-slate-600">React.js · JavaScript · CSS</span>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-700 space-y-0.5 mt-1">
                  <li>Developed component-based e-commerce store with synchronized cart state, quantity modifiers, and subtotal calculation.</li>
                  <li>Implemented clean decoupled UI primitives for product listing, cart drawer, and interactive items.</li>
                </ul>
              </div>

              {/* Project 3 */}
              <div>
                <div className="flex items-baseline justify-between font-bold text-slate-900">
                  <span>React Todo Task Manager</span>
                  <span className="text-[11px] font-mono text-slate-600">React.js · JavaScript · LocalStorage</span>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-700 space-y-0.5 mt-1">
                  <li>Engineered responsive CRUD task application with active/completed filter views and inline task editing.</li>
                  <li>Implemented browser local storage synchronization to preserve user tasks across sessions.</li>
                </ul>
              </div>

              {/* Project 4 */}
              <div>
                <div className="flex items-baseline justify-between font-bold text-slate-900">
                  <span>ViperTeam7 — Hackathon Project (Team)</span>
                  <span className="text-[11px] font-mono text-slate-600">HTML5 · CSS3 · JavaScript</span>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-700 space-y-0.5 mt-1">
                  <li>Contributed to frontend implementation, responsive layout grid, and DOM events in a fast-paced hackathon sprint.</li>
                  <li>Collaborated closely with team members using Git and GitHub branch merging workflows.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Development Status */}
          <div className="pt-3 border-t border-slate-300 text-[11px] text-slate-600 flex items-center justify-between">
            <span>Availability: Immediate for Frontend Developer Internship / Junior Roles</span>
            <span>Location: Biratnagar, Nepal (Open to On-site & Remote)</span>
          </div>
        </div>
      </div>
    </div>;
};