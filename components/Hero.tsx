"use client";

import { useRef, useCallback } from "react";

interface HeroProps {
    onEnter: (audioRef: React.RefObject<HTMLAudioElement | null>) => void;
}

export default function Hero({ onEnter }: HeroProps) {
    const audioRef = useRef<HTMLAudioElement>(null);

    const handleEnter = useCallback(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.5;
            audioRef.current.play().catch((e) =>
                console.error("Audio playback blocked:", e)
            );
        }
        onEnter(audioRef);
    }, [onEnter]);

    return (
        <section
            className="relative min-h-screen w-full flex flex-col items-center justify-between px-6 md:px-12 pt-32 md:pt-48 pb-24 bg-white text-charcoal overflow-hidden"
        >
            <audio
                ref={audioRef}
                src="/audio/Hot Bo1 (w. Yo$hinoya) 123bpm.mp3"
                loop
                preload="auto"
            />

            <div className="w-full max-w-7xl mx-auto z-20 flex flex-col h-full justify-between pointer-events-none">
                {/* Top Navigation Row */}
                <div className="w-full flex justify-between items-center pointer-events-auto">
                    <div className="w-24 h-px bg-charcoal/10 hidden md:block" />
                    <button
                        onClick={handleEnter}
                        className="text-xs font-bold tracking-[0.3em] uppercase hover:opacity-50 transition-opacity"
                    >
                        &lt; Book Me &gt;
                    </button>
                    <div className="w-24 h-px bg-charcoal/10 hidden md:block" />
                </div>

                {/* Main Typographic Stack */}
                <div className="relative flex flex-col items-center justify-center text-center pointer-events-auto">
                    <h1 className="text-[clamp(4rem,22vw,24rem)] leading-[0.75] font-black tracking-tighter uppercase select-none">
                        ALEX
                    </h1>
                    <h1 className="text-[clamp(4rem,22vw,24rem)] leading-[0.75] font-black tracking-tighter uppercase select-none">
                        THE
                    </h1>
                    <h1 className="text-[clamp(4rem,22vw,24rem)] leading-[0.75] font-black tracking-tighter uppercase select-none">
                        GEMINI
                    </h1>

                    <div className="mt-8 md:mt-12 space-y-6">
                        <p className="text-[10px] md:text-sm font-bold tracking-[0.4em] uppercase text-charcoal/50">
                            Producer / Artist / Songwriter
                        </p>

                        <button
                            onClick={handleEnter}
                            className="px-12 py-4 rounded-full border border-charcoal/10 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] hover:bg-charcoal hover:text-white transition-all duration-500"
                        >
                            Listen Now
                        </button>
                    </div>
                </div>

                {/* Bottom Accent */}
                <div className="w-full flex justify-center items-center pb-4 pointer-events-auto">
                    <div className="flex flex-col items-center gap-4">
                        <div className="h-12 w-px bg-charcoal/20" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-charcoal/30">Scroll Down</span>
                    </div>
                </div>
            </div>

            {/* Subtle Gradient Entry (Optional, keeping for depth) */}
            <div className="absolute inset-0 breathing-gradient opacity-10 pointer-events-none" />
        </section>
    );
}
