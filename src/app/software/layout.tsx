import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Software & Intelligent ERP | COLTECH",
  description: "Automated pipeline compilation, cross-platform mobile environments, and dedicated custom enterprise systems.",
};

export default function SoftwareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
