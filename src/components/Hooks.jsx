"use client";
import { useState, useEffect } from 'react';

export const useTypingEffect = (text, typingSpeed = 150, deletingSpeed = 75, pauseTime = 2000) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    let timer;
    const handleTyping = () => {
      const fullText = text;
      setDisplayedText(current => {
        if (isDeleting) return fullText.substring(0, current.length - 1);
        return fullText.substring(0, current.length + 1);
      });

      if (!isDeleting && displayedText === fullText) {
        timer = setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      } else {
        timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
      }
    };
    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, text, typingSpeed, deletingSpeed, pauseTime, loopNum]);

  return displayedText;
};