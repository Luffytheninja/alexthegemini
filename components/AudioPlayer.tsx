"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AudioPlayer() {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);

    useEffect(() => {
        // Initialize audio
        audioRef.current = new Audio("/audio/Hot Bo1 (w. Yo$hinoya) 123bpm.mp3");
        audioRef.current.loop = true;
        audioRef.current.volume = 0.5;

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);

    const handleInteraction = () => {
        if (audioRef.current && !isPlaying) {
            audioRef.current.play().then(() => {
                setIsPlaying(true);
                setHasInteracted(true);
            }).catch(err => console.error("Audio playback failed:", err));
        }
    };

    const toggleMute = () => {
        if (audioRef.current) {
            audioRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    return (
        <>
            <AnimatePresence>
                {!hasInteracted && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-[#12100E]/95 backdrop-blur-xl"
                        onClick={handleInteraction}
                    >
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(255, 90, 95, 0.2)" }}
                            whileTap={{ scale: 0.98 }}
                            className="px-10 py-5 bg-[#FF5A5F] text-[#FDFCF0] font-bold text-xl uppercase tracking-[0.2em] rounded-full flex items-center gap-4 transition-shadow shadow-xl shadow-coral/10"
                        >
                            <Play className="w-6 h-6 fill-[#FDFCF0]" />
                            Enter Space
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="fixed bottom-8 right-8 z-40">
                {hasInteracted && (
                    <motion.button
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", damping: 20, stiffness: 100 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={toggleMute}
                        className="p-4 bg-[#FF5A5F]/10 backdrop-blur-lg border border-[#FF5A5F]/20 rounded-full text-[#FF5A5F] hover:bg-[#FF5A5F]/20 transition-all shadow-lg"
                    >
                        {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
                    </motion.button>
                )}
            </div>
        </>
    );
}
