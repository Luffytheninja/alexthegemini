"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Globe, Disc } from "lucide-react";

interface Track {
    id: string;
    title: string;
    type: string;
    duration: string;
    spotifyId?: string;
    art: string;
    description: string;
}

const tracks: Track[] = [
    {
        id: "1",
        title: "Hot Bo1 (w. Yo$hinoya)",
        type: "LATEST SINGLE",
        duration: "3:12",
        art: "https://images.unsplash.com/photo-1621112904887-419379ce6824?q=80&w=1000&auto=format&fit=crop",
        description: "The flagship visual and sonic declaration of the new era. Experimental excellence in every beat."
    },
    {
        id: "2",
        title: "Gemini World",
        type: "SINGLE",
        duration: "2:45",
        art: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=1000&auto=format&fit=crop",
        description: "A deep dive into the dual nature of the gemini. Melodic, haunting, and undeniably warm."
    }
];

export default function ArtistPlayer() {
    const [currentTrack, setCurrentTrack] = useState(tracks[0]);
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className="w-full flex flex-col gap-12 text-[#12100E]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                {/* Main Display */}
                <div className="lg:col-span-5 flex flex-col gap-8">
                    <div className="relative aspect-video w-full bg-[#12100E]/5 rounded-3xl overflow-hidden group border border-[#12100E]/10">
                        <motion.div
                            key={currentTrack.id}
                            initial={{ scale: 1.1, opacity: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${currentTrack.art})` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#12100E]/40 via-transparent to-transparent" />

                        <div className="absolute inset-0 flex items-center justify-center">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setIsPlaying(!isPlaying)}
                                className="w-20 h-20 bg-[#FF5A5F] text-[#FDFCF0] flex items-center justify-center rounded-full shadow-2xl"
                            >
                                {isPlaying ? <Pause size={32} fill="currentColor" /> : <Play size={32} fill="currentColor" className="ml-1" />}
                            </motion.button>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex justify-between items-end">
                            <div>
                                <span className="text-[#FF5A5F] text-[10px] font-bold tracking-[0.2em] uppercase mb-1 block">
                                    {currentTrack.type}
                                </span>
                                <h3 className="text-4xl font-black uppercase tracking-tighter leading-none">
                                    {currentTrack.title}
                                </h3>
                            </div>
                            <div className="text-right pb-1">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-[#12100E]/40">
                                    {currentTrack.duration} / LATEST
                                </p>
                            </div>
                        </div>

                        <p className="text-lg text-[#12100E]/70 font-medium leading-relaxed max-w-md">
                            {currentTrack.description}
                        </p>

                        <div className="flex gap-4 pt-4">
                            <button className="flex-1 bg-[#12100E] text-[#FDFCF0] py-4 rounded-2xl text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-opacity">
                                LISTEN ON SPOTIFY
                            </button>
                            <button className="w-14 h-14 flex items-center justify-center border border-[#12100E]/10 rounded-2xl hover:bg-[#12100E]/5 transition-colors">
                                <Globe size={20} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Tracklist */}
                <div className="lg:col-span-7 flex flex-col gap-3">
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#12100E]/30 mb-2 ml-2">Discography</h4>
                    {tracks.map((track, index) => (
                        <motion.div
                            key={track.id}
                            onClick={() => setCurrentTrack(track)}
                            className={`group flex items-center justify-between p-5 rounded-3xl cursor-pointer transition-all border ${currentTrack.id === track.id
                                ? "bg-[#12100E]/5 border-[#12100E]/10"
                                : "bg-transparent border-transparent hover:bg-[#12100E]/2"
                                }`}
                        >
                            <div className="flex items-center gap-6">
                                <span className={`text-xs font-bold ${currentTrack.id === track.id ? "text-[#FF5A5F]" : "text-[#12100E]/20"}`}>
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <div className="w-16 h-16 rounded-2xl overflow-hidden bg-[#12100E]/10 relative">
                                    <img src={track.art} alt={track.title} className="w-full h-full object-cover" />
                                    {currentTrack.id === track.id && isPlaying && (
                                        <div className="absolute inset-0 bg-[#FF5A5F]/60 flex items-center justify-center">
                                            <Disc className="text-[#FDFCF0] animate-spin-slow" />
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <h4 className={`text-lg font-bold uppercase tracking-tight ${currentTrack.id === track.id ? "text-[#12100E]" : "text-[#12100E]/60 text-base"}`}>
                                        {track.title}
                                    </h4>
                                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#12100E]/30 mt-0.5">
                                        {track.type}
                                    </p>
                                </div>
                            </div>
                            <div className="hidden md:flex items-center gap-6">
                                <span className="text-[10px] font-bold text-[#12100E]/40">{track.duration}</span>
                                {currentTrack.id === track.id ? (
                                    <div className="w-8 h-8 bg-[#FF5A5F] rounded-full flex items-center justify-center">
                                        <Play size={14} fill="#FDFCF0" className="text-[#FDFCF0] ml-0.5" />
                                    </div>
                                ) : (
                                    <div className="w-8 h-8 rounded-full border border-[#12100E]/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Play size={14} className="text-[#12100E]/40" />
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
