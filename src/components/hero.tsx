import React from "react";

const Hero: React.FC=()=>{
    return(
        <div className="relative flex justify-center items-center  max-sm:h-[1000px]  bg-[#172525] max-sm:pb-[200px]"><center>
<img className="w-full object-fit absolute left-1/2 transform -translate-x-1/2" src="https://res.cloudinary.com/anuragprasoon/image/upload/v1750478606/sacred-pause-com/u79divlpdfdksva1msbd.png"/>
<img className="sm:w-[95%] h-[600px] object-cover anim" src="https://res.cloudinary.com/anuragprasoon/image/upload/v1750719350/sacred-pause-com/mhnziq8puwaj9fae88bk.png"/>
<div className="absolute top-[30%]  w-full  text-[16px]  text-white  urbanist left-1/2 transform -translate-x-1/2 p-10">
<h1 className=" font-bold text-[60px] max-sm:text-[50px] text-white ">RETREAT. RESTORE. RISE.</h1>
A transformational luxury yoga and wellness retreat in India for those ready to pause, reconnect, and renew.
<button className="block p-3 bg-white text-black mt-5 rounded-full font-semibold">Book Now</button>
</div>
</center>
</div>
    )
}

export default Hero;