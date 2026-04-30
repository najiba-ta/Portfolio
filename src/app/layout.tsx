import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import NoiseOverlay from "@/components/NoiseOverlay";

import ScrollProgress from "@/components/ScrollProgress";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Najiba Takarrum | Frontend Developer | React & Next.js Expert",
  description: "Specializing in high-performance React and Next.js applications. Transforming complex requirements into elegant, interactive frontend solutions.",
};

import { ThemeProvider } from "@/components/ThemeProvider";
import BackgroundOrbs from "@/components/BackgroundOrbs";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${spaceGrotesk.variable} ${inter.variable} bg-background font-body-md text-on-surface selection:bg-primary-container selection:text-white antialiased transition-colors duration-500`}>
        <ThemeProvider>
          <ScrollProgress />
          <CustomCursor />
          <NoiseOverlay />
          <AnimatedBackground />
          <BackgroundOrbs />
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
