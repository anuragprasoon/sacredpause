import React from "react"
import { useEffect } from "react";
import AOS from "aos";



const Value: React.FC<{}>=()=>{
    useEffect(() => {
  AOS.init({ duration: 1500 });
}, []);

    return(
        <div className="sm:flex justify-center bg-white p-10 overflow-x-hidden">
            <Image alt="Sacred Pause" data-aos="fade-up" className="w-full sm:absolute p-10 sm:hidden" src="https://res.cloudinary.com/anuragprasoon/image/upload/v1750633443/sacred-pause-com/cyptm2gz8cbkyczdwgls.png"/>

<div className="bg-[#E8E8EB]">
<div className="sm:mr-[100px] text-[#171612]">

<div className="urbanist max-sm:w-full  p-5 flex items-center" data-aos="fade-right">
    <Image alt="Svādhyāya" className=" bg-white rounded-full w-[80px] p-5 m-3" src="https://res.cloudinary.com/anuragprasoon/image/upload/v1750478607/sacred-pause-com/auvyzswhqnr8gyncycib.svg"/>
  	<div>
    	<span className="text-[18px] font-semibold">स्वाध्याय (Svādhyāya) Sacred Space
</span>
        <p className="text-[#2E524A] text-[16px]">Five nights in a nature-immersed sanctuary inspired by yogic ashram simplicity and quietude
        </p>
  	</div>
</div>


<div className="urbanist max-sm:w-full   p-5 flex items-center " data-aos="fade-right">
    <Image alt="प्राण आहार (Prāṇa Āhāra) Food as Prana" className=" bg-white rounded-full w-[80px] p-5 m-3" src="https://res.cloudinary.com/anuragprasoon/image/upload/v1750478607/sacred-pause-com/fzaremcj7ibj7eckjujs.svg"/>
  	<div>
    	<span className="text-[18px] font-semibold">प्राण आहार (Prāṇa Āhāra) Food as Prana</span>
        <p className="text-[#2E524A] text-[16px]">Sattvic, Ayurvedic-inspired meals and herbal infusions rooted in ancient Indian healing traditions
        </p>
  	</div>
</div>

<div className="urbanist max-sm:w-full  p-5 flex items-center " data-aos="fade-right">
    <Image alt="अन्तर्मुखी यात्रा (Antarmukhī Yātrā) Journey Inward" className=" bg-white rounded-full w-[80px] p-5 m-3" src="https://res.cloudinary.com/anuragprasoon/image/upload/v1750478608/sacred-pause-com/fegsseogtxg6itvxhgns.svg"/>
  	<div>
    	<span className="text-[18px] font-semibold">अन्तर्मुखी यात्रा (Antarmukhī Yātrā) Journey Inward</span>
        <p className="text-[#2E524A] text-[16px]">Personal wellness consultation guided by yogic philosophy and integration tools for daily life
        </p>
  	</div>
</div>

</div>

</div>

<Image alt="Sacred Pause" data-aos="fade-down" className="w-[350px] sm:absolute p-2 max-sm:hidden " src="https://res.cloudinary.com/anuragprasoon/image/upload/v1750633443/sacred-pause-com/cyptm2gz8cbkyczdwgls.png"/>



<div className="bg-[#2E524A] p-5">

<div className="sm:ml-[100px]">
<div className="urbanist max-sm:w-full   p-5 flex items-center text-right " data-aos="fade-left">
  	<div>
    	<span className="text-[18px] font-semibold text-[#EBDBCB]">साधना (Sādhanā) Stillness as Practice</span>
        <p className="text-[#2E524A] text-[16px] text-white">Daily yoga, pranayama, and dhyana drawn from classical Indian yogic traditions
        </p>
  	</div>
    <Image alt="साधना (Sādhanā) Stillness as Practice" className=" bg-white rounded-full w-[80px] p-5 m-3" src="https://res.cloudinary.com/anuragprasoon/image/upload/v1750478606/sacred-pause-com/gy3p5tab55ssrxhzgdao.svg"/>
</div>

<div className="urbanist max-sm:w-full  p-5 flex items-center text-right " data-aos="fade-left">
  	<div>
    	<span className="text-[18px] font-semibold text-[#EBDBCB]">संस्कार (Saṃskāra) Rituals of Connection
</span>
        <p className="text-[#2E524A] text-[16px] text-white">Earth-honoring ceremonies, mantra, journaling, and creative practices to realign with your inner self
        </p>
  	</div>
    <Image alt="संस्कार (Saṃskāra) Rituals of Connection" className=" bg-white rounded-full w-[80px] p-5 m-3" src="https://res.cloudinary.com/anuragprasoon/image/upload/v1750478607/sacred-pause-com/z4pvc4tprqzwlasayzek.svg"/>
</div>
</div>

</div>

</div>
    )
}

export default Value;