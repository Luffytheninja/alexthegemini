export interface Release {
    id: string;
    title: string;
    type: 'SINGLE' | 'EP' | 'ALBUM';
    coverUrl: string;
    spotifyUrl: string;
    appleUrl: string;
}

export interface Video {
    id: string;
    title: string;
    thumbnailUrl: string;
    youtubeId: string;
}

export interface Visual {
    id: string;
    title: string;
    imageUrl: string;
    description: string;
}

export const releases: Release[] = [
    {
        id: 'hot-bo1',
        title: "HOT BO1 (w. Yo$hinoya)",
        type: 'SINGLE',
        coverUrl: 'https://images.unsplash.com/photo-1621112904887-419379ce6824?q=80&w=1000',
        spotifyUrl: 'https://open.spotify.com/track/3Wbkuzl1Ha7fBw77p15Lzw',
        appleUrl: 'https://music.apple.com/us/artist/alexthegemini/1473989177',
    },
    {
        id: 'agbada',
        title: "Agbada",
        type: 'SINGLE',
        coverUrl: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=1000',
        spotifyUrl: 'https://open.spotify.com/artist/3Wbkuzl1Ha7fBw77p15Lzw',
        appleUrl: 'https://music.apple.com/us/artist/alexthegemini/1473989177',
    },
    {
        id: 'sons-of-god',
        title: "Sons of God",
        type: 'SINGLE',
        coverUrl: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=1000',
        spotifyUrl: 'https://open.spotify.com/artist/3Wbkuzl1Ha7fBw77p15Lzw',
        appleUrl: 'https://music.apple.com/us/artist/alexthegemini/1473989177',
    }
];

export const videos: Video[] = [
    {
        id: 'throne-vid',
        title: "THRONE - Official Video",
        thumbnailUrl: 'https://images.unsplash.com/photo-1514525253344-f814d0747115?q=80&w=1000',
        youtubeId: 'kl0UZhETCqA',
    }
];

export const visuals: Visual[] = [
    {
        id: 'gemini-archive',
        title: "Gemini World Archive",
        imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1000',
        description: "A collection of digital captures exploring the duality of Lagos.",
    }
];
