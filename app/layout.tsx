import { Outfit } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SoftBackdrop from "@/components/SoftBackdrop";
import LenisScroll from "@/components/lenis";
import { Metadata } from "next";
import FloatingHearts from "@/components/FloatingHearts";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Pihu - My Lovely Sweetheart",
    template: "%s | Pihu",
  },
  description:
    "Pihu is my lovely sweetheart Girlfriend, a small collection of the moments that mean the most to me, because every moment with you is unforgettable ❤️ Made just for you, with all my love ❤️",
  keywords: [
    "Pihu",
    "PrebuiltUI",
    "digital agency template",
    "Next.js agency website",
    "UI UX agency",
    "startup website template",
    "web development services",
    "design and development agency",
  ],
  authors: [{ name: "PrebuiltUI" }],
  creator: "PrebuiltUI",
  publisher: "PrebuiltUI",

  openGraph: {
    title: "Pihu - My Lovely Sweetheart",
    description:
      "A small collection of the moments that mean the most to me, because every moment with you is unforgettable ❤️ Made just for you, with all my love ❤️",
    siteName: "PrebuiltUI",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Pihu - My Lovely Sweetheart",
    description:
      "A small collection of the moments that mean the most to me, because every moment with you is unforgettable ❤️ Made just for you, with all my love ❤️",
    creator: "@prebuiltui",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-black text-white relative scroll-smooth">
        {/* 💖 Global Hearts Background */}
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <FloatingHearts />
        </div>
        <SoftBackdrop />
        <LenisScroll />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
