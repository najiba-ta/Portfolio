"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);

function AnimatedCounter({ from, to }: { from: number; to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(from);
  const springValue = useSpring(motionValue, { duration: 2000, bounce: 0 });

  useEffect(() => {
    if (inView) {
      motionValue.set(to);
    }
  }, [inView, motionValue, to]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US", { minimumIntegerDigits: 2 }).format(Math.floor(latest));
      }
    });
  }, [springValue]);

  return <span ref={ref}>{from}</span>;
}

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (textRef.current) {
      const lines = gsap.utils.toArray<HTMLElement>(".reveal-line");
      gsap.fromTo(
        lines,
        { y: 50, clipPath: "inset(0 0 100% 0)" },
        {
          y: 0,
          clipPath: "inset(0 0 0% 0)",
          duration: 1,
          stagger: 0.15,
          ease: "power4.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, { scope: containerRef });

  const pillVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: i * 0.1 + 0.5,
        type: "spring" as const,
        stiffness: 200,
        damping: 12
      }
    })
  };

  const stack = [
    { name: "React.js", icon: "data_object" },
    { name: "Next.js", icon: "speed" },
    { name: "JavaScript", icon: "javascript" },
    { name: "MongoDB", icon: "database" },
  ];

  return (
    <section ref={containerRef} className="py-32 relative bg-transparent overflow-hidden" id="about">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9IjAuMDIiLz4KPC9zdmc+')] dark:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDIiLz4KPC9zdmc+')] bg-repeat opacity-50" />
      
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        <div className="lg:col-span-5 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full"
          >
            <div className="relative aspect-square max-w-[420px] mx-auto">
              <Image
                src="/najiba.png"
                alt="Najiba"
                fill
                className="rounded-2xl object-cover transition-all duration-700"
              />
              <div className="absolute inset-0 rounded-2xl border border-on-surface/10" />
            </div>
          </motion.div>
        </div>

        <div ref={textRef} className="lg:col-span-7 space-y-12 text-on-surface">
          <div>
            <h2 className="font-h2 text-h1 mb-6 reveal-line overflow-hidden pb-2 text-on-surface">About Me</h2>
            <div className="font-body-lg text-body-lg text-on-surface-variant space-y-2">
              <p className="reveal-line overflow-hidden pb-1">I am Najiba Takarrum, a passionate Frontend Web Developer specialized</p>
              <p className="reveal-line overflow-hidden pb-1">in building highly interactive and performant user interfaces.</p>
              <p className="reveal-line overflow-hidden pb-1">With deep expertise in React and Next.js, I bridge the gap between</p>
              <p className="reveal-line overflow-hidden pb-1">sophisticated design and robust technical implementation.</p>
            </div>
          </div>

          <div>
            <h3 className="font-h3 text-h3 mb-6 flex items-center gap-3 reveal-line overflow-hidden pb-1 text-on-surface">
              <span className="material-symbols-outlined text-primary">terminal</span>
              My Tech Stack
            </h3>
            <div className="flex flex-wrap gap-4">
              {stack.map((item, i) => (
                <motion.div
                  key={item.name}
                  custom={i}
                  variants={pillVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ y: -5, scale: 1.05, borderColor: "rgba(189, 0, 255, 0.5)" }}
                  className="glass-card px-4 py-3 rounded-xl flex items-center gap-3 border dark:border-white/5 border-black/5 cursor-default transition-colors"
                >
                  <span className="material-symbols-outlined text-primary">{item.icon}</span>
                  <span className="font-label-sm text-on-surface">{item.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-h3 text-h3 flex items-center gap-3 reveal-line overflow-hidden pb-1 text-on-surface">
              <span className="material-symbols-outlined text-primary">work</span>
              Experience
            </h3>
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex justify-between items-center p-6 rounded-2xl bg-on-surface/5 border border-on-surface/5 hover:bg-on-surface/10 transition-colors group"
              >
                <div>
                  <h4 className="font-bold text-on-surface group-hover:text-primary transition-colors">Frontend Developer</h4>
                  <p className="text-on-surface-variant text-sm"></p>
                </div>
                <span className="text-primary font-mono text-sm">2026 — Present</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
