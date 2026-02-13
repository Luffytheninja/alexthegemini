"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { useState, useEffect } from "react";

interface AudioControlsProps {
    audioRef: React.RefObject<HTMLAudioElement | null>;
}

export default function AudioControls({ audioRef }: AudioControlsProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const handlePlay = () => { setIsPlaying(true); setIsVisible(true); };
        const handlePause = () => setIsPlaying(false);

        audio.addEventListener("play", handlePlay);
        audio.addEventListener("pause", handlePause);

        // Sync initial state without triggering set-state-in-effect lint rule
        requestAnimationFrame(() => {
            if (!audio.paused) {
                setIsVisible(true);
                setIsPlaying(true);
            }
        });

        const handleScroll = () => {
            if (window.scrollY > 100) setIsVisible(true);
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            audio.removeEventListener("play", handlePlay);
            audio.removeEventListener("pause", handlePause);
            window.removeEventListener("scroll", handleScroll);
        };
    }, [audioRef]);

    const togglePlay = () => {
        if (!audioRef.current) return;
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(e => console.error("Play failed:", e));
        }
    };

    const toggleMute = () => {
        if (!audioRef.current) return;
        audioRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="fixed bottom-6 right-6 z-50 flex items-center gap-4 bg-charcoal text-white rounded-full 
                             shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] border-2 border-charcoal overflow-hidden pl-6 pr-2 py-2
                             pb-[max(0.5rem,calc(env(safe-area-inset-bottom)+0.5rem))]"
                >
                    {/* Marquee Track Info */}
                    <div className="flex flex-col w-[140px] overflow-hidden">
                        <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-0.5">
                            Now Playing
                        </span>
                        <div className="relative w-full h-5 overflow-hidden">
                            <motion.div
                                className="whitespace-nowrap absolute"
                                animate={{ x: ["0%", "-50%"] }}
                                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                            >
                                <span className="text-sm font-bold text-white mr-8">
                                    HOT BO1 (w. Yo$hinoya) 123bpm
                                </span>
                                <span className="text-sm font-bold text-white mr-8">
                                    HOT BO1 (w. Yo$hinoya) 123bpm
                                </span>
                            </motion.div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="w-px h-8 bg-white/10" />

                    {/* Controls */}
                    <div className="flex items-center gap-2">
                        <button
                            onClick={toggleMute}
                            className="p-3 hover:bg-white/10 rounded-full transition-colors text-white/60 hover:text-white"
                            aria-label={isMuted ? "Unmute" : "Mute"}
                        >
                            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                        </button>

                        <button
                            onClick={togglePlay}
                            className="w-12 h-12 bg-cream text-charcoal flex items-center justify-center rounded-full hover:bg-white transition-all hover:scale-105 active:scale-95 shadow-sm"
                            aria-label={isPlaying ? "Pause" : "Play"}
                        >
                            {isPlaying ? (
                                <Pause size={20} fill="currentColor" />
                            ) : (
                                <Play size={20} fill="currentColor" className="ml-1" />
                            )}
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
