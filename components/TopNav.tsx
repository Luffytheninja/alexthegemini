"use client";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Music", href: "#music" },
  { label: "Connect", href: "#connect" },
];

export default function TopNav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-coral-blue/20 bg-white/85 backdrop-blur-md">
      <div className="container-padding">
        <div className="container-max flex h-16 items-center justify-between">
          <a href="#" className="font-heading text-xs md:text-sm font-black uppercase tracking-[0.3em] text-charcoal">
            Alex The Gemini
          </a>

          <nav className="flex items-center gap-5 md:gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-charcoal/70 transition-colors hover:text-coral-blue"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#connect"
              className="rounded-full border border-coral-blue px-3 py-1.5 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-coral-blue transition-all hover:bg-coral-blue hover:text-white"
            >
              Book Me
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
