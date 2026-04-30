"use client";

import { Project } from "@/utils/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionBackground from "@/components/SectionBackground";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectDetailContent({ project }: { project: Project }) {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 overflow-hidden relative">
        <SectionBackground variant="primary" />

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          {/* Back Button */}
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors mb-12 group"
          >
            <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">arrow_back</span>
            <span className="font-bold uppercase tracking-widest text-xs">Back to Projects</span>
          </Link>

          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-on-surface uppercase tracking-tighter leading-none">
                  {project.title}
                </h1>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-4 py-1.5 bg-primary-container/10 border border-primary-container/20 text-primary text-xs font-bold rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed">
                {project.fullDescription}
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-container text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:scale-105 transition-transform"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-on-surface/5 border border-on-surface/10 text-on-surface px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:bg-on-surface/10 transition-colors"
                >
                  <FaGithub /> GitHub Repository
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden border-4 border-on-surface/5 shadow-2xl"
            >
              <Image
                src={project.img}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>

          {/* Details Sectio */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Challenges */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="glass-card p-6 md:p-10 rounded-3xl space-y-6"
            >
              <h2 className="text-3xl font-black uppercase tracking-tight flex items-center gap-3">
                <span className="material-symbols-outlined text-cyan-500">warning</span>
                Challenges Faced
              </h2>
              <ul className="space-y-4">
                {project.challenges.map((challenge, i) => (
                  <li key={i} className="flex gap-4 text-on-surface-variant">
                    <span className="text-primary font-bold">0{i + 1}.</span>
                    <p>{challenge}</p>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Future Plans */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="glass-card p-6 md:p-10 rounded-3xl space-y-6"
            >
              <h2 className="text-3xl font-black uppercase tracking-tight flex items-center gap-3">
                <span className="material-symbols-outlined text-green-500">rocket_launch</span>
                Future Plans
              </h2>
              <ul className="space-y-4">
                {project.futurePlans.map((plan, i) => (
                  <li key={i} className="flex gap-4 text-on-surface-variant">
                    <span className="text-primary font-bold">→</span>
                    <p>{plan}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
