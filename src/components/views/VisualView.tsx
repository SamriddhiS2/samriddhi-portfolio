"use client";
import React, { useState } from 'react';
import { Activity, ArrowRight, Sparkles, FileText, CheckCircle, Loader2, Briefcase, GraduationCap, Calendar, Mail, MapPin, Github, Linkedin, Database, Code2, Cpu, Hexagon } from 'lucide-react';
import { Reveal } from '../utilities';
import { useTypingEffect } from '../../hooks';
import { Theme, ThemeMode, projects, experience, education } from '../../data/portfolio';

interface VisualViewProps {
  theme: Theme;
  themeMode: ThemeMode;
}

export const VisualView = ({ theme, themeMode }: VisualViewProps) => {
  const [formStatus, setFormStatus] = useState<'idle'|'submitting'|'success'>('idle');
  
  // State for the contact form
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const titleTyped = useTypingEffect("Samriddhi Sivakumar");

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    try {
        // FormSubmit AJAX API
        const res = await fetch("https://formsubmit.co/ajax/ssamriddhi.work@gmail.com", {
            method: "POST",
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                message,
                _subject: `New Portfolio Inquiry from ${name}`,
                _template: "box",
                _replyto: email
            })
        });

        if (res.ok) {
            setFormStatus('success');
            setName('');
            setEmail('');
            setMessage('');
            setTimeout(() => setFormStatus('idle'), 4000);
        } else {
            throw new Error("Failed to send");
        }
    } catch (err) {
        alert("Sorry, there was an issue sending your message. Please try emailing me directly at ssamriddhi.work@gmail.com!");
        setFormStatus('idle');
    }
  };

  return (
    <div className="w-full pb-10">
      
      {/* Hero */}
      <section className="min-h-screen flex flex-col md:flex-row justify-center items-center px-6 relative overflow-hidden gap-12 max-w-7xl mx-auto pt-32 pb-24 md:pt-0 md:pb-0 scroll-mt-28" id="home">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-30 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-500/30 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[10%] right-[-10%] w-[400px] h-[400px] bg-teal-500/30 rounded-full blur-[100px] animate-pulse delay-1000" />
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left z-10 flex flex-col items-center md:items-start">
            <Reveal>
              <div className={`inline-flex items-center gap-2 px-4 py-2 ${themeMode === 'dark' ? 'bg-white/5' : 'bg-white/80'} backdrop-blur-md rounded-full border ${theme.border} text-sm font-medium ${theme.accentPrimary} mb-8 shadow-sm`}>
                <Sparkles size={14} /> Open to Work • Summer 2026
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
                    <a 
                      href="/SamriddhiSivakumar_Resume.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-8 py-4 rounded-full font-bold transition-all hover:scale-105 border ${theme.border} ${theme.buttonSecondary}`}
                    >
                      <FileText size={18} /> Download Resume
                    </a>
                </div>
            </Reveal>
        </div>

        {/* Profile Image */}
        <div className="flex-1 flex justify-center items-center z-10 mt-12 md:mt-0 w-full">
            <Reveal delay={300} className="w-full flex justify-center">
                <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 aspect-square flex-none shrink-0 group">
                    <div className={`absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500`}></div>
                    
                    <div className={`relative w-full h-full rounded-full border-4 ${theme.border} shadow-2xl overflow-hidden bg-slate-200 flex items-center justify-center`}>
                        <img 
                          src="/profile.jpeg" 
                          alt="Samriddhi Sivakumar" 
                          className="w-full h-full object-cover object-center" 
                        />
                    </div>
                </div>
            </Reveal>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6 max-w-6xl mx-auto scroll-mt-28">
        <Reveal><h2 className={`text-2xl md:text-4xl font-bold mb-16 flex items-center justify-start gap-4 ${theme.text}`}><Hexagon className={`${theme.accentPrimary} fill-current opacity-20`} size={24} />Technical Expertise</h2></Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Database size={40} />, title: "Data Science & AI", desc: "PyTorch, TensorFlow, Pandas, OpenCV, Hugging Face, D3.js", color: theme.accentPrimary },
            { icon: <Code2 size={40} />, title: "Full Stack & Tools", desc: "React, Next.js, Node, PostgreSQL, MongoDB, AWS, Docker", color: theme.accentSecondary },
            { icon: <Cpu size={40} />, title: "Languages", desc: "Python, Java, C++, TypeScript, SQL, Go", color: theme.accentPrimary },
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
      <section id="education" className={`py-16 px-6 max-w-5xl mx-auto border-t ${theme.border} scroll-mt-28`}>
        <Reveal><h2 className={`text-2xl md:text-4xl font-bold mb-12 flex items-center justify-start gap-4 ${theme.text}`}><GraduationCap className={theme.accentPrimary} size={32} />Education</h2></Reveal>
        <div className="space-y-8">
            {education.map((edu, i) => (
                <Reveal key={i} delay={i * 100}>
                    <div className={`p-8 md:p-10 ${theme.bgSoft} rounded-3xl border ${theme.border} shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group`}>
                        <div className={`absolute -right-6 -top-6 pointer-events-none transition-transform duration-500 group-hover:rotate-12 ${themeMode === 'dark' ? 'text-white/10' : 'text-slate-900/5'}`}>
                            <GraduationCap size={200} />
                        </div>                        
                        <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
                            <div className="flex-1">
                                <h3 className={`text-2xl md:text-3xl font-bold ${theme.text} mb-2 tracking-tight`}>{edu.school}</h3>
                                <div className={`text-xl font-bold ${theme.accentPrimary} mb-2`}>{edu.degree}</div>
                                {edu.minor && (
                                    <div className={`text-lg font-medium ${theme.textMuted} flex items-center gap-2`}>
                                        <span className={`w-1.5 h-1.5 rounded-full ${theme.fillAccent} opacity-60`} />
                                        {edu.minor}
                                    </div>
                                )}
                            </div>
                            
                            <div className="shrink-0">
                                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-2xl ${themeMode === 'dark' ? 'bg-slate-900/50' : 'bg-slate-100/50'} border ${theme.border} text-sm font-mono ${theme.textMuted} shadow-sm`}>
                                    <Calendar size={14} className={theme.accentPrimary} /> {edu.year}
                                </div>
                            </div>
                        </div>
                        
                        {/* Clean dividing line */}
                        <div className={`w-16 h-1 rounded-full ${theme.fillAccent} opacity-20 mb-6`} />
                        
                        <p className={`${theme.textMuted} leading-relaxed relative z-10 md:text-lg`}>
                            {edu.details}
                        </p>
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
                                    
                                    <ul className="space-y-3 mt-4">
                                        {Array.isArray(exp.desc) && exp.desc.map((bullet, idx) => (
                                            <li key={idx} className={`flex items-start gap-3 ${theme.textMuted} text-sm md:text-base`}>
                                                <span className={`w-1.5 h-1.5 rounded-full ${theme.fillAccent} opacity-60 shrink-0 mt-2`} />
                                                <span className="leading-relaxed">{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>

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
              <div className={`flex flex-col md:flex-row gap-12 lg:gap-20 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1 w-full group perspective-1000">
                  <div className={`relative aspect-video rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]`}>
                    {/* Dynamic Glow Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                    {/* Glass Container */}
                    <div className={`absolute inset-[2px] ${themeMode === 'dark' ? 'bg-slate-900/90' : 'bg-[#1e293b]/95'} backdrop-blur-xl rounded-[calc(1.5rem-2px)] flex flex-col border border-white/10 overflow-hidden`}>
                        {/* Mac-Style Window Header */}
                        <div className={`px-4 py-3 flex items-center justify-between border-b border-white/10 bg-white/5`}>
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                            </div>
                            <div className={`text-[10px] uppercase tracking-widest text-slate-400 font-mono`}>
                                {project.title.split(' ')[0].toLowerCase()}_{project.mockType}
                            </div>
                        </div>
                        {project.mockType === 'vision' && (
                            <div className="flex-1 flex flex-col items-center justify-center relative p-6">
                                {/* Grid background */}
                                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />
                                <div className="w-16 h-16 border border-teal-500/40 rounded-full flex items-center justify-center relative mb-4">
                                    <div className="absolute inset-2 border border-teal-500/60 rounded-full border-t-transparent animate-spin" style={{ animationDuration: '3s' }} />
                                    <Activity className="text-teal-400" size={24} />
                                </div>
                                <div className="font-mono text-xs text-teal-400/80 text-center space-y-1 z-10">
                                    {project.mockData?.map((line, idx) => <div key={idx}>{line}</div>)}
                                </div>
                            </div>
                        )}
                        {project.mockType === 'map' && (
                            <div className="flex-1 flex flex-col items-center justify-center relative p-6">
                                {/* Radar circles */}
                                <div className="absolute w-24 h-24 rounded-full border border-emerald-500/30" />
                                <div className="absolute w-40 h-40 rounded-full border border-emerald-500/10" />
                                <MapPin className="text-emerald-400 z-10 animate-bounce mb-6" size={28} />
                                <div className="grid grid-cols-2 gap-x-8 gap-y-2 font-mono text-[10px] text-emerald-400/80 z-10 w-full max-w-[250px] px-4 py-3 bg-black/40 rounded-xl border border-emerald-500/20">
                                    {project.mockData?.map((line, idx) => <div key={idx}>{line}</div>)}
                                </div>
                            </div>
                        )}
                        {project.mockType === 'editor' && (
                            <div className="flex-1 flex flex-col justify-center p-6 relative bg-[#0d1117]">
                                <Database className="absolute bottom-4 right-4 text-indigo-500/10" size={80} />
                                <div className="font-mono text-xs md:text-sm space-y-2 z-10">
                                    {project.mockData?.map((line, idx) => (
                                        <div key={idx} className="flex gap-4">
                                            <span className="text-slate-600 select-none w-4 text-right">{idx + 1}</span>
                                            <span className={`${idx < 2 ? 'text-indigo-300' : 'text-emerald-400'}`}>
                                                {line}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <span className={`${theme.accentSecondary} font-mono text-sm tracking-widest uppercase mb-4 block`}>{project.type}</span>
                  <h3 className={`text-3xl md:text-4xl font-bold mb-6 ${theme.text}`}>{project.title}</h3>
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
                             <a href="https://github.com/SamriddhiS2" target="_blank" rel="noreferrer" className={`p-4 rounded-2xl ${theme.bg} hover:${theme.accentPrimary} transition-colors border ${theme.border} ${theme.text}`}><Github size={24} /></a>
                             <a href="https://linkedin.com/in/samriddhisivakumar" target="_blank" rel="noreferrer" className={`p-4 rounded-2xl ${theme.bg} hover:${theme.accentSecondary} transition-colors border ${theme.border} ${theme.text}`}><Linkedin size={24} /></a>
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
                                        <input 
                                            required 
                                            type="text" 
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className={`w-full px-5 py-4 rounded-2xl ${theme.bg} border ${theme.border} ${theme.text} focus:outline-none focus:ring-2 ${themeMode === 'dark' ? 'focus:ring-teal-500' : 'focus:ring-teal-600'} transition-all`} 
                                            placeholder="Name" 
                                        />
                                    </div>
                                    <div>
                                        <label className={`block text-sm font-medium ${theme.text} mb-2`}>Email</label>
                                        <input 
                                            required 
                                            type="email" 
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className={`w-full px-5 py-4 rounded-2xl ${theme.bg} border ${theme.border} ${theme.text} focus:outline-none focus:ring-2 ${themeMode === 'dark' ? 'focus:ring-teal-500' : 'focus:ring-teal-600'} transition-all`} 
                                            placeholder="example@gmail.com" 
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className={`block text-sm font-medium ${theme.text} mb-2`}>Message</label>
                                    <textarea 
                                        required 
                                        rows={5} 
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        className={`w-full px-5 py-4 rounded-2xl ${theme.bg} border ${theme.border} ${theme.text} focus:outline-none focus:ring-2 ${themeMode === 'dark' ? 'focus:ring-teal-500' : 'focus:ring-teal-600'} transition-all resize-none`} 
                                        placeholder="I'd love to hear about a potential opportunity, discuss a new project, or just chat about tech. Let's connect! :)"
                                    ></textarea>
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