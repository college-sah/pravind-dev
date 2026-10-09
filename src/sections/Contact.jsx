import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle2, AlertCircle, Copy, Check, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');
  const [copiedField, setCopiedField] = useState(null);
  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your name.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email format.';
    }
    if (!formData.subject.trim()) {
      errs.subject = 'Please enter a subject.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide a message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (!validate()) {
      setSubmitStatus('error');
      return;
    }
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate clean dispatch with UI state
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
    }, 800);
  };
  const handleCopy = (type, val) => {
    navigator.clipboard.writeText(val);
    setCopiedField(type);
    setTimeout(() => setCopiedField(null), 2000);
  };
  const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(formData.subject || 'Frontend Developer Internship Inquiry')}&body=${encodeURIComponent(`Hi Pravind,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
  return <section id="contact" className="py-20 bg-[#020617] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-2">
            <span>07.</span>
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Build Something Together
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-3"></div>
          <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-2xl">
            I'm currently open to frontend development internship opportunities and collaborative projects.
            Feel free to reach out directly via email, phone, or send a message below.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-[#090d1f] border border-slate-800 shadow-xl space-y-6">
              <h3 className="text-base font-bold text-white tracking-tight pb-3 border-b border-slate-800">
                Contact Details
              </h3>

              <div className="space-y-4">
                {/* Email item */}
                <div className="flex items-start justify-between gap-3 p-3.5 rounded-xl bg-slate-900/70 border border-slate-800">
                  <div className="flex items-start gap-3 min-w-0">
                    <div className="p-2 rounded-lg bg-cyan-950 text-cyan-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[11px] font-mono text-slate-400 block uppercase">
                        Email Address
                      </span>
                      <a href={`mailto:${PERSONAL_INFO.email}`} className="text-xs sm:text-sm font-medium text-white hover:text-cyan-300 transition-colors truncate block">
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>

                  <button onClick={() => handleCopy('email', PERSONAL_INFO.email)} className="p-1.5 rounded-md text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors shrink-0" title="Copy Email" aria-label="Copy Email address">
                    {copiedField === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Phone item */}
                <div className="flex items-start justify-between gap-3 p-3.5 rounded-xl bg-slate-900/70 border border-slate-800">
                  <div className="flex items-start gap-3 min-w-0">
                    <div className="p-2 rounded-lg bg-cyan-950 text-cyan-400 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[11px] font-mono text-slate-400 block uppercase">
                        Phone Number
                      </span>
                      <a href={`tel:${PERSONAL_INFO.phone}`} className="text-xs sm:text-sm font-medium text-white hover:text-cyan-300 transition-colors truncate block">
                        {PERSONAL_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <button onClick={() => handleCopy('phone', PERSONAL_INFO.phone)} className="p-1.5 rounded-md text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors shrink-0" title="Copy Phone" aria-label="Copy Phone number">
                    {copiedField === 'phone' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Location item */}
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/70 border border-slate-800">
                  <div className="p-2 rounded-lg bg-cyan-950 text-cyan-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block uppercase">
                      Location
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-white">
                      {PERSONAL_INFO.location}
                    </span>
                    <span className="block text-[11px] text-slate-500 mt-0.5">
                      Open to on-site in Nepal & remote opportunities
                    </span>
                  </div>
                </div>

                {/* GitHub & LinkedIn Profiles */}
                <div className="pt-2 flex flex-col gap-2">
                  <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 text-xs text-slate-300 hover:text-white transition-colors">
                    <div className="flex items-center gap-2">
                      <Github className="w-4 h-4 text-cyan-400" />
                      <span>GitHub: @college-sah</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                  </a>

                  <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 text-xs text-slate-300 hover:text-white transition-colors">
                    <div className="flex items-center gap-2">
                      <Linkedin className="w-4 h-4 text-cyan-400" />
                      <span>LinkedIn Profile</span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-500">Placeholder</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#090d1f] border border-slate-800 shadow-xl space-y-5">
              <h3 className="text-base font-bold text-white tracking-tight pb-3 border-b border-slate-800 flex items-center justify-between">
                <span>Send a Direct Inquiry</span>
                <span className="text-xs font-mono text-cyan-400 font-normal">
                  Response within 24 hours
                </span>
              </h3>

              {submitStatus === 'success' ? <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-800/80 space-y-4 text-center sm:text-left">
                  <div className="flex items-center gap-2.5 text-emerald-400 font-semibold text-sm">
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <span>Inquiry Ready! Thank you for reaching out, {formData.name}.</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Your message has been formatted. You can also send it immediately via your default mail client with prefilled details.
                  </p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <a href={mailtoLink} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold transition-colors shadow-sm">
                      <Mail className="w-3.5 h-3.5 stroke-[2.5]" />
                      <span>Launch in Mail Client</span>
                    </a>
                    <button onClick={() => {
                  setSubmitStatus('idle');
                  setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                  });
                }} className="px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition-colors cursor-pointer">
                      Send Another Message
                    </button>
                  </div>
                </div> : <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {submitStatus === 'error' && <div className="p-3 rounded-lg bg-rose-950/40 border border-rose-800/80 text-rose-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>Please check the fields marked below and try again.</span>
                    </div>}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1">
                      <label className="text-xs font-mono text-slate-400 flex items-center justify-between">
                        <span>Your Name *</span>
                        {errors.name && <span className="text-rose-400 text-[11px]">{errors.name}</span>}
                      </label>
                      <input type="text" value={formData.name} onChange={e => setFormData({
                    ...formData,
                    name: e.target.value
                  })} placeholder="e.g. Priya Sharma" className={`w-full px-3.5 py-2.5 bg-slate-900 border rounded-lg text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${errors.name ? 'border-rose-500 focus:border-rose-400' : 'border-slate-800 focus:border-cyan-400'}`} />
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                      <label className="text-xs font-mono text-slate-400 flex items-center justify-between">
                        <span>Your Email *</span>
                        {errors.email && <span className="text-rose-400 text-[11px]">{errors.email}</span>}
                      </label>
                      <input type="email" value={formData.email} onChange={e => setFormData({
                    ...formData,
                    email: e.target.value
                  })} placeholder="e.g. priya@company.com" className={`w-full px-3.5 py-2.5 bg-slate-900 border rounded-lg text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${errors.email ? 'border-rose-500 focus:border-rose-400' : 'border-slate-800 focus:border-cyan-400'}`} />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-slate-400 flex items-center justify-between">
                      <span>Subject *</span>
                      {errors.subject && <span className="text-rose-400 text-[11px]">{errors.subject}</span>}
                    </label>
                    <input type="text" value={formData.subject} onChange={e => setFormData({
                  ...formData,
                  subject: e.target.value
                })} placeholder="e.g. Frontend Internship Opportunity at Tech Co" className={`w-full px-3.5 py-2.5 bg-slate-900 border rounded-lg text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${errors.subject ? 'border-rose-500 focus:border-rose-400' : 'border-slate-800 focus:border-cyan-400'}`} />
                  </div>

                  {/* Message */}
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-slate-400 flex items-center justify-between">
                      <span>Message *</span>
                      {errors.message && <span className="text-rose-400 text-[11px]">{errors.message}</span>}
                    </label>
                    <textarea rows={4} value={formData.message} onChange={e => setFormData({
                  ...formData,
                  message: e.target.value
                })} placeholder="Describe your team, project requirements, or internship interview details..." className={`w-full px-3.5 py-2.5 bg-slate-900 border rounded-lg text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-colors resize-none ${errors.message ? 'border-rose-500 focus:border-rose-400' : 'border-slate-800 focus:border-cyan-400'}`}></textarea>
                  </div>

                  {/* Submit Actions */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <button type="submit" disabled={isSubmitting} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 disabled:opacity-60 text-slate-950 font-bold rounded-xl shadow-md shadow-cyan-500/20 text-xs sm:text-sm transition-all cursor-pointer">
                      {isSubmitting ? <>
                          <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></div>
                          <span>Preparing Message...</span>
                        </> : <>
                          <Send className="w-4 h-4 stroke-[2.5]" />
                          <span>Send Message</span>
                        </>}
                    </button>

                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-xs text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1">
                      <Mail className="w-3.5 h-3.5" />
                      <span>Prefer email client directly? Click here</span>
                    </a>
                  </div>
                </form>}
            </div>
          </div>
        </div>
      </div>
    </section>;
};