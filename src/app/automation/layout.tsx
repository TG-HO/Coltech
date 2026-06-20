import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industrial Automation & IoT | COLTECH",
  description: "Seamless SCADA integration, automated wetstock telemetry, and AI-driven workflow architectures.",
};

export default function AutomationLayout({
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
            "name": "Industrial Automation & IoT",
            "provider": {
              "@type": "Organization",
              "name": "COLTECH"
            },
            "description": "Seamless SCADA integration, automated wetstock telemetry, and AI-driven workflow architectures."
          })
        }}
      />
      {children}
    </>
  );
}
