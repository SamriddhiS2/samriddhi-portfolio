"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Minus, Maximize2 } from 'lucide-react';
import { Theme, ThemeMode, projects } from '../../data/portfolio';

type HistoryLine = { type: 'system' | 'info' | 'success' | 'error' | 'link' | 'text' | 'cmd' | 'whoami' | 'table'; content: any; };

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
      case 'projects': 
        response = [
            { type: 'table', content: projects }, 
            { type: 'system', content: '\nHint: Type "view seeql" to read details.' }
        ]; 
        break;
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
            { type: 'link', content: 'GitHub: https://github.com/SamriddhiS2' },
            { type: 'link', content: 'LinkedIn: https://linkedin.com/in/samriddhisivakumar' }
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

  const successColor = themeMode === 'dark' ? 'text-teal-300' : 'text-teal-600'; 
  const infoColor = themeMode === 'dark' ? 'text-emerald-300' : 'text-emerald-600'; 
  const errColor = themeMode === 'dark' ? 'text-rose-400' : 'text-rose-600'; 
  const linkColor = themeMode === 'dark' ? 'text-teal-300' : 'text-teal-600'; 
  const sysColor = themeMode === 'dark' ? 'text-slate-500' : 'text-slate-500'; 

  return (
    <div className="flex-1 flex items-center justify-center p-4 md:p-8 animate-in fade-in zoom-in duration-500">
      <div className={`w-full max-w-4xl ${theme.bgSoft}/90 backdrop-blur-xl rounded-xl border ${theme.border} shadow-2xl overflow-hidden flex flex-col h-[70vh] md:h-[600px]`}>
        <div className={`px-4 py-3 flex items-center justify-between border-b ${theme.border} ${themeMode === 'dark' ? 'bg-slate-950/20' : 'bg-slate-100/60'}`}>
          <div className="flex gap-2"><div className="w-3 h-3 rounded-full bg-rose-400" /><div className="w-3 h-3 rounded-full bg-amber-400" /><div className="w-3 h-3 rounded-full bg-emerald-400" /></div>
          <div className={`text-sm ${theme.textMuted} font-mono flex items-center gap-2`}><Terminal size={14} /> guest@samriddhi-os</div>
          <div className={`flex gap-2 ${theme.textMuted}`}><Minus size={14} /><Maximize2 size={14} /></div>
        </div>
        
        <div className="flex-1 p-6 overflow-y-auto overflow-x-hidden font-mono text-sm md:text-base custom-scrollbar" onClick={() => inputRef.current?.focus()}>
          {history.map((line, i) => (
            <div key={i} className="mb-2 break-words whitespace-pre-wrap"> 
              {line.type === 'cmd' && <div className="flex"><span className={`mr-2 ${successColor}`}>➜</span><span className={theme.text}>{line.content as string}</span></div>}
              {line.type === 'system' && <div className={`${sysColor} italic`}>{line.content as string}</div>}
              {line.type === 'info' && <div className={infoColor}>{line.content as string}</div>}
              {line.type === 'success' && <div className={successColor}>{line.content as string}</div>}
              {line.type === 'error' && <div className={errColor}>{line.content as string}</div>}
              
              {line.type === 'whoami' && typeof line.content === 'string' && (
                <div>
                    <span className={`${successColor}`}>{line.content.split('|')[0].trim()} </span>
                    <span className={sysColor}>|</span>
                    <span className={`${infoColor} ml-1`}>{line.content.split('|')[1].trim()}</span>
                </div>
              )}

              {line.type === 'link' && typeof line.content === 'string' && (
                (() => {
                  let url = "";
                  const text = line.content;
                  if (text.includes('Email: ')) url = `mailto:${text.split('Email: ')[1].trim()}`;
                  else if (text.includes('GitHub: ')) url = text.split('GitHub: ')[1].trim();
                  else if (text.includes('LinkedIn: ')) url = text.split('LinkedIn: ')[1].trim();
                  else if (text.includes('Link: ')) url = text.split('Link: ')[1].trim();
                  else if (text.startsWith('http')) url = text.trim();

                  const handleLinkClick = (e: React.MouseEvent) => {
                      if (url && (e.metaKey || e.ctrlKey)) {
                          e.preventDefault();
                          e.stopPropagation();
                          if (url.startsWith('mailto:')) {
                              window.location.href = url;
                          } else {
                              window.open(url, '_blank', 'noopener,noreferrer');
                          }
                      }
                  };

                  return (
                      <div 
                          className={`${linkColor} hover:underline cursor-pointer group flex items-center w-max`}
                          onClick={handleLinkClick}
                          title="Cmd/Ctrl + Click to follow link"
                      >
                          <span>{text}</span>
                          {url && (
                              <span className="opacity-0 group-hover:opacity-60 text-xs ml-3 font-sans italic transition-opacity duration-200">
                                  (Cmd/Ctrl + Click)
                              </span>
                          )}
                      </div>
                  );
                })()
              )}

              {line.type === 'text' && typeof line.content === 'string' && <div className={theme.text}>{line.content}</div>}

              {line.type === 'table' && Array.isArray(line.content) && (
                <div className="my-2 w-full">
                    <table className="text-left w-full">
                        <thead>
                            <tr className={infoColor}>
                                <th className="py-1 pr-4 md:pr-8 font-normal border-b border-slate-500/50 w-1/3">ID</th>
                                <th className="py-1 font-normal border-b border-slate-500/50">NAME</th>
                            </tr>
                        </thead>
                        <tbody>
                            {line.content.map((p: any) => (
                                <tr key={p.id}>
                                    <td className={`py-1 pr-4 md:pr-8 ${theme.text} whitespace-nowrap align-top`}>{p.id}</td>
                                    <td className={`py-1 ${theme.text} align-top`}>{p.title}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
              )}

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