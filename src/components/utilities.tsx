"use client";
import React, { useState, useEffect } from 'react';
import { useReveal } from '../hooks';
import { Theme } from '../data/portfolio';

export const Reveal = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => {
  const { ref, isVisible } = useReveal(delay);
  return (
    <div ref={ref} className={`transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

export const CursorFollower = ({ theme }: { theme: Theme }) => {
    const [pos, setPos] = useState({ x: -100, y: -100 });
    useEffect(() => {
        const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
        window.addEventListener('mousemove', move);
        return () => window.removeEventListener('mousemove', move);
    }, []);
    return (
        <div className={`fixed w-4 h-4 rounded-full ${theme.cursorColor} pointer-events-none z-[100] transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2 hidden md:block opacity-80 shadow-[0_0_10px_rgba(16,185,129,0.5)]`} style={{ left: pos.x, top: pos.y }} />
    );
};