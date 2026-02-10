"use client";

export default function About() {
    return (
        <section id="about" className="py-[15vh] md:py-[25vh] bg-white w-full">
            <div className="w-full max-w-[1440px] px-6 md:px-[5vw] mx-auto grid grid-cols-1 md:grid-cols-12 gap-20 md:gap-32">

                {/* Left Column: Title & Stats */}
                <div className="md:col-span-4 space-y-20 md:space-y-40 sticky top-24 h-fit">
                    <div className="space-y-6">
                        <span className="text-sm font-bold tracking-[0.2em] uppercase text-charcoal/50 block">
                            Profile
                        </span>
                        <h2 className="text-[clamp(3rem,10vw,8rem)] font-black text-charcoal tracking-tighter leading-[0.8] mix-blend-difference">
                            ALEX<br />
                            THE<br />
                            GEMINI
                        </h2>
                    </div>

                    <div className="hidden md:block space-y-16">
                        <div className="border-t border-charcoal/10 pt-8">
                            <p className="text-xs font-bold uppercase tracking-widest text-charcoal/40 mb-2">Based</p>
                            <p className="text-2xl font-bold text-charcoal">Lagos, Nigeria</p>
                        </div>
                        <div className="border-t border-charcoal/10 pt-8">
                            <p className="text-xs font-bold uppercase tracking-widest text-charcoal/40 mb-2">Affiliation</p>
                            <p className="text-2xl font-bold text-charcoal">Ixximob Collective</p>
                        </div>
                        <div className="border-t border-charcoal/10 pt-8">
                            <p className="text-xs font-bold uppercase tracking-widest text-charcoal/40 mb-2">Role</p>
                            <p className="text-2xl font-bold text-charcoal">Producer / Artist</p>
                        </div>
                    </div>
                </div>

                {/* Right Column: Editorial Text */}
                <div className="md:col-span-1" /> {/* Spacer */}
                <div className="md:col-span-7 space-y-20 text-xl md:text-3xl leading-[1.6] text-charcoal font-medium tracking-tight">
                    <p className="indent-[4rem] md:indent-[8rem]">
                        It starts with the feeling. Rooted in Afrobeats but allergic to staying in one lane. The sound bounces between soul-sampled instrumentals, melodic trap, underground rage, and experimental loop-chopping.
                    </p>
                    <p>
                        Alex is a Nigerian music producer and artist based in Lagos. He makes things that sound good and look even better. <span className="text-charcoal/60">Theatre Arts background, which explains the dramatic energy.</span>
                    </p>
                    <div className="border-l-2 border-charcoal/10 pl-8 md:pl-16 py-4">
                        <p className="text-lg md:text-2xl text-charcoal/80 leading-relaxed italic">
                            He romanticizes everyday life — the mundane becomes cinematic, the familiar becomes poetic. Most of his production happens on mobile. No studio ego. Just ideas, executed wherever inspiration hits.
                        </p>
                    </div>

                    {/* Mobile Stats */}
                    <div className="md:hidden grid grid-cols-1 gap-8 py-16 border-t border-charcoal/10 mt-16">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-charcoal/40 mb-2">Based</p>
                            <p className="text-3xl font-bold text-charcoal">Lagos</p>
                        </div>
                        <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-charcoal/40 mb-2">Team</p>
                            <p className="text-3xl font-bold text-charcoal">Ixximob</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
