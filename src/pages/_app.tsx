import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({
  subsets: ['latin'],
  display: 'swap',
});


export default function App({ Component, pageProps }: AppProps) {
  return(
    <div className={urbanist.className}>
    <Header/>
    <Component {...pageProps} />
    <Footer/>
    </div>
  ) 
}
