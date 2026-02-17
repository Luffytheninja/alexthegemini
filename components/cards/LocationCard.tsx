"use client";

import { MapPin } from "lucide-react";

export default function LocationCard() {
  return (
    <div className="bento-card h-full p-6 flex flex-col items-center justify-center gap-3">
      <div className="relative">
        <MapPin size={24} className="text-accent" />
        <div className="absolute top-0 right-0 w-2 h-2 bg-accent rounded-full animate-ping" />
        <div className="absolute top-0 right-0 w-2 h-2 bg-accent rounded-full" />
      </div>
      <div className="text-center">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">Lagos, NG</p>
        <p className="text-[8px] font-bold uppercase tracking-widest text-smoke/20 mt-1">6.5244° N, 3.3792° E</p>
      </div>
    </div>
  );
}
