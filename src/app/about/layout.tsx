import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | COLTECH Enterprise",
  description: "Learn about Circle of Life (COLTECH), our core values, mission, and the history behind our enterprise IT infrastructure systems.",
  openGraph: {
    title: "About Us | COLTECH Enterprise",
    description: "Learn about Circle of Life (COLTECH), our core values, mission, and the history behind our enterprise IT infrastructure systems.",
    url: "https://coltech.co/about",
  },
  alternates: {
    canonical: "https://coltech.co/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AboutPage",
              "mainEntity": {
                "@type": "Organization",
                "name": "COLTECH",
                "alternateName": "Circle of Life",
                "description": "Enterprise IT systems, custom software, and automation solutions.",
                "url": "https://coltech.co"
              }
            })
          }}
        />
      {children}
    </>
  );
}
