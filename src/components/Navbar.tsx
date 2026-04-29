"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Logo from "./Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-6 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl rounded-2xl border z-50 transition-all duration-700 flex justify-between items-center px-8 py-3 ${
        scrolled
          ? "bg-zinc-900/40 backdrop-blur-2xl border-white/10 shadow-2xl py-2"
          : "bg-white/5 backdrop-blur-md border-white/10"
      }`}
    >
      <div className="flex items-center gap-2">
        <Logo />
      </div>
      <div className="hidden md:flex items-center gap-10 relative">
        <a className="font-sans tracking-tight text-xs uppercase font-bold text-white/90 hover:text-primary transition-colors" href="#projects">Projects</a>
        <a className="font-sans tracking-tight text-xs uppercase font-bold text-white/40 hover:text-white transition-colors" href="#services">Services</a>
        <a className="font-sans tracking-tight text-xs uppercase font-bold text-white/40 hover:text-white transition-colors" href="#about">About</a>
        <a className="font-sans tracking-tight text-xs uppercase font-bold text-white/40 hover:text-white transition-colors" href="#faq">FAQ</a>
      </div>
      <div className="flex gap-3">
        <button className="bg-white text-black px-5 py-2 rounded-xl font-bold text-xs hover:scale-105 transition-transform">Hire Me</button>
      </div>
    </motion.nav>
  );
}
