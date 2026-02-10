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
        <section id="music" className="py-24 md:py-32 bg-cream w-full relative z-10">
            <div className="w-full max-w-[95%] md:max-w-[90%] mx-auto relative">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 border-b border-charcoal pb-6">
                    <div className="space-y-2">
                        <span className="text-xs font-bold tracking-[0.2em] uppercase text-charcoal/60">
                            Selected Works (2023 — 2025)
                        </span>
                        <h2 className="text-5xl md:text-8xl font-black text-charcoal tracking-tighter leading-none">
                            DISCOGRAPHY
                        </h2>
                    </div>
                    <div className="mt-6 md:mt-0 text-right">
                        <p className="text-sm md:text-base font-medium max-w-xs ml-auto text-charcoal/80 leading-relaxed">
                            Sonic experiments from Lagos. <br />
                            Afro-fusion, Rage, and Vibes.
                        </p>
                    </div>
                </div>

                {/* List Layout */}
                <div className="flex flex-col border-t border-charcoal/20">
                    {releases.map((release) => (
                        <div
                            key={release.id}
                            className="group relative border-b border-charcoal/20 transition-colors hover:bg-white"
                            onMouseEnter={() => setHoveredId(release.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            {/* Row Header */}
                            <button
                                onClick={() => toggle(release.id)}
                                className="w-full py-8 md:py-12 flex flex-col md:flex-row items-start md:items-center justify-between text-left outline-none"
                            >
                                <div className="flex items-center gap-6 md:gap-12 w-full md:w-auto">
                                    <span className="text-xs font-mono text-charcoal/40 w-8">
                                        0{release.id}
                                    </span>
                                    <h3 className="text-4xl md:text-7xl font-black text-charcoal tracking-tight uppercase group-hover:text-tangerine transition-colors duration-300">
                                        {release.title}
                                    </h3>
                                </div>

                                <div className="flex items-center gap-8 md:gap-16 mt-4 md:mt-0 w-full md:w-auto justify-between md:justify-end px-0 md:px-0">
                                    <div className="flex flex-col text-right">
                                        <span className="text-xs font-bold uppercase tracking-widest text-charcoal/60">
                                            {release.type}
                                        </span>
                                        <span className="text-xs font-mono text-charcoal/40">
                                            {release.year}
                                        </span>
                                    </div>
                                    <div className="w-12 h-12 flex items-center justify-center rounded-full border border-charcoal/10 group-hover:bg-charcoal group-hover:border-charcoal transition-all">
                                        {openId === release.id ? (
                                            <Minus className="w-5 h-5 text-charcoal group-hover:text-white" />
                                        ) : (
                                            <Plus className="w-5 h-5 text-charcoal group-hover:text-white" />
                                        )}
                                    </div>
                                </div>
                            </button>

                            {/* Hover Image Reveal (Desktop) */}
                            <AnimatePresence>
                                {hoveredId === release.id && openId !== release.id && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9, x: 20 }}
                                        animate={{ opacity: 1, scale: 1, x: 0 }}
                                        exit={{ opacity: 0, scale: 0.9, x: 20 }}
                                        transition={{ duration: 0.2 }}
                                        className="hidden lg:block absolute right-[20%] top-1/2 -translate-y-1/2 w-64 h-64 pointer-events-none z-20 grayscale group-hover:grayscale-0 transition-all duration-500"
                                    >
                                        <div className="w-full h-full bg-charcoal/5 rounded-lg overflow-hidden shadow-2xl rotate-3">
                                            {/* 
                          Since we don't have real images yet, using a colored placeholder 
                          that matches the release vibe.
                        */}
                                            <div className={`w-full h-full ${release.id === 1 ? 'bg-tangerine' :
                                                    release.id === 2 ? 'bg-rust' :
                                                        release.id === 3 ? 'bg-[#5D4037]' : // beef jerky color
                                                            'bg-charcoal'
                                                } flex items-center justify-center text-white font-black text-2xl uppercase p-4 text-center`}>
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
                                        transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                                        className="overflow-hidden bg-white/50"
                                    >
                                        <div className="pb-12 pt-4 px-0 md:pl-[6rem] flex flex-col md:flex-row gap-8 md:gap-16">
                                            <div className="w-full md:w-[450px]">
                                                <iframe
                                                    src={`https://open.spotify.com/embed/${release.type === 'Single' || release.title === 'Cupid' ? 'album' : 'album'}/${release.spotifyEmbedId}?utm_source=generator&theme=0`}
                                                    width="100%"
                                                    height="352"
                                                    frameBorder="0"
                                                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                                    loading="lazy"
                                                    className="w-full rounded-xl shadow-lg"
                                                    title={release.title}
                                                />
                                            </div>
                                            <div className="flex-1 space-y-6 pt-4 pr-0 md:pr-12">
                                                <p className="text-2xl md:text-3xl font-medium text-charcoal leading-tight">
                                                    &quot;{release.funLine}&quot;
                                                </p>
                                                <a
                                                    href={`https://open.spotify.com/album/${release.spotifyEmbedId}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-tangerine hover:text-rust transition-colors group/link"
                                                >
                                                    Listen on Spotify
                                                    <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
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
                <div className="mt-16 md:mt-32 text-center">
                    <a
                        href="https://open.spotify.com/artist/3Wbkuzl1Ha7fBw77p15Lzw"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-xl md:text-2xl font-black uppercase text-charcoal hover:text-tangerine transition-colors border-b-2 border-transparent hover:border-tangerine pb-1"
                    >
                        View Full Index on Spotify →
                    </a>
                </div>
            </div>
        </section>
    );
}
