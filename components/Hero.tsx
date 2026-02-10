"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

interface HeroProps {
    onEnter: (ref: React.RefObject<HTMLAudioElement | null>) => void;
}

export default function Hero({ onEnter }: HeroProps) {
    const audioRef = useRef<HTMLAudioElement>(null);

    const handleListenNow = () => {
        if (audioRef.current) {
            audioRef.current.play();
            onEnter(audioRef);
        }
    };

    return (
        <section className="min-h-screen flex flex-col justify-between pt-24 md:pt-32 lg:pt-48 pb-16 md:pb-24 container-padding">
            <div className="container-max h-full flex flex-col justify-between">
                {/* Navigation */}
                <nav className="flex items-center justify-between mb-16 md:mb-24">
                    <div className="flex-1 h-px bg-charcoal/10" />
                    <button className="px-6 md:px-8 py-2 mx-4 md:mx-8 border border-charcoal hover:bg-charcoal hover:text-white transition-colors duration-300 text-sm md:text-base tracking-wide">
                        BOOK ME
                    </button>
                    <div className="flex-1 h-px bg-charcoal/10" />
                </nav>

                {/* Hero Title */}
                <div className="flex-1 flex items-center justify-center">
                    <motion.div
                        className="text-center space-y-2 md:space-y-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="font-heading font-black tracking-tighter leading-[0.85]">
                            <div className="text-[10vw] md:text-[8vw] lg:text-[6vw]">ALEX</div>
                            <div className="text-[10vw] md:text-[8vw] lg:text-[6vw]">THE</div>
                            <div className="text-[10vw] md:text-[8vw] lg:text-[6vw]">GEMINI</div>
                        </h1>
                    </motion.div>
                </div>

                {/* Footer CTA */}
                <div className="flex flex-col items-center space-y-6 md:space-y-8 mt-16 md:mt-24">
                    <p className="text-xs md:text-sm tracking-widest uppercase text-charcoal/60">
                        Producer / Artist / Songwriter
                    </p>
                    <button
                        onClick={handleListenNow}
                        className="px-8 md:px-12 py-3 md:py-4 bg-charcoal text-white hover:bg-charcoal/90 transition-all duration-300 text-sm md:text-base tracking-wide"
                    >
                        LISTEN NOW
                    </button>
                </div>
            </div>

            {/* Hidden Audio Element */}
            <audio ref={audioRef} src="/audio/Hot Bo1 (w. Yo$hinoya) 123bpm.mp3" />
        </section>
    );
}
