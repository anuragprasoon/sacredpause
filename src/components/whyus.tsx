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
<span className="text-[#E4A689] text-[16px] urbanist ">WHY</span>
<div className="text-[30px] urbanist font-extrabold mb-[10px]">Why Sacred Pause Gets It Right</div>

  <div className="text-[24px] mb-[10px] urbanist font-semibold ">We Do Things Differently Here
      <div className="text-[16px] urbanist font-light">We keep it small because transformation isn't a spectator sport. Twelve people max. That's it. Because real change happens when you feel truly seen, not when you're lost in a crowd of strangers doing the same poses.
  	</div>
  </div>
  
  <div className="text-[24px] urbanist font-semibold ">Soft, Soulful Luxury
      <div className="text-[16px] urbanist font-light">We understand your nervous system is fried
You don't need more intensity, you need the opposite. Everything here is designed to help your body remember what safety feels like. No aggressive adjustments, no competitive vibes, just permission to breathe.
  	</div>
  </div>
</div>
</div>
	<Image alt="Sacred Pause" data-aos="fade-up" src="https://res.cloudinary.com/anuragprasoon/image/upload/v1750479748/sacred-pause-com/u66lkq3ltsvpyfflngx4.png" className="sm:w-[50%] w-[100%] object-cover "/>
</div>
    )
}

export default WhyUs;