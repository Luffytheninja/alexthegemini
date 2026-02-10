"use client";

import { motion } from "framer-motion";
import { releases } from "@/lib/content";

export default function ContentGrid() {
    return (
        <section id="music" className="py-32 md:py-48 px-4 md:px-8 bg-peach/30 w-full overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-20 md:space-y-32">
                {/* Header - Centered Properly */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center text-center space-y-6 md:space-y-8 w-full"
                >
                    <span className="inline-block px-4 py-2 bg-white/50 backdrop-blur-sm border border-charcoal/5 rounded-full text-[10px] md:text-xs font-bold tracking-[0.3em] text-warm-gray uppercase shadow-sm">
                        The Catalogue
                    </span>
                    <h2 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-charcoal leading-[0.9]">
                        Press play. <br />
                        <span className="text-tangerine relative inline-block">
                            Thank me later.
                            <svg className="absolute -bottom-2 left-0 w-full h-3 text-tangerine/30 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                            </svg>
                        </span> 🎵
                    </h2>
                    <p className="text-lg md:text-xl text-warm-gray font-medium max-w-2xl leading-relaxed">
                        Every release has a story. Some are deep. Some are just vibes. All of them slap.
                    </p>
                </motion.div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 w-full">

                    {/* Item 1: Featured EP (Large - Spans 8 cols on desktop) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="md:col-span-8 bg-white rounded-[2.5rem] p-6 md:p-10 shadow-lg border border-charcoal/5 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 bg-tangerine text-white text-xs font-black px-6 py-3 rounded-bl-2xl z-10 uppercase tracking-widest">
                            Latest Drop 🔥
                        </div>
                        <div className="flex flex-col h-full justify-between space-y-6">
                            <div className="space-y-2 relative z-10">
                                <h3 className="text-3xl md:text-5xl font-black text-charcoal tracking-tight group-hover:text-tangerine transition-colors">
                                    {releases[0].title}
                                </h3>
                                <p className="text-warm-gray text-sm md:text-base italic font-medium">
                                    {releases[0].funLine}
                                </p>
                            </div>
                            <div className="w-full rounded-2xl overflow-hidden shadow-md transform group-hover:scale-[1.01] transition-transform duration-500">
                                <iframe
                                    src={`https://open.spotify.com/embed/album/${releases[0].spotifyEmbedId}?utm_source=generator&theme=0`}
                                    width="100%"
                                    height="352"
                                    frameBorder="0"
                                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                    loading="lazy"
                                    className="w-full"
                                    title={releases[0].title}
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Item 2: Stats / Vibe Tile (Spans 4 cols - Decorative) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="md:col-span-4 bg-charcoal text-white rounded-[2.5rem] p-8 md:p-10 shadow-lg flex flex-col justify-center items-center text-center space-y-4 hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-charcoal to-black z-0" />
                        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-tangerine/20 rounded-full blur-3xl" />

                        <span className="text-6xl md:text-7xl mb-2 relative z-10 hover-wiggle cursor-default">💿</span>
                        <h4 className="text-2xl font-black relative z-10">
                            Zero Skips
                        </h4>
                        <p className="text-white/60 text-sm font-medium relative z-10">
                            Quality over quantity.<br />Always.
                        </p>
                    </motion.div>

                    {/* Items 3 & 4 (Span 6 cols each) */}
                    {releases.slice(1, 3).map((release, i) => (
                        <motion.div
                            key={release.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 + (i * 0.1) }}
                            className="md:col-span-6 bg-white rounded-[2.5rem] p-6 md:p-8 shadow-md border border-charcoal/5 hover:shadow-xl transition-all duration-300 flex flex-col gap-6"
                        >
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="text-2xl md:text-3xl font-black text-charcoal">{release.title}</h4>
                                    <p className="text-xs font-bold text-warm-light uppercase tracking-widest mt-1">
                                        {release.type} • {release.year}
                                    </p>
                                </div>
                                <span className="text-2xl grayscale hover:grayscale-0 transition-all cursor-default hover-wiggle">
                                    {i === 0 ? "💘" : "🥩"}
                                </span>
                            </div>
                            <div className="rounded-xl overflow-hidden shadow-sm">
                                <iframe
                                    src={`https://open.spotify.com/embed/${release.type === 'Single' ? 'album' : 'album'}/${release.spotifyEmbedId}?utm_source=generator&theme=0`}
                                    width="100%"
                                    height="152"
                                    frameBorder="0"
                                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                    loading="lazy"
                                    className="w-full"
                                    title={release.title}
                                />
                            </div>
                            <p className="text-xs text-warm-gray italic text-right font-medium">
                                {release.funLine}
                            </p>
                        </motion.div>
                    ))}

                    {/* Items 5 & 6 (Span 6 cols each) */}
                    {releases.slice(3).map((release, i) => (
                        <motion.div
                            key={release.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 + (i * 0.1) }}
                            className="md:col-span-6 bg-white rounded-[2.5rem] p-6 md:p-8 shadow-md border border-charcoal/5 hover:shadow-xl transition-all duration-300 flex flex-col gap-6"
                        >
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="text-2xl md:text-3xl font-black text-charcoal">{release.title}</h4>
                                    <p className="text-xs font-bold text-warm-light uppercase tracking-widest mt-1">
                                        {release.type} • {release.year}
                                    </p>
                                </div>
                                <span className="text-2xl grayscale hover:grayscale-0 transition-all cursor-default hover-wiggle">
                                    {i === 0 ? "🏙️" : "🏹"}
                                </span>
                            </div>
                            <div className="rounded-xl overflow-hidden shadow-sm">
                                <iframe
                                    src={`https://open.spotify.com/embed/${release.title === 'Cupid' ? 'track' : 'album'}/${release.spotifyEmbedId}?utm_source=generator&theme=0`}
                                    width="100%"
                                    height="152"
                                    frameBorder="0"
                                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                    loading="lazy"
                                    className="w-full"
                                    title={release.title}
                                />
                            </div>
                            <p className="text-xs text-warm-gray italic text-right font-medium">
                                {release.funLine}
                            </p>
                        </motion.div>
                    ))}

                </div>

                {/* Big Button CTA */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="flex justify-center pt-12 md:pt-20"
                >
                    <a
                        href="https://open.spotify.com/artist/3Wbkuzl1Ha7fBw77p15Lzw"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center justify-center px-12 py-6 bg-charcoal text-cream font-black text-lg md:text-xl rounded-full tracking-widest overflow-hidden shadow-2xl hover:bg-tangerine transition-all duration-300 transform hover:-translate-y-1"
                    >
                        <span className="relative z-10 flex items-center gap-3">
                            SEE EVERYTHING ON SPOTIFY <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </span>
                    </a>
                </motion.div>

            </div>
        </section>
    );
}
