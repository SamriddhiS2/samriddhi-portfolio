"use client";
import React, { useState } from 'react';
import { ArrowRight, Sparkles, FileText, CheckCircle, Loader2, Send, Briefcase, GraduationCap, Calendar, Mail, MapPin, Github, Linkedin, Database, Code2, Cpu, Hexagon } from 'lucide-react';
import { Reveal } from '../utilities';
import { useTypingEffect } from '../../hooks';
import { Theme, ThemeMode, projects, experience, education } from '../../data/portfolio';

interface VisualViewProps {
  theme: Theme;
  themeMode: ThemeMode;
}

export const VisualView = ({ theme, themeMode }: VisualViewProps) => {
  const [formStatus, setFormStatus] = useState<'idle'|'submitting'|'success'>('idle');
  const titleTyped = useTypingEffect("Samriddhi Sivakumar");

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
        setFormStatus('success');
        setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="w-full pb-10">
      
      {/* Hero */}
      <section className="min-h-screen flex flex-col md:flex-row justify-center items-center px-6 relative overflow-hidden gap-12 max-w-7xl mx-auto pt-24 md:pt-0 scroll-mt-28" id="home">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-30 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-500/30 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[10%] right-[-10%] w-[400px] h-[400px] bg-teal-500/30 rounded-full blur-[100px] animate-pulse delay-1000" />
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left z-10 flex flex-col items-center md:items-start">
            <Reveal>
              <div className={`inline-flex items-center gap-2 px-4 py-2 ${themeMode === 'dark' ? 'bg-white/5' : 'bg-white/80'} backdrop-blur-md rounded-full border ${theme.border} text-sm font-medium ${theme.accentPrimary} mb-8 shadow-sm`}>
                <Sparkles size={14} /> Open to Work • Summer 2025
              </div>
            </Reveal>
            
            <Reveal delay={200}>
              <h1 className={`text-5xl md:text-7xl font-bold tracking-tight mb-6 ${theme.text}`}>
                {titleTyped}<span className={`animate-pulse ${theme.accentPrimary}`}>|</span>
              </h1>
            </Reveal>
            
            <Reveal delay={400}><p className={`text-lg md:text-2xl ${theme.textMuted} max-w-2xl leading-relaxed mb-8 font-light text-center md:text-left`}>Transforming Complex Data into Actionable Intelligence.</p></Reveal>
            <Reveal delay={600}>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <button onClick={() => scrollTo('projects')} className={`px-8 py-4 rounded-full font-bold shadow-lg transition-all hover:scale-105 ${theme.buttonPrimary}`}>View Work</button>
                    <button className={`flex items-center gap-2 px-8 py-4 rounded-full font-bold transition-all hover:scale-105 border ${theme.border} ${theme.buttonSecondary}`}><FileText size={18} /> Download Resume</button>
                </div>
            </Reveal>
        </div>

        {/* Profile Image */}
        <div className="flex-1 flex justify-center z-10 mt-12 md:mt-0">
            <Reveal delay={300}>
                <div className="relative w-64 h-64 md:w-96 md:h-96 group">
                    <div className={`absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500`}></div>
                    
                    <div className={`relative w-full h-full rounded-full border-4 ${theme.border} shadow-2xl overflow-hidden bg-slate-200 flex items-center justify-center`}>
                        <img 
                          src="/profile.jpeg" 
                          alt="Samriddhi Sivakumar" 
                          className="w-full h-full object-cover" 
                        />
                    </div>
                </div>
            </Reveal>
        </div>
      </section>

      {/* Skills Section */}
      <section id="about" className="py-16 px-6 max-w-6xl mx-auto scroll-mt-28">
        <Reveal><h2 className={`text-2xl md:text-4xl font-bold mb-16 flex items-center justify-start gap-4 ${theme.text}`}><Hexagon className={`${theme.accentPrimary} fill-current opacity-20`} size={24} />Technical Expertise</h2></Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Database size={40} />, title: "Data Science", desc: "Python, Pandas, D3.js, PyTorch", color: theme.accentPrimary },
            { icon: <Code2 size={40} />, title: "Full Stack", desc: "React, Next.js, Node, Tailwind", color: theme.accentSecondary },
            { icon: <Cpu size={40} />, title: "Systems", desc: "C++, Rust, Docker, AWS", color: theme.accentPrimary },
          ].map((item, i) => (
            <Reveal key={i} delay={i * 200}>
              <div className={`p-8 ${theme.bgSoft}/50 border ${theme.border} rounded-3xl backdrop-blur-sm hover:border-teal-400/30 transition-all group shadow-sm hover:shadow-lg`}>
                <div className={`${item.color} mb-6 transform group-hover:scale-110 transition-transform duration-300`}>{item.icon}</div>
                <h3 className={`text-2xl font-bold mb-4 ${theme.text}`}>{item.title}</h3>
                <p className={`${theme.textMuted} leading-relaxed`}>{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Education */}
      <section id="education" className={`py-16 px-6 max-w-4xl mx-auto border-t ${theme.border} scroll-mt-28`}>
        <Reveal><h2 className={`text-2xl md:text-4xl font-bold mb-12 flex items-center justify-start gap-4 ${theme.text}`}><GraduationCap className={theme.accentPrimary} size={32} />Education</h2></Reveal>
        <div className="space-y-8">
            {education.map((edu, i) => (
                <Reveal key={i} delay={i * 100}>
                    <div className={`p-8 ${theme.bgSoft} rounded-3xl border ${theme.border} shadow-md text-center max-w-2xl mx-auto hover:shadow-lg transition-shadow`}>
                        <h3 className={`text-2xl font-bold ${theme.text} mb-2`}>{edu.school}</h3>
                        <div className={`text-lg font-medium ${theme.accentPrimary} mb-2`}>{edu.degree}</div>
                        <div className={`text-sm ${theme.textMuted} mb-4 font-mono`}>{edu.year}</div>
                        <p className={`${theme.textMuted}`}>{edu.details}</p>
                    </div>
                </Reveal>
            ))}
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className={`py-16 px-6 max-w-6xl mx-auto border-t ${theme.border} scroll-mt-28`}>
        <Reveal><h2 className={`text-2xl md:text-4xl font-bold mb-16 flex items-center justify-start gap-4 ${theme.text}`}><Briefcase className={theme.accentPrimary} size={32} />Professional Experience</h2></Reveal>
        <div className="relative">
             <div className={`absolute left-0 md:left-1/2 top-0 bottom-0 w-1 ${theme.lineColor} md:-translate-x-1/2 ml-4 md:ml-0 rounded-full`} />
             <div className="space-y-12">
                {experience.map((exp, i) => (
                    <Reveal key={i} delay={i * 100}>
                        <div className={`relative flex flex-col md:flex-row gap-8 items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                            <div className={`flex-1 w-full pl-12 md:pl-0 ${i % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                                <div className={`p-8 ${theme.bgSoft} rounded-3xl border ${theme.border} shadow-sm hover:shadow-md transition-shadow relative`}>
                                     <div className={`md:hidden absolute left-[-39px] top-8 w-6 h-6 rounded-full ${theme.fillAccent} border-4 ${themeMode === 'dark' ? 'border-slate-900' : 'border-slate-50'}`} />
                                    <h3 className={`text-xl font-bold ${theme.text}`}>{exp.role}</h3>
                                    <div className={`flex items-center gap-2 text-sm ${theme.accentPrimary} mb-2 font-medium`}><Briefcase size={14} /> {exp.company}</div>
                                    <div className={`flex items-center gap-2 text-xs ${theme.textMuted} mb-4 font-mono`}><Calendar size={12} /> {exp.period}</div>
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

      {/* Projects */}
      <section id="projects" className={`py-16 px-6 max-w-6xl mx-auto border-t ${theme.border} scroll-mt-28`}>
        <Reveal><h2 className={`text-2xl md:text-4xl font-bold mb-16 flex items-center justify-start gap-4 ${theme.text}`}><Hexagon className={`${theme.accentPrimary} fill-current opacity-20`} size={24} />Featured Projects</h2></Reveal>
        <div className="space-y-24">
          {projects.map((project, i) => (
            <Reveal key={project.id}>
              <div className={`flex flex-col md:flex-row gap-12 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1 w-full aspect-video rounded-3xl overflow-hidden relative group shadow-2xl">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
                  <div className={`absolute inset-4 ${theme.bg} rounded-3xl flex items-center justify-center border ${theme.border}`}>
                    <div className={`${theme.textMuted} font-mono text-sm opacity-50 flex flex-col items-center gap-4`}><Code2 size={48} /><span>{project.title}.exe</span></div>
                  </div>
                </div>
                <div className="flex-1">
                  <span className={`${theme.accentSecondary} font-mono text-sm tracking-widest uppercase mb-4 block`}>{project.type}</span>
                  <h3 className={`text-4xl font-bold mb-6 ${theme.text}`}>{project.title}</h3>
                  <p className={`${theme.textMuted} text-lg leading-relaxed mb-8`}>{project.desc}</p>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tech.map(t => <span key={t} className={`px-3 py-1 bg-white/5 border ${theme.border} rounded-lg text-sm ${theme.text}`}>{t}</span>)}
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 ${theme.accentPrimary} hover:opacity-80 transition-opacity font-medium group`}>
                    View Case Study <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-16 px-6 scroll-mt-28">
         <Reveal>
            <div className={`max-w-5xl mx-auto rounded-[2rem] overflow-hidden shadow-2xl ${theme.bgSoft} border ${theme.border} p-8 md:p-12 lg:p-16`}>
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${theme.text}`}>Contact me <br/>for collaboration</h2>
                        <p className={`${theme.textMuted} text-lg mb-12 max-w-md`}>
                            Reach out today to discuss your project needs and start collaborating on something amazing!
                        </p>
                        <div className="flex gap-4">
                             <a href="#" className={`p-4 rounded-2xl ${theme.bg} hover:${theme.accentPrimary} transition-colors border ${theme.border} ${theme.text}`}><Github size={24} /></a>
                             <a href="#" className={`p-4 rounded-2xl ${theme.bg} hover:${theme.accentSecondary} transition-colors border ${theme.border} ${theme.text}`}><Linkedin size={24} /></a>
                        </div>
                    </div>
                    
                    <div>
                        {formStatus === 'success' ? (
                            <div className="h-full flex flex-col items-center justify-center text-center animate-in fade-in zoom-in">
                                <div className={`w-16 h-16 ${themeMode === 'dark' ? 'bg-teal-500/20 text-teal-400' : 'bg-teal-100 text-teal-600'} rounded-full flex items-center justify-center mb-4`}><CheckCircle size={32} /></div>
                                <h3 className={`text-2xl font-bold ${theme.text} mb-2`}>Message Sent!</h3>
                                <p className={theme.textMuted}>Thanks for reaching out.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleContactSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className={`block text-sm font-medium ${theme.text} mb-2`}>Name</label>
                                        <input required type="text" className={`w-full px-5 py-4 rounded-2xl ${theme.bg} border ${theme.border} ${theme.text} focus:outline-none focus:ring-2 ${themeMode === 'dark' ? 'focus:ring-teal-500' : 'focus:ring-teal-600'} transition-all`} placeholder="Samriddhi Sivakumar" />
                                    </div>
                                    <div>
                                        <label className={`block text-sm font-medium ${theme.text} mb-2`}>Email</label>
                                        <input required type="email" className={`w-full px-5 py-4 rounded-2xl ${theme.bg} border ${theme.border} ${theme.text} focus:outline-none focus:ring-2 ${themeMode === 'dark' ? 'focus:ring-teal-500' : 'focus:ring-teal-600'} transition-all`} placeholder="samriddhi@example.com" />
                                    </div>
                                </div>
                                <div>
                                    <label className={`block text-sm font-medium ${theme.text} mb-2`}>Message</label>
                                    <textarea required rows={5} className={`w-full px-5 py-4 rounded-2xl ${theme.bg} border ${theme.border} ${theme.text} focus:outline-none focus:ring-2 ${themeMode === 'dark' ? 'focus:ring-teal-500' : 'focus:ring-teal-600'} transition-all resize-none`} placeholder="Hi!"></textarea>
                                </div>
                                <button disabled={formStatus === 'submitting'} type="submit" className={`w-full py-5 rounded-2xl font-bold shadow-lg transition-all hover:scale-[1.01] flex items-center justify-center gap-2 ${theme.buttonPrimary} disabled:opacity-70`}>
                                    {formStatus === 'submitting' ? <Loader2 size={20} className="animate-spin"/> : null}
                                    {formStatus === 'submitting' ? 'Sending...' : 'Submit'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
         </Reveal>
      </section>
    </div>
  );
};