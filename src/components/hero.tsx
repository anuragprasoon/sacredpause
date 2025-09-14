import React, { use } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import AOS from "aos";
import { useEffect } from "react";

const Hero: React.FC=()=>{
    useEffect(()=>{
        AOS.init()
    },[])

    return(
        <div className="relative flex justify-center items-center max-sm:h-screen  bg-[#172525]"><center>
<DotLottieReact autoplay loop className="sm:w-[95%] h-[600px] object-cover max-sm:hidden anim" src="/chakra.json"/>
<DotLottieReact autoplay className="absolute ml-auto top-0 left-1/2 transform -translate-x-1/2 max-sm:hidden sm:w-[95%] h-[600px] object-cover anim" src="/lotus opening.json"/>
<DotLottieReact autoplay loop className="absolute ml-auto top-0 left-1/2 transform -translate-x-1/2 sm:hidden max-sm:w-[95%] h-[600px] object-cover mt-auto mb-auto anim" src="/mobile chakras.json"/>
<DotLottieReact autoplay className="absolute ml-auto top-0 left-1/2 transform -translate-x-1/2 sm:hidden max-sm:w-[95%] h-[600px] object-cover mt-auto mb-auto anim" src="/mobile lady and lotus.json"/>

<div className="absolute sm:top-[30%] top-[20%]  w-full  text-[16px]  text-white  urbanist left-1/2 transform -translate-x-1/2 p-10">
<h1 className=" font-bold text-[60px] max-sm:text-[40px] text-white "><span >RETREAT.</span><span> RESTORE.</span><span> RISE.</span></h1>
Experience The Most Luxurious Yoga Retreat Through India's Most Sacred Landscapes
<button className="block p-3 bg-white text-black mt-5 rounded-full font-semibold">Book Now</button>
</div>
</center>
</div>
    )
}

export default Hero;