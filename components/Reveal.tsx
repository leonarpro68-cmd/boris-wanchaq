"use client";

import { useEffect, useRef } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Retraso en ms para escalonar animaciones de elementos hermanos */
  delay?: number;
};

/**
 * Mejora progresiva: el contenido es visible por defecto (SSR / sin JS).
 * Solo si el elemento está fuera del viewport al montar, se oculta y se
 * anima su aparición cuando entra en pantalla.
 */
export default function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    // Si ya está a la vista al cargar, no animar (evita parpadeos above-the-fold)
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return;

    el.classList.add("reveal");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
