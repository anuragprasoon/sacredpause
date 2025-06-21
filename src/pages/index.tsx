import Image from "next/image";
import WhyUs from "@/components/whyus";
import BenefitsSection from "@/components/benefits";
import Hero from "@/components/hero";
import Experience from "@/components/experience";

export default function Home() {
  return (
    <>
    <Hero/>
    <Experience/>
    <BenefitsSection/>
    <WhyUs/>
    </>
  );
}
