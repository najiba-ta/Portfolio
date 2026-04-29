"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "EcoSphere Dashboard",
    tags: ["React", "Next.js", "JavaScript"],
    description: "A high-performance monitoring dashboard featuring real-time data visualization and interactive components built with React and Framer Motion.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7pUGLfPfHqfLTEvdNwk48f5g6Itj__jJSzteDfD-7nq8PD-o1N4KWcsZRHpQMrLkDuLKNBgcUPsR2wcdElpw3AQHWbIbXD0UtwxcqSrqjzALboVIr2snLtLnJnmjaB4zg85NalUkY66-qfQsTeX8oiPT7CyT-M_cljTu2qVvLzsiAE_yAzK1UqSSTVXSm8C80rFdXXhqP_uqHKeFlONMeJCv5fa1R00nvHJ1pLuoMBXIMtI610_5h2VyXQi401TJbye_eij_0GA",
    github: "https://github.com/najiba-ta",
    link: "#"
  },
  {
    title: "NeuroConnect Social",
    tags: ["Next.js", "MongoDB", "Tailwind"],
    description: "A social networking platform optimized for speed and accessibility, leveraging Next.js for server-side rendering and MongoDB for scalable data storage.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdWvkxn3RKsz9DyalJVQt4_lEFe-VVJ8Kg2u4pzS9iyfcR41lfKr_aXEs3KbZGLDbYVJNibsExx-W4AsGD3Z4TtwKHw9m7seQ5A9-CGEb66yUv1PJRd2sFFtU18tvqtwacbiHrh71R5Z3jPeSLDLHBEPDpnD7jYG7D-R5BVyJ2ZseFMWVtA3UZaX3LsDXqe2wZhyBtqcjApEku9o0D0Kj1gBJruCnx8RJ0Ytr8VL41jCCXVINY3asw7lQ-k1HhgJHR4dHP1CT63w",
    github: "https://github.com/najiba-ta",
    link: "#"
  },
  {
    title: "Lumina Commerce",
    tags: ["React", "JavaScript", "Context API"],
    description: "A modern e-commerce interface focusing on smooth user journeys, complex state management, and optimized asset loading for a premium shopping experience.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2YuwREfGjnjGxxkVKftAeZkBlnm2BgSMsHwOj3YA7F3eOmimEBV1UHhc77H4AkF12URvBABGyZgzu_3i00XtwKqdmMPrCTummpt9OnE0_pPmbQgN1whkQ2MO_5q_3orOjBZOZbqn3C3hWd7mMa4JCvZgaASBJUrYgSZ3ccoDopFCZpYDCx_FTvswRXgPSHGWibcIWC0YiVt7SPyDmvNZf5itSE1bmMrdb6pJZrnlUlQqVRBbg8NJ1zPkWfASt1qdFOtXrgdDvJw",
    github: "https://github.com/najiba-ta",
    link: "#"
  }
];

export default function ProjectsSection() {
  return (
    <section className="bg-transparent py-32 px-8 overflow-hidden transition-colors duration-500" id="projects">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" as const }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-black text-on-surface uppercase tracking-tighter">Projects</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-6"></div>
        </motion.div>

        <div className="space-y-32 md:space-y-48">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as const }}
              className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 lg:gap-24 items-center`}
            >
              {/* Text Content */}
              <div className="w-full md:w-1/2 space-y-8">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-4 py-1.5 bg-orange-500/10 border border-orange-500/20 text-orange-500 text-xs font-bold rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-4xl md:text-5xl font-black text-on-surface tracking-tight leading-none uppercase">
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
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-orange-500 hover:bg-orange-600 text-black font-bold px-8 py-4 rounded-xl transition-colors text-sm uppercase tracking-widest inline-block"
                  >
                    View Github
                  </motion.a>
                  <a 
                    href={project.link} 
                    className="text-on-surface hover:text-orange-500 transition-colors font-bold flex items-center gap-2 group text-sm uppercase tracking-widest"
                  >
                    View project 
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </a>
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
                <div className={`absolute -inset-4 bg-orange-500/5 blur-3xl rounded-full z-0 ${idx % 2 === 0 ? '-right-10' : '-left-10'}`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
