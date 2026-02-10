"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useCallback } from "react";

interface HeroProps {
    onEnter: (audioRef: React.RefObject<HTMLAudioElement | null>) => void;
}

export default function Hero({ onEnter }: HeroProps) {
    const [hasEntered, setHasEntered] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    const handleEnter = useCallback(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.5;
            audioRef.current.play().catch((e) =>
                console.error("Audio playback blocked:", e)
            );
        }
        setHasEntered(true);
        onEnter(audioRef);
    }, [onEnter]);

    return (
        <div
            className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-white cursor-pointer"
            onClick={!hasEntered ? handleEnter : undefined}
        >
            <audio
                ref={audioRef}
                src="/audio/Hot Bo1 (w. Yo$hinoya) 123bpm.mp3"
                loop
                preload="auto"
            />

            {/* Breathing Gradient Background (Subtle B&W) */}
            <div className="absolute inset-0 breathing-gradient opacity-20 pointer-events-none" />

            {/* Entry Overlay */}
            <AnimatePresence>
                {!hasEntered && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.2 }}
                        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/90 backdrop-blur-xl pointer-events-none"
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1.5 }}
                            className="text-center px-6"
                        >
                            <h1 className="text-[clamp(12vw,16vw,20rem)] leading-[0.85] font-black tracking-tighter text-charcoal mb-4 select-none">
                                GEMINI
                            </h1>
                            <p className="text-xs font-mono text-charcoal/60 uppercase tracking-widest animate-pulse">
                                [ Click to Enter ]
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Hero Content */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={hasEntered ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1.5, delay: 0.2 }}
                className="relative z-10 w-full h-full flex flex-col items-center justify-center -mt-12 md:mt-0 px-6 md:px-[5vw]"
            >
                <h1 className="text-[clamp(4rem,17vw,16rem)] leading-[0.75] font-black tracking-tighter text-charcoal select-none mix-blend-multiply">
                    ALEX
                </h1>

                <div className="flex items-center justify-center w-full relative group">
                    <span className="hidden md:block absolute left-0 text-[10px] md:text-xs font-mono text-charcoal/60 uppercase tracking-widest -rotate-90 origin-center whitespace-nowrap group-hover:text-charcoal transition-colors">
                        Est. 2023 &mdash; Lagos
                    </span>

                    <h1 className="text-[clamp(4rem,17vw,16rem)] leading-[0.75] font-black tracking-tighter text-charcoal/5 select-none mix-blend-multiply group-hover:text-charcoal transition-colors duration-1000 ease-out">
                        THE
                    </h1>

                    <span className="hidden md:block absolute right-0 text-[10px] md:text-xs font-mono text-charcoal/60 uppercase tracking-widest rotate-90 origin-center whitespace-nowrap group-hover:text-charcoal transition-colors">
                        Producer / Artist
                    </span>
                </div>

                <h1 className="text-[clamp(4rem,17vw,16rem)] leading-[0.75] font-black tracking-tighter text-charcoal select-none mix-blend-multiply">
                    GEMINI
                </h1>
            </motion.div>

            {/* Footer Ticker */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={hasEntered ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 1 }}
                className="absolute bottom-12 w-full flex justify-between px-6 md:px-[5vw] uppercase text-[10px] md:text-sm font-bold tracking-[0.2em] text-charcoal/40 pointer-events-none"
            >
                <span>Scroll Down</span>
                <span>V2.3 Studio Edition</span>
            </motion.div>
        </div>
    );
}
