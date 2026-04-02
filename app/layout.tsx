import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "MSCE",
  description: "Mimari projeleri titizlikle planlayarak, inovasyonu ve dürüstlüğü bir araya getirip, güçlü mühendislik temelleri üzerine inşa etmek.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#EEECE2] text-[#262827] relative selection:bg-[#262827] selection:text-[#EEECE2]">
        <div className="fixed inset-0 z-0 bg-grid-pattern pointer-events-none"></div>
        <Navbar />
        <main className="flex-1 flex flex-col z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
