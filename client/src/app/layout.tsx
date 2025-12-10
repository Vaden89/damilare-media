import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const droid = localFont({
  src: "../../public/fonts/droid.otf",
  display: "swap",
  variable: "--font-droid",
});

const siteMetaData = {
  title: "Damilare Media",
  description:
    "Damilare Media - Creative and professional Media house capturing life's moments frame by frame",
};

export const metadata: Metadata = {
  title: siteMetaData.title,
  description: siteMetaData.description,
  creator: "Isaac Shosanya",
  publisher: "Isaac Shosanya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}
          ${spaceGrotesk.variable}
         ${droid.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
