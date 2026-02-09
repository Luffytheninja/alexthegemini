"use client";

import { useState } from "react";
import { Play, Pause, Disc } from "lucide-react";

interface Track {
    id: string;
    title: string;
    type: string;
    duration: string;
    spotifyId: string;
    art: string;
}

const tracks: Track[] = [
    {
        id: "1",
        title: "HOT BO1 (w. Yo$hinoya)",
        type: "LATEST SINGLE",
        duration: "3:12",
        spotifyId: "3Wbkuzl1Ha7fBw77p15Lzw",
        art: "https://images.unsplash.com/photo-1621112904887-419379ce6824?q=80&w=1000&auto=format&fit=crop",
    },
    {
        id: "2",
        title: "Agbada",
        type: "SINGLE",
        duration: "2:54",
        spotifyId: "3Wbkuzl1Ha7fBw77p15Lzw",
        art: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=1000&auto=format&fit=crop",
    },
    {
        id: "3",
        title: "Sons of God",
        type: "SINGLE",
        duration: "3:01",
        spotifyId: "3Wbkuzl1Ha7fBw77p15Lzw",
        art: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=1000&auto=format&fit=crop",
    }
];

export default function ArtistPlayer() {
    const [currentTrack, setCurrentTrack] = useState(tracks[0]);
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className="w-full space-y-8">
            {/* Minimal Playing Indicator */}
            <div className="flex items-center gap-4 bg-[#222222]/5 p-4 rounded-2xl border border-[#222222]/5">
                <div className="w-12 h-12 rounded-xl overflow-hidden relative">
                    <img src={currentTrack.art} alt={currentTrack.title} className="w-full h-full object-cover" />
                    {isPlaying && (
                        <div className="absolute inset-0 bg-[#FF5A5F]/40 flex items-center justify-center">
                            <Disc className="text-white animate-spin-slow w-6 h-6" />
                        </div>
                    )}
                </div>
                <div className="flex-1">
                    <h4 className="font-bold text-sm truncate">{currentTrack.title}</h4>
                    <p className="text-[10px] text-[#222222]/60 font-bold uppercase tracking-widest">{currentTrack.type}</p>
                </div>
                <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-10 h-10 bg-[#222222] text-white rounded-full flex items-center justify-center hover:bg-[#FF5A5F] transition-colors"
                >
                    {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" className="ml-0.5" />}
                </button>
            </div>

            {/* Simple Tracklist */}
            <div className="space-y-2">
                <h5 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#222222]/40 mb-3 ml-1">Discography</h5>
                {tracks.map((track) => (
                    <div
                        key={track.id}
                        onClick={() => setCurrentTrack(track)}
                        className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all ${currentTrack.id === track.id ? "bg-[#FF5A5F]/5 text-[#FF5A5F]" : "hover:bg-[#222222]/5"}`}
                    >
                        <span className="text-xs font-bold truncate max-w-[150px]">{track.title}</span>
                        <span className="text-[10px] font-bold text-[#222222]/40">{track.duration}</span>
                    </div>
                ))}
            </div>

            <a
                href={`https://open.spotify.com/artist/${currentTrack.spotifyId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-2 text-xs font-bold border-b-2 border-[#222222]/10 pb-1 w-fit hover:border-[#FF5A5F] hover:text-[#FF5A5F] transition-all"
            >
                Open Artist Spotify
            </a>
        </div>
    );
}

