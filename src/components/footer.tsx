import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  const date= new Date();
  var year= date.getFullYear();
  

  return <>
      <div className="bg-[#172525] flex min-h-[222px] w-full mt-[104px] max-md:max-w-full max-md:mt-[0px] urbanist-100" />
      <div className="z-10 mt-[-326px] w-full max-md:max-w-full max-md:mt-[-200px]">
        <div className="bg-[#172525] flex min-h-[406px] w-full flex-wrap px-6 py-[60px] max-md:max-w-full max-md:px-5">
          <div className="max-md:mb-[30px] flex min-w-60 flex-col items-stretch grow shrink w-[279px] px-8 max-md:px-5">
            <div className="max-w-full w-[285px] text-[14px] text-[rgba(188,188,188,1)] font-normal">
            <Link href={'/'}><img src="/logo.png" alt="Footer Logo" className=" object-cover w-[100px]" /></Link>
              <div className="mt-6">
                © {year} Sacred Pause
                <br />
                All images are copyrighted by their respective authors.
              </div>
            </div>
            <div className="flex items-center gap-2 mt-[27px]">
              <a href="https://instagram.com/sacredpause.in" aria-label="Instagram">
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b739864375de9c9583a930d2b3fc3cf659d08648?placeholderIfAbsent=true" alt="Facebook" className="aspect-[1] object-contain w-[34px] self-stretch shrink-0 my-auto hover:opacity-80 transition-opacity" />
              </a>
              <a href="https://www.linkedin.com/company/lambdaadventure" aria-label="Linkedin">
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/054cd81119d2b05a4c4a16805c3142c6005bdeaf?placeholderIfAbsent=true" alt="Linkedin" className="aspect-[1] object-contain w-[34px] self-stretch shrink-0 my-auto hover:opacity-80 transition-opacity" />
              </a>
              <a href="https://www.youtube.com/@642films" aria-label="Youtube">
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ecc9acc048563947db1cb67ed060d1e0ea5760cb?placeholderIfAbsent=true" alt="Instagram" className="aspect-[1] object-contain w-[34px] self-stretch shrink-0 my-auto hover:opacity-80 transition-opacity" />
              </a>
            </div>
          </div>
          <div className="flex min-w-60 gap-[40px_48px] text-[14px] text-[rgba(200,200,200,1)] font-normal flex-wrap max-md:max-w-full">
            <div className="max-md:px-5">
              <h3 className="text-white font-bold">Quick Links</h3>
              <div className="mt-6 hover:text-white transition-colors cursor-pointer">
              <Link href={'/about'}>About Us</Link>
              </div>
              <div className="mt-6 hover:text-white transition-colors cursor-pointer">
              <Link href={'/contact'}>Contact Us</Link>
              </div>
              <div className="mt-6 hover:text-white transition-colors cursor-pointer">
              <Link href={'/disclaimer'}>Disclaimer</Link>
              </div>
              <div className="mt-6 hover:text-white transition-colors cursor-pointer">
            <Link href={'/privacy'}>Privacy Policy</Link>
              </div>
              <div className="mt-6 hover:text-white transition-colors cursor-pointer">
               <Link href={'/terms'}> Terms & Conditions</Link>
              </div>
              <div className="mt-6 hover:text-white transition-colors cursor-pointer">
                <Link href={'/cancellation'}>Cancellation Policy</Link>
              </div>
            </div>
            <div className="max-md:px-5">
              <h3 className="text-white font-bold">Our Services</h3>
              <div className="mt-6 hover:text-white transition-colors cursor-pointer">
                <Link href={'/#discover'}>Lite Yoga Retreats</Link>
              </div>
              <div className="mt-6 hover:text-white transition-colors cursor-pointer">
                <Link href={'/#discover'}>Essential Yoga Retreats</Link>
              </div>
              <div className="mt-6 hover:text-white transition-colors cursor-pointer">
                <Link href={'/#discover'}>Premium Yoga Retreats</Link>
              </div>
              <div className="mt-6 hover:text-white transition-colors cursor-pointer">
                <Link href={'https://lambdaadventure.com'}>Trek & Expeditions</Link>
              </div>
            </div>
            <div className="max-md:hidden">
              <h3 className="text-white font-bold">Upcoming Retreats</h3>
              <div className="mt-6 hover:text-white transition-colors cursor-pointer">
                Ladakh Yoga Retreat
              </div>
              <div className="mt-6 hover:text-white transition-colors cursor-pointer">
                Rishikesh Yoga Retreat
              </div>
              <div className="mt-6 hover:text-white transition-colors cursor-pointer">
                Dharmshala Yoga Retreat
              </div>
            </div>
          </div>
        </div>
      </div>
    </>;
};
export default Footer;