import type { Metadata } from "next";
import { Inter, Playfair_Display, Bodoni_Moda, Marcellus } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Nav from "@/components/Nav";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-bodoni",
  display: "swap",
});

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-marcellus",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ronith Komatireddy — Builder. Designer. Problem Solver.",
  description:
    "Personal portfolio of Ronith Komatireddy — full stack developer and creative technologist. Montclair State University, B.S. Computer Science.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${bodoni.variable} ${marcellus.variable}`}>
      <body
        className="font-sans"
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
        suppressHydrationWarning
      >
        <SmoothScroll>
          <div className="grain" aria-hidden="true" />
          <Nav />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
