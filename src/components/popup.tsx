import React, {useState} from "react";

const PopUp:React.FC=()=>{
    const [popview, setPopview] = useState(true);
    const close=()=>{
        setPopview(false);
    }
    return(popview?<>
        <div className="max-sm:hidden  fixed z-[2] top-10  p-10 rounded w-[70%] left-0 right-0 mx-auto text-black">
        <button className="bg-white rounded-full p-2 m-2 absolute right-10" onClick={close}>X</button>
        <a href="/"><img className="rounded w-full" src="https://res.cloudinary.com/anuragprasoon/image/upload/v1751835393/sacred-pause-com/ad-story_lambda-2.png"/></a>
        </div>

        <div className="sm:hidden fixed z-[2] top-10 p-10 rounded left-0 right-0 mx-auto  text-black">
        <button className="bg-white rounded-full p-2 m-2 absolute right-10" onClick={close}>X</button>
        <a href="/"><img className="rounded w-full" src="https://res.cloudinary.com/anuragprasoon/image/upload/v1751835393/sacred-pause-com/ad-story_lambda.png"/></a>
        </div>
</>:<></>)
}

export default PopUp;