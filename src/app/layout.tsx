import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Enterprise IT Systems & Advanced Infrastructure Automation | COLTECH",
  description: "Circle of Life (COLTECH) engineers premium custom software, industrial pump ERP automation loops, secure network environments, and AI-enabled surveillance solutions.",
  openGraph: {
    title: "Enterprise IT Systems & Advanced Infrastructure Automation | COLTECH",
    description: "Circle of Life (COLTECH) engineers premium custom software, industrial pump ERP automation loops, secure network environments, and AI-enabled surveillance solutions.",
    url: "https://coltech.co",
    siteName: "COLTECH",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://coltech.co",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "COLTECH",
              "alternateName": "Circle of Life",
              "url": "https://coltech.co",
              "foundingDate": "2024",
              "knowsAbout": [
                "Enterprise Software Development",
                "Point of Sale POS Architectures",
                "Industrial Pump ERP Automation Systems",
                "Wetstock Sensor Telemetry Systems",
                "AI-enabled CCTV Surveillance Monitoring",
                "Managed Network Infrastructure Engineering"
              ],
              "keyCustomers": "Taj Gasoline"
            })
          }}
        />
      </head>
      <body className={`${inter.className} bg-brand-light text-brand-black antialiased selection:bg-brand-teal selection:text-white overflow-x-hidden`}>
        <Navbar />
        {children}
        <Footer />
        <Toaster position="bottom-right" richColors theme="dark" />
      </body>
    </html>
  );
}
