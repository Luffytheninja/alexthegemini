"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BentoGrid from "@/components/BentoGrid";

export default function Home() {
  const [isEntered, setIsEntered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const mainAudioRef = useRef<HTMLAudioElement>(null);

  const handleEnter = () => {
    if (!isEntered) {
      setIsEntered(true);
      if (mainAudioRef.current) {
        mainAudioRef.current.play().catch(e => console.error("Autoplay blocked:", e));
        setIsPlaying(true);
      }
    }
  };

  const togglePlay = () => {
    if (!mainAudioRef.current) return;
    if (isPlaying) {
      mainAudioRef.current.pause();
      setIsPlaying(false);
    } else {
      mainAudioRef.current.play().catch(e => console.error("Play failed:", e));
      setIsPlaying(true);
    }
  };

  return (
    <main 
      onClick={handleEnter}
      className="min-h-screen bg-charcoal text-white relative overflow-x-hidden"
    >
      {/* Background Audio */}
      <audio 
        ref={mainAudioRef} 
        src="/audio/Hot Bo1 (w. Yo$hinoya) 123bpm.mp3" 
        loop 
      />

      {/* Entry Overlay (Only shows if hasn't entered) */}
      <AnimatePresence>
        {!isEntered && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-charcoal/80 backdrop-blur-xl flex flex-col items-center justify-center cursor-pointer p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center space-y-8"
            >
              <h2 className="text-[clamp(2.5rem,8vw,6rem)] font-heading font-black tracking-tighter uppercase leading-none">
                ALEX THE<br />GEMINI
              </h2>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">
                Tap anywhere to enter experience
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Bento Grid */}
      <div className={!isEntered ? "blur-sm opacity-20 pointer-events-none transition-all duration-1000" : "transition-all duration-1000"}>
        <BentoGrid 
          audioRef={mainAudioRef} 
          isGlobalPlaying={isPlaying} 
          onPlayToggle={togglePlay} 
        />
      </div>

      {/* Ambient background blur */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] bg-accent/5 blur-[120px] rounded-full pointer-events-none -z-10" />
    </main>
  );
}
