"use client";
import React from 'react';
import { Terminal, Eye, Code2, Sparkles, ArrowRight } from 'lucide-react';
import { useTypingEffect } from './Hooks';

export const IntroView = ({ setMode, themeMode, theme }) => {
    const titleTyped = useTypingEffect("Samriddhi Sivakumar");

    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 animate-in fade-in zoom-in duration-700 pt-20">
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 tracking-tight ${theme.text} font-serif`}>
                {titleTyped}<span className={`animate-pulse ${theme.accentPrimary}`}>|</span>
            </h1>
            <p className={`text-lg md:text-2xl mb-8 max-w-2xl ${theme.textMuted} font-light`}>
               Transforming Complex Data into Actionable Intelligence.
            </p>
            <div className={`mb-12 inline-flex items-center gap-2 px-5 py-2 rounded-full border ${theme.border} ${theme.bgSoft} shadow-sm`}>
                <span className={`relative flex h-3 w-3`}>
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${theme.fillAccent} opacity-75`}></span>
                  <span className={`relative inline-flex rounded-full h-3 w-3 ${theme.fillAccent}`}></span>
                </span>
                <span className={`text-sm font-semibold tracking-wide uppercase ${theme.text} opacity-90`}>Select Your Experience</span>
            </div>
            <div className="grid md:grid-cols-2 gap-6 w-full max-w-3xl mb-24">
                <button onClick={() => setMode('terminal')} className={`group p-8 rounded-3xl border ${theme.border} ${theme.bgSoft} hover:scale-[1.02] transition-all duration-300 text-left relative overflow-hidden shadow-lg hover:shadow-teal-500/10 flex flex-col justify-between h-full`}>
                    <div>
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><Terminal size={100} className="text-white/10" /></div>
                        <div className={`inline-flex p-3 rounded-2xl mb-4 bg-teal-500/20 text-teal-100`}><Code2 size={24} className="text-teal-600 dark:text-teal-200" /></div>
                        <h3 className={`text-2xl font-bold mb-2 ${theme.text} font-serif`}>Technical</h3>
                        <p className={`${theme.textMuted} mb-6`}>For Developers & Engineers.<span className="block text-sm opacity-70 mt-2 font-light">Command-line interface to view raw data, logs, and system stats.</span></p>
                    </div>
                    <div className={`mt-auto inline-flex items-center gap-2 px-4 py-2 rounded-lg ${theme.buttonPrimary} w-max font-semibold text-sm shadow-md`}><Terminal size={16} /> Launch Terminal</div>
                </button>
                <button onClick={() => setMode('visual')} className={`group p-8 rounded-3xl border ${theme.border} ${theme.bgSoft} hover:scale-[1.02] transition-all duration-300 text-left relative overflow-hidden shadow-lg hover:shadow-emerald-500/10 flex flex-col justify-between h-full`}>
                    <div>
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><Sparkles size={100} className="text-white/10" /></div>
                        <div className={`inline-flex p-3 rounded-2xl mb-4 ${theme.homeIconBg} ${theme.homeIconColor}`}><Eye size={24} /></div>
                        <h3 className={`text-2xl font-bold mb-2 ${theme.text} font-serif`}>Visual</h3>
                        <p className={`${theme.textMuted} mb-6`}>For Recruiters & Designers.<span className="block text-sm opacity-70 mt-2 font-light">Interactive scrolling experience with visual case studies and animations.</span></p>
                    </div>
                    <div className={`mt-auto inline-flex items-center gap-2 px-4 py-2 rounded-lg ${theme.buttonPrimary} w-max font-semibold text-sm shadow-md`}>View Portfolio <ArrowRight size={16} /></div>
                </button>
            </div>
        </div>
    );
};