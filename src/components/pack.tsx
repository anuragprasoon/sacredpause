import React, {useEffect, useState} from "react";

const Pack:React.FC=()=>{
    return(<>
    <div className="p-10 urbanist bg-white text-black">
<h3 className=" font-bold text-[20px] mb-5">Select A Plan</h3>

<a href="/program"><button className="outline-1 p-3 rounded w-full mb-2"> Lite </button></a>
<a href="/program"><button className="outline-1 p-3 rounded w-full mb-2"> Essential </button></a>
<a href="/program"><button className="outline-1 p-3 rounded w-full mb-2"> Premium </button></a>
</div>
    </>
    )
}

export default Pack;