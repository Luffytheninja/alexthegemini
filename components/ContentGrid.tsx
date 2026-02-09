"use client";

import { motion } from "framer-motion";
import { releases, videos, visuals } from "@/lib/content";
import { Play, ExternalLink, ArrowUpRight } from "lucide-react";

export default function ContentGrid() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    return (
        <section id="content" className="py-24 px-6 md:px-12 bg-black">
            <div className="max-w-7xl mx-auto space-y-16">

                <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-12">
                    <div className="space-y-2">
                        <h2 className="text-xs font-bold tracking-[0.5em] text-white/30 uppercase">Archive</h2>
                        <h1 className="text-5xl md:text-7xl font-black">MUSIC & VISUALS</h1>
                    </div>
                    <p className="text-sm font-medium text-white/40 max-w-xs md:text-right">
                        Selected work from Gemini World Archive (2020—2025).
                    </p>
                </header>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {/* Releases */}
                    {releases.map((release) => (
                        <motion.div
                            key={release.id}
                            variants={item}
                            className="group relative space-y-4"
                        >
                            <div className="aspect-square bg-white/5 overflow-hidden rounded-sm relative">
                                <img
                                    src={release.coverUrl}
                                    alt={release.title}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                    <a href={release.spotifyUrl} target="_blank" className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform">
                                        <Play size={20} fill="currentColor" />
                                    </a>
                                    <a href={release.appleUrl} target="_blank" className="p-3 border border-white rounded-full hover:bg-white hover:text-black transition-all">
                                        <ArrowUpRight size={20} />
                                    </a>
                                </div>
                            </div>
                            <div className="flex justify-between items-start pt-2">
                                <div className="space-y-1">
                                    <h4 className="text-lg font-bold tracking-tight">{release.title}</h4>
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">{release.type}</p>
                                </div>
                                <button className="opacity-0 group-hover:opacity-100 transition-opacity text-white/40 uppercase text-[9px] font-black tracking-widest pt-1.5 flex items-center gap-1">
                                    Stream <ExternalLink size={10} />
                                </button>
                            </div>
                        </motion.div>
                    ))}

                    {/* Videos Placeholder (One featured) */}
                    {videos.map((video) => (
                        <motion.div
                            key={video.id}
                            variants={item}
                            className="group relative space-y-4 lg:col-span-2"
                        >
                            <div
                                className="aspect-video bg-white/5 overflow-hidden rounded-sm relative cursor-pointer"
                                onClick={() => window.open(`https://youtube.com/watch?v=${video.youtubeId}`, '_blank')}
                            >
                                <img
                                    src={video.thumbnailUrl}
                                    alt={video.title}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors flex items-center justify-center">
                                    <div className="w-16 h-16 border border-white/30 rounded-full flex items-center justify-center text-white backdrop-blur-sm group-hover:scale-110 transition-transform">
                                        <Play size={24} fill="currentColor" />
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-1">
                                <h4 className="text-lg font-bold tracking-tight">{video.title}</h4>
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">Official Music Video</p>
                            </div>
                        </motion.div>
                    ))}

                    {/* Visuals */}
                    {visuals.map((visual) => (
                        <motion.div
                            key={visual.id}
                            variants={item}
                            className="group relative space-y-4"
                        >
                            <div className="aspect-[4/5] bg-white/5 overflow-hidden rounded-sm relative">
                                <img
                                    src={visual.imageUrl}
                                    alt={visual.title}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                />
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-lg font-bold tracking-tight">{visual.title}</h4>
                                <p className="text-sm text-white/40 leading-relaxed italic">&ldquo;{visual.description}&rdquo;</p>
                            </div>
                        </motion.div>
                    ))}

                </motion.div>
            </div>
        </section>
    );
}
