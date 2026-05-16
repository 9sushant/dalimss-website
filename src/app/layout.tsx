import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DALIMSS Sunbeam Educomp Ltd — Explore Growth in Education",
  description:
    "DALIMSS Sunbeam Educomp Limited — 50+ years legacy, 25+ schools, 15,000+ students. Partner with us to explore growth in education across India.",
  keywords: "DALIMSS, Sunbeam, Educomp, school franchise, education India, Varanasi schools, CBSE schools",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full ${inter.className}`}>
      <body style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <div style={{ flex: 1 }}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
