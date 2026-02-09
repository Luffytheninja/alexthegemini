"use client";

import SocialLinks from "@/components/SocialLinks";
import { motion, Variants } from "framer-motion";

export default function Home() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="flex-1 flex flex-col items-center justify-center p-8 md:p-24 space-y-16 text-center"
    >

      {/* Hero Section */}
      <motion.section variants={itemVariants} className="space-y-6 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
          Alex<br className="md:hidden" />the<br className="md:hidden" />gemini
        </h1>
        <p className="text-xl md:text-2xl font-light tracking-wide text-white/50">
          Alternative Afrobeat & Visual Artist
        </p>
      </motion.section>

      {/* Featured Track */}
      <motion.section variants={itemVariants} className="w-full max-w-md mx-auto space-y-8">
        <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10 relative group">
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/artist/3Wbkuzl1Ha7fBw77p15Lzw?utm_source=generator&theme=0"
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="w-full hover:opacity-100 transition-opacity"
          ></iframe>
        </div>
      </motion.section>

      {/* Social Links */}
      <motion.section variants={itemVariants}>
        <h3 className="text-sm font-bold uppercase tracking-widest text-white/30 mb-4">Connect</h3>
        <SocialLinks />
      </motion.section>

      {/* Mailing List */}
      <motion.section variants={itemVariants} className="w-full max-w-sm mx-auto space-y-4 pt-12 border-t border-white/5">
        <p className="text-sm text-center text-white/60">
          Join the inner circle. New releases & visual drops.
        </p>
        <form className="flex gap-2" action="#" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="yo@example.com"
            className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-white/40 transition-colors"
          />
          <button className="bg-white text-black font-bold px-6 py-3 rounded-lg text-sm hover:bg-white/90 transition-colors">
            JOIN
          </button>
        </form>
      </motion.section>

      <motion.footer variants={itemVariants} className="pt-24 pb-8 text-xs text-white/20">
        &copy; {new Date().getFullYear()} Alexthegemini. All Rights Reserved.
      </motion.footer>
    </motion.div>
  );
}
