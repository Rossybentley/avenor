import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import InvestmentOpportunities from "@/components/home/InvestmentOpportunities";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedProperties />
        <InvestmentOpportunities />
      </main>
    </>
  );
}
