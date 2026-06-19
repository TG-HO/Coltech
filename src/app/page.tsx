import HeroSection from "@/components/ui/HeroSection";
import StatementBlock from "@/components/ui/StatementBlock";
import ServicesGrid from "@/components/ui/ServicesGrid";
import ScrollZoomTeaser from "@/components/ui/ScrollZoomTeaser";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <HeroSection />
      <StatementBlock />
      <ServicesGrid />
      <ScrollZoomTeaser />
    </div>
  );
}
