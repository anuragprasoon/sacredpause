import React from "react"
import { useEffect } from "react";
import AOS from "aos";



const Value: React.FC<{}>=()=>{
    useEffect(() => {
  AOS.init({ duration: 1500 });
}, []);

    return(
        <div className="sm:flex justify-center bg-white p-10 overflow-x-hidden">
            <img data-aos="fade-up" className="w-full sm:absolute p-10 sm:hidden" src="https://res.cloudinary.com/anuragprasoon/image/upload/v1750633443/sacred-pause-com/cyptm2gz8cbkyczdwgls.png"/>

<div className="bg-[#E8E8EB]">
<div className="sm:mr-[100px] text-[#171612]">

<div className="urbanist max-sm:w-full  p-5 flex items-center" data-aos="fade-right">
    <img className=" bg-white rounded-full w-[80px] p-5 m-3" src="https://res.cloudinary.com/anuragprasoon/image/upload/v1750478607/sacred-pause-com/auvyzswhqnr8gyncycib.svg"/>
  	<div>
    	<span className="text-[18px] font-semibold">Your Private Eco Sanctuary</span>
        <p className="text-[#2E524A] text-[16px]">5 nights in a private, design forward eco-villa
        </p>
  	</div>
</div>


<div className="urbanist max-sm:w-full   p-5 flex items-center " data-aos="fade-right">
    <img className=" bg-white rounded-full w-[80px] p-5 m-3" src="https://res.cloudinary.com/anuragprasoon/image/upload/v1750478607/sacred-pause-com/fzaremcj7ibj7eckjujs.svg"/>
  	<div>
    	<span className="text-[18px] font-semibold">Nourish with Nature’s Wisdom</span>
        <p className="text-[#2E524A] text-[16px]">Organic, Ayurvedic-inspired meals and herbal elixirs
        </p>
  	</div>
</div>

<div className="urbanist max-sm:w-full  p-5 flex items-center " data-aos="fade-right">
    <img className=" bg-white rounded-full w-[80px] p-5 m-3" src="https://res.cloudinary.com/anuragprasoon/image/upload/v1750478608/sacred-pause-com/fegsseogtxg6itvxhgns.svg"/>
  	<div>
    	<span className="text-[18px] font-semibold">Personalized Wellness Journey</span>
        <p className="text-[#2E524A] text-[16px]">Personalized wellness consultation & integration toolkit
        </p>
  	</div>
</div>

</div>

</div>

<img data-aos="fade-down" className="w-[350px] sm:absolute p-2 max-sm:hidden " src="https://res.cloudinary.com/anuragprasoon/image/upload/v1750633443/sacred-pause-com/cyptm2gz8cbkyczdwgls.png"/>



<div className="bg-[#2E524A] p-5">

<div className="sm:ml-[100px]">
<div className="urbanist max-sm:w-full   p-5 flex items-center text-right " data-aos="fade-left">
  	<div>
    	<span className="text-[18px] font-semibold text-[#EBDBCB]">Daily Movement & Mindfulness</span>
        <p className="text-[#2E524A] text-[16px] text-white">Daily yoga, breathwork & stillness practices
        </p>
  	</div>
    <img className=" bg-white rounded-full w-[80px] p-5 m-3" src="https://res.cloudinary.com/anuragprasoon/image/upload/v1750478606/sacred-pause-com/gy3p5tab55ssrxhzgdao.svg"/>
</div>

<div className="urbanist max-sm:w-full  p-5 flex items-center text-right " data-aos="fade-left">
  	<div>
    	<span className="text-[18px] font-semibold text-[#EBDBCB]">Creative & Earth-Centered Rituals</span>
        <p className="text-[#2E524A] text-[16px] text-white">Nature immersions, creative workshops & intentional rituals
        </p>
  	</div>
    <img className=" bg-white rounded-full w-[80px] p-5 m-3" src="https://res.cloudinary.com/anuragprasoon/image/upload/v1750478607/sacred-pause-com/z4pvc4tprqzwlasayzek.svg"/>
</div>
</div>

</div>

</div>
    )
}

export default Value;