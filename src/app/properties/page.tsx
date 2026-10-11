import type { Metadata } from "next";

import Navbar from "@/components/layout/Navbar";
import FeaturedProperties from "@/components/home/FeaturedProperties";

export const metadata: Metadata = {
  title: "Property Collection",
  description:
    "Explore AVENOR's curated collection of illustrative residential concepts.",
};

export default function PropertiesPage() {
  return (
    <>
      <Navbar />
      <main>
        <FeaturedProperties />
      </main>
    </>
  );
}
