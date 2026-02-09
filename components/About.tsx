"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-24 px-6 md:px-12 bg-black border-y border-white/5">
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

                {/* Bio Text */}
                <div className="md:col-span-12 lg:col-span-8 space-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="space-y-6"
                    >
                        <h2 className="text-sm font-bold tracking-[0.4em] text-white/30 uppercase italic">The Narrative</h2>
                        <p className="text-2xl md:text-4xl font-medium leading-[1.3] text-white/90">
                            Alexthegemini is a multidisciplinary artist merging the experimental pulse of Lagos Alté with high-fidelity visual storytelling.
                        </p>
                        <p className="text-lg md:text-xl leading-relaxed text-white/60">
                            Existing at the intersection of sonic experimentation and cinematic aesthetics, his work under the Gemini Collective serves as a holistic archive of the dual-identity digital future.
                        </p>
                    </motion.div>

                    {/* Lagos Noir Positioning */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="pt-12 flex flex-wrap gap-8 opacity-40"
                    >
                        <div className="space-y-1">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">Origin</span>
                            <p className="text-sm font-bold uppercase">Lagos, Nigeria</p>
                        </div>
                        <div className="space-y-1">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">Discipline</span>
                            <p className="text-sm font-bold uppercase">Audio / Visual</p>
                        </div>
                        <div className="space-y-1">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">Collective</span>
                            <p className="text-sm font-bold uppercase">Gemini World</p>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
