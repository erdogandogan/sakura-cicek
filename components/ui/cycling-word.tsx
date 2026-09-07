"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

interface CyclingWordProps {
  words: string[];
  interval?: number;
  className?: string;
  widthClassName?: string;
}

export function CyclingWord({
  words,
  interval = 2000,
  className = "",
  widthClassName = "w-[8ch] sm:w-[9ch]",
}: CyclingWordProps) {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearTimeout(timer);
  }, [index, words.length, interval]);

  return (
    <span
      className={`relative inline-block h-[1.5em] overflow-hidden align-bottom ${widthClassName} ${className}`}
    >
      {words.map((word, i) => {
        // Her gecis ayni yonde (asagi) olsun diye "az once cikan kelime"
        // modulo ile hesaplanir; index>i gibi mutlak bir kiyas son
        // kelimeden ilkine donerken yonu ters cevirip tutarsiz bir
        // sicrama olusturuyordu.
        const justExited = i === (index - 1 + words.length) % words.length;
        return (
          <motion.span
            key={word}
            className="absolute left-0 top-[0.15em] whitespace-nowrap"
            initial={false}
            animate={
              reduceMotion
                ? { y: 0, opacity: index === i ? 1 : 0 }
                : index === i
                  ? { y: 0, opacity: 1 }
                  : { y: justExited ? "100%" : "-100%", opacity: 0 }
            }
            transition={
              reduceMotion
                ? { duration: 0 }
                : { type: "spring", stiffness: 50 }
            }
          >
            {word}
          </motion.span>
        );
      })}
    </span>
  );
}
