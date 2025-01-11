import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  // Basic SEO
  title: "CodeHire - Empowering Tech Talent",
  description: "CodeHire: The ultimate platform for technical interviews and skill evaluation.",

  // General
  applicationName: "CodeHire",
  keywords: [
    "CodeHire",
    "technical interviews",
    "coding assessments",
    "developer hiring",
    "programming challenges",
  ],
  authors: { name: "Kamlesh Sahani", url: "https://www.linkedin.com/in/kamlesh-sahani/" },

  // Open Graph (OG) Meta Tags for social sharing
  openGraph: {
    title: "CodeHire - Empowering Tech Talent",
    description: "The ultimate platform for technical interviews and skill evaluation.",
    url: "https://codehire-peach.vercel.app", // Your website URL
    siteName: "CodeHire",
    images: [
      {
        url: "https://codehire-peach.vercel.app/og-image.png", // Replace with your OG image URL
        width: 1200,
        height: 630,
        alt: "CodeHire - Empowering Tech Talent",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter Card Meta Tags
  twitter: {
    card: "summary_large_image",
    site: "@codehire", // Replace with your Twitter handle
    creator: "@kamlesh_sahani", // Your personal Twitter handle
    title: "CodeHire - Empowering Tech Talent",
    description: "The ultimate platform for technical interviews and skill evaluation.",
    images: ["https://codehire-peach.vercel.app/og-image.png"], // Replace with your OG image URL
  },

  // Additional meta tags
  themeColor: "#1f2937", // Primary brand color
  colorScheme: "dark", // Specify dark mode preference
  robots: "index, follow", // Allow search engines to index the page
  alternates: {
    canonical: "https://codehire-peach.vercel.app",
  },

  // Icons
  icons: {
    icon: "/favicon.ico",
    apple: "/og-image.png",
    shortcut: "/favicon-192x192.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col gap-10 h-full">
          <Navbar />
          <div>{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
