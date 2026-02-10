"use client";

import { motion } from "framer-motion";
import { Instagram, Twitter, Music, ArrowRight, ArrowUpRight } from "lucide-react";
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
        <section id="connect" className="pt-24 pb-12 bg-charcoal text-cream w-full">
            <div className="w-full max-w-[95%] md:max-w-[90%] mx-auto">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 mb-32">
                    {/* Newsletter Column */}
                    <div className="space-y-8">
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
                            STAY IN THE LOOP
                        </h2>
                        <p className="text-white/60 text-lg max-w-md">
                            New music, behind-the-scenes sauce, and absolutely zero spam. 🤞
                        </p>
                        <form onSubmit={handleSubscribe} className="flex gap-4 border-b border-white/20 pb-4 max-w-md group focus-within:border-tangerine transition-colors">
                            <input
                                type="email"
                                placeholder="your@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="flex-1 bg-transparent border-none outline-none text-xl font-bold placeholder:text-white/20"
                                required
                            />
                            <button
                                type="submit"
                                className="text-xs font-bold uppercase tracking-widest text-white/60 group-hover:text-tangerine transition-colors"
                            >
                                Subscribe
                            </button>
                        </form>
                        {subscribed && <p className="text-tangerine font-bold">You don dey! 🎉</p>}
                    </div>

                    {/* Social Links Column */}
                    <div className="flex flex-col justify-between">
                        <div className="space-y-4">
                            {socials.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between py-6 border-b border-white/10 hover:border-tangerine group transition-colors"
                                >
                                    <span className="text-2xl md:text-3xl font-black uppercase text-white group-hover:text-tangerine transition-colors">
                                        {social.name}
                                    </span>
                                    <ArrowUpRight className="w-6 h-6 text-white/20 group-hover:text-tangerine transition-colors" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Minimal Footer */}
                <div className="flex flex-col md:flex-row justify-between items-end border-t border-white/10 pt-8 text-xs font-bold uppercase tracking-widest text-white/30">
                    <div className="space-y-1">
                        <p>&copy; {new Date().getFullYear()} Alexthegemini</p>
                        <p>Lagos, Nigeria</p>
                    </div>
                    <div className="text-right mt-4 md:mt-0">
                        <p>Built with vibes ☕</p>
                    </div>
                </div>

            </div>
        </section>
    );
}
