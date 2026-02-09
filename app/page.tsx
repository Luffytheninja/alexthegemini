"use client";

import { useState, useRef } from "react";
import Hero from "@/components/Hero";
import AudioControls from "@/components/AudioControls";
import About from "@/components/About";
import ContentGrid from "@/components/ContentGrid";
import ConnectSection from "@/components/ConnectSection";

export default function Home() {
  const [audioRef, setAudioRef] = useState<React.RefObject<HTMLAudioElement | null> | null>(null);

  const handleEnter = (ref: React.RefObject<HTMLAudioElement | null>) => {
    setAudioRef(ref);
  };

  return (
    <main className="bg-black min-h-screen selection:bg-white selection:text-black">
      {/* Immersive Entry Flow & Hero */}
      <Hero onEnter={handleEnter} />

      {/* Floating Audio Controls (Mounts once audio starts) */}
      {audioRef && <AudioControls audioRef={audioRef} />}

      {/* Sequential Artist Sections */}
      <div className="relative z-10">
        <About />
        <ContentGrid />
        <ConnectSection />
      </div>

      {/* Background Ambience Layer (Optional subtle noise can go here) */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03] mix-blend-screen bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </main>
  );
}
