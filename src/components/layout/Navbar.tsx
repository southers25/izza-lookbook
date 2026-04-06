"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
        <Link
          href="/"
          className={`font-serif text-2xl md:text-3xl transition-colors duration-500 ${
            scrolled ? "text-ink" : "text-cream"
          }`}
        >
          IZZA
        </Link>
        <span
          className={`text-xs tracking-[0.25em] uppercase transition-colors duration-500 ${
            scrolled ? "text-ink-light" : "text-cream/80"
          }`}
        >
          Boutique
        </span>
      </div>
    </nav>
  );
}
