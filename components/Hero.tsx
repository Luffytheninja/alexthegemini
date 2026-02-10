"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useCallback } from "react";
import { ChevronDown } from "lucide-react";
import dynamic from "next/dynamic";

const GrassShader = dynamic(() => import("./GrassShader"), { ssr: false });

interface HeroProps {
    onEnter: (audioRef: React.RefObject<HTMLAudioElement | null>) => void;
}

export default function Hero({ onEnter }: HeroProps) {
    const [hasEntered, setHasEntered] = useState(false);
    const [webglOk, setWebglOk] = useState(true);
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

    const checkWebGL = useCallback((node: HTMLDivElement | null) => {
        if (node) {
            try {
                const c = document.createElement("canvas");
                const ok = !!(
                    window.WebGLRenderingContext &&
                    (c.getContext("webgl") || c.getContext("experimental-webgl"))
                );
                setWebglOk(ok);
            } catch {
                setWebglOk(false);
            }
        }
    }, []);

    return (
        <div ref={checkWebGL} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            <audio
                ref={audioRef}
                src="/audio/Hot Bo1 (w. Yo$hinoya) 123bpm.mp3"
                loop
                preload="auto"
            />

            {/* Background */}
            {webglOk ? (
                <GrassShader />
            ) : (
                <div className="absolute inset-0 bg-gradient-to-b from-sky-200 via-green-300 to-green-500" />
            )}

            {/* Entry Overlay */}
            <AnimatePresence>
                {!hasEntered && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.2 }}
                        className="fixed inset-0 z-50 flex flex-col items-center justify-center cursor-pointer group bg-cream/90 backdrop-blur-sm"
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
                            className="text-center space-y-8 px-6"
                        >
                            <p className="text-sm font-bold tracking-[0.4em] text-warm-gray uppercase">
                                Welcome to
                            </p>
                            <h1 className="text-6xl md:text-9xl font-black text-charcoal tracking-tighter transition-all duration-500 group-hover:tracking-normal group-hover:text-tangerine">
                                GEMINI WORLD
                            </h1>
                            <p className="text-base text-warm-gray font-medium max-w-md mx-auto">
                                Music about vibes, chaos, and everything in between. <br />Hit the button. Trust me. 😌
                            </p>
                            <motion.button
                                whileHover={{ scale: 1.06 }}
                                whileTap={{ scale: 0.94 }}
                                className="px-10 py-4 bg-tangerine text-white font-bold rounded-full text-sm tracking-widest uppercase shadow-lg hover:bg-rust transition-colors duration-300"
                            >
                                Enter 🎧
                            </motion.button>
                            <p className="text-xs text-warm-light italic">audio will play — you&apos;ve been warned 🔊</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Hero (After Enter) */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={hasEntered ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 1.5, delay: 0.3 }}
                className="text-center space-y-6 z-10 px-6"
            >
                <h1
                    className="text-7xl md:text-[11rem] font-black leading-[0.85] text-charcoal"
                    style={{ textShadow: "0 4px 40px rgba(255,255,255,0.7)" }}
                >
                    ALEX THE
                    <br />
                    GEMINI
                </h1>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={hasEntered ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="space-y-3"
                >
                    <p className="text-xl md:text-2xl font-bold text-charcoal" style={{ textShadow: "0 2px 15px rgba(255,255,255,0.5)" }}>
                        Afrobeats-rooted. Genre-fluid. Probably vibing rn.
                    </p>
                    <p className="text-sm text-warm-gray font-medium" style={{ textShadow: "0 1px 10px rgba(255,255,255,0.5)" }}>
                        Music Producer • Beatmaker • Professional Overthinker
                    </p>
                    <p className="text-xs text-warm-light" style={{ textShadow: "0 1px 8px rgba(255,255,255,0.5)" }}>
                        Lagos, Nigeria 🇳🇬
                    </p>
                </motion.div>

                {/* Now Playing */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={hasEntered ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 1.5 }}
                    className="flex items-center justify-center gap-2 pt-4"
                >
                    <div className="flex items-end gap-[3px] h-5">
                        {[...Array(4)].map((_, i) => (
                            <div
                                key={i}
                                className="w-[3px] bg-tangerine rounded-full animate-bar"
                                style={{ animationDelay: `${i * 0.15}s` }}
                            />
                        ))}
                    </div>
                    <span className="text-xs font-bold tracking-widest text-warm-gray uppercase">
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
                <span className="text-[10px] uppercase tracking-[0.3em] text-warm-light font-bold">
                    Scroll down abeg
                </span>
                <ChevronDown className="text-warm-gray animate-bounce w-5 h-5" />
            </motion.div>
        </div>
    );
}
