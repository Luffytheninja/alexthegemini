"use client";

import { releases } from "@/lib/content";
import { ArrowUpRight } from "lucide-react";
import Section from './Section';

export default function ContentGrid() {
    return (
        <Section id="music" className="bg-white relative z-10">
            {/* Header */}
            <div className="mb-24 md:mb-32">
                <h2 className="text-[clamp(4rem,15vw,12rem)] font-black text-charcoal tracking-tighter leading-[0.8] uppercase">
                    INDEX
                </h2>
            </div>

            {/* List Layout */}
            <div className="flex flex-col border-t border-charcoal/10">
                {releases.map((release) => (
                    <div
                        key={release.id}
                        className="group relative border-b border-charcoal/10 hover:bg-smoke/50 transition-colors duration-500"
                    >
                        <div className="w-full py-12 md:py-16 flex items-center justify-between">
                            <div className="flex items-center gap-8 md:gap-16">
                                <span className="text-[10px] md:text-sm font-bold text-charcoal/20 w-8">
                                    0{release.id}
                                </span>
                                <h3 className="text-2xl md:text-6xl font-black text-charcoal tracking-tight uppercase group-hover:pl-4 transition-all duration-500">
                                    {release.title}
                                </h3>
                            </div>

                            <div className="flex items-center gap-12 text-right">
                                <span className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-charcoal/40 hidden sm:block">
                                    {release.type}
                                </span>
                                <span className="text-[10px] md:text-sm font-bold text-charcoal/20 hidden sm:block">
                                    {release.year}
                                </span>
                                <ArrowUpRight className="w-6 h-6 md:w-10 md:h-10 text-charcoal/20 group-hover:text-charcoal transition-colors" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Full Index Link */}
            <div className="mt-24 md:mt-32 text-center">
                <a
                    href="https://open.spotify.com/artist/3Wbkuzl1Ha7fBw77p15Lzw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-4 text-sm md:text-xl font-black uppercase tracking-tight text-charcoal hover:opacity-50 transition-opacity"
                >
                    View Full Index on Spotify
                    <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
                </a>
            </div>
        </Section>
    );
}
