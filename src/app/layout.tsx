import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
