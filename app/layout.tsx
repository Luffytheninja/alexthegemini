import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-body',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-heading',
});

export const metadata: Metadata = {
  title: "Alexthegemini - Music Producer, Beatmaker, Artist | Lagos",
  description: "Afrobeats-rooted. Genre-fluid. Nigerian music producer based in Lagos, part of the alté scene.",
  openGraph: {
    title: "Alexthegemini",
    description: "Music Producer • Beatmaker • Artist",
    url: "https://alexthegemini.vercel.app",
    type: "website",
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alexthegemini",
    description: "Afrobeats-rooted. Genre-fluid. Lagos.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
