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
  title: "Alexthegemini - Alternative Afrobeat Artist | Lagos",
  description: "Visual & audio artist blending experimental rhythms with high-fidelity visual storytelling. Experience Gemini World.",
  openGraph: {
    title: "Alexthegemini - Alternative Afrobeat",
    description: "Explore the audio-visual world of Alexthegemini.",
    type: "website",
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alexthegemini",
    description: "Lagos-based Alternative Afrobeat & Visual Artist",
  }
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
