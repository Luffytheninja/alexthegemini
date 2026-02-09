"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import SocialLinks from "@/components/SocialLinks";
import ArtistPlayer from "@/components/ArtistPlayer";
import { Star, MapPin, Share, Heart, Play } from "lucide-react";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-[#FFFBFB] text-[#222222] selection:bg-[#FF5A5F] selection:text-white">

      {/* Navigation Bar (Airbnb Style) */}
      <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-[#222222]/5 px-6 md:px-12 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#FF5A5F] rounded-lg flex items-center justify-center text-white font-black text-xs">A</div>
          <span className="font-bold tracking-tight text-xl">Alexthegemini</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold">
          <a href="#projects" className="hover:text-[#FF5A5F] transition-colors">Projects</a>
          <a href="#player" className="hover:text-[#FF5A5F] transition-colors">Listen</a>
          <a href="#contact" className="hover:text-[#FF5A5F] transition-colors">Contact</a>
        </div>
        <button
          onClick={() => window.open('https://open.spotify.com/artist/3Wbkuzl1Ha7fBw77p15Lzw', '_blank')}
          className="px-6 py-2.5 bg-[#FF5A5F] text-white text-sm font-bold rounded-full hover:shadow-lg transition-all active:scale-95"
        >
          Stream Now
        </button>
      </nav>

      <main className="max-w-7xl mx-auto px-6 md:px-12 py-8 space-y-16">

        {/* Header Section */}
        <div className="space-y-4">
          <h1 className="text-3xl md:text-5xl font-black tracking-tight">Experience Gemini World</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-[#222222]/60">
            <div className="flex items-center gap-1">
              <Star size={16} className="text-[#FF5A5F] fill-[#FF5A5F]" />
              <span className="text-[#222222] font-bold">5.0</span>
              <span>(Artist Rating)</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin size={16} />
              <span className="underline">Lagos, Nigeria</span>
            </div>
            <div className="ml-auto flex items-center gap-6">
              <button className="flex items-center gap-2 hover:bg-[#222222]/5 px-3 py-1 rounded-lg transition-all underline">
                <Share size={16} /> Share
              </button>
              <button className="flex items-center gap-2 hover:bg-[#222222]/5 px-3 py-1 rounded-lg transition-all underline">
                <Heart size={16} /> Save
              </button>
            </div>
          </div>
        </div>

        {/* Hero Gallery (Airbnb Style) - NO VIDEOS */}
        <section className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 h-[60vh] gap-3 rounded-[2rem] overflow-hidden">
          <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden bg-[#222222]/5">
            <img
              src="https://images.unsplash.com/photo-1621112904887-419379ce6824?q=80&w=2000&auto=format&fit=crop"
              alt="Alexthegemini Featured Visual"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="relative group overflow-hidden bg-[#222222]/5">
            <img
              src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=1000&auto=format&fit=crop"
              alt="Visual 1"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="relative group overflow-hidden bg-[#222222]/5 rounded-tr-[2rem]">
            <img
              src="https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=1000&auto=format&fit=crop"
              alt="Visual 2"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="relative group overflow-hidden bg-[#222222]/5">
            <img
              src="https://images.unsplash.com/photo-1514525253344-f814d0747115?q=80&w=1000&auto=format&fit=crop"
              alt="Visual 3"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="relative group overflow-hidden bg-[#222222]/5 rounded-br-[2rem]">
            <img
              src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1000&auto=format&fit=crop"
              alt="Visual 4"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <button className="absolute bottom-6 right-6 px-4 py-2 bg-white border border-[#222222] rounded-lg text-sm font-bold shadow-sm hover:bg-[#F7F7F7] transition-all">
              Show all photos
            </button>
          </div>
        </section>

        {/* Overview Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-12">

            {/* Host Info */}
            <div className="flex items-center justify-between pb-8 border-b border-[#222222]/10">
              <div className="space-y-1">
                <h2 className="text-2xl font-bold">Creative hosted by Alexthegemini</h2>
                <p className="text-[#222222]/60">Music &bull; Visual Art &bull; 5 years experience</p>
              </div>
              <div className="w-14 h-14 rounded-full bg-[#222222]/5 overflow-hidden border border-[#222222]/10">
                <img src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=500&auto=format&fit=crop" alt="Artist" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Features */}
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="pt-1"><Star size={24} /></div>
                <div>
                  <h4 className="font-bold">Highly Rated</h4>
                  <p className="text-[#222222]/60">Alexthegemini has consistent 5-star reviews on all collaborative projects.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="pt-1"><MapPin size={24} /></div>
                <div>
                  <h4 className="font-bold">Lagos Heritage</h4>
                  <p className="text-[#222222]/60">Every visual drop is infused with the vibrant energy of the Lagos alté scene.</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-[#222222]/10">
              <p className="text-lg leading-relaxed text-[#222222]/80">
                Alexthegemini is an Alternative Afrobeat and Visual Artist based in Nigeria. His work explores the duality of sound and sight, merging experimental rhythms with high-fidelity visual storytelling. Step into the Gemini World and experience the next era of African excellence.
              </p>
            </div>

            {/* Projects Grid (No iframes) */}
            <section id="projects" className="pt-16 space-y-8">
              <h3 className="text-2xl font-bold">Featured Projects</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3 cursor-pointer group">
                  <div className="aspect-video airbnb-card overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold">HOT BO1 Visual Series</h4>
                      <p className="text-sm text-[#222222]/60">Experimental Visuals</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star size={12} className="fill-current" />
                      <span className="text-sm font-bold">5.0</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-3 cursor-pointer group">
                  <div className="aspect-video airbnb-card overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold">Gemini World Archive</h4>
                      <p className="text-sm text-[#222222]/60">Digital Photography</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star size={12} className="fill-current" />
                      <span className="text-sm font-bold">5.0</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar Area (Airbnb Style Booking/Listening) */}
          <aside className="lg:col-span-4">
            <div id="player" className="sticky top-28 p-8 airbnb-card border-[#222222]/10 space-y-6">
              <div className="flex items-end gap-2">
                <span className="text-2xl font-black">STREAM</span>
                <span className="text-lg font-medium text-[#222222]/60">v1.2</span>
              </div>

              <div className="pt-4 border-t border-[#222222]/10">
                <ArtistPlayer />
              </div>

              <div className="space-y-4 pt-6">
                <button
                  onClick={() => window.open('https://open.spotify.com/artist/3Wbkuzl1Ha7fBw77p15Lzw', '_blank')}
                  className="w-full py-4 bg-[#FF5A5F] text-white font-bold rounded-2xl shadow-lg hover:opacity-95 transition-opacity active:scale-[0.98]"
                >
                  LISTEN ON SPOTIFY
                </button>
                <button
                  onClick={() => window.open('https://music.apple.com/us/artist/alexthegemini/1473989177', '_blank')}
                  className="w-full py-4 border border-[#222222] font-bold rounded-2xl hover:bg-[#F7F7F7] transition-all active:scale-[0.98]"
                >
                  APPLE MUSIC
                </button>
              </div>

              <div className="text-center pt-4">
                <p className="text-sm text-[#222222]/40 font-medium italic">Gemini World Collective &copy; 2025</p>
              </div>
            </div>
          </aside>
        </div>

        {/* Footer (Airbnb Style) */}
        <footer id="contact" className="pt-24 pb-12 border-t border-[#222222]/10 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <h5 className="font-bold">Follow</h5>
              <div className="flex flex-col gap-2 text-sm font-medium text-[#222222]/60">
                <a href="https://instagram.com/alexthegemini" className="hover:underline">Instagram</a>
                <a href="https://x.com/alexthegemini" className="hover:underline">X / Twitter</a>
                <a href="https://threads.net/alexthegemini" className="hover:underline">Threads</a>
              </div>
            </div>
            <div className="space-y-4">
              <h5 className="font-bold">Network</h5>
              <div className="flex flex-col gap-2 text-sm font-medium text-[#222222]/60">
                <a href="#" className="hover:underline">Gemini Collective</a>
                <a href="#" className="hover:underline">Alté Community</a>
                <a href="#" className="hover:underline">Visual Arts Hub</a>
              </div>
            </div>
            <div className="space-y-4">
              <h5 className="font-bold">Legal</h5>
              <div className="flex flex-col gap-2 text-sm font-medium text-[#222222]/60">
                <a href="#" className="hover:underline">Privacy Policy</a>
                <a href="#" className="hover:underline">Terms of Use</a>
              </div>
            </div>
            <div className="space-y-4 flex flex-col justify-end">
              <SocialLinks />
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[#222222]/5 text-sm font-medium text-[#222222]/60">
            <div className="flex items-center gap-4">
              <span>&copy; {new Date().getFullYear()} Alexthegemini</span>
              <span>&bull;</span>
              <span>Lagos, Nigeria</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
