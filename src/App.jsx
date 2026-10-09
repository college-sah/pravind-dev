import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { ReactLab } from './sections/ReactLab';
import { Projects } from './sections/Projects';
import { Experience } from './sections/Experience';
import { Education } from './sections/Education';
import { GitHub } from './sections/GitHub';
import { ResumeCTA } from './sections/ResumeCTA';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import { ProjectModal } from './components/ProjectModal';
import { LiveDemoModal } from './components/LiveDemoModal';
import { ResumeModal } from './components/ResumeModal';
export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [liveDemoProject, setLiveDemoProject] = useState(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  return <ThemeProvider>
      <div className="min-h-screen bg-[#020617] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/20 selection:text-cyan-300">
        {/* Navigation Header */}
        <Navbar onOpenResume={() => setIsResumeOpen(true)} />

        {/* Main Sections */}
        <main className="flex-1">
          <Hero onOpenResume={() => setIsResumeOpen(true)} />
          <About />
          <Skills />
          <ReactLab />
          <Projects onSelectProject={project => setSelectedProject(project)} onOpenLiveDemo={project => setLiveDemoProject(project)} />
          <Experience onOpenResume={() => setIsResumeOpen(true)} />
          <Education />
          <GitHub />
          <ResumeCTA onOpenResume={() => setIsResumeOpen(true)} />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Interactive Modals */}
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} onOpenLiveDemo={project => {
        setSelectedProject(null);
        setLiveDemoProject(project);
      }} />

        <LiveDemoModal project={liveDemoProject} onClose={() => setLiveDemoProject(null)} />

        <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
      </div>
    </ThemeProvider>;
}