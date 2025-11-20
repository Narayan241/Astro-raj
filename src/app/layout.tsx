import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Providers from "@/components/Providers";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Pandit Rajkumar Ji - World-Famous Vedic Astrologer",
  description: "Accurate predictions, trusted remedies, and Vedic expertise from Pandit Rajkumar Ji with 25+ years of experience in Vedic astrology.",
  keywords: ["Vedic astrology", "Pandit Rajkumar Ji", "Kundli reading", "Astrology consultation", "Vedic remedies", "Indian astrology"],
  authors: [{ name: "Pandit Rajkumar Ji" }],
  openGraph: {
    title: "Pandit Rajkumar Ji - World-Famous Vedic Astrologer",
    description: "Accurate predictions, trusted remedies, and Vedic expertise with 25+ years of experience.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased bg-slate-900 text-foreground`}
      >
        <Providers>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
