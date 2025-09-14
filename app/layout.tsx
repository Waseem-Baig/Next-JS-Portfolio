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
    "Waseem Baig is a passionate Software Developer from VIT AP, India, specializing in modern web technologies like React, Next.js, and Three.js. With a strong background in UI/UX design, cloud integration, and open source contributions, Waseem creates engaging, responsive, and visually stunning web applications. Explore his portfolio to discover innovative projects, interactive 3D models, and a commitment to delivering high-quality software solutions.",
  keywords: [
    "Waseem",
    "VIT AP",
    "India",
    "Waseem Baig",
    "Portfolio",
    "Full Stack Developer",
    "Web Developer",
    "React",
    "Next.js",
    "Projects",
    "Software Engineer",
    "JavaScript",
    "TypeScript",
    "Frontend Developer",
    "Backend Developer",
    "UI/UX Designer",
    "Tailwind CSS",
    "Three.js",
    "Framer Motion",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "Prisma",
    "Docker",
    "Git",
    "Open Source",
    "Personal Website",
    "Tech Portfolio",
    "Coding",
    "Programming",
    "Software Projects",
    "Responsive Design",
    "3D Models",
    "Contact Form",
    "SEO",
    "Animation",
    "Modern Web Development",
    "Cloud",
    "API Integration",
    "EmailJS",
    "Formspree",
  ],
  authors: [{ name: "Waseem Baig" }],
  openGraph: {
    title: "Waseem's Portfolio",
    description:
      "Explore the portfolio of Waseem Baig, a Full Stack Developer and UI/UX enthusiast from VIT AP, India. Discover his expertise in React, Next.js, Three.js, cloud technologies, and open source, along with a showcase of innovative projects and interactive experiences.",
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
      "Portfolio of Waseem Baig, Full Stack Developer, UI/UX Designer, and technology enthusiast. Discover his work in web development, 3D models, cloud, and open source projects.",
    images: ["/myPic.jpg"],
    creator: "@WaseemB14268619",
  },
  icons: {
    icon: "./favicon.ico",
    shortcut: "./favicon.ico",
    apple: "./favicon.ico",
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
