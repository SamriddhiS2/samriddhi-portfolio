"use client";
import React, { useState, useEffect } from 'react';

export const CursorFollower = ({ theme }) => {
    const [pos, setPos] = useState({ x: -100, y: -100 });
    
    useEffect(() => {
        const move = (e) => setPos({ x: e.clientX, y: e.clientY });
        window.addEventListener('mousemove', move);
        return () => window.removeEventListener('mousemove', move);
    }, []);

    return (
        <div 
            className={`fixed w-4 h-4 rounded-full ${theme.cursorColor} pointer-events-none z-[100] transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2 hidden md:block opacity-80 shadow-md`}
            style={{ left: pos.x, top: pos.y }}
        />
    );
};