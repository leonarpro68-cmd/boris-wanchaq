"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#propuestas", label: "Propuestas" },
  { href: "#sobre-boris", label: "Sobre Boris" },
  { href: "#plan", label: "Plan de Gobierno" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-white/95 shadow-md shadow-emerald-950/5 backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#inicio" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Image
            src="/logo.png"
            alt="Logo del movimiento Venceremos"
            width={36}
            height={36}
            className="h-9 w-9 rounded-full object-cover"
          />
          <span className="leading-tight">
            <span
              className={`block text-sm font-bold tracking-tight transition-colors ${
                scrolled || open ? "text-emerald-950" : "text-white"
              }`}
            >
              Boris Aguilar
            </span>
            <span
              className={`block text-[11px] font-medium uppercase tracking-widest transition-colors ${
                scrolled || open ? "text-emerald-700" : "text-emerald-200"
              }`}
            >
              Wánchaq · Cusco
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-red-600 ${
                scrolled ? "text-stone-700" : "text-emerald-50"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-red-700"
          >
            Súmate
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className={`md:hidden ${scrolled || open ? "text-emerald-950" : "text-white"}`}
        >
          <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-stone-100 bg-white/95 px-4 pb-4 pt-2 backdrop-blur md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-stone-700 transition hover:bg-emerald-50 hover:text-emerald-800"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-full bg-red-600 px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-red-700"
          >
            Súmate al cambio
          </a>
        </nav>
      )}
    </header>
  );
}
