"use client";

import { Instagram, Twitter, Music, AppWindow } from "lucide-react";
import { motion } from "framer-motion";

const icons = {
  Instagram: Instagram,
  Twitter: Twitter,
  Spotify: Music,
  Ixximob: AppWindow,
};

export default function SocialCard({ name, href }: { name: string; href: string }) {
  const Icon = icons[name as keyof typeof icons] || AppWindow;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bento-card h-full p-6 flex flex-col items-center justify-center gap-3 transition-transform hover:scale-[1.05]"
    >
      <div className="w-10 h-10 flex items-center justify-center text-smoke/40 group-hover:text-accent transition-colors">
        <Icon size={24} />
      </div>
      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-smoke/40">
        {name}
      </span>
    </a>
  );
}
