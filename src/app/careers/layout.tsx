import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers & Open Positions | COLTECH",
  description: "Join the elite engineering team at COLTECH. We build military-grade enterprise infrastructure and automation systems.",
  openGraph: {
    title: "Careers & Open Positions | COLTECH",
    description: "Join the elite engineering team at COLTECH.",
    url: "https://coltech.co/careers",
  },
  alternates: {
    canonical: "https://coltech.co/careers",
  },
};

export default function CareersLayout({
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
            "@type": "EmploymentAgency",
            "name": "COLTECH Engineering",
            "description": "Enterprise IT systems and automation engineering careers.",
            "url": "https://coltech.co/careers"
          })
        }}
      />
      {children}
    </>
  );
}
