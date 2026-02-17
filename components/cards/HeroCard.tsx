"use client";

import { motion } from "framer-motion";

export default function HeroCard() {
  return (
    <div className="bento-card h-full p-8 md:p-12 flex flex-col justify-between bg-gradient-to-br from-card to-charcoal relative overflow-hidden group">
      {/* Decorative gradient blur */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/5 blur-[100px] rounded-full group-hover:bg-accent/10 transition-colors duration-700" />
      
      <div className="space-y-1">
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-accent/60">
          Producer / Artist
        </p>
        <div className="h-px w-8 bg-accent/20" />
      </div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="font-heading font-black text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-[0.8] uppercase text-smoke"
      >
        ALEX<br />THE<br />GEMINI
      </motion.h1>

      <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-smoke/40 mt-8">
        <span>Lagos Scene</span>
        <div className="w-1 h-1 bg-accent/40 rounded-full" />
        <span>Alté Origin</span>
      </div>
    </div>
  );
}
