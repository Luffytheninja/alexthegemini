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

        const handlePlay = () => setIsPlaying(true);
        const handlePause = () => setIsPlaying(false);

        audio.addEventListener('play', handlePlay);
        audio.addEventListener('pause', handlePause);

        // Show controls after some interaction or scroll
        const handleScroll = () => {
            if (window.scrollY > 100) setIsVisible(true);
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            audio.removeEventListener('play', handlePlay);
            audio.removeEventListener('pause', handlePause);
            window.removeEventListener('scroll', handleScroll);
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
                    className="fixed bottom-8 right-8 z-[100] flex items-center gap-4 glass-effect p-2 rounded-full pl-6"
                >
                    <div className="flex flex-col items-start pr-4 border-r border-white/10">
                        <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Now Playing</span>
                        <span className="text-xs font-bold text-white truncate max-w-[120px]">HOT BO1 (w. Yo$hinoya)</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <button
                            onClick={toggleMute}
                            className="p-2 hover:bg-white/10 rounded-full transition-colors"
                            aria-label={isMuted ? "Unmute" : "Mute"}
                        >
                            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                        </button>
                        <button
                            onClick={togglePlay}
                            className="w-10 h-10 bg-white text-black flex items-center justify-center rounded-full hover:scale-105 transition-transform"
                            aria-label={isPlaying ? "Pause" : "Play"}
                        >
                            {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" className="ml-1" />}
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
