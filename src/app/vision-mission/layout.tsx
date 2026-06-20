import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vision & Mission | COLTECH Enterprise",
  description: "Our vision is to build the operational backbone for the future of industry. Discover the mission driving COLTECH.",
  openGraph: {
    title: "Vision & Mission | COLTECH",
    description: "Our vision is to build the operational backbone for the future of industry.",
    url: "https://coltech.co/vision-mission",
  },
  alternates: {
    canonical: "https://coltech.co/vision-mission",
  },
};

export default function VisionMissionLayout({
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
            "@type": "Organization",
            "name": "COLTECH",
            "description": "Our vision is to build the operational backbone for the future of industry.",
            "url": "https://coltech.co/vision-mission"
          })
        }}
      />
      {children}
    </>
  );
}
