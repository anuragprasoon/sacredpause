import React from "react"
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";



const Experience: React.FC<{}>=()=>{
    useEffect(() => {
  AOS.init({ duration: 1500 });
}, []);

    
    return(
    <div className="w-full sm:flex bg-white text-black p-10 overflow-x-hidden">
        <div className="urbanist p-10 sm:w-[50%]" data-aos="fade-right">
            <div className="text-[16px] text-[#E4A689]">EXPERIENCE</div>
            <div className="text-[18px]">
            <h3 className="text-[40px] font-extrabold">Experience A Luxury Wellness Retreat in India</h3>
            Step away from the rush and return to what matters. Nestled in nature, this retreat offers space to slow down, reconnect, and recharge from mindful movement and nourishing meals to meaningful connection. Come home to yourself.
            <button className="block bg-[#2E524A] text-white p-5 text-[12px] font-bold rounded-full mt-5">Book Now</button>
            </div>
        </div>

<div className="sm:flex p-10 gap-5 w-[50%] justify-center items-center text-black" >
    
<div className=" w-[200px] h-[200px] rounded-full urbanist mb-10" data-aos="fade-left">
<img className="w-[200px] h-[200px] object-cover rounded" src="https://res.cloudinary.com/anuragprasoon/image/upload/v1750478607/sacred-pause-com/nuqph0eifartcwkubtme.png"/>
<span className=" hidden text-white md:text-black text-[20px] absolute bottom-10 text-center w-full p-3">Morning Yoga</span>
</div>

<div className=" w-[200px] h-[200px] rounded-full urbanist mb-10 " data-aos="fade-left">
<img className="w-[200px] h-[200px] object-cover rounded" src="https://res.cloudinary.com/anuragprasoon/image/upload/v1750478606/sacred-pause-com/v3dbtklnnukf6x8lrvir.png"/>
<span className="hidden text-white md:text-black text-[20px] absolute bottom-10 text-center w-full p-3">Meditative walks</span>
</div>

<div className=" w-[200px] h-[200px] rounded-full urbanist mb-10 "data-aos="fade-left">
<img className="w-[200px] h-[200px] object-cover rounded" src="https://res.cloudinary.com/anuragprasoon/image/upload/v1750478606/sacred-pause-com/ihfvqt5lrmvxhd4nzd2z.png"/>
<span className="hidden text-white md:text-black text-[20px] absolute bottom-10 text-center w-full p-3">Ayurvedic meals</span>
</div>

<div className="relative w-[200px] h-[200px] rounded-full urbanist mb-10 " data-aos="fade-left">
<img className=" w-[200px] h-[200px] object-cover rounded" src="https://res.cloudinary.com/anuragprasoon/image/upload/v1750478606/sacred-pause-com/lo7gokokci9xmqb1drig.png"/>
<span className="hidden text-white md:text-black text-[20px] absolute bottom-10 text-center w-full p-3">Restorative sessions</span>
</div>

</div>

</div>

)
}

export default Experience;