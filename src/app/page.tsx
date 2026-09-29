import { Hero } from "@/features/landing/components/Hero";
import { TrustedBrands } from "@/features/landing/components/TrustedBrands";
import { ShopByCategory } from "@/features/landing/components/ShopByCategory";
import { Benefits } from "@/features/landing/components/Benefits";
import { FeaturedParts } from "@/features/landing/components/FeaturedParts";
import { StatsBar } from "@/features/landing/components/StatsBar";
import { WhyChooseUs } from "@/features/landing/components/WhyChooseUs";
import { CtaBanner } from "@/features/landing/components/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <ShopByCategory />
      <StatsBar />
      <TrustedBrands />
      <FeaturedParts />
      <WhyChooseUs />
      <CtaBanner />
    </>
  );
}
