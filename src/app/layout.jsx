
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import TopHeader from '../components/TopHeader';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SRSB Barcode Solutions | Barcode Labels, Printers, Scanners & Software",
  description: "SRSB Barcode Solutions offers a complete range of barcode labels, printers, scanners, ribbons, and software for all industries. Fast delivery, expert support, and custom solutions for your business.",
  keywords: [
    "barcode labels", "barcode printers", "barcode scanners", "barcode ribbons", "barcode software", "thermal labels", "asset tracking", "inventory management", "label printing", "barcode solutions", "SRSB Barcode", "custom labels", "barcode India", "barcode supplies", "barcode systems"
  ],
  alternates: {
    canonical: "https://www.srsbbarcode.com/"
  },
  verification: {
    google: "yGymd9TIj3VOW5o3KXpAExQPmYe8mlcUADy6Xt1zj7w", // ← Yeh line important hai
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TopHeader />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
