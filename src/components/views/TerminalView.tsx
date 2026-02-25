"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Minus, Maximize2 } from 'lucide-react';
import { Theme, ThemeMode, projects } from '../../data/portfolio';

type HistoryLine = { type: 'system' | 'info' | 'success' | 'error' | 'link' | 'text' | 'cmd' | 'whoami'; content: string; };

interface TerminalViewProps {
  theme: Theme;
  themeMode: ThemeMode;
}

// Full list of commands for autocompletion
const COMMANDS = ['help', 'whoami', 'ls', 'projects', 'view', 'skills', 'contact', 'clear'];

export const TerminalView = ({ theme, themeMode }: TerminalViewProps) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryLine[]>([
    { type: 'system', content: 'Starting SamriddhiOS kernel v3.0...' },
    { type: 'system', content: 'Welcome, Guest. Type "help" to view available commands.' },
  ]);
  
  // States for up/down arrow history
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim();
    if (!cmd) return;

    // Save to command history and reset index
    setCmdHistory(prev => [...prev, cmd]);
    setHistoryIndex(-1);

    const args = cmd.toLowerCase().split(' ');
    const command = args[0];
    const argument = args[1]; 
    
    let response: HistoryLine[] = [];
    switch(command) {
      case 'help': response = [{ type: 'info', content: 'Available commands: ls, view <id>, whoami, skills, contact, clear' }]; break;
      case 'whoami': response = [{ type: 'whoami', content: 'Samriddhi Sivakumar | CS & Data Science @ UW' }]; break;
      case 'ls': 
      case 'projects': response = [{ type: 'info', content: 'ID              | NAME\n----------------+------------------' }, ...projects.map(p => ({ type: 'text', content: `${p.id.padEnd(15)} | ${p.title}` } as HistoryLine)), { type: 'system', content: '\nHint: Type "view urban-pulse" to read details.' }]; break;
      case 'view':
        if (!argument) {
            response = [{ type: 'error', content: `Usage: view <project-id>` }];
            break;
        }
        const project = projects.find(p => p.id === argument);
        if (project) { 
            response = [
                { type: 'success', content: `>> Opening ${project.title}...` }, 
                { type: 'info', content: `Tech: ${project.tech.join(', ')}` }, 
                { type: 'link', content: `Link: ${project.link}` }, 
                { type: 'info', content: project.details } 
            ]; 
        }
        else { response = [{ type: 'error', content: `Project "${argument}" not found. Type "ls" to see project IDs.` }]; }
        break;
      case 'skills': 
        response = [
            { type: 'info', content: 'Languages: Python, Java, C++, TypeScript, SQL, Go' },
            { type: 'info', content: 'Full Stack: React, Next.js, Node, PostgreSQL, AWS, Docker' },
            { type: 'info', content: 'Data Science: PyTorch, TensorFlow, Pandas, OpenCV, Hugging Face, D3.js' }
        ]; 
        break;
      case 'contact': 
        response = [
            { type: 'link', content: 'Email: ssamriddhi.work@gmail.com' },
            { type: 'link', content: 'GitHub: github.com/SamriddhiS2' },
            { type: 'link', content: 'LinkedIn: linkedin.com/in/samriddhisivakumar' }
        ]; 
        break;
      case 'clear': setHistory([]); setInput(''); return;
      default: response = [{ type: 'error', content: `Command not found: ${command}` }];
    }
    
    setHistory(prev => [...prev, { type: 'cmd', content: cmd }, ...response]);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (cmdHistory.length > 0) {
            const newIdx = historyIndex < cmdHistory.length - 1 ? historyIndex + 1 : historyIndex;
            setHistoryIndex(newIdx);
            setInput(cmdHistory[cmdHistory.length - 1 - newIdx]);
        }
    } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (historyIndex > 0) {
            const newIdx = historyIndex - 1;
            setHistoryIndex(newIdx);
            setInput(cmdHistory[cmdHistory.length - 1 - newIdx]);
        } else if (historyIndex === 0) {
            setHistoryIndex(-1);
            setInput('');
        }
    } else if (e.key === 'Tab') {
        e.preventDefault();
        const args = input.trim().toLowerCase().split(' ');
        
        // Autocomplete base commands
        if (args.length === 1) {
            const match = COMMANDS.find(c => c.startsWith(args[0]));
            if (match) setInput(match + ' ');
        } 
        // Autocomplete project IDs for 'view'
        else if (args[0] === 'view' && args.length === 2) {
            const partialMatch = projects.find(p => p.id.startsWith(args[1]));
            if (partialMatch) setInput(`view ${partialMatch.id}`);
        }
    }
  };

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }, [history]);

  // Distinct semantic colors
  const successColor = themeMode === 'dark' ? 'text-teal-300' : 'text-teal-600'; // Teal
  const infoColor = themeMode === 'dark' ? 'text-emerald-300' : 'text-emerald-600'; // Green
  const errColor = themeMode === 'dark' ? 'text-rose-400' : 'text-rose-600'; // Red
  const linkColor = themeMode === 'dark' ? 'text-teal-300' : 'text-teal-600'; // Teal Link
  const sysColor = themeMode === 'dark' ? 'text-slate-500' : 'text-slate-500'; // Gray

  return (
    <div className="flex-1 flex items-center justify-center p-4 md:p-8 animate-in fade-in zoom-in duration-500">
      <div className={`w-full max-w-4xl ${theme.bgSoft}/90 backdrop-blur-xl rounded-xl border ${theme.border} shadow-2xl overflow-hidden flex flex-col h-[70vh] md:h-[600px]`}>
        <div className={`px-4 py-3 flex items-center justify-between border-b ${theme.border} ${themeMode === 'dark' ? 'bg-slate-950/20' : 'bg-slate-100/60'}`}>
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
              
              {/* Custom Whoami Render: Name no longer has font-bold */}
              {line.type === 'whoami' && (
                <div>
                    <span className={`${successColor}`}>{line.content.split('|')[0].trim()} </span>
                    <span className={sysColor}>|</span>
                    <span className={`${infoColor} ml-1`}>{line.content.split('|')[1].trim()}</span>
                </div>
              )}

              {line.type === 'link' && (
                <div className={`${linkColor} hover:underline cursor-pointer`}>
                  {line.content.startsWith('http') ? (
                    <a href={line.content} target="_blank" rel="noopener noreferrer">{line.content}</a>
                  ) : line.content}
                </div>
              )}
              {line.type === 'text' && <div className={theme.text}>{line.content}</div>}
            </div>
          ))}
          <form onSubmit={handleCommand} className="flex items-center mt-4">
            <span className={`mr-2 ${successColor}`}>➜</span>
            <input 
              ref={inputRef} 
              type="text" 
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
              onKeyDown={handleKeyDown}
              className={`bg-transparent border-none outline-none ${theme.text} w-full font-mono`} 
              autoFocus 
              spellCheck="false" 
              autoComplete="off" 
            />
          </form>
          <div ref={endRef} className="pb-4"/>
        </div>
      </div>
    </div>
  );
};