import React from "react"
const Header: React.FC=()=>{
    return (
        <header className="p-5 flex gap-10 text-white text-[12px] bg-[#172525] urbanist-100">
            <a href="" className="text-[#E4A689]">HOME</a>
            <a href="" className="hover:text-[#E4A689]">DISCOVER</a>
            <a href="" className="hover:text-[#E4A689]">ABOUT</a>
            <a href="" className="hover:text-[#E4A689]">CONTACT</a>
        </header>
    )
}

export default Header;