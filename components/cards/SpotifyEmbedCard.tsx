"use client";

export default function SpotifyEmbedCard({ embedId }: { embedId: string }) {
  return (
    <div className="bento-card h-full overflow-hidden bg-[#121212]">
      <iframe
        style={{ borderRadius: "0px" }}
        src={`https://open.spotify.com/embed/album/${embedId}?utm_source=generator&theme=0`}
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen={false}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="opacity-80 hover:opacity-100 transition-opacity duration-500"
      ></iframe>
    </div>
  );
}
