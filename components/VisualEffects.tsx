"use client";

export default function VisualEffects() {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 opacity-20 mix-blend-overlay">
            <div
                className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
        </div>
    );
}
