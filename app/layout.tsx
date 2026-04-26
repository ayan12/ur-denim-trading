import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const SITE_URL = "https://urdenimtradingindo.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "UR DENIM TRADING INDO — Premium Denim Manufacturer & Exporter",
    template: "%s | UR DENIM TRADING INDO",
  },
  description:
    "UR DENIM TRADING INDO is a trusted Indonesian denim supplier specializing in premium raw, selvage, Japanese and custom denim for global fashion brands and exporters.",
  keywords: [
    "denim manufacturer",
    "denim supplier indonesia",
    "selvage denim",
    "raw denim",
    "japanese denim",
    "custom denim",
    "denim export",
    "UR Denim",
    "UR Denim Trading Indo",
  ],
  authors: [{ name: "UR DENIM TRADING INDO" }],
  creator: "UR DENIM TRADING INDO",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "UR DENIM TRADING INDO",
    title: "UR DENIM TRADING INDO — Premium Denim Manufacturer & Exporter",
    description:
      "Premium raw, selvage, Japanese and custom denim — crafted in Indonesia, shipped worldwide.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "UR DENIM TRADING INDO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UR DENIM TRADING INDO",
    description:
      "Premium raw, selvage, Japanese and custom denim — crafted in Indonesia, shipped worldwide.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0E18",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        {/* Skip link for accessibility */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded focus:bg-accent focus:px-4 focus:py-2 focus:text-ink-900"
        >
          Skip to content
        </a>

        <Loader />
        <Navbar />
        <main id="main" className="relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
