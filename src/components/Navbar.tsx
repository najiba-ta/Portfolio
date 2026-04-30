"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Logo from "./Logo";
import { useTheme } from "./ThemeProvider";
import { FaSun, FaMoon } from "react-icons/fa";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Projects", href: "/#projects" },
    { name: "Services", href: "/#services" },
    { name: "About", href: "/#about" },
    { name: "FAQ", href: "/#faq" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={`fixed top-6 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl rounded-2xl border z-50 transition-all duration-700 flex justify-between items-center px-4 md:px-8 py-3 ${
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
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10 relative">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              className="font-sans tracking-tight text-xs uppercase font-bold dark:text-white/60 text-black/60 hover:text-cyan-500 transition-colors" 
              href={link.href}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <button 
            onClick={toggleTheme}
            className="p-2.5 rounded-xl border dark:border-white/10 border-black/10 dark:text-white text-black hover:bg-black/5 dark:hover:bg-white/5 transition-all"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <FaSun className="text-cyan-400" /> : <FaMoon className="text-indigo-600" />}
          </button>
          
          <button className="hidden sm:block dark:bg-white bg-black dark:text-black text-white px-5 py-2 rounded-xl font-bold text-xs hover:scale-105 transition-transform">
            Hire Me
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl border dark:border-white/10 border-black/10 dark:text-white text-black hover:bg-black/5 dark:hover:bg-white/5 transition-all"
          >
            <span className="material-symbols-outlined">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{ 
          opacity: mobileMenuOpen ? 1 : 0,
          x: mobileMenuOpen ? "0%" : "100%" 
        }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed inset-0 z-[40] md:hidden bg-background/80 backdrop-blur-2xl flex flex-col items-center justify-center gap-8"
      >
        {navLinks.map((link) => (
          <Link 
            key={link.name}
            onClick={() => setMobileMenuOpen(false)}
            className="text-4xl font-display text-on-surface uppercase tracking-tighter"
            href={link.href}
          >
            {link.name}
          </Link>
        ))}
        <button className="mt-4 dark:bg-white bg-black dark:text-black text-white px-10 py-4 rounded-2xl font-bold text-lg uppercase tracking-widest">
          Hire Me
        </button>
      </motion.div>
    </>
  );
}
