import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Urbanist } from "next/font/google";
import { useState, useEffect } from "react";
import Load from "@/components/loading";
import Head from "next/head";
import { useRouter } from "next/router";

const urbanist = Urbanist({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  preload: true,
  fallback: ['system-ui', 'arial']
});


export default function App({ Component, pageProps }: AppProps) {
  const [isLoad, setIsLoad] = useState(true)
  const { pathname } = useRouter();

  useEffect(()=>{
    setTimeout(()=>{
      setIsLoad(false);
    },3000)

  },[])

  // /yoga is a standalone landing page with its own nav, footer and fonts.
  if (pathname === "/yoga") {
    return <Component {...pageProps} />;
  }
  return(
    <div className={urbanist.className}>
    {isLoad? <Load/>: 
    <><Header/>
    <Component {...pageProps} /> 
    <Footer/></>
    }
    </div>
  ) 
}
