import React, {useEffect, useState} from "react";
import Pack from "./pack";



const Programs:React.FC=()=>{

    return(<div className="p-10 bg-white">
<h3 className="urbanist text-black text-[40px] font-bold mb-5 text-center" id="discover">Our Programs</h3>

<div className="flex flex-col sm:flex-row gap-5 justify-center items-center w-full">

<div className="urbanist relative w-[360px]">
	<Image alt="Ladakh Yoga Retreat" className="rounded object-cover w-full h-[300px]" src="https://images.pexels.com/photos/32885140/pexels-photo-32885140.jpeg"/>
    <div className="absolute bottom-1 flex justify-center items-center p-2 w-full text-white">
    	<div className="p-2">
    	<div className="text-[20px] font-bold">Ladakh Yoga Retreat</div>
        <div className="text-[14px]">3 Days| 5 Days | 7days </div>
        </div>
        <div className="p-2">
        <a href="/program"><button className="rounded-full w-[100px] p-2 bg-white text-black" >View</button></a>
        </div>
    </div>
</div>

<div className="urbanist w-[360px] relative">
	<Image alt="Rishikesh Yoga Retreat" className="rounded object-cover w-full h-[300px]" src="https://images.pexels.com/photos/20035455/pexels-photo-20035455.jpeg"/>
    <div className="absolute bottom-1 flex justify-center items-center p-2 w-full text-white">
    	<div className="p-2">
    	<div className="text-[20px] font-bold">Rishikesh Yoga Retreat</div>
        <div className="text-[14px]">3 Days| 5 Days | 7days </div>
        </div>
        <div className="p-2">
        <a href="/program"><button className="rounded-full w-[100px] p-2 bg-white text-black">View</button></a>
        </div>
    </div>
</div>

<div className="urbanist w-[360px] relative">
	<Image alt="Dharmshala Yoga Retreat" className="rounded object-cover w-full h-[300px]" src="https://images.pexels.com/photos/26382826/pexels-photo-26382826.jpeg"/>
    <div className="absolute bottom-1 flex justify-center items-center p-2 w-full text-white">
    	<div className="p-2">
    	<div className="text-[20px] font-bold">Dharmshala Yoga Retreat</div>
        <div className="text-[14px]">3 Days| 5 Days | 7days </div>
        </div>
        <div className="p-2">
        <a href="/program"><button className="rounded-full w-[100px] p-2 bg-white text-black">View</button></a>
        </div>
    </div>
</div>

</div>

</div>)
}

export default Programs;