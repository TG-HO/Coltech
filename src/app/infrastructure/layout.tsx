import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Managed IT Systems & Security Architectures | COLTECH",
  description: "High-performance physical layer networking, structural server configuration, and continuous network health assessments.",
};

export default function InfrastructureLayout({
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
            "@type": "Service",
            "name": "Managed IT Systems & Security Architectures",
            "provider": {
              "@type": "Organization",
              "name": "COLTECH"
            },
            "description": "High-performance physical layer networking, structural server configuration, and continuous network health assessments."
          })
        }}
      />
      {children}
    </>
  );
}
