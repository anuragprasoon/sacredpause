import React from "react"
import Link from "next/link";
const Header: React.FC=()=>{
    return (
        <header className="px-3 py-5 sm:p-5 flex gap-4 sm:gap-10 whitespace-nowrap text-white text-[12px] sm:text-[14px] font-semibold bg-[#172525] urbanist-300 justify-center">
            <Link href="/" className="text-[#E4A689]">HOME</Link>
            <Link href="/#discover" className="hover:text-[#E4A689]">DISCOVER</Link>
            <Link href="/yoga" className="hover:text-[#E4A689]">YOGA<span className="max-sm:hidden">&nbsp;CLASSES</span></Link>
            <Link href="/about"className="hover:text-[#E4A689]">ABOUT</Link>
            <Link href="/contact" className="hover:text-[#E4A689]">CONTACT</Link>
        </header>
    )
}

export default Header;