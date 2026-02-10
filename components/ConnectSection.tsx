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
        {
            name: "Instagram",
            handle: "@Al3xtheg3mini",
            href: "https://instagram.com/al3xtheg3mini",
            icon: Instagram,
        },
        {
            name: "X / Twitter",
            handle: "@Al3xtheg3mini",
            href: "https://x.com/al3xtheg3mini",
            icon: Twitter,
        },
        {
            name: "Spotify",
            handle: "Alexthegemini",
            href: "https://open.spotify.com/artist/3Wbkuzl1Ha7fBw77p15Lzw",
            icon: Music,
        },
        {
            name: "Ixximob",
            handle: "@Ixximob",
            href: "https://instagram.com/ixximob",
            icon: Instagram,
        },
    ];

    return (
        <section id="connect" className="py-24 md:py-32 px-6 md:px-12 bg-white">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-10"
                >
                    <div className="space-y-2">
                        <h2 className="text-xs font-bold tracking-[0.5em] text-black/30 uppercase">
                            Connect
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-black tracking-tight text-black">
                            Stay Tuned
                        </h3>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {socials.map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex flex-col justify-between p-6 h-36 bg-white border border-black/5 hover:border-black/15 hover:shadow-md transition-all relative overflow-hidden"
                            >
                                <div className="flex justify-between items-start">
                                    <span className="text-[10px] font-bold tracking-widest text-black/30 uppercase">
                                        {social.name}
                                    </span>
                                    <social.icon
                                        size={20}
                                        className="text-black/10 group-hover:text-black/40 transition-colors"
                                    />
                                </div>
                                <h4 className="text-sm font-bold text-black tracking-tight">
                                    {social.handle}
                                </h4>
                            </a>
                        ))}
                    </div>
                </motion.div>

                {/* Mailing List */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col justify-center space-y-10"
                >
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold tracking-tight text-black">
                            Join the Collective
                        </h3>
                        <p className="text-base text-black/40 max-w-sm leading-relaxed">
                            Stay updated—new music, sessions, sauce.
                        </p>
                    </div>

                    <form onSubmit={handleSubscribe} className="max-w-md w-full space-y-4">
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="your@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-white border-b-2 border-black/10 focus:border-black py-4 text-lg font-bold outline-none transition-colors placeholder:text-black/15"
                                required
                            />
                            <button
                                type="submit"
                                className="absolute right-0 bottom-4 text-black/30 hover:text-black transition-colors"
                                aria-label="Subscribe to newsletter"
                            >
                                <ArrowRight size={24} />
                            </button>
                        </div>

                        {subscribed && (
                            <motion.p
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-sm font-bold text-green-600"
                            >
                                You don dey! 🎉 Check your email sha.
                            </motion.p>
                        )}
                    </form>
                </motion.div>
            </div>

            {/* Footer */}
            <motion.footer
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-24 pt-8 border-t border-black/5 text-center space-y-2"
            >
                <p className="text-sm text-black/30 font-medium">
                    &copy; {new Date().getFullYear()} Alexthegemini &bull; Lagos, Nigeria
                </p>
                <p className="text-xs text-black/20 font-medium">
                    Part of the Ixximob collective
                </p>
            </motion.footer>
        </section>
    );
}
