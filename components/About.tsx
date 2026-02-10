"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function About() {
    return (
        <section id="about" className="py-24 md:py-32 bg-cream w-full border-t border-charcoal">
            <div className="w-full max-w-[95%] md:max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">

                {/* Left Column: Title & Stats */}
                <div className="md:col-span-5 space-y-12 md:space-y-24 sticky top-12 h-fit">
                    <div className="space-y-4">
                        <span className="text-xs font-bold tracking-[0.2em] uppercase text-charcoal/60 block mb-2">
                            Profile
                        </span>
                        <h2 className="text-6xl md:text-8xl font-black text-charcoal tracking-tighter leading-[0.85]">
                            ALEX<br />
                            THE<br />
                            GEMINI
                        </h2>
                    </div>

                    <div className="hidden md:block space-y-8">
                        <div className="border-t border-charcoal/20 pt-4">
                            <p className="text-xs font-bold uppercase tracking-widest text-charcoal/40 mb-1">Based</p>
                            <p className="text-xl font-bold text-charcoal">Lagos, Nigeria</p>
                        </div>
                        <div className="border-t border-charcoal/20 pt-4">
                            <p className="text-xs font-bold uppercase tracking-widest text-charcoal/40 mb-1">Affiliation</p>
                            <p className="text-xl font-bold text-charcoal">Ixximob Collective</p>
                        </div>
                        <div className="border-t border-charcoal/20 pt-4">
                            <p className="text-xs font-bold uppercase tracking-widest text-charcoal/40 mb-1">Role</p>
                            <p className="text-xl font-bold text-charcoal">Producer / Artist</p>
                        </div>
                    </div>
                </div>

                {/* Right Column: Editorial Text */}
                <div className="md:col-span-7 space-y-10 text-lg md:text-2xl leading-[1.6] text-charcoal font-medium">
                    <p className="indent-12 md:indent-24">
                        It starts with the feeling. Rooted in Afrobeats but allergic to staying in one lane. The sound bounces between soul-sampled instrumentals, melodic trap, underground rage, and experimental loop-chopping. <span className="text-tangerine font-bold">Feeling over formula, always.</span>
                    </p>
                    <p>
                        Alex is a Nigerian music producer and artist based in Lagos. He makes things that sound good and look even better. Theatre Arts background, which explains the dramatic energy.
                    </p>
                    <p>
                        He romanticizes everyday life — the mundane becomes cinematic, the familiar becomes poetic. Most of his production happens on mobile. No studio ego. <br /> Just ideas, executed wherever inspiration hits: on a bus, in a room, at 3AM.
                    </p>

                    {/* Mobile Stats (only visible on small screens) */}
                    <div className="md:hidden grid grid-cols-2 gap-8 py-12 border-t border-charcoal/20 mt-12">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-charcoal/40 mb-1">Based</p>
                            <p className="text-lg font-bold text-charcoal">Lagos</p>
                        </div>
                        <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-charcoal/40 mb-1">Team</p>
                            <p className="text-lg font-bold text-charcoal">Ixximob</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
