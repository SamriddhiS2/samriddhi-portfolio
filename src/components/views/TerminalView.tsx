"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Minus, Maximize2 } from 'lucide-react';
import { Theme, ThemeMode, projects } from '../../data/portfolio';

type HistoryLine = { type: 'system' | 'info' | 'success' | 'error' | 'link' | 'text' | 'cmd'; content: string; };

interface TerminalViewProps {
  theme: Theme;
  themeMode: ThemeMode;
}

export const TerminalView = ({ theme, themeMode }: TerminalViewProps) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryLine[]>([
    { type: 'system', content: 'Starting SamriddhiOS kernel v3.0...' },
    { type: 'system', content: 'Welcome, Guest. Type "help" to view available commands.' },
  ]);
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    const args = cmd.split(' ');
    const command = args[0];
    const argument = args[1]; 
    
    let response: HistoryLine[] = [];
    switch(command) {
      case 'help': response = [{ type: 'info', content: 'Available commands: ls, view <id>, whoami, skills, contact, clear' }]; break;
      case 'whoami': response = [{ type: 'text', content: 'Samriddhi Sivakumar | Data Scientist & Software Engineer' }]; break;
      case 'ls': 
      case 'projects': response = [{ type: 'info', content: 'ID              | NAME\n----------------+------------------' }, ...projects.map(p => ({ type: 'text', content: `${p.id.padEnd(15)} | ${p.title}` } as HistoryLine)), { type: 'system', content: '\nHint: Type "view urban-pulse" to read details.' }]; break;
      case 'view':
        const project = projects.find(p => p.id === argument);
        if (project) { response = [{ type: 'success', content: `>> Opening ${project.title}...` }, { type: 'info', content: `Tech: ${project.tech.join(', ')}` }, { type: 'link', content: `Link: ${project.link}` }, { type: 'text', content: project.details }]; }
        else { response = [{ type: 'error', content: `Project "${argument}" not found.` }]; }
        break;
      case 'skills': response = [{ type: 'info', content: 'React, Tailwind, Next.js, Node, Python, C++, PyTorch, Pandas' }]; break;
      case 'contact': response = [{ type: 'link', content: 'hello@samriddhi.dev' }]; break;
      case 'clear': setHistory([]); setInput(''); return;
      case '': break;
      default: response = [{ type: 'error', content: `Command not found: ${command}` }];
    }
    setHistory(prev => [...prev, { type: 'cmd', content: input }, ...response]);
    setInput('');
  };

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }, [history]);

  const successColor = themeMode === 'dark' ? 'text-teal-300' : 'text-teal-600';
  const infoColor = themeMode === 'dark' ? 'text-emerald-300' : 'text-emerald-600'; 
  const errColor = themeMode === 'dark' ? 'text-rose-400' : 'text-rose-600';
  const linkColor = themeMode === 'dark' ? 'text-teal-300' : 'text-teal-600';
  const sysColor = themeMode === 'dark' ? 'text-slate-500' : 'text-slate-500';

  return (
    <div className="h-full flex items-center justify-center p-4 md:p-8 animate-in fade-in zoom-in duration-500">
      <div className={`w-full max-w-4xl ${theme.bgSoft}/90 backdrop-blur-xl rounded-xl border ${theme.border} shadow-2xl overflow-hidden flex flex-col h-[70vh] md:h-[600px]`}>
        <div className={`bg-slate-950/20 px-4 py-3 flex items-center justify-between border-b ${theme.border}`}>
          <div className="flex gap-2"><div className="w-3 h-3 rounded-full bg-rose-400" /><div className="w-3 h-3 rounded-full bg-amber-400" /><div className="w-3 h-3 rounded-full bg-emerald-400" /></div>
          <div className={`text-sm ${theme.textMuted} font-mono flex items-center gap-2`}><Terminal size={14} /> guest@samriddhi-os</div>
          <div className={`flex gap-2 ${theme.textMuted}`}><Minus size={14} /><Maximize2 size={14} /></div>
        </div>
        <div className="flex-1 p-6 overflow-y-auto font-mono text-sm md:text-base custom-scrollbar" onClick={() => inputRef.current?.focus()}>
          {history.map((line, i) => (
            <div key={i} className="mb-2 break-words whitespace-pre-wrap"> 
              {line.type === 'cmd' && <div className="flex"><span className={`mr-2 ${successColor}`}>➜</span><span className={theme.text}>{line.content}</span></div>}
              {line.type === 'system' && <div className={`${sysColor} italic`}>{line.content}</div>}
              {line.type === 'info' && <div className={infoColor}>{line.content}</div>}
              {line.type === 'success' && <div className={successColor}>{line.content}</div>}
              {line.type === 'error' && <div className={errColor}>{line.content}</div>}
              {line.type === 'link' && <div className={`${linkColor} hover:underline cursor-pointer`}>{line.content}</div>}
              {line.type === 'text' && <div className={theme.text}>{line.content}</div>}
            </div>
          ))}
          <form onSubmit={handleCommand} className="flex items-center mt-4">
            <span className={`mr-2 ${successColor}`}>➜</span>
            <input ref={inputRef} type="text" value={input} onChange={(e) => setInput(e.target.value)} className={`bg-transparent border-none outline-none ${theme.text} w-full font-mono`} autoFocus spellCheck="false" autoComplete="off" />
          </form>
          <div ref={endRef} className="pb-4"/>
        </div>
      </div>
    </div>
  );
};