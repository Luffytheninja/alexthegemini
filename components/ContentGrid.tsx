"use client";

import { motion } from "framer-motion";
import { releases, visuals } from "@/lib/content";
import { ExternalLink } from "lucide-react";

export default function ContentGrid() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section id="content" className="py-24 md:py-32 px-6 md:px-12 bg-[#F8F8F8]">
            <div className="max-w-6xl mx-auto space-y-16">
                {/* Header */}
                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-2"
                >
                    <h2 className="text-xs font-bold tracking-[0.5em] text-black/30 uppercase">
                        Archive
                    </h2>
                    <h3 className="text-4xl md:text-6xl font-black tracking-tight text-black">
                        Music & Visuals
                    </h3>
                    <p className="text-sm text-black/40 font-medium pt-2">
                        Selected work (2022—2025)
                    </p>
                </motion.header>

                {/* Grid */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-80px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {/* Releases */}
                    {releases.map((release) => (
                        <motion.a
                            key={release.id}
                            variants={item}
                            href={release.spotifyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block space-y-4"
                        >
                            <div className="aspect-square bg-[#F0F0F0] overflow-hidden border border-black/5 relative">
                                <img
                                    src={release.coverUrl}
                                    alt={release.title}
                                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                                    loading="lazy"
                                />
                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <span className="text-xs font-bold bg-white text-black px-4 py-2 rounded-full shadow-md">
                                        Stream this rn 🎛️
                                    </span>
                                </div>
                            </div>
                            <div className="flex justify-between items-start">
                                <div className="space-y-0.5">
                                    <h4 className="text-base font-bold text-black tracking-tight group-hover:text-gray-600 transition-colors">
                                        {release.title}
                                    </h4>
                                    <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-black/30">
                                        {release.type} {release.year ? `• ${release.year}` : ""}
                                    </p>
                                </div>
                                <ExternalLink
                                    size={14}
                                    className="text-black/20 group-hover:text-black/50 transition-colors mt-1"
                                />
                            </div>
                        </motion.a>
                    ))}

                    {/* Visuals */}
                    {visuals.map((visual) => (
                        <motion.a
                            key={visual.id}
                            variants={item}
                            href={visual.linkUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block space-y-4"
                        >
                            <div className="aspect-square bg-[#F0F0F0] overflow-hidden border border-black/5 relative">
                                <img
                                    src={visual.thumbnailUrl}
                                    alt={visual.title}
                                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <span className="text-xs font-bold bg-white text-black px-4 py-2 rounded-full shadow-md">
                                        {visual.hoverText || "View"}
                                    </span>
                                </div>
                            </div>
                            <div className="flex justify-between items-start">
                                <div className="space-y-0.5">
                                    <h4 className="text-base font-bold text-black tracking-tight group-hover:text-gray-600 transition-colors">
                                        {visual.title}
                                    </h4>
                                    <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-black/30">
                                        {visual.type}
                                    </p>
                                </div>
                                <ExternalLink
                                    size={14}
                                    className="text-black/20 group-hover:text-black/50 transition-colors mt-1"
                                />
                            </div>
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
