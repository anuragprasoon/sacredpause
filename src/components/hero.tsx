import React from "react";

const Hero: React.FC=()=>{
    return(
        <div className="relative w-full bg-[#172525] p-15"><center>
<img className="w-full object-fit absolute left-1/2 transform -translate-x-1/2" src="https://res.cloudinary.com/anuragprasoon/image/upload/v1750478606/sacred-pause-com/u79divlpdfdksva1msbd.png"/>
<img className="w-[400px] absolute left-1/2 transform -translate-x-1/2" src="https://res.cloudinary.com/anuragprasoon/image/upload/v1750478608/sacred-pause-com/u4cgpwqkldqykkigegzh.png"/>
<img className="w-[400px] z-[1]" src="https://res.cloudinary.com/anuragprasoon/image/upload/v1750478607/sacred-pause-com/w1yv2coloaau8grkpegp.png"/>
<div className="absolute sm:top-[45%] w-full top-[35%]  max-sm:text-[12px]  text-white  urbanist left-1/2 transform -translate-x-1/2">
<h1 className=" font-bold text-[60px] max-sm:text-[30px] text-white ">RETREAT. RESTORE. RISE.</h1>
A transformational luxury yoga and wellness retreat in India for those ready to pause, reconnect, and renew.
<button className="block p-3 bg-white text-black mt-5 rounded-full font-semibold">Book Now</button>
</div>
</center>
</div>
    )
}

export default Hero;