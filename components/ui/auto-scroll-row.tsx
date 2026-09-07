"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface AutoScrollRowProps {
  children: ReactNode[];
  className?: string;
  itemClassName?: string;
  pxPerSecond?: number;
}

export function AutoScrollRow({
  children,
  className = "",
  itemClassName = "",
  pxPerSecond = 36,
}: AutoScrollRowProps) {
  const scrollerRef = useRef<HTMLUListElement>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    // Uc kopya (orijinal + 2 klon) tutuyoruz ki kullanici sola veya saga
    // ne kadar surerse sursun her zaman ayni icerigin bir kopyasi
    // etrafta olsun; "scroll" olayinda kenara yaklasildikca sessizce
    // ortaki kopyaya geri isiniyoruz, boylece basta/sonda durmuyor ve
    // sicrama fark edilmiyor (butun kopyalar ozdes).
    const originalChildren = Array.from(el.children);
    originalChildren.forEach((child) => el.appendChild(child.cloneNode(true)));
    originalChildren.forEach((child) => el.appendChild(child.cloneNode(true)));

    const setWidth = () => el.scrollWidth / 3;
    el.scrollLeft = setWidth();

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let lastTime = performance.now();
    let rafId = requestAnimationFrame(step);

    function step(time: number) {
      const delta = time - lastTime;
      lastTime = time;
      if (!pausedRef.current && el && !reduceMotion) {
        el.scrollLeft += (pxPerSecond * delta) / 1000;
      }
      rafId = requestAnimationFrame(step);
    }

    const recenter = () => {
      const width = setWidth();
      if (el.scrollLeft < width * 0.5) {
        el.scrollLeft += width;
      } else if (el.scrollLeft > width * 1.5) {
        el.scrollLeft -= width;
      }
    };
    el.addEventListener("scroll", recenter, { passive: true });

    const pause = () => {
      pausedRef.current = true;
    };
    const resume = () => {
      pausedRef.current = false;
    };

    el.addEventListener("pointerdown", pause);
    el.addEventListener("pointerup", resume);
    el.addEventListener("pointercancel", resume);
    el.addEventListener("pointerleave", resume);
    el.addEventListener("touchstart", pause, { passive: true });
    el.addEventListener("touchend", resume);
    el.addEventListener("mouseenter", pause);
    el.addEventListener("mouseleave", resume);

    return () => {
      cancelAnimationFrame(rafId);
      el.removeEventListener("scroll", recenter);
      el.removeEventListener("pointerdown", pause);
      el.removeEventListener("pointerup", resume);
      el.removeEventListener("pointercancel", resume);
      el.removeEventListener("pointerleave", resume);
      el.removeEventListener("touchstart", pause);
      el.removeEventListener("touchend", resume);
      el.removeEventListener("mouseenter", pause);
      el.removeEventListener("mouseleave", resume);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pxPerSecond]);

  return (
    <ul
      ref={scrollerRef}
      className={`flex snap-none flex-nowrap gap-5 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${className}`}
    >
      {children.map((child, idx) => (
        <li key={idx} className={`shrink-0 ${itemClassName}`}>
          {child}
        </li>
      ))}
    </ul>
  );
}
