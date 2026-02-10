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

        const handleScroll = () => {
            if (window.scrollY > 200) setIsVisible(true);
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
        isPlaying ? audioRef.current.pause() : audioRef.current.play();
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
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 50, opacity: 0 }}
                    className="fixed bottom-6 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-8 z-[100] flex items-center gap-3 bg-charcoal text-white px-5 py-3 rounded-full shadow-xl"
                    title="Unreleased. Enjoy the preview sha 🎛️"
                >
                    <div className="hidden sm:flex flex-col items-start pr-3 border-r border-white/20">
                        <span className="text-[9px] font-bold text-white/40 uppercase tracking-widest">
                            Playing
                        </span>
                        <span className="text-xs font-bold text-white truncate max-w-[120px]">
                            HOT BO1 ✨
                        </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                        <button
                            onClick={toggleMute}
                            className="p-2 hover:bg-white/10 rounded-full transition-colors"
                            aria-label={isMuted ? "Unmute" : "Mute (but why tho?)"}
                        >
                            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                        </button>
                        <button
                            onClick={togglePlay}
                            className="w-9 h-9 bg-tangerine text-white flex items-center justify-center rounded-full hover:bg-rust hover:scale-110 transition-all"
                            aria-label={isPlaying ? "Pause" : "Play"}
                        >
                            {isPlaying ? (
                                <Pause size={14} fill="currentColor" />
                            ) : (
                                <Play size={14} fill="currentColor" className="ml-0.5" />
                            )}
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
