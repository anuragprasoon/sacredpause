import React, {useEffect, useState} from "react";

const Trips:React.FC=()=>{
    return(
    <div className="p-10 bg-white text-black">

<div className="sm:flex gap-5">

<div className="urbanist w-full relative mb-5">
	<img className="rounded object-cover w-full h-[300px]" src="https://images.pexels.com/photos/32885140/pexels-photo-32885140.jpeg"/>
    <div className="  bottom-1 flex  items-center p-2 w-full">
    	<div className="p-2">
    	<div className="text-[20px] font-bold">Ladakh Yoga Retreat</div>
        <div className="text-[14px]">3 Days| 5 Days | 7days </div>
        </div>
        <div className="p-2 ml-auto">
        <button className=" rounded-full w-[100px] p-2 bg-[#175175] text-white">Book Now</button>
        </div>
    </div>
    <p className="p-2">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus pharetra orci, eu bibendum nulla fringilla eget. Nullam accumsan enim id tristique molestie. Cras sed tristique lorem. Aliquam imperdiet libero ac nisl porta, et congue magna eleifend. Ut pharetra aliquet eros, non consectetur quam posuere eget. Aenean placerat eros id semper bibendum. Sed at fermentum nibh.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus pharetra orci, eu bibendum nulla fringilla eget. Nullam accumsan enim id tristique molestie. Cras sed tristique lorem. Aliquam imperdiet libero ac nisl porta, et congue magna eleifend. Ut pharetra aliquet eros, non consectetur quam posuere eget. Aenean placerat eros id semper bibendum. Sed at fermentum nibh.
    </p>
    <h4 className="p-2 text-[16px] font-semibold">Photos</h4>
    <div className="flex gap-2 p-2">
    <img className="w-[60px] h-[60px] object-cover rounded" src="https://images.pexels.com/photos/32885140/pexels-photo-32885140.jpeg"/>
    <img className="w-[60px] h-[60px] object-cover rounded" src="https://images.pexels.com/photos/32885140/pexels-photo-32885140.jpeg"/>
    <img className="w-[60px] h-[60px] object-cover rounded" src="https://images.pexels.com/photos/32885140/pexels-photo-32885140.jpeg"/>
    </div>
</div>



</div>
</div>)
}

export default Trips;