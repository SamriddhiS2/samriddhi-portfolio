"use client";
import React, { useState } from 'react';
import { ArrowRight, Sparkles, FileText, CheckCircle, Loader2, Send, Briefcase, GraduationCap, Calendar, Mail, MapPin, Github, Linkedin, Database, Code2, Cpu, Hexagon } from 'lucide-react';
import { Reveal } from './Reveal';
import { projects, experience, education } from '../data/portfolio';

export const VisualView = ({ theme, themeMode }) => {
  const [formStatus, setFormStatus] = useState('idle');
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  const handleContactSubmit = (e) => { e.preventDefault(); setFormStatus('submitting'); setTimeout(() => { setFormStatus('success'); setTimeout(() => setFormStatus('idle'), 3000); }, 1500); };

  return (
    <div className="w-full pb-10">
      {/* Hero */}
      <section className="min-h-screen flex flex-col md:flex-row justify-center items-center px-6 relative overflow-hidden gap-12 max-w-7xl mx-auto pt-24 md:pt-0 scroll-mt-28" id="home">
        <div className="flex-1 text-center md:text-left z-10">
            <Reveal><h1 className={`text-5xl md:text-7xl font-bold tracking-tight mb-6 ${theme.text} font-serif`}>Samriddhi Sivakumar</h1></Reveal>
            <Reveal delay={200}><p className={`text-lg md:text-2xl ${theme.textMuted} max-w-2xl leading-relaxed mb-8 font-light`}>Transforming Complex Data into Actionable Intelligence.</p></Reveal>
            <Reveal delay={400}><div className="flex gap-4 justify-center md:justify-start"><button onClick={() => scrollTo('projects')} className={`px-8 py-4 rounded-full font-bold shadow-lg transition-all hover:scale-105 ${theme.buttonPrimary}`}>View Work</button></div></Reveal>
        </div>
      </section>

      {/* Experience & Timeline */}
      <section id="experience" className={`py-16 px-6 max-w-6xl mx-auto border-t ${theme.border} scroll-mt-28`}>
        <Reveal><h2 className={`text-2xl md:text-4xl font-bold mb-16 flex items-center justify-start gap-4 ${theme.text} font-serif`}><Briefcase className={theme.accentPrimary} size={32} />Professional Experience</h2></Reveal>
        <div className="relative">
             <div className={`absolute left-0 md:left-1/2 top-0 bottom-0 w-1 ${theme.lineColor} md:-translate-x-1/2 ml-4 md:ml-0 rounded-full`} />
             <div className="space-y-12">
                {experience.map((exp, i) => (
                    <Reveal key={i} delay={i * 100}>
                        <div className={`relative flex flex-col md:flex-row gap-8 items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                            <div className={`flex-1 w-full pl-12 md:pl-0 ${i % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                                <div className={`p-8 ${theme.bgSoft} rounded-3xl border ${theme.border} shadow-sm hover:shadow-md relative`}>
                                    <h3 className={`text-xl font-bold ${theme.text} font-serif`}>{exp.role}</h3>
                                    <div className={`flex items-center gap-2 text-sm ${theme.accentPrimary} mb-2 font-medium`}><Briefcase size={14} /> {exp.company}</div>
                                    <p className={`${theme.textMuted}`}>{exp.desc}</p>
                                </div>
                            </div>
                            <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center"><div className={`w-6 h-6 rounded-full ${theme.fillAccent} shadow-lg z-10 border-4 ${themeMode === 'dark' ? 'border-slate-900' : 'border-slate-50'}`} /></div>
                            <div className="flex-1 hidden md:block"></div>
                        </div>
                    </Reveal>
                ))}
             </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <section id="contact" className="py-16 px-6 scroll-mt-28">
         <Reveal>
            <div className={`max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border ${theme.border} relative p-8`}>
                <h2 className={`text-3xl font-bold mb-6 ${theme.text} font-serif`}>Get in Touch</h2>
                <form onSubmit={handleContactSubmit} className="space-y-6">
                    <button type="submit" className={`w-full py-4 rounded-lg font-bold shadow-lg ${theme.buttonPrimary}`}>Send Message</button>
                </form>
            </div>
         </Reveal>
      </section>
    </div>
  );
};