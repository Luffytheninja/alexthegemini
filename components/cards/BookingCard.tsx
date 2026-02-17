"use client";

export default function BookingCard() {
  return (
    <a 
      href="https://x.com/Al3xtheg3mini"
      target="_blank"
      rel="noopener noreferrer"
      className="bento-card h-full p-6 flex flex-col items-center justify-center group relative overflow-hidden bg-accent"
    >
      <div className="absolute inset-0 bg-charcoal translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
      <span className="relative z-10 text-xs font-black uppercase tracking-[0.4em] text-charcoal group-hover:text-accent transition-colors duration-500">
        Book Me
      </span>
    </a>
  );
}
