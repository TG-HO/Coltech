import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "COLTECH | Enterprise Infrastructure",
  description: "High-performance IT infrastructure, custom software, and fuel automation systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-brand-light text-brand-black antialiased selection:bg-brand-teal selection:text-white`}>
        <Navbar />
        {children}
        <Footer />
        <Toaster position="bottom-right" richColors theme="dark" />
      </body>
    </html>
  );
}
