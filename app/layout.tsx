import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import './tailwind.css';
import './globals.css';
import './styles/herbal-theme.css';
import './styles/contrast.css';
import './styles/card-visibility-fix.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Analytics } from "./components/Analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adhiron Group | Premium Products",
  description: "Your trusted partner in healthcare, providing premium products for humans and animals.",
  keywords: ["pharmaceutical", "healthcare", "medicine", "veterinary", "Adhiron", "Vetonovia", "health products"],
  authors: [{ name: "Adhiron Group" }],
  creator: "Adhiron Group",
  publisher: "Adhiron Group",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Adhiron Group | Premium Products",
    description: "Your trusted partner in healthcare, providing premium products for humans and animals.",
    url: "https://adhirongroup.com",
    siteName: "Adhiron Group",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adhiron Group | Premium Products",
    description: "Your trusted partner in healthcare, providing premium products for humans and animals.",
    creator: "@adhirongroup",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" }
    ],
    apple: [
      { url: "/favicon.svg", type: "image/svg+xml" }
    ],
    other: [
      { rel: "manifest", url: "/site.webmanifest" }
    ]
  }
};

export const viewport: Viewport = {
  themeColor: "#4361ee",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="msapplication-TileColor" content="#4361ee" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
