import React from "react"
import Link from "next/link";
const Header: React.FC=()=>{
    return (
        <header className="p-5 flex gap-10 text-white text-[12px] bg-[#172525] urbanist-100 justify-center">
            <Link href="" className="text-[#E4A689]">HOME</Link>
            <Link href="/#discover" className="hover:text-[#E4A689]">DISCOVER</Link>
            <Link href="/about" className="hover:text-[#E4A689]">ABOUT</Link>
            <Link href="/contact" className="hover:text-[#E4A689]">CONTACT</Link>
        </header>
    )
}

export default Header;