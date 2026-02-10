export interface Release {
    id: number;
    title: string;
    type: "Project" | "Single" | "EP";
    year?: string;
    coverUrl: string;
    spotifyUrl: string;
    appleMusicUrl?: string;
}

export interface Visual {
    id: number;
    title: string;
    type: string;
    thumbnailUrl: string;
    linkUrl: string;
    hoverText?: string;
}

export const releases: Release[] = [
    {
        id: 1,
        title: "Brighter Demos",
        type: "Project",
        year: "2022",
        coverUrl: "/images/brighter-demos.jpg",
        spotifyUrl: "https://open.spotify.com/artist/3Wbkuzl1Ha7fBw77p15Lzw",
    },
    {
        id: 2,
        title: "Chicken Licken",
        type: "Single",
        coverUrl: "/images/chicken-licken.jpg",
        spotifyUrl: "https://open.spotify.com/artist/3Wbkuzl1Ha7fBw77p15Lzw",
    },
    {
        id: 3,
        title: "Unique Minded",
        type: "Single",
        coverUrl: "/images/unique-minded.jpg",
        spotifyUrl: "https://open.spotify.com/artist/3Wbkuzl1Ha7fBw77p15Lzw",
    },
];

export const visuals: Visual[] = [
    {
        id: 4,
        title: "Mobile Production Sessions",
        type: "Series",
        thumbnailUrl: "/images/mobile-sessions.jpg",
        linkUrl: "https://instagram.com/al3xtheg3mini",
        hoverText: "Mobile magic 📱",
    },
    {
        id: 5,
        title: "Ixximob Collective",
        type: "Community",
        thumbnailUrl: "/images/ixximob.jpg",
        linkUrl: "https://instagram.com/ixximob",
        hoverText: "The collective 🔥",
    },
    {
        id: 6,
        title: "Behind The Boards",
        type: "Archive",
        thumbnailUrl: "/images/bts.jpg",
        linkUrl: "https://instagram.com/al3xtheg3mini",
        hoverText: "View",
    },
];
