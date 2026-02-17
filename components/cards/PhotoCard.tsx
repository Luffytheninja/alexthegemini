"use client";

import { motion } from "framer-motion";

export default function PhotoCard() {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="bento-card h-full relative group overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent z-10" />
      <div className="absolute inset-0 bg-neutral-800 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-700">
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/10">Portrait</span>
      </div>
      <div className="absolute bottom-6 left-6 z-20">
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">
          Artist Archive
        </p>
        <p className="text-xs font-bold text-white uppercase tracking-widest mt-1">
          Lagos, 2025
        </p>
      </div>
    </motion.div>
  );
}
