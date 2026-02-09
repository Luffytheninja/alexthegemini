import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using Inter for a clean base
import "./globals.css";
import AudioPlayer from "@/components/AudioPlayer";
import VisualEffects from "@/components/VisualEffects";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alexthegemini | Visual & Audio Artist",
  description: "Alternative afrobeat artist and visual artist. Experience the world of Alexthegemini.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen relative bg-black text-white antialiased overflow-x-hidden selection:bg-white selection:text-black`}>
        <VisualEffects />
        <main className="relative z-10 w-full min-h-screen flex flex-col">
          {children}
        </main>
        <AudioPlayer />
      </body>
    </html>
  );
}
