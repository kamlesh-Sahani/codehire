import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import Provider from "@/components/ui/ThemeProvider";
import AuthProvider from "@/context/authContext";
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
  description:
    "CodeHire: The ultimate platform for technical interviews and skill evaluation.",

  // General
  applicationName: "CodeHire",
  keywords: [
    "CodeHire",
    "technical interviews",
    "coding assessments",
    "developer hiring",
    "programming challenges",
  ],
  authors: {
    name: "Kamlesh Sahani",
    url: "https://www.linkedin.com/in/kamlesh-sahani/",
  },

  // Open Graph (OG) Meta Tags for social sharing
  openGraph: {
    title: "CodeHire - Empowering Tech Talent",
    description:
      "The ultimate platform for technical interviews and skill evaluation.",
    url: `${process.env.BASE_URL}`, // Your website URL
    siteName: "CodeHire",
  },

  // Twitter Card Meta Tags
  twitter: {
    card: "summary_large_image",
    site: "@codehire", // Replace with your Twitter handle
    creator: "@kamlesh_sahani", // Your personal Twitter handle
    title: "CodeHire - Empowering Tech Talent",
    description:
      "The ultimate platform for technical interviews and skill evaluation.",
  },

  alternates: {
    canonical: `${process.env.BASE_URL}`,
  },

  // Icons
  icons: {
    icon: "/og-image.png",
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
        <Provider
        >
          <AuthProvider >
          <div className="flex flex-col justify-between gap-10  min-h-screen">
            <Navbar></Navbar>
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
          <Toaster></Toaster>
          </AuthProvider>
          
        </Provider>
      </body>
    </html>
  );
}
