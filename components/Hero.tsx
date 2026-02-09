"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface HeroProps {
    onEnter: (audioRef: React.RefObject<HTMLAudioElement | null>) => void;
}

export default function Hero({ onEnter }: HeroProps) {
    const [hasEntered, setHasEntered] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    const handleEnter = () => {
        if (audioRef.current) {
            audioRef.current.play().catch(e => console.error("Audio playback blocked:", e));
        }
        setHasEntered(true);
        onEnter(audioRef);
    };

    return (
        <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
            <audio
                ref={audioRef}
                src="/audio/Hot Bo1 (w. Yo$hinoya) 123bpm.mp3"
                loop
                preload="auto"
            />

            {/* Entry Overlay */}
            <AnimatePresence>
                {!hasEntered && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black cursor-pointer group"
                        onClick={handleEnter}
                        aria-label="Click to Enter Gemini World"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="text-center space-y-8"
                        >
                            <h2 className="text-sm font-bold tracking-[0.5em] text-white/30 uppercase">Experience</h2>
                            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter transition-all duration-700 group-hover:tracking-normal group-hover:text-white/80">
                                GEMINI WORLD
                            </h1>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 border border-white/20 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300"
                            >
                                Click to Enter
                            </motion.button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Hero Content (Seen after enter) */}
            <motion.div
                initial={{ opacity: 0, scale: 1.1 }}
                animate={hasEntered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="text-center space-y-6 z-10"
            >
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={hasEntered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    <span className="text-xs font-bold tracking-[0.4em] text-white/40 uppercase">Alternative Afrobeat • Lagos</span>
                    <h1 className="text-7xl md:text-[12rem] font-black leading-none mt-4">
                        ALEX THE<br />GEMINI
                    </h1>
                </motion.div>

                {/* Now Playing Indicator Overlay (Small) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={hasEntered ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 1.5 }}
                    className="flex items-center justify-center gap-1.5 pt-8"
                >
                    <div className="flex items-end gap-[2px] h-4">
                        {[...Array(4)].map((_, i) => (
                            <div
                                key={i}
                                className="w-1 bg-white animate-bar"
                                style={{ animationDelay: `${i * 0.15}s` }}
                            />
                        ))}
                    </div>
                    <span className="text-[10px] font-bold tracking-widest text-white/60 uppercase">HOT BO1 Playing</span>
                </motion.div>
            </motion.div>

            {/* Background Ambience (Animated Image/Video placeholder) */}
            <div className="absolute inset-0 opacity-40">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-[1]" />
                <img
                    src="https://images.unsplash.com/photo-1621112904887-419379ce6824?q=80&w=2000"
                    alt="Hero Background"
                    className="w-full h-full object-cover"
                />
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={hasEntered ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold">Scroll to Explore</span>
                <ChevronDown className="text-white/20 animate-bounce w-5 h-5" />
            </motion.div>
        </div>
    );
}
