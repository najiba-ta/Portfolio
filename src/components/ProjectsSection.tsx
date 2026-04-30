"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/utils/projects";
import Link from "next/link";

import SectionBackground from "./SectionBackground";

export default function ProjectsSection() {
  return (
    <section className="bg-transparent py-32 px-4 md:px-8 overflow-hidden transition-colors duration-500 relative" id="projects">
      <SectionBackground variant="secondary" />
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" as const }}
          className="text-center mb-24"
        >
          <h2 className="text-3xl sm:text-4xl md:text-7xl font-black text-on-surface uppercase tracking-tighter">Projects</h2>
          <div className="w-16 md:w-24 h-1 bg-cyan-500 mx-auto mt-6"></div>
        </motion.div>

        <div className="space-y-32 md:space-y-48">
          {PROJECTS.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: "easeOut" as const }}
              className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 lg:gap-24 items-center`}
            >
              {/* Text Content */}
              <div className="w-full md:w-1/2 space-y-8">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 text-xs font-bold rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-5xl font-black text-on-surface tracking-tight leading-none uppercase">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-on-surface-variant text-lg leading-relaxed max-w-xl">
                  {project.description}
                </p>

                <div className="flex items-center gap-8 pt-4">
                  <motion.a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 209, 255, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-cyan-500 text-black font-bold px-8 py-4 rounded-xl transition-all text-sm uppercase tracking-widest inline-block"
                  >
                    View Github
                  </motion.a>
                  <Link 
                    href={`/projects/${project.id}`} 
                    className="text-on-surface hover:text-cyan-500 transition-colors font-bold flex items-center gap-2 group text-sm uppercase tracking-widest"
                  >
                    View Details 
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </Link>
                </div>
              </div>

              {/* Image Preview */}
              <div className="w-full md:w-1/2 relative">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-[2.5rem] overflow-hidden border-4 border-on-surface/5 shadow-2xl relative z-10"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={project.img} 
                    alt={project.title}
                    className="w-full h-full object-cover aspect-[4/3] grayscale-[50%] hover:grayscale-0 transition-all duration-700"
                  />
                </motion.div>
                {/* Decorative background element */}
                <div className={`absolute -inset-4 bg-cyan-500/5 blur-3xl rounded-full z-0 ${idx % 2 === 0 ? '-right-10' : '-left-10'}`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
