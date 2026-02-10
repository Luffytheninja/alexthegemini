"use client";

import { motion } from "framer-motion";

interface LoadingScreenProps {
    onEnter: () => void;
}

export default function LoadingScreen({ onEnter }: LoadingScreenProps) {
    return (
        <div className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-center space-y-12"
            >
                <div className="space-y-4">
                    <h1 className="font-heading font-black text-4xl md:text-6xl tracking-tighter uppercase text-charcoal">
                        ALEX THE GEMINI
                    </h1>
                    <p className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-charcoal/40">
                        Producer / Artist / Songwriter
                    </p>
                </div>

                <button
                    onClick={onEnter}
                    className="group relative px-12 py-6 overflow-hidden border border-charcoal/10 hover:border-charcoal transition-colors duration-500"
                >
                    <span className="relative z-10 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-charcoal group-hover:text-white transition-colors duration-500">
                        Press Play to Enter
                    </span>
                    <motion.div
                        initial={{ x: "-100%" }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="absolute inset-0 bg-charcoal"
                    />
                </button>
            </motion.div>

            {/* Decorative corners */}
            <div className="absolute top-12 left-12 w-12 h-px bg-charcoal/10" />
            <div className="absolute top-12 left-12 h-12 w-px bg-charcoal/10" />
            <div className="absolute bottom-12 right-12 w-12 h-px bg-charcoal/10" />
            <div className="absolute bottom-12 right-12 h-12 w-px bg-charcoal/10" />
        </div>
    );
}
