"use client";

import { useState } from "react";
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
    <main className="bg-white w-full min-h-screen selection:bg-charcoal selection:text-white">
      <Hero onEnter={handleEnter} />
      {audioRef && <AudioControls audioRef={audioRef} />}
      <About />
      <ContentGrid />
      <ConnectSection />
    </main>
  );
}
