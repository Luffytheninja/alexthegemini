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
        <section id="connect" className="py-28 md:py-36 px-6 md:px-12 bg-cream">
            <div className="max-w-3xl mx-auto text-center space-y-16">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-4"
                >
                    <p className="text-xs font-bold tracking-[0.5em] text-warm-gray uppercase">
                        Don&apos;t be a stranger
                    </p>
                    <h2 className="text-5xl md:text-7xl font-black tracking-tight text-charcoal">
                        Let&apos;s link up 🤝
                    </h2>
                    <p className="text-base text-warm-gray font-medium max-w-md mx-auto">
                        Follow the journey. Or just lurk. I see you either way. 👀
                    </p>
                </motion.div>

                {/* Social Grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4"
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
                            whileHover={{ y: -4, scale: 1.02 }}
                            className="flex flex-col items-center justify-center gap-3 p-6 md:p-8 bg-white rounded-2xl border border-charcoal/5 shadow-sm hover:shadow-lg hover:border-tangerine/20 transition-all duration-300 group"
                        >
                            <span className="text-3xl">{social.emoji}</span>
                            <social.icon size={24} className="text-charcoal/30 group-hover:text-tangerine transition-colors" />
                            <div className="text-center">
                                <p className="text-xs font-bold text-charcoal">{social.handle}</p>
                                <p className="text-[10px] text-warm-light uppercase tracking-widest">{social.name}</p>
                            </div>
                        </motion.a>
                    ))}
                </motion.div>

                {/* Mailing List */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="space-y-6 pt-8"
                >
                    <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-charcoal">
                            Join the inner circle ✉️
                        </h3>
                        <p className="text-sm text-warm-gray">
                            New music, behind-the-scenes sauce, and absolutely zero spam. Promise. 🤞
                        </p>
                    </div>

                    <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                        <input
                            type="email"
                            placeholder="your@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="flex-1 bg-white border-2 border-charcoal/10 focus:border-tangerine rounded-full px-6 py-4 text-sm font-bold outline-none transition-colors placeholder:text-warm-light"
                            required
                        />
                        <button
                            type="submit"
                            className="px-8 py-4 bg-tangerine text-white font-bold rounded-full text-sm uppercase tracking-widest hover:bg-rust hover:scale-105 transition-all shadow-md flex items-center justify-center gap-2"
                        >
                            Subscribe <ArrowRight size={16} />
                        </button>
                    </form>

                    {subscribed && (
                        <motion.p
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-sm font-bold text-grass-dark"
                        >
                            You don dey! 🎉 Check your email sha.
                        </motion.p>
                    )}
                </motion.div>
            </div>

            {/* Footer */}
            <motion.footer
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-24 pt-8 border-t border-charcoal/5 text-center space-y-2 max-w-3xl mx-auto"
            >
                <p className="text-sm text-warm-gray font-medium">
                    &copy; {new Date().getFullYear()} Alexthegemini &bull; Lagos, Nigeria 🇳🇬
                </p>
                <p className="text-xs text-warm-light italic">
                    Part of the Ixximob collective &bull; Built with vibes and caffeine ☕
                </p>
            </motion.footer>
        </section>
    );
}
