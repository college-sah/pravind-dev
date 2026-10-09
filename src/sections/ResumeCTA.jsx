import React from 'react';
import { FileText, Download, Eye, CheckCircle2 } from 'lucide-react';
export const ResumeCTA = ({
  onOpenResume
}) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Pravind_Sah_Frontend_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return <section className="py-16 bg-[#020617] relative border-t border-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-gradient-to-r from-[#090d1f] via-[#0f172a] to-[#090d1f] border border-cyan-800/40 p-8 sm:p-12 shadow-2xl overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8">
          {/* Subtle background glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="space-y-3 max-w-xl relative z-10">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
              <FileText className="w-3.5 h-3.5" />
              <span>Curriculum Vitae</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Want to know more about my experience?
            </h3>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Download my resume to learn more about my skills, projects and education. Verified with real coursework and authentic projects.
            </p>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-1 text-xs text-slate-400">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> ATS-Optimized
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> 1-Page Format
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> B.Sc. CSIT Focus
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 relative z-10 w-full sm:w-auto">
            <button onClick={onOpenResume} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-medium border border-slate-700 rounded-xl transition-all hover:border-slate-600 text-xs sm:text-sm cursor-pointer">
              <Eye className="w-4 h-4 text-cyan-400" />
              <span>Preview Online</span>
            </button>

            <button onClick={handleDownload} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-bold rounded-xl shadow-lg shadow-cyan-500/25 transition-all active:scale-95 text-xs sm:text-sm cursor-pointer">
              <Download className="w-4 h-4 stroke-[2.5]" />
              <span>Download Resume</span>
            </button>
          </div>
        </div>
      </div>
    </section>;
};