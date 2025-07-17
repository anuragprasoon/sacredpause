import React from "react";
import { useEffect } from "react";
import AOS from "aos";


const WhyUs: React.FC=()=>{

    useEffect(()=>{
        AOS.init({duration: 1500})
    },[]);

    return(
        <div className="sm:flex  ">
<div className="bg-black text-white sm:w-[50%] w-[100%] p-10">
    <div className="h-[100%] items-center justify-center" data-aos="fade-down">
<span className="text-[#E4A689] text-[16px] urbanist ">WHY US</span>
<div className="text-[30px] urbanist font-extrabold mb-[10px]">Because rest should feel beautiful</div>

  <div className="text-[24px] mb-[10px] urbanist font-semibold ">Designed for Deep Rest
      <div className="text-[16px] urbanist font-light">We limit each retreat to 12 guests. Every element from architecture to aromatics is curated to support your nervous system, not stimulate it.
  	</div>
  </div>
  
  <div className="text-[24px] urbanist font-semibold ">Soft, Soulful Luxury
      <div className="text-[16px] urbanist font-light">This is wellness without the noise. Luxury without ego. Transformation, softly held.
  	</div>
  </div>
</div>
</div>
	<img data-aos="fade-up" src="https://res.cloudinary.com/anuragprasoon/image/upload/v1750479748/sacred-pause-com/u66lkq3ltsvpyfflngx4.png" className="sm:w-[50%] w-[100%] object-cover "/>
</div>
    )
}

export default WhyUs;