"use client";

import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { useState, useEffect } from "react";

interface NowPlayingCardProps {
  audioRef: React.RefObject<HTMLAudioElement | null>;
  isGlobalPlaying: boolean;
  onPlayToggle: () => void;
}

export default function NowPlayingCard({ audioRef, isGlobalPlaying, onPlayToggle }: NowPlayingCardProps) {
  const [isMuted, setIsMuted] = useState(false);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div 
      onClick={onPlayToggle}
      className="bento-card h-full p-6 flex flex-col justify-between cursor-pointer group relative overflow-hidden"
    >
      {/* Visualizer Background */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 flex items-end justify-around px-4 gap-1 pointer-events-none opacity-20">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="w-full bg-accent rounded-t-full"
            animate={{
              height: isGlobalPlaying ? [10, 40, 20, 60, 30] : 4
            }}
            transition={{
              repeat: Infinity,
              duration: 0.6 + Math.random() * 0.4,
              ease: "easeInOut",
              delay: i * 0.1
            }}
          />
        ))}
      </div>

      <div className="flex justify-between items-start z-10">
        <div className="space-y-1">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-accent">
            {isGlobalPlaying ? "Now Playing" : "Paused"}
          </p>
          <div className="w-12 h-0.5 bg-accent/20" />
        </div>
        <button 
          onClick={toggleMute}
          className="text-smoke/40 hover:text-accent transition-colors p-1"
        >
          {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
        </button>
      </div>

      <div className="z-10 space-y-4">
        <div className="overflow-hidden">
          <motion.div
            animate={{ x: isGlobalPlaying ? ["0%", "-50%"] : 0 }}
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
            className="whitespace-nowrap inline-block"
          >
            <span className="text-xl font-black uppercase tracking-tighter text-smoke mr-8">
              HOT BO1 (w. Yo$hinoya) 123bpm — HOT BO1 (w. Yo$hinoya) 123bpm — 
            </span>
          </motion.div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-accent text-charcoal flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            {isGlobalPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ml-1" />}
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest text-smoke/40">
            {isGlobalPlaying ? "Tap to pause" : "Tap to play"}
          </span>
        </div>
      </div>
    </div>
  );
}
