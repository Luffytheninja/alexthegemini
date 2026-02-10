"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function About() {
    const [expanded, setExpanded] = useState(false);

    return (
        <section id="about" className="py-24 md:py-32 px-6 md:px-12 bg-white">
            <div className="max-w-3xl mx-auto space-y-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-2"
                >
                    <h2 className="text-xs font-bold tracking-[0.4em] text-black/30 uppercase">
                        About
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-black tracking-tight text-black">
                        The Story
                    </h3>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="space-y-6 text-lg leading-[1.8] text-gray-700"
                >
                    <p>
                        Alex, known as Alexthegemini, is a Nigerian music producer and artist based in Lagos.
                    </p>
                    <p>
                        Rooted in Afrobeats but unconstrained by genre, his sound drifts between soul-sampled instrumentals, melodic trap, underground rage influences, and experimental loop-chopping. Each production leans toward feeling over formula—music built to move, reflect, and linger.
                    </p>
                    <p>
                        Part of the Lagos alté scene, Alex approaches music as storytelling. With a background in Theatre Arts, texture, space, and progression matter as much as rhythm.
                    </p>

                    {/* Expandable section */}
                    <motion.div
                        initial={false}
                        animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
                        className="overflow-hidden"
                    >
                        <div className="space-y-6 pt-2">
                            <p>
                                He romanticizes everyday life—the mundane becomes cinematic, the familiar becomes poetic. This isn&apos;t accidental. Alex is self-taught, building on pure intuition, driven by the same curiosity that makes him sample jazz records from the 60s or flip gospel into lo-fi.
                            </p>
                            <p>
                                Most of his production happens on mobile—a deliberate constraint that sharpens creativity. No studio ego. Just ideas, executed wherever inspiration hits: on a bus, in a room, at 3AM.
                            </p>
                            <p>
                                Part of the Ixximob collective, Alex represents a generation of Nigerian creators who refuse to be boxed. The music is just the surface. Underneath, there&apos;s a philosophy: make it honest, make it textured, make it yours.
                            </p>
                        </div>
                    </motion.div>

                    <button
                        onClick={() => setExpanded(!expanded)}
                        className="text-sm font-bold text-black underline underline-offset-4 hover:text-gray-600 transition-colors"
                    >
                        {expanded ? "Show less" : "Read more"}
                    </button>
                </motion.div>

                {/* Stats/Positioning */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="grid grid-cols-3 gap-8 pt-8 border-t border-black/5"
                >
                    <div className="space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-black/30">
                            Origin
                        </span>
                        <p className="text-sm font-bold">Lagos, Nigeria</p>
                    </div>
                    <div className="space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-black/30">
                            Discipline
                        </span>
                        <p className="text-sm font-bold">Producer / Artist</p>
                    </div>
                    <div className="space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-black/30">
                            Collective
                        </span>
                        <p className="text-sm font-bold">Ixximob</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
