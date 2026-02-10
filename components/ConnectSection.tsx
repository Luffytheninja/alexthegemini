"use client";

import { useState } from "react";

export default function ConnectSection() {
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (email.trim()) {
            setSubscribed(true);
            setEmail("");
        }
    };

    const socials = [
        { name: "Instagram", href: "https://instagram.com/al3xtheg3mini" },
        { name: "Twitter", href: "https://x.com/al3xtheg3mini" },
        { name: "Spotify", href: "https://open.spotify.com/artist/3Wbkuzl1Ha7fBw77p15Lzw" },
        { name: "Ixximob", href: "https://instagram.com/ixximob" },
    ];

    return (
        <section id="connect" className="bg-charcoal text-white section-padding container-padding">
            <div className="container-max">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 border-b border-white/10 pb-16 mb-8">
                    {/* Newsletter Column */}
                    <div className="space-y-8">
                        <h2 className="text-[clamp(2.5rem,6vw,6rem)] font-black tracking-tighter leading-[0.85] uppercase">
                            STAY IN<br />THE LOOP
                        </h2>
                        <p className="text-white/40 text-[10px] md:text-xs font-bold uppercase tracking-widest max-w-sm">
                            New music, behind-the-scenes sauce, and absolutely zero spam. 🤞
                        </p>
                        <form onSubmit={handleSubscribe} className="flex flex-col gap-4 pt-4 max-w-md">
                            <input
                                type="email"
                                placeholder="your@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-transparent border-b border-white/20 pb-2 outline-none text-lg font-bold placeholder:text-white/10 focus:border-white transition-colors"
                                required
                            />
                            <button
                                type="submit"
                                className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 text-left hover:text-white transition-colors"
                            >
                                Subscribe →
                            </button>
                        </form>
                        {subscribed && <p className="text-white font-bold text-[10px] uppercase tracking-widest">Added to list. 🎉</p>}
                    </div>

                    {/* Social Links Column */}
                    <div className="flex flex-col justify-end">
                        <div className="space-y-3 text-right md:text-right">
                            {socials.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-[clamp(1.2rem,3vw,3rem)] font-black uppercase text-white/30 hover:text-white transition-colors tracking-tighter leading-none"
                                >
                                    {social.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Minimal Copyright Row */}
                <div className="flex justify-between items-center text-[7px] md:text-[9px] font-bold uppercase tracking-[0.3em] text-white/20">
                    <p>&copy; {new Date().getFullYear()} Alex The Gemini</p>
                    <p>Lagos State</p>
                </div>
            </div>
        </section>
    );
}
