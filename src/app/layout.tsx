import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { Toaster } from "sonner";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://coltech.co"),
  title: "Enterprise IT & Infrastructure Automation | COLTECH",
  description: "COLTECH engineers premium custom software, industrial automation loops, secure network environments, and AI surveillance solutions.",
  icons: {
    icon: "/Col Logo.svg",
    shortcut: "/favicon.ico",
    apple: "/Col Logo.svg",
  },
  openGraph: {
    title: "Enterprise IT & Infrastructure Automation | COLTECH",
    description: "COLTECH engineers premium custom software, industrial automation loops, secure network environments, and AI surveillance solutions.",
    images: ["/capsule-bg.png"],
    url: "https://coltech.co",
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
    <html lang="en" className={`scroll-smooth ${montserrat.variable}`}>
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
              "logo": "https://coltech.co/Col Logo.svg",
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
      <body className={`${montserrat.className} font-sans bg-brand-light text-brand-navy antialiased selection:bg-brand-turquoise selection:text-white overflow-x-hidden min-h-screen flex flex-col`}>
        <Navbar />
        {children}
        <Footer />
        <Toaster position="bottom-right" richColors theme="light" />
      </body>
    </html>
  );
}
