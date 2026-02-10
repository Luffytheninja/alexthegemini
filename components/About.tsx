"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function About() {
    const [expanded, setExpanded] = useState(false);

    return (
        <section id="about" className="py-28 md:py-36 px-6 md:px-12 bg-cream">
            <div className="max-w-2xl mx-auto text-center space-y-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-4"
                >
                    <p className="text-xs font-bold tracking-[0.5em] text-warm-gray uppercase">
                        The Backstory
                    </p>
                    <h2 className="text-5xl md:text-7xl font-black tracking-tight text-charcoal">
                        Who&apos;s this guy? 🤔
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="space-y-6 text-lg md:text-xl leading-[1.8] text-warm-gray"
                >
                    <p>
                        Alex (a.k.a. <span className="font-bold text-charcoal">Alexthegemini</span>) is a Nigerian music producer and artist based in <span className="font-bold text-charcoal">Lagos</span>. He makes things that sound good and look even better.
                    </p>
                    <p>
                        Rooted in Afrobeats but allergic to staying in one lane — his sound bounces between soul-sampled instrumentals, melodic trap, underground rage, and experimental loop-chopping. <span className="text-tangerine font-bold">Feeling over formula, always.</span>
                    </p>
                    <p>
                        Part of the Lagos alté scene and the <span className="font-bold text-charcoal">Ixximob</span> collective. Theatre Arts background. Yes, that explains the dramatic energy.
                    </p>

                    {/* Expandable */}
                    <motion.div
                        initial={false}
                        animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
                        className="overflow-hidden"
                    >
                        <div className="space-y-6 pt-4">
                            <p>
                                He romanticizes everyday life — the mundane becomes cinematic, the familiar becomes poetic. Most of his production happens on mobile. No studio ego. Just ideas, executed wherever inspiration hits: on a bus, in a room, at 3AM. 📱
                            </p>
                            <p>
                                The philosophy is simple: <span className="font-bold text-charcoal">make it honest, make it textured, make it yours.</span> That&apos;s it. That&apos;s the whole thing.
                            </p>
                        </div>
                    </motion.div>

                    <button
                        onClick={() => setExpanded(!expanded)}
                        className="inline-block text-sm font-bold text-tangerine hover:text-rust underline underline-offset-4 decoration-2 transition-colors hover-wiggle"
                    >
                        {expanded ? "okay that's enough 😅" : "tell me more 👀"}
                    </button>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="grid grid-cols-3 gap-8 pt-12 border-t border-charcoal/5"
                >
                    <div className="space-y-1">
                        <p className="text-2xl md:text-3xl font-black text-tangerine">Lagos</p>
                        <p className="text-xs font-bold text-warm-light uppercase tracking-widest">Based in</p>
                    </div>
                    <div className="space-y-1">
                        <p className="text-2xl md:text-3xl font-black text-tangerine">Ixximob</p>
                        <p className="text-xs font-bold text-warm-light uppercase tracking-widest">Collective</p>
                    </div>
                    <div className="space-y-1">
                        <p className="text-2xl md:text-3xl font-black text-tangerine">Alté</p>
                        <p className="text-xs font-bold text-warm-light uppercase tracking-widest">Scene</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
