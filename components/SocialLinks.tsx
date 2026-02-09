import { Instagram, Music, Twitter } from "lucide-react";
import Link from "next/link";

export default function SocialLinks() {
    const links = [
        {
            name: "Apple Music",
            href: "https://music.apple.com/us/artist/alexthegemini/1473989177",
            icon: <Music className="w-6 h-6" />,
            color: "hover:text-pink-500",
        },
        {
            name: "Spotify",
            href: "https://open.spotify.com/artist/3Wbkuzl1Ha7fBw77p15Lzw",
            icon: <span className="text-xl font-bold">≈</span>, // Custom or use an icon if available, generic Music icon used for Apple
            color: "hover:text-green-500",
        },
        {
            name: "Instagram",
            href: "https://www.instagram.com/al3x_3do/",
            icon: <Instagram className="w-6 h-6" />,
            color: "hover:text-purple-500",
        },
        {
            name: "X",
            href: "https://x.com/Al3xtheg3mini",
            icon: <Twitter className="w-6 h-6" />,
            color: "hover:text-blue-400",
        },
    ];

    return (
        <div className="flex gap-8">
            {links.map((link) => (
                <Link
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#222222]/40 hover:text-[#FF5A5F] transition-colors"
                    aria-label={link.name}
                >
                    {link.icon}
                </Link>
            ))}
        </div>
    );
}
