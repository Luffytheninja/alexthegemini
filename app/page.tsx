"use client";

import { useState, useRef } from "react";
import Hero from "@/components/Hero";
import AudioControls from "@/components/AudioControls";
import About from "@/components/About";
import ContentGrid from "@/components/ContentGrid";
import ConnectSection from "@/components/ConnectSection";
import LoadingScreen from "@/components/LoadingScreen";
import TopNav from "@/components/TopNav";

export default function Home() {
  const [isEntered, setIsEntered] = useState(false);
  const [audioRef, setAudioRef] = useState<React.RefObject<HTMLAudioElement | null> | null>(null);
  const mainAudioRef = useRef<HTMLAudioElement>(null);

  const handleEnter = () => {
    setIsEntered(true);
    if (mainAudioRef.current) {
      mainAudioRef.current.play();
      setAudioRef(mainAudioRef);
    }
  };

  const handleManualEnter = (ref: React.RefObject<HTMLAudioElement | null>) => {
    setAudioRef(ref);
  };

  if (!isEntered) {
    return (
      <>
        <LoadingScreen onEnter={handleEnter} />
        <audio ref={mainAudioRef} src="/audio/Hot Bo1 (w. Yo$hinoya) 123bpm.mp3" loop />
      </>
    );
  }

  return (
    <main className="bg-white w-full min-h-screen selection:bg-coral-blue selection:text-white">
      <TopNav />
      <Hero onEnter={handleManualEnter} />
      {audioRef && <AudioControls audioRef={audioRef} />}
      <About />
      <ContentGrid />
      <ConnectSection />
    </main>
  );
}
