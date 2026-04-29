"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section className="bg-background text-on-surface py-32 px-8 transition-colors duration-500" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" as const }}
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32"
      >
        {/* Left Content */}
        <div className="flex flex-col justify-between h-full space-y-12 lg:space-y-0">
          <div className="space-y-8">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block text-orange-500 uppercase tracking-[0.3em] text-xs font-black"
            >
              Contacts
            </motion.span>
            <h2 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter uppercase text-on-surface">
              Have a<br />
              project?<br />
              <span className="text-on-surface-variant">Let&apos;s talk!</span>
            </h2>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-black transition-all duration-300">
                <span className="material-symbols-outlined">call</span>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest font-bold text-on-surface-variant">Call me</p>
                <p className="text-xl font-bold text-on-surface">01997182130</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-black transition-all duration-300">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest font-bold text-on-surface-variant">Email me</p>
                <p className="text-xl font-bold text-on-surface">shahidnajiba@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="flex flex-col justify-center">
          <form className="space-y-12">
            <div className="relative group">
              <label className="absolute -top-6 left-0 text-on-surface-variant text-xs uppercase tracking-widest font-bold group-focus-within:text-orange-500 transition-colors">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-transparent border-b-2 border-on-surface/10 py-4 focus:border-orange-500 outline-none transition-all duration-500 placeholder:text-on-surface-variant/50 text-xl font-bold"
              />
            </div>

            <div className="relative group">
              <label className="absolute -top-6 left-0 text-on-surface-variant text-xs uppercase tracking-widest font-bold group-focus-within:text-orange-500 transition-colors">
                Email
              </label>
              <input
                type="email"
                placeholder="Your@Email.com"
                className="w-full bg-transparent border-b-2 border-on-surface/10 py-4 focus:border-orange-500 outline-none transition-all duration-500 placeholder:text-on-surface-variant/50 text-xl font-bold"
              />
            </div>

            <div className="relative group">
              <label className="absolute -top-6 left-0 text-on-surface-variant text-xs uppercase tracking-widest font-bold group-focus-within:text-orange-500 transition-colors">
                Message
              </label>
              <textarea
                placeholder="What's on your mind?"
                rows={4}
                className="w-full bg-transparent border-b-2 border-on-surface/10 py-4 focus:border-orange-500 outline-none transition-all duration-500 placeholder:text-on-surface-variant/50 text-xl font-bold resize-none"
              />

              <div>
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "#f97316" }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8 bg-orange-500 text-black px-8 py-4 rounded-full font-black text-xl uppercase tracking-tighter flex items-center gap-3 group transition-colors"
                >
                  Submit Now
                  <span className="material-symbols-outlined font-black group-hover:translate-x-2 transition-transform duration-300">
                    arrow_right_alt
                  </span>
                </motion.button>
              </div>
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
