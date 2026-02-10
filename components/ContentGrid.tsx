"use client";

import { motion, AnimatePresence } from "framer-motion";
import { releases } from "@/lib/content";
import { useState } from "react";
import { Plus, Minus, ArrowUpRight } from "lucide-react";

export default function ContentGrid() {
    const [openId, setOpenId] = useState<number | null>(null);
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    const toggle = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section id="music" className="py-[15vh] md:py-[25vh] bg-white w-full relative z-10">
            <div className="w-full px-8 md:px-[12vw] mx-auto relative">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-40 md:mb-48 border-b border-charcoal/10 pb-16">
                    <div className="space-y-6">
                        <span className="text-sm font-bold tracking-[0.2em] uppercase text-charcoal/50">
                            Selected Works (2023 — 2025)
                        </span>
                        <h2 className="text-[clamp(4rem,15vw,12rem)] font-black text-charcoal tracking-tighter leading-[0.8]">
                            INDEX
                        </h2>
                    </div>
                    <div className="mt-12 md:mt-0 text-right">
                        <p className="text-lg md:text-xl font-medium max-w-md ml-auto text-charcoal/90 leading-relaxed md:indent-12">
                            A collection of sonic experiments from Lagos. <br />
                            Afro-fusion, Rage, and Vibes.
                        </p>
                    </div>
                </div>

                {/* List Layout with Industry Standard Spacing */}
                <div className="flex flex-col border-t border-charcoal/10">
                    {releases.map((release) => (
                        <div
                            key={release.id}
                            className="group relative border-b border-charcoal/10 transition-colors hover:bg-smoke duration-500"
                            onMouseEnter={() => setHoveredId(release.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            {/* Row Header */}
                            <button
                                onClick={() => toggle(release.id)}
                                className="w-full py-16 md:py-28 flex flex-col md:flex-row items-start md:items-baseline justify-between text-left outline-none"
                            >
                                <div className="flex items-baseline gap-12 md:gap-24 w-full md:w-auto">
                                    <span className="text-sm font-mono text-charcoal/30 w-12 hidden md:block">
                                        (0{release.id})
                                    </span>
                                    <h3 className="text-[clamp(2rem,6vw,6rem)] font-black text-charcoal tracking-tight uppercase group-hover:indent-8 transition-all duration-500">
                                        {release.title}
                                    </h3>
                                </div>

                                <div className="flex items-center gap-12 mt-8 md:mt-0 w-full md:w-auto justify-between md:justify-end">
                                    <span className="text-sm font-bold uppercase tracking-widest text-charcoal/60 hidden md:block">
                                        {release.type}
                                    </span>
                                    <span className="text-sm font-mono text-charcoal/40 hidden md:block">
                                        {release.year}
                                    </span>
                                    <div className="w-16 h-16 flex items-center justify-center rounded-full border border-charcoal/10 group-hover:bg-charcoal group-hover:border-charcoal transition-all duration-300 ml-auto md:ml-0">
                                        {openId === release.id ? (
                                            <Minus className="w-6 h-6 text-charcoal group-hover:text-white" />
                                        ) : (
                                            <Plus className="w-6 h-6 text-charcoal group-hover:text-white" />
                                        )}
                                    </div>
                                </div>
                            </button>

                            {/* Hover Image Reveal (Desktop) */}
                            <AnimatePresence>
                                {hoveredId === release.id && openId !== release.id && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95, x: 50 }}
                                        animate={{ opacity: 1, scale: 1, x: 0 }}
                                        exit={{ opacity: 0, scale: 0.95, x: 50 }}
                                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                        className="hidden lg:block absolute right-[25%] top-1/2 -translate-y-1/2 w-[400px] h-[400px] pointer-events-none z-20 grayscale group-hover:grayscale-0 transition-all duration-700"
                                    >
                                        <div className="w-full h-full bg-charcoal/5 overflow-hidden shadow-2xl rotate-2">
                                            {/* Placeholder for real art */}
                                            <div className={`w-full h-full ${release.id % 2 === 0 ? 'bg-charcoal' : 'bg-[#333]'
                                                } flex items-center justify-center text-white font-black text-4xl uppercase p-8 text-center tracking-tighter`}>
                                                {release.title}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Expanded Content */}
                            <AnimatePresence>
                                {openId === release.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                        className="overflow-hidden bg-smoke"
                                    >
                                        <div className="py-16 md:py-24 px-4 md:px-0 mx-auto flex flex-col md:flex-row gap-12 md:gap-40">
                                            {/* Spacer to align with text */}
                                            <div className="hidden md:block w-[10%]" />

                                            <div className="w-full md:w-[500px]">
                                                <iframe
                                                    src={`https://open.spotify.com/embed/${release.type === 'Single' || release.title === 'Cupid' ? 'album' : 'album'}/${release.spotifyEmbedId}?utm_source=generator&theme=0`}
                                                    width="100%"
                                                    height="352"
                                                    frameBorder="0"
                                                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                                    loading="lazy"
                                                    className="w-full shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
                                                    title={release.title}
                                                />
                                            </div>
                                            <div className="flex-1 space-y-12">
                                                <p className="text-3xl md:text-5xl font-medium text-charcoal leading-[1.1] max-w-2xl">
                                                    &quot;{release.funLine}&quot;
                                                </p>
                                                <a
                                                    href={`https://open.spotify.com/album/${release.spotifyEmbedId}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-4 text-sm font-bold uppercase tracking-[0.2em] text-charcoal hover:opacity-50 transition-opacity group/link"
                                                >
                                                    Listen on Spotify
                                                    <ArrowUpRight className="w-5 h-5 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                                                </a>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                {/* Big Footer Link */}
                <div className="mt-48 md:mt-64 text-center">
                    <a
                        href="https://open.spotify.com/artist/3Wbkuzl1Ha7fBw77p15Lzw"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex flex-col items-center gap-4"
                    >
                        <span className="text-xs font-bold uppercase tracking-[0.3em] text-charcoal/40">Archive</span>
                        <span className="text-2xl md:text-4xl font-black uppercase text-charcoal group-hover:opacity-50 transition-opacity">
                            View Full Index on Spotify →
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
}
