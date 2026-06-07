import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import Navbar from "@/components/Navbar";
import BlobAnimation from "@/components/BlobAnimation";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Shrived Patade - Portfolio',
  description: 'Portfolio of Shrived Patade',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BlobAnimation />
        <Navbar />
        {children}
      </body>
    </html>
  );
}