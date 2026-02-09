"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import SocialLinks from "@/components/SocialLinks";

export default function About() {
    return (
        <div className="relative w-full min-h-screen bg-[#FFFBFB] text-[#222222]">
            <Navbar />

            <main className="max-w-4xl mx-auto px-6 md:px-12 py-20 space-y-16">
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-8 text-center"
                >
                    <div className="w-32 h-32 mx-auto rounded-full bg-[#222222]/5 overflow-hidden border-2 border-[#FF5A5F]/20">
                        <img src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=500&auto=format&fit=crop" alt="Alexthegemini" className="w-full h-full object-cover" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight">The Vision</h1>
                    <p className="text-xl md:text-2xl text-[#222222]/60 font-medium leading-relaxed italic">
                        "Merging the experimental pulse of Lagos Alté with high-fidelity visual storytelling."
                    </p>
                </motion.section>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12">
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold">Biography</h2>
                        <p className="text-lg leading-relaxed text-[#222222]/80">
                            Alexthegemini is a multidisciplinary artist based in Lagos, Nigeria. As both an Alternative Afrobeat musician and a visual artist, his work exists at the intersection of sonic experimentation and cinematic aesthetics.
                        </p>
                        <p className="text-lg leading-relaxed text-[#222222]/80">
                            He has established himself as a prominent figure in the Nigerian alté scene, known for his unique vocal phrasing and textural production style. His visual work, under the Gemini Collective, serves as the perfect companion to his audio drops, creating a holistic world for his audience.
                        </p>
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold">Creative Philosphy</h2>
                        <p className="text-lg leading-relaxed text-[#222222]/80">
                            "Gemini World" is not just a brand; it's a dual perspective. It represents the constant dialogue between light and shadow, sound and silence, the heritage of Lagos and the reach of the digital future.
                        </p>
                        <div className="p-8 airbnb-card space-y-4">
                            <h4 className="font-bold text-[#FF5A5F]">Core Elements</h4>
                            <ul className="space-y-2 text-sm font-medium">
                                <li>• Experimental Afro-Fusion</li>
                                <li>• Brutalist Visual Design</li>
                                <li>• High-Fidelity Storytelling</li>
                                <li>• Lagos Noir Aesthetic</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="pt-20 border-t border-[#222222]/10 flex flex-col items-center gap-8">
                    <h3 className="text-xl font-bold">Connect with the Artist</h3>
                    <SocialLinks />
                    <button
                        onClick={() => window.location.href = '/contact'}
                        className="glass-button px-10 py-4 !rounded-full !text-lg"
                    >
                        Book a Session
                    </button>
                </section>
            </main>

            <footer className="py-12 text-center border-t border-[#222222]/10 text-sm text-[#222222]/40 font-medium uppercase tracking-[0.2em]">
                &copy; {new Date().getFullYear()} Alexthegemini &bull; Gemini World Archive
            </footer>
        </div>
    );
}
