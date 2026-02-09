"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Instagram, Twitter } from "lucide-react";

export default function Contact() {
    return (
        <div className="relative w-full min-h-screen bg-[#FFFBFB] text-[#222222]">
            <Navbar />

            <main className="max-w-4xl mx-auto px-6 md:px-12 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-12"
                    >
                        <div className="space-y-4">
                            <h1 className="text-5xl font-black tracking-tight">Drop a line.</h1>
                            <p className="text-xl text-[#222222]/60 font-medium">
                                For booking, collaboration, or press inquiries, reach out through any of these channels.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-center gap-6 group cursor-pointer" onClick={() => window.location.href = 'mailto:contact@alexthegemini.xyz'}>
                                <div className="w-12 h-12 glass-button !p-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold">Email</h4>
                                    <p className="text-sm text-[#222222]/60">contact@alexthegemini.xyz</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group cursor-pointer" onClick={() => window.open('https://instagram.com/alexthegemini', '_blank')}>
                                <div className="w-12 h-12 glass-button !p-0">
                                    <Instagram size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold">Instagram</h4>
                                    <p className="text-sm text-[#222222]/60">@alexthegemini</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group cursor-pointer" onClick={() => window.open('https://x.com/alexthegemini', '_blank')}>
                                <div className="w-12 h-12 glass-button !p-0">
                                    <Twitter size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold">X / Twitter</h4>
                                    <p className="text-sm text-[#222222]/60">@alexthegemini</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="airbnb-card p-10 space-y-8"
                    >
                        <h3 className="text-2xl font-bold">Quick Inqury</h3>
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div className="space-y-1">
                                <label className="text-xs font-bold uppercase tracking-widest text-[#222222]/40">Your Name</label>
                                <input type="text" className="w-full bg-[#222222]/5 border-none rounded-xl p-4 focus:ring-2 focus:ring-[#FF5A5F]/20 transition-all" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold uppercase tracking-widest text-[#222222]/40">Email Address</label>
                                <input type="email" className="w-full bg-[#222222]/5 border-none rounded-xl p-4 focus:ring-2 focus:ring-[#FF5A5F]/20 transition-all" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold uppercase tracking-widest text-[#222222]/40">Message</label>
                                <textarea rows={4} className="w-full bg-[#222222]/5 border-none rounded-xl p-4 focus:ring-2 focus:ring-[#FF5A5F]/20 transition-all resize-none"></textarea>
                            </div>
                            <button className="glass-button w-full !bg-[#FF5A5F] !text-white !border-none !py-4 !mt-4 hover:shadow-lg">
                                Send Message
                            </button>
                        </form>
                    </motion.div>

                </div>
            </main>

            <footer className="py-12 text-center text-sm text-[#222222]/40 font-medium uppercase tracking-[0.2em]">
                &copy; {new Date().getFullYear()} Alexthegemini &bull; Gemini World Archive
            </footer>
        </div>
    );
}
