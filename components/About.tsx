"use client";

export default function About() {
    return (
        <section id="about" className="py-24 px-6 md:px-12 bg-white w-full">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <h2 className="text-[clamp(4rem,12vw,10rem)] font-black text-charcoal tracking-tighter leading-[0.8] mb-24 md:mb-32 uppercase">
                    Artist<br />Profile
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
                    {/* Bio Text Column */}
                    <div className="md:col-span-6 space-y-12">
                        <p className="text-xl md:text-3xl leading-[1.4] text-charcoal font-medium tracking-tight">
                            Alex is a Nigerian music producer and artist based in Lagos. He makes things that sound good and look even better. <span className="text-charcoal/60">It starts with the feeling. Rooted in Afrobeats but allergic to staying in one lane. The sound bounces between soul-sampled instrumentals, melodic trap, underground rage, and experimental loop-chopping.</span>
                        </p>

                        {/* Large Image Placeholder */}
                        <div className="aspect-[4/5] bg-smoke relative group overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-charcoal/20">Portrait Placeholder</span>
                            </div>
                            {/* The quote is positioned relative to the image container in the design summary, but actually looks like it's in the grid on the right. 
                                Let's place it in its own col for the asymmetrical feel. */}
                        </div>
                    </div>

                    {/* Right Side / Meta Column */}
                    <div className="md:col-span-6 flex flex-col justify-end pt-12 md:pt-0">
                        <div className="max-w-md ml-auto text-right md:text-left">
                            <p className="text-lg md:text-2xl text-charcoal/80 leading-relaxed italic border-t border-charcoal/10 pt-12">
                                He romanticizes everyday life — the mundane becomes cinematic, the familiar becomes poetic. Most of his production happens on mobile. No studio ego. Just ideas, executed wherever inspiration hits.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
