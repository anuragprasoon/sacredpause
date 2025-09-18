import React, { use, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import AOS from "aos";
import { useEffect } from "react";
import Link from "next/link";

const ExperienceCard: React.FC=()=>{
    useEffect(()=>{
        AOS.init()
    },[])
    
    const [spotsRemaining, setSpotsRemaining] = useState(8);
    const [currentSlide, setCurrentSlide] = useState(0);
        const heroImages = [
        {
            src: "https://images.pexels.com/photos/32885140/pexels-photo-32885140.jpeg",
            alt: "Ladakh Mountain Yoga"
        },
        {
            src: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg", 
            alt: "Monastery Meditation"
        },
        {
            src: "https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg",
            alt: "Sunrise Practice"
        }
    ];
    
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [heroImages.length]);

    const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
};

const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
};

const goToSlide = (index: number) => {
    setCurrentSlide(index);
};

    return(
        <>
            <div className="relative max-sm:h-screen overflow-hidden" data-aos="fade-up">
                {/* Carousel Images */}
                <div className=" w-full h-full">
                        <img
                            className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000`}
                            src={`https://images.pexels.com/photos/32885140/pexels-photo-32885140.jpeg`}
                            alt={'Ladakh Mountain Yoga'}
                        />
                </div>
                
                <div className="absolute inset-0 bg-black/40"></div>
                
            
                {/* Hero Content */}
                <div className="absolute inset-0 flex items-center justify-center text-center text-white z-10 p-4">
                    <div className="max-w-lg">
                        <h1 className="text-[32px] sm:text-[48px] font-bold mb-4 leading-tight">
                            Awaken in Ladakh
                        </h1>
                        <p className="text-[16px] sm:text-[18px] mb-6 opacity-90">
                            7 days of transformation in the Himalayas
                        </p>
                        
                        {/* Hero Details */}
                        <div className="flex justify-center gap-6 mb-8 text-[14px]">
                            <div className="text-center">
                                <div className="opacity-70 uppercase tracking-wide">Location</div>
                                <div className="font-semibold">Leh, Ladakh</div>
                            </div>
                            <div className="text-center">
                                <div className="opacity-70 uppercase tracking-wide">Duration</div>
                                <div className="font-semibold">7 Days</div>
                            </div>
                        </div>

                        <Link href="/retreat/ladakh">
                        <button 
                            className="text-[#172525] bg-white px-8 py-4 rounded-full text-[16px] font-semibold hover:bg-[#2a3a3a] transition-all duration-300 shadow-lg"
                        >
                            Book Your Spot →
                        </button>
                        </Link>
                        <br/>
                        <button 
                            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                            className="hidden text-[#172525] bg-white px-8 py-4 rounded-full text-[16px] font-semibold hover:bg-[#2a3a3a] transition-all duration-300 shadow-lg mt-2"
                        >
                            Watch Our Video
                        </button>
                    </div>
                </div>
            
                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce z-10">
                    <div className="text-[24px]">↓</div>
                </div>
            </div>
            <div className="relative max-sm:h-screen overflow-hidden" data-aos="fade-up">
                {/* Carousel Images */}
                <div className=" w-full h-full">
                        <img
                            className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000`}
                            src={`https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg`}
                            alt={'Ladakh Mountain Yoga'}
                        />
                </div>
                
                <div className="absolute inset-0 bg-black/40"></div>
                
            
                {/* Hero Content */}
                <div className="absolute inset-0 flex items-center justify-center text-center text-white z-10 p-4">
                    <div className="max-w-lg">
                        <h1 className="text-[32px] sm:text-[48px] font-bold mb-4 leading-tight">
                            Awaken in Rishikesh
                        </h1>
                        <p className="text-[16px] sm:text-[18px] mb-6 opacity-90">
                            7 days of transformation in the Himalayas
                        </p>
                        
                        {/* Hero Details */}
                        <div className="flex justify-center gap-6 mb-8 text-[14px]">
                            <div className="text-center">
                                <div className="opacity-70 uppercase tracking-wide">Location</div>
                                <div className="font-semibold">Rishikesh, India</div>
                            </div>
                            <div className="text-center">
                                <div className="opacity-70 uppercase tracking-wide">Duration</div>
                                <div className="font-semibold">7 Days</div>
                            </div>
                        </div>

                        <Link href="/retreat/rishikesh">
                        <button 
                            className="text-[#172525] bg-white px-8 py-4 rounded-full text-[16px] font-semibold hover:bg-[#2a3a3a] transition-all duration-300 shadow-lg"
                        >
                            Book Your Spot →
                        </button>
                        </Link>
                        <br/>
                        <button 
                            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                            className="hidden text-[#172525] bg-white px-8 py-4 rounded-full text-[16px] font-semibold hover:bg-[#2a3a3a] transition-all duration-300 shadow-lg mt-2"
                        >
                            Watch Our Video
                        </button>
                    </div>
                </div>
            
                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce z-10">
                    <div className="text-[24px]">↓</div>
                </div>
            </div>
            <div className="relative max-sm:h-screen overflow-hidden" data-aos="fade-up">
                {/* Carousel Images */}
                <div className=" w-full h-full">
                        <img
                            className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000`}
                            src={`https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg`}
                            alt={'Ladakh Mountain Yoga'}
                        />
                </div>
                
                <div className="absolute inset-0 bg-black/40"></div>
                
            
                {/* Hero Content */}
                <div className="absolute inset-0 flex items-center justify-center text-center text-white z-10 p-4">
                    <div className="max-w-lg">
                        <h1 className="text-[32px] sm:text-[48px] font-bold mb-4 leading-tight">
                            Awaken in Dharmshala
                        </h1>
                        <p className="text-[16px] sm:text-[18px] mb-6 opacity-90">
                            7 days of transformation in the Himalayas
                        </p>
                        
                        {/* Hero Details */}
                        <div className="flex justify-center gap-6 mb-8 text-[14px]">
                            <div className="text-center">
                                <div className="opacity-70 uppercase tracking-wide">Location</div>
                                <div className="font-semibold">Dharmshala, India</div>
                            </div>
                            <div className="text-center">
                                <div className="opacity-70 uppercase tracking-wide">Duration</div>
                                <div className="font-semibold">7 Days</div>
                            </div>
                        </div>

                        <Link href="/retreat/dharmshala">
                        <button 
                            className="text-[#172525] bg-white px-8 py-4 rounded-full text-[16px] font-semibold hover:bg-[#2a3a3a] transition-all duration-300 shadow-lg"
                        >
                            Book Your Spot →
                        </button>
                        </Link>
                        <br/>
                        <button 
                            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                            className="hidden text-[#172525] bg-white px-8 py-4 rounded-full text-[16px] font-semibold hover:bg-[#2a3a3a] transition-all duration-300 shadow-lg mt-2"
                        >
                            Watch Our Video
                        </button>
                    </div>
                </div>
            
                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce z-10">
                    <div className="text-[24px]">↓</div>
                </div>
            </div>

            <div className="max-sm:hidden p-10 bg-white">
<h3 className="urbanist text-black text-[30px] font-bold mb-5 " id="discover">Retreat You Need</h3>

<div className="flex flex-col sm:flex-row gap-5 justify-center items-center w-full">

<div className="urbanist relative w-[360px]" data-aos="fade-right">
	<img alt="Ladakh Yoga Retreat" className="rounded object-cover w-full h-[300px]" src="https://images.pexels.com/photos/32885140/pexels-photo-32885140.jpeg"/>
    <div className="absolute bottom-1 flex justify-center items-center p-2 w-full text-white">
    	<div className="p-2">
    	<div className="text-[20px] font-bold">Ladakh Yoga Retreat</div>
        <div className="text-[14px]">3 Days| 5 Days | 7days </div>
        </div>
        <div className="p-2">
        <a href="/retreat/ladakh"><button className="rounded-full w-[100px] p-2 bg-white text-black" >Book Now</button></a>
        </div>
    </div>
</div>

<div className="urbanist w-[360px] relative" data-aos="fade-up">
	<img alt="Rishikesh Yoga Retreat" className="rounded object-cover w-full h-[300px]" src="https://images.pexels.com/photos/20035455/pexels-photo-20035455.jpeg"/>
    <div className="absolute bottom-1 flex justify-center items-center p-2 w-full text-white">
    	<div className="p-2">
    	<div className="text-[20px] font-bold">Rishikesh Yoga Retreat</div>
        <div className="text-[14px]">3 Days| 5 Days | 7days </div>
        </div>
        <div className="p-2">
        <a href="/retreat/rishikesh"><button className="rounded-full w-[100px] p-2 bg-white text-black">Book Now</button></a>
        </div>
    </div>
</div>

<div className="urbanist w-[360px] relative" data-aos="fade-left">
	<img alt="Dharmshala Yoga Retreat" className="rounded object-cover w-full h-[300px]" src="https://images.pexels.com/photos/26382826/pexels-photo-26382826.jpeg"/>
    <div className="absolute bottom-1 flex justify-center items-center p-2 w-full text-white">
    	<div className="p-2">
    	<div className="text-[20px] font-bold">Dharmshala Yoga Retreat</div>
        <div className="text-[14px]">3 Days| 5 Days | 7days </div>
        </div>
        <div className="p-2">
        <a href="/retreat/dharmshala"><button className="rounded-full w-[100px] p-2 bg-white text-black">Book Now</button></a>
        </div>
    </div>
</div>

</div>

</div>
            </>
    )
}

export default ExperienceCard;