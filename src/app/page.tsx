"use client";
import React, { useState, useEffect } from 'react';
import { Terminal, Eye, Github, Linkedin, Mail, Sun, Moon, Menu, X } from 'lucide-react';

import { themes, AppMode, ThemeMode } from '../data/portfolio';
import { CursorFollower } from '../components/utilities';
import { IntroView } from '../components/views/IntroView';
import { TerminalView } from '../components/views/TerminalView';
import { VisualView } from '../components/views/VisualView';

export default function App() {
  const [mounted, setMounted] = useState(false);
  const [mode, setMode] = useState<AppMode>('intro'); 
  const [themeMode, setThemeMode] = useState<ThemeMode>('dark');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('portfolioMode') as AppMode;
    if (savedMode) setMode(savedMode);

    const savedTheme = localStorage.getItem('portfolioTheme') as ThemeMode;
    if (savedTheme === 'dark' || savedTheme === 'light') {
      setThemeMode(savedTheme);
    }
    
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('portfolioMode', mode);
      localStorage.setItem('portfolioTheme', themeMode);
    }
  }, [mode, themeMode, mounted]);

  // MOBILE GUARD: Force visual mode if screen is small and user is on terminal mode
  useEffect(() => {
    if (!mounted) return;
    const enforceMobileVisual = () => {
      if (window.innerWidth < 768 && mode === 'terminal') {
        setMode('visual');
      }
    };
    
    enforceMobileVisual();
    window.addEventListener('resize', enforceMobileVisual);
    return () => window.removeEventListener('resize', enforceMobileVisual);
  }, [mode, mounted]);

  const theme = themes[themeMode];
  const nameTyped = "Samriddhi Sivakumar"; 
  const toggleTheme = () => setThemeMode(prev => prev === 'dark' ? 'light' : 'dark');
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const handleNavClick = (sectionId: string) => {
    setIsMenuOpen(false); 
    if (mode !== 'visual') {
        setMode('visual');
        setTimeout(() => scrollTo(sectionId), 100);
    } else {
        scrollTo(sectionId);
    }
  };

  if (!mounted) return null;

  return (
    <div className={`min-h-screen ${theme.bg} ${theme.text} font-sans transition-colors duration-500 overflow-x-hidden flex flex-col selection:bg-emerald-300 selection:text-emerald-900`}>
      <CursorFollower theme={theme} />
      
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 w-full z-50 ${themeMode === 'dark' ? 'bg-slate-900/90' : 'bg-slate-50/90'} backdrop-blur-lg border-b ${theme.border}`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo / Brand */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setMode('intro')} >
            <div className={`w-8 h-8 rounded-lg overflow-hidden shadow-md flex items-center justify-center ${theme.buttonPrimary}`}>
                <Terminal size={18} className="text-white" />
            </div>
            {/* HIDDEN on mobile screens OR when in Intro Mode */}
            <div className={`font-bold tracking-tight text-lg ${mode === 'intro' ? 'hidden' : 'hidden md:block'}`}>
                <span className={theme.navText}>{nameTyped}</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4 ml-auto">
            <div className="flex items-center gap-6 text-sm font-medium pr-2">
                <button onClick={() => handleNavClick('about')} className={`${theme.textMuted} ${theme.hoverText} transition-colors`}>About</button>
                <button onClick={() => handleNavClick('education')} className={`${theme.textMuted} ${theme.hoverText} transition-colors`}>Education</button>
                <button onClick={() => handleNavClick('experience')} className={`${theme.textMuted} ${theme.hoverText} transition-colors`}>Experience</button>
                <button onClick={() => handleNavClick('projects')} className={`${theme.textMuted} ${theme.hoverText} transition-colors`}>Work</button>
                <button onClick={() => handleNavClick('contact')} className={`${theme.textMuted} ${theme.hoverText} transition-colors`}>Contact</button>
            </div>
            
            <div className={`w-px h-6 ${theme.separator}`}></div>
            
            <div className="flex items-center gap-3 pl-2">
                <button onClick={toggleTheme} className={`p-2 rounded-full transition-colors ${themeMode === 'dark' ? 'bg-white/10 hover:bg-white/20' : 'bg-black/5 hover:bg-black/10'}`}>
                    {themeMode === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                </button>

                {mode !== 'intro' && (
                    <div className={`flex ${themeMode === 'dark' ? 'bg-slate-800' : 'bg-slate-200'} p-1 rounded-lg border ${theme.border}`}>
                        <button onClick={() => setMode('terminal')} className={`p-2 rounded-md transition-all ${mode === 'terminal' ? theme.buttonPrimary : theme.textMuted}`}><Terminal size={18} /></button>
                        <button onClick={() => setMode('visual')} className={`p-2 rounded-md transition-all ${mode === 'visual' ? theme.buttonPrimary : theme.textMuted}`}><Eye size={18} /></button>
                    </div>
                )}
            </div>
          </div>

          <div className="md:hidden flex items-center gap-4 ml-auto">
             <button onClick={toggleTheme} className={`p-2 rounded-full transition-colors ${themeMode === 'dark' ? 'bg-white/10 hover:bg-white/20' : 'bg-black/5 hover:bg-black/10'}`}>
                {themeMode === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
             <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={theme.text}>
                 {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
             </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
          <div className={`fixed top-24 right-6 w-64 rounded-3xl shadow-2xl ${theme.bgSoft} border ${theme.border} z-50 md:hidden flex flex-col p-6 gap-2 animate-in fade-in zoom-in-95 origin-top-right`}>
              <button onClick={() => handleNavClick('about')} className={`py-2 text-base font-bold ${theme.text} ${theme.hoverText}`}>About</button>
              <button onClick={() => handleNavClick('education')} className={`py-2 text-base font-bold ${theme.text} ${theme.hoverText}`}>Education</button>
              <button onClick={() => handleNavClick('experience')} className={`py-2 text-base font-bold ${theme.text} ${theme.hoverText}`}>Experience</button>
              <button onClick={() => handleNavClick('projects')} className={`py-2 text-base font-bold ${theme.text} ${theme.hoverText}`}>Work</button>
              <button onClick={() => handleNavClick('contact')} className={`py-2 text-base font-bold ${theme.text} ${theme.hoverText}`}>Contact</button>
          </div>
      )}

      <main className="flex-1 flex flex-col relative pt-20">
        {mode === 'intro' && <IntroView setMode={setMode} themeMode={themeMode} theme={theme} />}
        {mode === 'terminal' && <TerminalView theme={theme} themeMode={themeMode} />}
        {mode === 'visual' && <VisualView theme={theme} themeMode={themeMode} />}
      </main>
      
      <footer className={`py-6 md:py-8 text-center ${theme.textMuted} border-t ${theme.border} mt-auto`}>
        <div className="flex flex-col items-center gap-3 md:gap-4 px-4">
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 font-medium text-xs md:text-sm">
                <button onClick={() => setMode('intro')} className={`${theme.hoverText} transition-colors`}>Home</button>
                <button onClick={() => handleNavClick('about')} className={`${theme.hoverText} transition-colors`}>About</button>
                <button onClick={() => handleNavClick('education')} className={`${theme.hoverText} transition-colors`}>Education</button>
                <button onClick={() => handleNavClick('experience')} className={`${theme.hoverText} transition-colors`}>Experience</button>
                <button onClick={() => handleNavClick('projects')} className={`${theme.hoverText} transition-colors`}>Work</button>
                <button onClick={() => handleNavClick('contact')} className={`${theme.hoverText} transition-colors`}>Contact</button>
            </div>
            
            <div className="flex justify-center gap-4 md:gap-6 mt-1 md:mt-2">
                <a href="https://github.com/SamriddhiS2" target="_blank" rel="noreferrer" className={`${theme.hoverText} transition-colors p-2 rounded-full ${theme.bgSoft} shadow-sm`}><Github size={18} /></a>
                <a href="https://linkedin.com/in/samriddhisivakumar" target="_blank" rel="noreferrer" className={`${theme.hoverTextSecondary} transition-colors p-2 rounded-full ${theme.bgSoft} shadow-sm`}><Linkedin size={18} /></a>
                <a href="mailto:ssamriddhi.work@gmail.com" className={`${theme.hoverText} transition-colors p-2 rounded-full ${theme.bgSoft} shadow-sm`}><Mail size={18} /></a>
            </div>
            
            <p className="opacity-80 font-medium mt-1 md:mt-2 text-xs md:text-sm">© 2026 Samriddhi Sivakumar.</p>
        </div>
      </footer>
    </div>
  );
}
