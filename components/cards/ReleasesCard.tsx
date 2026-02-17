"use client";

import { releases } from "@/lib/content";
import { ArrowUpRight } from "lucide-react";

export default function ReleasesCard() {
  return (
    <div className="bento-card h-full p-8 md:p-12 space-y-12">
      <div className="flex justify-between items-end">
        <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-smoke/40">
          Full Catalog
        </h3>
        <a 
          href="https://open.spotify.com/artist/3Wbkuzl1Ha7fBw77p15Lzw" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[10px] font-black uppercase tracking-[0.2em] text-accent hover:opacity-50 transition-opacity flex items-center gap-2"
        >
          View All <ArrowUpRight size={12} />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
        {releases.map((release) => (
          <a
            key={release.id}
            href={`https://open.spotify.com/track/${release.spotifyEmbedId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between py-4 border-b border-white/5 hover:border-accent/40 transition-colors"
          >
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-bold text-smoke/20 w-4">
                0{release.id}
              </span>
              <span className="text-sm font-black uppercase tracking-tight text-smoke group-hover:text-accent transition-colors">
                {release.title}
              </span>
            </div>
            <div className="flex items-center gap-6">
               <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-smoke/20 hidden sm:block">
                {release.type}
              </span>
              <span className="text-[8px] font-bold text-smoke/20">
                {release.year}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
