import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import InvestmentOpportunities from "@/components/home/InvestmentOpportunities";
import DevelopmentProjects from "@/components/home/DevelopmentProjects";
import OurStory from "@/components/home/OurStory";
export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedProperties />
        <InvestmentOpportunities />
        <DevelopmentProjects />
        <OurStory />
      </main>
    </>
  );
}
