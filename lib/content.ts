export interface Release {
    id: number;
    title: string;
    type: "Album" | "EP" | "Single";
    year: string;
    spotifyEmbedId: string;
    funLine: string;
}

export const releases: Release[] = [
    {
        id: 1,
        title: "O.L.B - V3rt1go",
        type: "EP",
        year: "2025",
        spotifyEmbedId: "0ZdMYcvT0IgXKIj4TZEdEk",
        funLine: "5 tracks. Zero skips. You're welcome. 🎯",
    },
    {
        id: 2,
        title: "Obsessive Loverboy",
        type: "Album",
        year: "2025",
        spotifyEmbedId: "2bPfSklUxOmWzIdCSTfpA8",
        funLine: "7 songs about feelings I'll never admit to having 💀",
    },
    {
        id: 3,
        title: "Kilishi",
        type: "Single",
        year: "2025",
        spotifyEmbedId: "1TvS8322ifVS4YwmxypT0n",
        funLine: "Named after the snack. Just as addictive. 🥩",
    },
    {
        id: 4,
        title: "Yaba",
        type: "Single",
        year: "2025",
        spotifyEmbedId: "7g1KTbSmbIFOL8Ht8J5vBX",
        funLine: "Lagos energy in one track. Press play abeg. 🏙️",
    },
    {
        id: 5,
        title: "Cupid",
        type: "Single",
        year: "2024",
        spotifyEmbedId: "1OOxDNpWPeUu5veaGt4glS",
        funLine: "Love is chaos. This is the soundtrack. 💘",
    },
];
