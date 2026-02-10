"use client";

import { motion } from "framer-motion";
import { releases } from "@/lib/content";

export default function ContentGrid() {
    return (
        <section id="music" className="py-28 md:py-36 px-6 md:px-12 bg-peach/40">
            <div className="max-w-5xl mx-auto space-y-16">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center space-y-4"
                >
                    <p className="text-xs font-bold tracking-[0.5em] text-warm-gray uppercase">
                        The Catalogue
                    </p>
                    <h2 className="text-5xl md:text-7xl font-black tracking-tight text-charcoal">
                        Press play. <br className="hidden md:block" />
                        <span className="text-tangerine">Thank me later.</span> 🎵
                    </h2>
                    <p className="text-base text-warm-gray font-medium max-w-md mx-auto">
                        Every release has a story. Some are deep. Some are just vibes. All of them slap.
                    </p>
                </motion.div>

                {/* Featured EP — Full Width Embed */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <div className="text-center space-y-2">
                        <span className="inline-block px-4 py-1.5 bg-tangerine text-white text-xs font-black uppercase tracking-widest rounded-full">
                            🔥 Latest Drop
                        </span>
                        <h3 className="text-2xl md:text-3xl font-black text-charcoal">
                            O.L.B - V3rt1go
                        </h3>
                        <p className="text-sm text-warm-gray italic">
                            {releases[0].funLine}
                        </p>
                    </div>
                    <div className="max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-xl">
                        <iframe
                            src="https://open.spotify.com/embed/album/0ZdMYcvT0IgXKIj4TZEdEk?utm_source=generator&theme=0"
                            width="100%"
                            height="352"
                            frameBorder="0"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="w-full"
                            title="O.L.B - V3rt1go on Spotify"
                        />
                    </div>
                </motion.div>

                {/* Other Releases Grid */}
                <div className="space-y-8">
                    <h3 className="text-center text-xl font-black text-charcoal uppercase tracking-widest">
                        More Heat 🔊
                    </h3>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    >
                        {releases.slice(1).map((release, index) => (
                            <motion.div
                                key={release.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="space-y-4 group"
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h4 className="text-lg font-black text-charcoal">{release.title}</h4>
                                        <p className="text-xs font-bold text-warm-light uppercase tracking-widest">
                                            {release.type} • {release.year}
                                        </p>
                                    </div>
                                    <span className="text-xs text-warm-gray italic hidden md:block max-w-[180px] text-right">
                                        {release.funLine}
                                    </span>
                                </div>
                                <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                                    <iframe
                                        src={`https://open.spotify.com/embed/album/${release.spotifyEmbedId}?utm_source=generator&theme=0`}
                                        width="100%"
                                        height="152"
                                        frameBorder="0"
                                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                        loading="lazy"
                                        className="w-full"
                                        title={`${release.title} on Spotify`}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center pt-8"
                >
                    <a
                        href="https://open.spotify.com/artist/3Wbkuzl1Ha7fBw77p15Lzw"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-10 py-4 bg-charcoal text-cream font-bold rounded-full text-sm uppercase tracking-widest hover:bg-tangerine hover:scale-105 transition-all duration-300 shadow-lg hover-wiggle"
                    >
                        See Everything on Spotify →
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
