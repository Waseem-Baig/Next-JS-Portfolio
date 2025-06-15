import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://waseembaig.me"),
  title: "Waseem's Portfolio",
  description:
    "Waseem Baig's personal portfolio showcasing skills, projects, and experiences.",
  keywords: [
    "Waseem Baig",
    "Portfolio",
    "Full Stack Developer",
    "Web Developer",
    "React",
    "Next.js",
    "Projects",
    "Software Engineer",
  ],
  authors: [{ name: "Waseem Baig" }],
  openGraph: {
    title: "Waseem's Portfolio",
    description:
      "Waseem Baig's personal portfolio showcasing skills, projects, and experiences.",
    url: "https://waseembaig.me",
    siteName: "Waseem's Portfolio",
    images: [
      {
        url: "/myPic.jpg",
        width: 1200,
        height: 630,
        alt: "Waseem Baig Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Waseem's Portfolio",
    description:
      "Waseem Baig's personal portfolio showcasing skills, projects, and experiences.",
    images: ["/myPic.jpg"],
    creator: "@WaseemB14268619",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://waseembaig.me" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll `}>
        <StarsCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
