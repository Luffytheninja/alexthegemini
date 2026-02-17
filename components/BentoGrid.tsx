"use client";

import { motion } from "framer-motion";
import HeroCard from "./cards/HeroCard";
import NowPlayingCard from "./cards/NowPlayingCard";
import PhotoCard from "./cards/PhotoCard";
import BioCard from "./cards/BioCard";
import SpotifyEmbedCard from "./cards/SpotifyEmbedCard";
import SocialCard from "./cards/SocialCard";
import LocationCard from "./cards/LocationCard";
import BookingCard from "./cards/BookingCard";
import ReleasesCard from "./cards/ReleasesCard";

interface BentoGridProps {
  audioRef: React.RefObject<HTMLAudioElement | null>;
  isGlobalPlaying: boolean;
  onPlayToggle: () => void;
}

export default function BentoGrid({ audioRef, isGlobalPlaying, onPlayToggle }: BentoGridProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] as any } }
  };

  return (
    <div className="max-w-7xl mx-auto iPhone-safe-padding py-8 md:py-16">
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 auto-rows-[160px] md:auto-rows-[180px]"
      >
        {/* Row 1 */}
        <motion.div variants={item} className="col-span-2 md:col-span-2 row-span-2">
          <HeroCard />
        </motion.div>
        
        <motion.div variants={item} className="col-span-1 md:col-span-1 row-span-2">
          <NowPlayingCard 
            audioRef={audioRef} 
            isGlobalPlaying={isGlobalPlaying} 
            onPlayToggle={onPlayToggle} 
          />
        </motion.div>

        <motion.div variants={item} className="col-span-1 md:col-span-1 row-span-2">
          <PhotoCard />
        </motion.div>

        {/* Desktop Socials / Mobile middle row */}
        <motion.div variants={item} className="col-span-1 row-span-1">
          <SocialCard name="Instagram" href="https://instagram.com/al3xtheg3mini" />
        </motion.div>

        <motion.div variants={item} className="col-span-1 row-span-1">
          <SocialCard name="Twitter" href="https://x.com/al3xtheg3mini" />
        </motion.div>

        {/* Row 2/3 */}
        <motion.div variants={item} className="col-span-2 md:col-span-2 row-span-2">
          <BioCard />
        </motion.div>

        <motion.div variants={item} className="col-span-2 md:col-span-2 row-span-3 lg:row-span-2">
          <SpotifyEmbedCard embedId="0ZdMYcvT0IgXKIj4TZEdEk" />
        </motion.div>

        <motion.div variants={item} className="col-span-1 row-span-1">
          <BookingCard />
        </motion.div>

        <motion.div variants={item} className="col-span-1 row-span-1">
          <LocationCard />
        </motion.div>

        {/* Additional Socials */}
        <motion.div variants={item} className="col-span-1 row-span-1">
          <SocialCard name="Spotify" href="https://open.spotify.com/artist/3Wbkuzl1Ha7fBw77p15Lzw" />
        </motion.div>

        <motion.div variants={item} className="col-span-1 row-span-1">
          <SocialCard name="Ixximob" href="https://instagram.com/ixximob" />
        </motion.div>

        {/* Bottom Row */}
        <motion.div variants={item} className="col-span-2 md:col-span-4 lg:col-span-6 row-span-auto h-auto">
          <ReleasesCard />
        </motion.div>
      </motion.div>

      {/* Footer Branding */}
      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="mt-16 flex justify-between items-center text-[8px] font-black uppercase tracking-[0.5em] text-smoke/20 px-4"
      >
        <span>&copy; 2026 Alexthegemini</span>
        <span>Alté / Lagos / Nigeria</span>
      </motion.footer>
    </div>
  );
}
