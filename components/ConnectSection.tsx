"use client";

import { motion } from "framer-motion";
import { Instagram, Twitter, Music, ArrowRight } from "lucide-react";
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
        { name: "Instagram", handle: "@Al3xtheg3mini", href: "https://instagram.com/al3xtheg3mini", icon: Instagram, emoji: "📸" },
        { name: "X / Twitter", handle: "@Al3xtheg3mini", href: "https://x.com/al3xtheg3mini", icon: Twitter, emoji: "🐦" },
        { name: "Spotify", handle: "Alexthegemini", href: "https://open.spotify.com/artist/3Wbkuzl1Ha7fBw77p15Lzw", icon: Music, emoji: "🎧" },
        { name: "Ixximob", handle: "@Ixximob", href: "https://instagram.com/ixximob", icon: Instagram, emoji: "🔥" },
    ];

    return (
        <section id="connect" className="py-32 md:py-48 px-6 md:px-12 bg-cream w-full overflow-hidden">
            <div className="max-w-5xl mx-auto text-center space-y-20 md:space-y-32">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <span className="inline-block px-4 py-2 bg-white border border-charcoal/5 rounded-full text-xs font-bold tracking-[0.3em] text-warm-gray uppercase shadow-sm">
                        Don&apos;t be a stranger
                    </span>
                    <h2 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-charcoal leading-[0.9]">
                        Let&apos;s link up <span className="inline-block hover-wiggle cursor-default">🤝</span>
                    </h2>
                    <p className="text-xl text-warm-gray font-medium max-w-2xl mx-auto leading-relaxed">
                        Follow the journey. Or just lurk. I see you either way. 👀
                    </p>
                </motion.div>

                {/* Social Bento */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
                >
                    {socials.map((social, i) => (
                        <motion.a
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="flex flex-col items-center justify-center gap-4 p-8 md:p-12 bg-white rounded-[2.5rem] border border-charcoal/5 shadow-md hover:shadow-2xl hover:border-tangerine/30 transition-all duration-300 group"
                        >
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-cream rounded-full flex items-center justify-center text-3xl md:text-4xl shadow-inner mb-2 group-hover:scale-110 transition-transform">
                                {social.emoji}
                            </div>
                            <div className="text-center space-y-1">
                                <p className="text-sm md:text-base font-black text-charcoal group-hover:text-tangerine transition-colors">{social.handle}</p>
                                <p className="text-[10px] text-warm-light uppercase tracking-widest font-bold">{social.name}</p>
                            </div>
                        </motion.a>
                    ))}
                </motion.div>

                {/* Mailing List */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="bg-charcoal rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-tangerine/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-rust/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

                    <div className="relative z-10 space-y-10">
                        <div className="space-y-4">
                            <h3 className="text-3xl md:text-5xl font-black">
                                Join the inner circle ✉️
                            </h3>
                            <p className="text-white/60 text-lg max-w-xl mx-auto font-medium">
                                New music, behind-the-scenes sauce, and absolutely zero spam. Promise. 🤞
                            </p>
                        </div>

                        <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
                            <input
                                type="email"
                                placeholder="your@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="flex-1 bg-white/10 border-2 border-white/10 focus:border-tangerine focus:bg-white/20 rounded-full px-8 py-5 text-lg font-bold outline-none transition-all placeholder:text-white/30 text-white"
                                required
                            />
                            <button
                                type="submit"
                                className="px-10 py-5 bg-tangerine text-white font-black rounded-full text-sm uppercase tracking-widest hover:bg-white hover:text-charcoal hover:scale-105 transition-all shadow-lg flex items-center justify-center gap-3"
                            >
                                <span>Subscribe</span> <ArrowRight size={20} />
                            </button>
                        </form>

                        {subscribed && (
                            <motion.p
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-lg font-bold text-tangerine"
                            >
                                You don dey! 🎉 Check your email sha.
                            </motion.p>
                        )}
                    </div>
                </motion.div>
            </div>

            {/* Footer */}
            <motion.footer
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-32 pt-12 border-t border-charcoal/5 text-center space-y-3 max-w-3xl mx-auto"
            >
                <p className="text-base text-warm-gray font-bold">
                    &copy; {new Date().getFullYear()} Alexthegemini &bull; Lagos, Nigeria 🇳🇬
                </p>
                <p className="text-sm text-warm-light italic font-medium">
                    Part of the Ixximob collective &bull; Built with vibes and caffeine ☕
                </p>
            </motion.footer>
        </section>
    );
}
