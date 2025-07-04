import Image from "next/image";
import WhyUs from "@/components/whyus";
import BenefitsSection from "@/components/benefits";
import Hero from "@/components/hero";
import Experience from "@/components/experience";
import Value from "@/components/values";
import Testimonial from "@/components/testimonials";

export default function Home() {
  return (
    <>
    <Hero/>
    <Experience/>
    <Value/>
    <BenefitsSection/>
    <WhyUs/>
    <Testimonial/>
    </>
  );
}
