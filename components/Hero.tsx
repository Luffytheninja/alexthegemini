"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useCallback } from "react";
import { ChevronDown } from "lucide-react";

interface HeroProps {
    onEnter: (audioRef: React.RefObject<HTMLAudioElement | null>) => void;
}

export default function Hero({ onEnter }: HeroProps) {
    const [hasEntered, setHasEntered] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    const handleEnter = useCallback(() => {
        if (audioRef.current) {
            audioRef.current.play().catch((e) =>
                console.error("Audio playback blocked:", e)
            );
        }
        setHasEntered(true);
        onEnter(audioRef);
    }, [onEnter]);

    return (
        <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            <audio
                ref={audioRef}
                src="/audio/Hot Bo1 (w. Yo$hinoya) 123bpm.mp3"
                loop
                preload="auto"
            />

            {/* Breathing Gradient Background */}
            <div className="absolute inset-0 breathing-gradient" />

            {/* Subtle noise texture overlay */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Entry Overlay */}
            <AnimatePresence>
                {!hasEntered && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.2 }}
                        className="fixed inset-0 z-50 flex flex-col items-center justify-center cursor-pointer group"
                        style={{ background: "rgba(255,248,240,0.85)", backdropFilter: "blur(20px)" }}
                        onClick={handleEnter}
                        role="button"
                        tabIndex={0}
                        aria-label="Click to enter Gemini World and play music"
                        onKeyDown={(e) => e.key === "Enter" && handleEnter()}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1.5 }}
                            className="text-center px-6"
                        >
                            <p className="text-sm font-bold tracking-[0.4em] text-warm-gray uppercase mb-6">
                                Welcome to
                            </p>
                            <h1
                                className="text-7xl md:text-[10rem] font-black tracking-tighter leading-[0.85] mb-8 transition-all duration-500 group-hover:tracking-normal"
                                style={{ color: "#1A1A1A" }}
                            >
                                GEMINI
                                <br />
                                WORLD
                            </h1>
                            <p className="text-lg text-warm-gray font-medium max-w-md mx-auto mb-10 leading-relaxed">
                                Music about vibes, chaos, and everything in between.
                                <br />Hit the button. Trust me. 😌
                            </p>
                            <motion.button
                                whileHover={{ scale: 1.06 }}
                                whileTap={{ scale: 0.94 }}
                                className="px-12 py-5 bg-tangerine text-white font-bold rounded-full text-sm tracking-widest uppercase shadow-xl hover:bg-rust transition-colors duration-300 mb-4"
                            >
                                Enter 🎧
                            </motion.button>
                            <p className="text-xs text-warm-light italic mt-4">
                                audio will play — you&apos;ve been warned 🔊
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Hero Content */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={hasEntered ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 1.5, delay: 0.3 }}
                className="text-center z-10 px-6"
            >
                <h1 className="text-8xl md:text-[12rem] font-black leading-[0.82] text-white mb-8 drop-shadow-2xl">
                    ALEX THE
                    <br />
                    GEMINI
                </h1>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={hasEntered ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.8, duration: 1 }}
                >
                    <p className="text-xl md:text-2xl font-bold text-white/90 mb-3 drop-shadow-lg">
                        Afrobeats-rooted. Genre-fluid. Probably vibing rn.
                    </p>
                    <p className="text-sm text-white/70 font-medium mb-2 drop-shadow-md">
                        Music Producer • Beatmaker • Professional Overthinker
                    </p>
                    <p className="text-xs text-white/50 drop-shadow-md">
                        Lagos, Nigeria 🇳🇬
                    </p>
                </motion.div>

                {/* Now Playing */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={hasEntered ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 1.5 }}
                    className="flex items-center justify-center gap-2 mt-10"
                >
                    <div className="flex items-end gap-[3px] h-5">
                        {[...Array(4)].map((_, i) => (
                            <div
                                key={i}
                                className="w-[3px] bg-white rounded-full animate-bar"
                                style={{ animationDelay: `${i * 0.15}s` }}
                            />
                        ))}
                    </div>
                    <span className="text-xs font-bold tracking-widest text-white/60 uppercase">
                        HOT BO1 (Unreleased)
                    </span>
                </motion.div>
            </motion.div>

            {/* Scroll hint */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={hasEntered ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold">
                    Scroll down abeg
                </span>
                <ChevronDown className="text-white/40 animate-bounce w-5 h-5" />
            </motion.div>
        </div>
    );
}
