"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

interface HeroParallaxHeadingProps {
  children: ReactNode;
  className?: string;
}

export function HeroParallaxHeading({
  children,
  className = "",
}: HeroParallaxHeadingProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.35]);

  return (
    <motion.h1
      ref={ref}
      style={reduceMotion ? undefined : { y, opacity }}
      className={className}
    >
      {children}
    </motion.h1>
  );
}
