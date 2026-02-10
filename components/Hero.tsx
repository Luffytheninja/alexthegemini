"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useCallback } from "react";
import { ChevronDown } from "lucide-react";
import dynamic from "next/dynamic";

// Dynamically import GrassShader (no SSR — needs WebGL)
const GrassShader = dynamic(() => import("./GrassShader"), { ssr: false });

interface HeroProps {
    onEnter: (audioRef: React.RefObject<HTMLAudioElement | null>) => void;
}

export default function Hero({ onEnter }: HeroProps) {
    const [hasEntered, setHasEntered] = useState(false);
    const [webglSupported, setWebglSupported] = useState(true);
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

    // Check WebGL on mount
    const checkWebGL = useCallback((node: HTMLDivElement | null) => {
        if (node) {
            try {
                const c = document.createElement("canvas");
                const supported = !!(
                    window.WebGLRenderingContext &&
                    (c.getContext("webgl") || c.getContext("experimental-webgl"))
                );
                setWebglSupported(supported);
            } catch {
                setWebglSupported(false);
            }
        }
    }, []);

    return (
        <div ref={checkWebGL} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Audio element */}
            <audio
                ref={audioRef}
                src="/audio/Hot Bo1 (w. Yo$hinoya) 123bpm.mp3"
                loop
                preload="auto"
            />

            {/* Grass Shader Background */}
            {webglSupported ? (
                <GrassShader />
            ) : (
                /* Static fallback */
                <div className="absolute inset-0 bg-gradient-to-b from-sky-200 via-green-300 to-green-500" />
            )}

            {/* Entry Overlay */}
            <AnimatePresence>
                {!hasEntered && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.2 }}
                        className="fixed inset-0 z-50 flex flex-col items-center justify-center cursor-pointer group bg-white/80 backdrop-blur-sm"
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
                            className="text-center space-y-6"
                        >
                            <h2 className="text-xs font-bold tracking-[0.5em] text-black/30 uppercase">
                                Experience
                            </h2>
                            <h1 className="text-6xl md:text-9xl font-black text-black tracking-tighter transition-all duration-700 group-hover:tracking-normal group-hover:text-black/70">
                                GEMINI WORLD
                            </h1>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 border-2 border-black/20 rounded-full text-xs font-bold tracking-widest uppercase text-black hover:bg-black hover:text-white transition-all duration-300"
                            >
                                Click to Enter
                            </motion.button>
                            <p className="text-[10px] text-black/30 tracking-widest uppercase">
                                🔊 Audio will play
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Hero Content (After Entry) */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={hasEntered ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 1.5, delay: 0.3 }}
                className="text-center space-y-4 z-10 px-6"
            >
                <h1
                    className="text-7xl md:text-[10rem] font-black leading-[0.85] text-black"
                    style={{ textShadow: "0 2px 30px rgba(255,255,255,0.6)" }}
                >
                    ALEX THE
                    <br />
                    GEMINI
                </h1>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={hasEntered ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="space-y-2"
                >
                    <p
                        className="text-lg md:text-2xl font-semibold text-black"
                        style={{ textShadow: "0 1px 10px rgba(255,255,255,0.5)" }}
                    >
                        Afrobeats-rooted. Genre-fluid.
                    </p>
                    <p
                        className="text-sm md:text-base text-black/70 font-medium"
                        style={{ textShadow: "0 1px 10px rgba(255,255,255,0.5)" }}
                    >
                        Music Producer, Beatmaker, Artist
                    </p>
                    <p
                        className="text-xs text-black/50 font-medium"
                        style={{ textShadow: "0 1px 8px rgba(255,255,255,0.5)" }}
                    >
                        Lagos, Nigeria
                    </p>
                </motion.div>

                {/* Now Playing indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={hasEntered ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 1.5 }}
                    className="flex items-center justify-center gap-2 pt-6"
                >
                    <div className="flex items-end gap-[3px] h-5">
                        {[...Array(4)].map((_, i) => (
                            <div
                                key={i}
                                className="w-[3px] bg-black animate-bar rounded-full"
                                style={{ animationDelay: `${i * 0.15}s` }}
                            />
                        ))}
                    </div>
                    <span className="text-[11px] font-bold tracking-widest text-black/50 uppercase">
                        HOT BO1 (Unreleased)
                    </span>
                </motion.div>
            </motion.div>

            {/* Scroll Hint */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={hasEntered ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] uppercase tracking-[0.3em] text-black/30 font-bold">
                    Scroll to Explore
                </span>
                <ChevronDown className="text-black/30 animate-bounce w-5 h-5" />
            </motion.div>
        </div>
    );
}
