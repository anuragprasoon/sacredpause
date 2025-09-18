import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Load:React.FC=()=>{
    return(<div className="flex  w-full h-screen justify-center items-center bg-[#172525]">
        <DotLottieReact autoplay loop src="/lotus.json" className="w-[300px]"/>
        </div>)
}

export default Load;