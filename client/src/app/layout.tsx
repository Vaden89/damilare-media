import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Space_Grotesk, Oswald } from "next/font/google";
import GlobalProvider from "@/contexts/provider";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

const siteMetaData = {
  title: "Damilare Media",
  description:
    "Damilare Media - Creative and professional Media house capturing life's moments frame by frame",
  url: "https://damilaremedia.com",
};

export const metadata: Metadata = {
  title: siteMetaData.title,
  description: siteMetaData.description,
  creator: "Isaac Shosanya",
  publisher: "Isaac Shosanya",
  openGraph: {
    title: siteMetaData.title,
    description: siteMetaData.description,
    url: siteMetaData.url,
    type: "website",
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
        className={`${spaceGrotesk.variable} ${oswald.variable} antialiased`}
      >
        <GlobalProvider>{children}</GlobalProvider>
      </body>
    </html>
  );
}
