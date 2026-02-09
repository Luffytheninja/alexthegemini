"use client";

import { motion } from "framer-motion";
import { Instagram, Twitter, Mail, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function ConnectSection() {
    const [email, setEmail] = useState("");

    return (
        <section id="connect" className="py-24 px-6 md:px-12 bg-black">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">

                {/* Social Pillars */}
                <div className="space-y-12">
                    <div className="space-y-4">
                        <h2 className="text-xs font-bold tracking-[0.5em] text-white/30 uppercase">Network</h2>
                        <h1 className="text-5xl md:text-7xl font-black">STAY TUNED</h1>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <a
                            href="https://instagram.com/alexthegemini"
                            target="_blank"
                            className="group flex flex-col justify-between p-8 h-48 border border-white/5 hover:border-white/20 transition-all rounded-sm relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity">
                                <Instagram size={32} />
                            </div>
                            <span className="text-xs font-bold tracking-widest text-white/40 uppercase">Instagram</span>
                            <h4 className="text-2xl font-bold tracking-tighter">@alexthegemini</h4>
                        </a>

                        <a
                            href="https://x.com/alexthegemini"
                            target="_blank"
                            className="group flex flex-col justify-between p-8 h-48 border border-white/5 hover:border-white/20 transition-all rounded-sm relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity">
                                <Twitter size={32} />
                            </div>
                            <span className="text-xs font-bold tracking-widest text-white/40 uppercase">X / Twitter</span>
                            <h4 className="text-2xl font-bold tracking-tighter">@alexthegemini</h4>
                        </a>
                    </div>
                </div>

                {/* Mailing list */}
                <div className="flex flex-col justify-center space-y-12 lg:pl-12">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold tracking-tight">Access the Collective</h3>
                        <p className="text-lg text-white/40 max-w-sm">
                            Subscribe for exclusive visual drops, sonic archives, and clandestine show alerts.
                        </p>
                    </div>

                    <div className="relative group max-w-md w-full">
                        <input
                            type="email"
                            placeholder="YOUR@EMAIL.COM"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-transparent border-b-2 border-white/10 py-6 text-2xl font-black uppercase outline-none focus:border-white transition-all placeholder:text-white/10"
                        />
                        <button className="absolute right-0 bottom-6 opacity-40 group-focus-within:opacity-100 transition-opacity">
                            <ArrowRight size={32} />
                        </button>
                    </div>

                    <p className="text-[10px] font-bold tracking-widest text-white/20 uppercase">
                        &copy; {new Date().getFullYear()} Alexthegemini &bull; Gemini World Archive
                    </p>
                </div>

            </div>
        </section>
    );
}
