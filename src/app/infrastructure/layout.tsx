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
  return <>{children}</>;
}
