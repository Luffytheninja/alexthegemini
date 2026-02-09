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
      className="flex-1 flex flex-col items-center justify-center p-8 md:p-32 space-y-24 text-center max-w-7xl mx-auto"
    >

      {/* Hero Section */}
      <motion.section variants={itemVariants} className="space-y-8 max-w-5xl mx-auto pt-12">
        <h1 className="text-7xl md:text-[10rem] font-black tracking-[-0.04em] leading-[0.9] uppercase text-[#FDFCF0] drop-shadow-sm">
          Alex<br className="md:hidden" />the<br className="md:hidden" />gemini
        </h1>
        <p className="text-xl md:text-3xl font-medium tracking-tight text-[#FF5A5F] opacity-90 italic">
          Alternative Afrobeat & Visual Artist
        </p>
      </motion.section>

      {/* Featured Track */}
      <motion.section variants={itemVariants} className="w-full max-w-2xl mx-auto px-4">
        <div className="rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-[#D4CFC3]/10 bg-[#12100E] p-1 scale-100 hover:scale-[1.02] transition-transform duration-500">
          <iframe
            style={{ borderRadius: "20px" }}
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

      {/* Social Links Section */}
      <motion.section variants={itemVariants} className="space-y-4">
        <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-[#D4CFC3]/40">Connect</h3>
        <SocialLinks />
      </motion.section>

      {/* Mailing List */}
      <motion.section
        variants={itemVariants}
        className="w-full max-w-lg mx-auto space-y-8 pt-20 border-t border-[#D4CFC3]/5"
      >
        <div className="space-y-3">
          <h2 className="text-3xl font-bold text-[#FDFCF0] tracking-tight">Stay in the loop</h2>
          <p className="text-lg text-[#D4CFC3]/60 max-w-md mx-auto">
            Get the first look at new visual drops and secret releases.
          </p>
        </div>
        <form className="flex flex-col md:flex-row gap-4 px-4" action="#" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="yo@alex.xyz"
            className="flex-1 bg-[#FDFCF0]/5 border border-[#D4CFC3]/10 rounded-2xl px-6 py-4 text-base focus:outline-none focus:border-[#FF5A5F]/40 transition-all placeholder:text-[#D4CFC3]/20"
          />
          <button className="bg-[#FF5A5F] text-[#FDFCF0] font-bold px-8 py-4 rounded-2xl text-base hover:bg-[#FF5A5F]/90 transition-all shadow-lg shadow-coral/20">
            JOIN
          </button>
        </form>
      </motion.section>

      <motion.footer variants={itemVariants} className="pt-32 pb-12 text-xs tracking-widest text-[#D4CFC3]/30 uppercase font-medium">
        &copy; {new Date().getFullYear()} Alexthegemini &bull; Visual Artist &bull; Nigeria
      </motion.footer>
    </motion.div>
  );
}
