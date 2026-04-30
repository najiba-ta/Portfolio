"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Logo from "./Logo";
import { useTheme } from "./ThemeProvider";
import { FaSun, FaMoon } from "react-icons/fa";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

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
          ? "bg-zinc-900/40 dark:bg-zinc-900/40 bg-white/40 backdrop-blur-2xl border-white/10 dark:border-white/10 border-black/5 shadow-2xl py-2"
          : "dark:bg-white/5 bg-black/5 backdrop-blur-md border-white/10 dark:border-white/10 border-black/5"
      }`}
    >
      <div className="flex items-center gap-2">
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <div className="hidden md:flex items-center gap-10 relative">
        <Link className="font-sans tracking-tight text-xs uppercase font-bold dark:text-white/90 text-black/90 hover:text-primary transition-colors" href="/#projects">Projects</Link>
        <Link className="font-sans tracking-tight text-xs uppercase font-bold dark:text-white/40 text-black/40 hover:text-white dark:hover:text-white hover:text-black transition-colors" href="/#services">Services</Link>
        <Link className="font-sans tracking-tight text-xs uppercase font-bold dark:text-white/40 text-black/40 hover:text-white dark:hover:text-white hover:text-black transition-colors" href="/#about">About</Link>
        <Link className="font-sans tracking-tight text-xs uppercase font-bold dark:text-white/40 text-black/40 hover:text-white dark:hover:text-white hover:text-black transition-colors" href="/#faq">FAQ</Link>
      </div>
      <div className="flex items-center gap-3">
        <button 
          onClick={toggleTheme}
          className="p-2.5 rounded-xl border dark:border-white/10 border-black/10 dark:text-white text-black hover:bg-black/5 dark:hover:bg-white/5 transition-all"
          aria-label="Toggle Theme"
        >
          {theme === "dark" ? <FaSun className="text-orange-400" /> : <FaMoon className="text-indigo-600" />}
        </button>
        <button className="dark:bg-white bg-black dark:text-black text-white px-5 py-2 rounded-xl font-bold text-xs hover:scale-105 transition-transform">Hire Me</button>
      </div>
    </motion.nav>
  );
}
