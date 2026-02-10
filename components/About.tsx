"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function About() {
    const [expanded, setExpanded] = useState(false);

    return (
        <section id="about" className="py-32 md:py-48 px-6 md:px-12 bg-cream w-full flex justify-center">
            <div className="max-w-4xl w-full mx-auto text-center space-y-16 md:space-y-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <span className="inline-block px-4 py-2 bg-white border border-charcoal/5 rounded-full text-xs font-bold tracking-[0.3em] text-warm-gray uppercase shadow-sm">
                        The Backstory
                    </span>
                    <h2 className="text-6xl md:text-8xl font-black tracking-tight text-charcoal leading-[0.9]">
                        Who&apos;s this guy? <span className="inline-block hover-wiggle cursor-defaultOrigin">🤔</span>
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="space-y-8 text-xl md:text-2xl leading-[1.8] text-warm-gray font-medium max-w-3xl mx-auto"
                >
                    <p>
                        Alex (a.k.a. <span className="font-black text-charcoal bg-tangerine/10 px-2 rounded-lg">Alexthegemini</span>) is a Nigerian music producer and artist based in <span className="font-black text-charcoal">Lagos</span>. He makes things that sound good and look even better.
                    </p>
                    <p>
                        Rooted in Afrobeats but allergic to staying in one lane — his sound bounces between soul-sampled instrumentals, melodic trap, underground rage, and experimental loop-chopping. <span className="text-tangerine font-black">Feeling over formula, always.</span>
                    </p>
                    <p>
                        Part of the Lagos alté scene and the <span className="font-black text-charcoal">Ixximob</span> collective. Theatre Arts background. Yes, that explains the dramatic energy.
                    </p>

                    {/* Expandable */}
                    <motion.div
                        initial={false}
                        animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
                        className="overflow-hidden"
                    >
                        <div className="space-y-8 pt-6 border-t-2 border-dashed border-charcoal/10 mt-8">
                            <p>
                                He romanticizes everyday life — the mundane becomes cinematic, the familiar becomes poetic. Most of his production happens on mobile. No studio ego. Just ideas, executed wherever inspiration hits: on a bus, in a room, at 3AM. 📱
                            </p>
                            <p>
                                The philosophy is simple: <span className="font-black text-charcoal">make it honest, make it textured, make it yours.</span> That&apos;s it. That&apos;s the whole thing.
                            </p>
                        </div>
                    </motion.div>

                    <button
                        onClick={() => setExpanded(!expanded)}
                        className="inline-block px-8 py-3 mt-4 border-2 border-tangerine text-tangerine font-bold rounded-full text-sm uppercase tracking-widest hover:bg-tangerine hover:text-white transition-all duration-300 hover:-translate-y-1"
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
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pt-16 border-t border-charcoal/5 w-full"
                >
                    <div className="p-8 bg-white rounded-[2rem] shadow-sm hover:shadow-md transition-shadow">
                        <p className="text-4xl font-black text-tangerine mb-2">Lagos</p>
                        <p className="text-xs font-bold text-warm-light uppercase tracking-widest">Based in</p>
                    </div>
                    <div className="p-8 bg-white rounded-[2rem] shadow-sm hover:shadow-md transition-shadow">
                        <p className="text-4xl font-black text-tangerine mb-2">Ixximob</p>
                        <p className="text-xs font-bold text-warm-light uppercase tracking-widest">Collective</p>
                    </div>
                    <div className="p-8 bg-white rounded-[2rem] shadow-sm hover:shadow-md transition-shadow">
                        <p className="text-4xl font-black text-tangerine mb-2">Alté</p>
                        <p className="text-xs font-bold text-warm-light uppercase tracking-widest">Scene</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
