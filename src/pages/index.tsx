import Image from "next/image";
import WhyUs from "@/components/whyus";
import BenefitsSection from "@/components/benefits";
import Hero from "@/components/hero";
import Experience from "@/components/experience";
import Value from "@/components/values";
import Testimonial from "@/components/testimonials";
import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head>
      <title>Sacred Pause | India's Best Yoga Retreat Programs powered by Lambda Adventures</title>
      <meta name="description" content="A luxury yoga retreat designed to help you slow down, reconnect, and find balance through mindful movement, meditation, and nature." />
      <meta name="keywords" content="yoga, yoga retreat, india, ladakh yoga retreat, rishikesh yoga retreat, dharmsala yoga retreat, luxury yoga retreat" />
      <meta name="author" content="Sacred Pause" />
    
      <meta property="og:title" content="Sacred Pause | For Your Mind, Body & Soul " />
      <meta property="og:description" content="A luxury yoga retreat designed to help you slow down, reconnect, and find balance through mindful movement, meditation, and nature." />
      <meta property="og:image" content="https://sacredpause.in/thumb.png" />
      <meta property="og:url" content="https://sacredpause.in" />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="Sacred Pause" />
      <meta name="twitter:title" content="Sacred Pause | For Your Mind, Body & Soul " />
      <meta name="twitter:description" content="A luxury yoga retreat designed to help you slow down, reconnect, and find balance through mindful movement, meditation, and nature." />
      <meta name="twitter:image" content="https://sacredpause.in/thumb.png" />

  
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Hero/>
    <Experience/>
    <Value/>
    <BenefitsSection/>
    <WhyUs/>
    <Testimonial/>
    </>
  );
}
