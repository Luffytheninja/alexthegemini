"use client";

export default function BioCard() {
  return (
    <div className="bento-card h-full p-8 flex flex-col justify-between">
      <div className="space-y-6">
        <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent/60">
          The Philosophy
        </h3>
        <p className="text-xl md:text-2xl font-medium tracking-tight leading-[1.3] text-smoke">
          "He romanticizes everyday life — the mundane becomes cinematic, the familiar becomes poetic. Most production happens on mobile. No studio ego. Just ideas."
        </p>
      </div>
      
      <div className="mt-8 border-t border-white/5 pt-6 text-sm text-smoke/40 leading-relaxed italic">
        Afrobeats-rooted but allergic to staying in one lane. The sound bounces between soul-sampled instrumentals, melodic trap, underground rage, and experimental loop-chopping.
      </div>
    </div>
  );
}
