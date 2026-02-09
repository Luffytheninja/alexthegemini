"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-[#222222]/5 px-6 md:px-12 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-[#FF5A5F] rounded-lg flex items-center justify-center text-white font-black text-xs">A</div>
                    <span className="font-bold tracking-tight text-xl">Alexthegemini</span>
                </Link>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8 text-sm font-semibold">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="hover:text-[#FF5A5F] transition-colors"
                    >
                        {link.name}
                    </Link>
                ))}
                <button
                    onClick={() => window.open('https://open.spotify.com/artist/3Wbkuzl1Ha7fBw77p15Lzw', '_blank')}
                    className="glass-button !rounded-full !py-2.5"
                >
                    Stream Now
                </button>
            </div>

            {/* Mobile Burger Menu Button */}
            <button
                className="md:hidden p-2 text-[#222222]"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Menu"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-white border-b border-[#222222]/5 p-6 flex flex-col gap-4 md:hidden shadow-xl"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-lg font-bold hover:text-[#FF5A5F] transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <button
                            onClick={() => {
                                window.open('https://open.spotify.com/artist/3Wbkuzl1Ha7fBw77p15Lzw', '_blank');
                                setIsOpen(false);
                            }}
                            className="glass-button w-full mt-2"
                        >
                            Stream Now
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
