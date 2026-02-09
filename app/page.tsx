"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import SocialLinks from "@/components/SocialLinks";
import ArtistPlayer from "@/components/ArtistPlayer";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
  };

  return (
    <div className="relative w-full bg-[#FDFCF0] text-[#12100E] selection:bg-[#FF5A5F] selection:text-[#FDFCF0]">

      {/* SECTION 1: THE ENTRANCE (HERO) */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden border-b border-[#12100E]/5 px-6">
        <div className="relative z-10 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={isLoaded ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            <h1 className="kinetic-text text-[#12100E]">ALEX</h1>
            <div className="flex items-center gap-6 -translate-y-4 md:-translate-y-8">
              <div className="w-[8vw] h-[3px] bg-[#FF5A5F] rounded-full" />
              <h1 className="kinetic-text text-[#FF5A5F] italic">GEMINI</h1>
              <div className="w-[8vw] h-[3px] bg-[#FF5A5F] rounded-full" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-12 flex flex-col items-center gap-10"
          >
            <p className="text-sm md:text-base tracking-[0.4em] font-bold text-[#12100E]/40 uppercase text-center">
              Alternative Afrobeat & Visual Artist
            </p>

            <div className="flex flex-col md:flex-row gap-6">
              <button
                onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-10 py-4 bg-[#12100E] text-[#FDFCF0] font-bold uppercase tracking-widest text-xs rounded-full hover:bg-[#FF5A5F] transition-all duration-500 transform hover:scale-105"
              >
                EXPLORE THE WORK
              </button>
              <button className="px-10 py-4 border border-[#12100E]/10 text-[#12100E] font-bold uppercase tracking-widest text-xs rounded-full hover:bg-[#12100E]/5 transition-all duration-500">
                STREAM LATEST
              </button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-6 opacity-30">
          <div className="w-[1px] h-24 bg-gradient-to-b from-[#FF5A5F] to-transparent" />
        </div>
      </section>

      {/* SECTION 2: FEATURED RELEASE */}
      <section id="work" className="relative py-32 px-6 md:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={itemVariants}
            className="md:col-span-2 space-y-12"
          >
            <div className="space-y-4">
              <span className="text-[#FF5A5F] text-[10px] font-bold tracking-[0.3em] uppercase">Featured Visual</span>
              <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none">HOT BO1</h2>
            </div>

            <div className="aspect-video w-full bg-[#12100E]/5 rounded-[2.5rem] overflow-hidden border border-[#12100E]/5 shadow-2xl relative group">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/ivVHy_Z_iFk" // Placeholder from r3my-jay if no new specific YT link given
                title="Alexthegemini - HOT BO1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="hover:scale-[1.01] transition-transform duration-700"
              ></iframe>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={itemVariants}
            className="md:col-span-1 space-y-10 md:pt-24 md:pl-16 flex flex-col justify-center"
          >
            <div className="space-y-6">
              <p className="text-xl md:text-2xl font-medium leading-relaxed italic text-[#12100E]/80">
                &ldquo;A sonic declaration of authority and experimental excellence directed by the Gemini collective.&rdquo;
              </p>
              <div className="pt-6 flex flex-col gap-5">
                <a href="#" className="text-xs font-black border-b-2 border-[#FF5A5F] pb-1 w-fit hover:text-[#FF5A5F] transition-colors uppercase tracking-widest">
                  View Full Gallery
                </a>
                <a href="#" className="text-xs font-black border-b-2 border-[#12100E]/10 pb-1 w-fit hover:border-[#12100E] transition-all uppercase tracking-widest">
                  Process Breakdown
                </a>
              </div>
            </div>

            <div className="pt-8 flex flex-col gap-4">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#12100E]/30">Connect</h4>
              <SocialLinks />
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: THE GEM PLAYER */}
      <section className="relative py-32 px-6 md:px-24 bg-[#12100E]/2 border-y border-[#12100E]/5">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center space-y-4">
            <span className="text-[#FF5A5F] text-[10px] font-bold tracking-[0.4em] uppercase">Archive</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">The Gem Player</h2>
          </div>
          <ArtistPlayer />
        </div>
      </section>

      {/* SECTION 4: MAILING LIST */}
      <section className="relative py-32 px-6 text-center max-w-3xl mx-auto space-y-12">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter">Stay in the loop</h2>
          <p className="text-lg md:text-xl font-medium text-[#12100E]/60">
            Join the inner circle for unreleased drops, visual experiments, and secret shows.
          </p>
        </div>

        <form className="flex flex-col md:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="yo@alex.xyz"
            className="flex-1 bg-[#12100E]/5 border border-[#12100E]/10 rounded-3xl px-8 py-5 text-lg focus:outline-none focus:border-[#FF5A5F]/40 transition-all"
          />
          <button className="bg-[#FF5A5F] text-[#FDFCF0] font-black px-12 py-5 rounded-3xl text-sm uppercase tracking-widest hover:opacity-95 transition-all shadow-xl shadow-coral/20">
            JOIN
          </button>
        </form>
      </section>

      <footer className="py-16 text-center border-t border-[#12100E]/5">
        <p className="text-xs font-bold tracking-[0.4em] text-[#12100E]/20 uppercase">
          &copy; {new Date().getFullYear()} Alexthegemini &bull; Nigeria &bull; Visual & Audio Artist
        </p>
      </footer>
    </div>
  );
}
