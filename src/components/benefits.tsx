import React from "react";
import {DotLottieReact} from '@lottiefiles/dotlottie-react';;


const BenefitsSection: React.FC = ()=>{
    return(
        <div className="bg-white text-black items-center justify-center p-10">
  <h2 className="font-extrabold text-[40px] text-center">This Might Be Meant for You</h2>
  <span className="block text-center w-full">Sacred Pause is for the mindful high performer, the quiet seeker, the soul with a full calendar but an empty breath.</span>
  
 <div className="sm:flex items-center"> 
  <div className="card items-center justify-center p-10 sm:w-[33%]"><center>
    <DotLottieReact src="/Compass Animation.json" loop autoplay className="w-[140px] mb-5"/>
    <div className="text-center">You’re driven but want depth.</div>
    </center>
  </div>
  <div className="card items-center p-10 sm:w-[33%]"><center>
    <DotLottieReact src="/Yoga Animation.json" loop autoplay className="w-[140px] mb-5"/>
    <span className="text-center">You love impact but crave inner space.</span>
    </center>
  </div>
  <div className="inline- justify-center items-center p-10 sm:w-[33%]"><center>
    <DotLottieReact src="/Brain Animation.json" loop autoplay className="w-[140px] mb-5"/>
    <div className="inline- text-center">You’re ready to unplug not to escape but to re-enter life more fully.</div>
    </center>
  </div>
  
  </div>
  
</div>
    )
} 

export default BenefitsSection;