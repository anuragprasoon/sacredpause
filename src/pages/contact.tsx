import Image from "next/image";
import WhyUs from "@/components/whyus";
import BenefitsSection from "@/components/benefits";
import Hero from "@/components/hero";

export default function Contact() {
  return (
    <>
    <div className="urbanist p-10 text-center text-black">
<h3 className="text-[40px] font-bold">Connect With Us</h3>
<p>Interested in Yoga Retreat? Have questions about our programs? Our Team is Ready to help! Reach out to us today.
</p>

<div className="sm:flex flex-row-reverse mt-5 bg-[#172525]">

<div className="p-10 bg-[#F9FFE8]">
<h3 className=" font-bold text-[24px] mb-3">Let's Talk</h3>
  <form>
    <input className="urbanist rounded p-2 w-full outline-1 outline-black mb-3"type="text" placeholder="Name"/>
    <input className="urbanist rounded p-2 w-full outline-1 outline-black mb-3"type="number" placeholder="Phone"/>
    <input className="urbanist rounded p-2 w-full outline-1 outline-black mb-3"type="email" placeholder="E-Mail"/>
    <input className="urbanist rounded p-2 w-full h-[200px] outline-1 outline-black mb-3"type="text" placeholder="Message">
  <button className="bg-[#172525] text-white p-2 w-[150px] rounded"type="submit">Send</button>
  </form>
  
</div>

<div className="p-10  text-left">
<h3 className="text-white font-bold text-[24px] mb-3">Contact Info</h3>
<p className="text-white text-[14px]">
We're here to help! Whether you have inquiries about our services, need guidance on your next steps or require support, our team is ready to assist.
</p>
<div className="w-full text-white mt-5 border-b-1 pb-4">
<text className="font-semibold">Email Us  </text>  <text className="p-4 text-[14px]">  sacredpause@gmail.com</text>
</div>

<div className="w-full text-white mt-5 border-b-1 pb-4">
<text className="font-semibold">Call Us  </text>  <text className="p-4 text-[14px]">  +91 xxxxxxxxx</text>
</div>

<div className="w-full text-white mt-5 border-b-1 pb-4">
<text className="font-semibold">Our Address  </text>  <text className="p-4 text-[14px]">  Namkum, Ranchi, Jharkhand</text>
</div>

<div className="w-full text-white mt-5 border-b-1 pb-4">
<text className="font-semibold">Office Hours  </text>  <text className="p-4 text-[14px]">  Monday-Saturday, 10:00AM - 7:00PM IST</text>
</div>

</div>




</div>

<iframe className="rounded w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.771912624369!2d85.3569658!3d23.3602766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2b897330c3835ebf%3A0x1b6ce9fb06b1b2e7!2sLambda%20Adventure!5e0!3m2!1sen!2sin!4v1751783388007!5m2!1sen!2sin" width="600" height="450"></iframe>
</div>
    </>
  );
}
