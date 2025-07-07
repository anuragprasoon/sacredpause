import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Load:React.FC=()=>{
    return(<div className="fixed left-0 right-0 mx-auto bg-[#172525]">
        <DotLottieReact autoplay loop src="lotus opening.json"/>
        </div>)
}

export default Load;