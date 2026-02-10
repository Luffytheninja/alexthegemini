# Alexthegemini (Studio Edition v2.4)

An intentional brutalist portfolio for Lagos-based music producer and artist, **Alex the Gemini**. Designed with an editorial "Studio" aesthetic, featuring massive typography, fluid layouts, and high-contrast visuals.

## 🎨 Design Philosophy
- **Intentional Brutalism**: Raw, structural, but premium.
- **Fluid Typography**: `clamp()` based scaling for massive headers (`12vw` - `20rem`).
- **Gallery Frame**: A consistent `px-[5vw]` padding wrapper (responsive `px-6` on mobile).
- **Monochrome**: Strict Black & White palette with subtle "breathing" gradients.
- **Micro-Interactions**: Floating "Pill" audio player, hover reveals, and magnetic cursors.

## 🛠️ Tech Stack
- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Font**: Space Grotesk (Headings) + Inter (Body) via `next/font`

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open:** [http://localhost:3000](http://localhost:3000)

## 📂 Project Structure
- `app/globals.css`: Tailwind v4 theme configuration & custom animations.
- `components/Hero.tsx`: Massive entry screen with audio interaction.
- `components/AudioControls.tsx`: Floating "Pill" player with marquee.
- `components/ContentGrid.tsx`: Editorial list layout for music releases.
- `components/About.tsx`: Magazine-style 2-column grid layout.

## 📜 License
© 2026 Alexthegemini. All rights reserved.
