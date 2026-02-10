"use client";

import { ArrowUpRight } from "lucide-react";
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
        { name: "Instagram", handle: "@Al3xtheg3mini", href: "https://instagram.com/al3xtheg3mini" },
        { name: "Twitter", handle: "@Al3xtheg3mini", href: "https://x.com/al3xtheg3mini" },
        { name: "Spotify", handle: "Alexthegemini", href: "https://open.spotify.com/artist/3Wbkuzl1Ha7fBw77p15Lzw" },
        { name: "Ixximob", handle: "@Ixximob", href: "https://instagram.com/ixximob" },
    ];

    return (
        <section id="connect" className="pt-[15vh] pb-[30vh] md:pb-[25vh] bg-charcoal text-white w-full">
            <div className="w-full max-w-[1440px] px-[5vw] mx-auto">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-24 md:gap-48 mb-[15vh]">
                    {/* Newsletter Column */}
                    <div className="space-y-12">
                        <h2 className="text-[clamp(3rem,6vw,5rem)] font-black tracking-tighter leading-none">
                            STAY IN<br />THE LOOP
                        </h2>
                        <p className="text-white/60 text-xl max-w-md leading-relaxed">
                            New music, behind-the-scenes sauce, and absolutely zero spam. 🤞
                        </p>
                        <form onSubmit={handleSubscribe} className="flex flex-col gap-6 pt-8 max-w-md group">
                            <input
                                type="email"
                                placeholder="your@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-transparent border-b border-white/20 pb-4 outline-none text-2xl font-bold placeholder:text-white/20 focus:border-white transition-colors"
                                required
                            />
                            <button
                                type="submit"
                                className="text-xs font-bold uppercase tracking-[0.2em] text-white/50 text-left hover:text-white transition-colors"
                            >
                                Subscribe →
                            </button>
                        </form>
                        {subscribed && <p className="text-white font-bold text-xl">You don dey! 🎉</p>}
                    </div>

                    {/* Social Links Column */}
                    <div className="flex flex-col justify-end">
                        <div className="space-y-0">
                            {socials.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between py-10 md:py-12 border-b border-white/10 hover:border-white group transition-colors"
                                >
                                    <span className="text-[clamp(1.5rem,3vw,3rem)] font-black uppercase text-white/50 group-hover:text-white transition-colors">
                                        {social.name}
                                    </span>
                                    <ArrowUpRight className="w-8 h-8 text-white/20 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Minimal Footer */}
                <div className="flex flex-col md:flex-row justify-between items-end border-t border-white/10 pt-12 text-xs font-bold uppercase tracking-[0.2em] text-white/30">
                    <div className="space-y-2">
                        <p>&copy; {new Date().getFullYear()} Alexthegemini</p>
                        <p>Lagos, Nigeria</p>
                    </div>
                    <div className="text-right mt-8 md:mt-0">
                        <p>Studio Edition v2.3</p>
                    </div>
                </div>

            </div>
        </section>
    );
}
