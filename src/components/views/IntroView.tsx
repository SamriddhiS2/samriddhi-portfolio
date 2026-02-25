"use client";
import React from 'react';
import { Terminal, Eye, Code2, Sparkles, ArrowRight } from 'lucide-react';
import { useTypingEffect } from '../../hooks';
import { Theme, ThemeMode, AppMode } from '../../data/portfolio';

interface IntroViewProps {
  setMode: (mode: AppMode) => void;
  themeMode: ThemeMode;
  theme: Theme;
}

export const IntroView = ({ setMode, themeMode, theme }: IntroViewProps) => {
    const titleTyped = useTypingEffect("Samriddhi Sivakumar");

    return (
        <div className="flex-1 flex flex-col items-center justify-center text-center px-4 animate-in fade-in zoom-in duration-700 py-12">
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 tracking-tight ${theme.text}`}>
                {titleTyped}<span className={`animate-pulse ${theme.accentPrimary}`}>|</span>
            </h1>
            <p className={`text-lg md:text-2xl mb-8 max-w-2xl ${theme.textMuted} font-light`}>
               Transforming Complex Data into Actionable Intelligence.
            </p>
            
            {/* HIDDEN ON MOBILE: "Select Your Experience" Badge */}
            <div className={`hidden md:inline-flex mb-12 items-center gap-2 px-5 py-2 ${themeMode === 'dark' ? 'bg-white/5' : 'bg-white/80'} backdrop-blur-md rounded-full border ${theme.border} shadow-sm`}>
                <span className={`relative flex h-3 w-3`}>
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${theme.fillAccent} opacity-75`}></span>
                  <span className={`relative inline-flex rounded-full h-3 w-3 ${theme.fillAccent}`}></span>
                </span>
                <span className={`text-sm font-semibold tracking-wide uppercase ${theme.text} opacity-90`}>Select Your Experience</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
                {/* HIDDEN ON MOBILE: Developer/Technical Option */}
                <button 
                    onClick={() => setMode('terminal')}
                    className={`hidden md:flex group p-8 rounded-3xl border ${theme.border} ${theme.bgSoft} hover:scale-[1.02] transition-all duration-300 text-left relative overflow-hidden shadow-lg hover:shadow-teal-500/10 flex-col justify-between h-full`}
                >
                    <div>
                        {/* Top Right Watermark - Fixed Opacity and Colors */}
                        <div className="absolute top-0 right-0 p-6">
                            <Terminal 
                                size={100} 
                                className={`transition-colors duration-300 ${themeMode === 'dark' ? 'text-white/20 group-hover:text-white/40' : 'text-slate-900/10 group-hover:text-slate-900/20'}`} 
                            />
                        </div>
                        
                        <div className={`inline-flex p-3 rounded-2xl mb-4 ${themeMode === 'dark' ? 'bg-teal-500/20 text-teal-100' : 'bg-teal-100 text-teal-800'}`}>
                            <Code2 size={24} className={themeMode === 'dark' ? "text-teal-400" : "text-teal-600"} />
                        </div>
                        <h3 className={`text-2xl font-bold mb-2 ${theme.text}`}>Technical</h3>
                        <p className={`${theme.textMuted} mb-6 relative z-10`}>
                            For Developers & Engineers.
                            <span className="block text-sm opacity-70 mt-2 font-light">Command-line interface to view raw data, logs, and system stats.</span>
                        </p>
                    </div>
                    
                    <div className={`mt-auto inline-flex items-center gap-2 px-4 py-2 rounded-lg ${theme.buttonPrimary} w-max font-semibold text-sm shadow-md relative z-10`}>
                         <Terminal size={16} /> Launch Terminal
                    </div>
                </button>

                {/* ALWAYS VISIBLE: Visual/Recruiter Option */}
                <button 
                    onClick={() => setMode('visual')}
                    className={`group p-8 rounded-3xl border ${theme.border} ${theme.bgSoft} hover:scale-[1.02] transition-all duration-300 text-left relative overflow-hidden shadow-lg hover:shadow-emerald-500/10 flex flex-col justify-between h-full`}
                >
                    <div>
                        {/* Top Right Watermark - Fixed Opacity and Colors */}
                        <div className="absolute top-0 right-0 p-6">
                            <Sparkles 
                                size={100} 
                                className={`transition-colors duration-300 ${themeMode === 'dark' ? 'text-white/20 group-hover:text-white/40' : 'text-slate-900/10 group-hover:text-slate-900/20'}`} 
                            />
                        </div>
                        
                        <div className={`inline-flex p-3 rounded-2xl mb-4 ${theme.homeIconBg} ${theme.homeIconColor}`}>
                            <Eye size={24} />
                        </div>
                        <h3 className={`text-2xl font-bold mb-2 ${theme.text}`}>Visual</h3>
                        <p className={`${theme.textMuted} mb-6 relative z-10`}>
                            For Recruiters & Designers.
                            <span className="block text-sm opacity-70 mt-2 font-light">Interactive scrolling experience with visual case studies and animations.</span>
                        </p>
                    </div>

                    <div className={`mt-auto inline-flex items-center gap-2 px-4 py-2 rounded-lg ${theme.buttonPrimary} w-max font-semibold text-sm shadow-md relative z-10`}>
                         View Portfolio <ArrowRight size={16} />
                    </div>
                </button>
            </div>
        </div>
    );
};