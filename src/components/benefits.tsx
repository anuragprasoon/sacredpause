import React from "react";

const BenefitsSection: React.FC = ()=>{
    return(
        <div className="bg-white text-black items-center justify-center p-10">
  <h2 className="font-extrabold text-[40px] text-center">This Might Be Meant for You</h2>
  <span className="block text-center w-full">Sacred Pause is for the mindful high performer, the quiet seeker, the soul with a full calendar but an empty breath.</span>
  
 <div className="sm:flex items-center"> 
  <div className="card items-center justify-center p-10 sm:w-[33%]"><center>
    <img src="https://res.cloudinary.com/anuragprasoon/image/upload/f_auto,q_auto/v1/sacred-pause-com/ip3x3ygx1ufix8bat7ym" className="w-[100px] animate-spin"/>
    <div className="text-center">You’re driven—but want depth.</div>
    </center>
  </div>
  <div className="card items-center p-10 sm:w-[33%]"><center>
    <img src="https://res.cloudinary.com/anuragprasoon/image/upload/f_auto,q_auto/v1/sacred-pause-com/euyhpyy7y4elexomhmk9" className="w-[100px] p-[5px]"/>
    <span className="text-center">You love impact—but crave inner space.</span>
    </center>
  </div>
  <div className="inline-block justify-center items-center p-10 sm:w-[33%]"><center>
    <img src="https://res.cloudinary.com/anuragprasoon/image/upload/f_auto,q_auto/v1/sacred-pause-com/mmmlbfc0b0maqhdedrgq" className="w-[100px] p-[5px] "/>
    <div className="inline-block text-center">You’re ready to unplug not to escape—but to re-enter life more fully.</div>
    </center>
  </div>
  
  </div>
  
</div>
    )
} 

export default BenefitsSection;