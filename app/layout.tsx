import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Alexthegemini - Music Producer, Artist | Lagos",
  description: "Bento-style portfolio of Alexthegemini. Afrobeats-rooted. Genre-fluid. Lagos alté scene.",
  openGraph: {
    title: "Alexthegemini",
    description: "Music Producer • Artist • Songwriter",
    url: "https://alexthegemini.vercel.app",
    type: "website",
    locale: "en_NG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} bg-charcoal`}>
      <body className="antialiased selection:bg-accent selection:text-charcoal bg-charcoal text-white">
        {children}
      </body>
    </html>
  );
}
