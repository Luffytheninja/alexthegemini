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

        // Also show on scroll
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
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
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
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 50, opacity: 0 }}
                    className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100] flex items-center gap-3 bg-white border border-black/10 shadow-lg px-5 py-2.5 rounded-full"
                    title="Unreleased. Enjoy the preview sha 🎛️"
                >
                    {/* Track info */}
                    <div className="hidden sm:flex flex-col items-start pr-3 border-r border-black/10">
                        <span className="text-[9px] font-bold text-black/30 uppercase tracking-widest">
                            Now Playing
                        </span>
                        <span className="text-xs font-bold text-black truncate max-w-[130px]">
                            HOT BO1 (Unreleased)
                        </span>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center gap-1.5">
                        <button
                            onClick={toggleMute}
                            className="p-2 hover:bg-black/5 rounded-full transition-colors"
                            aria-label={isMuted ? "Unmute audio" : "Mute (but why tho?)"}
                        >
                            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                        </button>
                        <button
                            onClick={togglePlay}
                            className="w-9 h-9 bg-black text-white flex items-center justify-center rounded-full hover:bg-gray-800 hover:scale-105 transition-all"
                            aria-label={isPlaying ? "Pause audio" : "Play audio"}
                        >
                            {isPlaying ? (
                                <Pause size={16} fill="currentColor" />
                            ) : (
                                <Play size={16} fill="currentColor" className="ml-0.5" />
                            )}
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
