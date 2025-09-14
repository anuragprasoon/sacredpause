import Image from "next/image";
import AOS from "aos";
import { useEffect } from "react";
import Head from "next/head";



export default function About() {
  useEffect(()=>{
            AOS.init()
            },[])

  return (<>
  <Head>
      <title>About Sacred Pause | India's Best Yoga Retreat Programs powered by Lambda Adventures</title>
      <meta name="description" content="A luxury yoga retreat designed to help you slow down, reconnect, and find balance through mindful movement, meditation, and nature." />
      <meta name="keywords" content="yoga, yoga retreat, india, ladakh yoga retreat, rishikesh yoga retreat, dharmsala yoga retreat, luxury yoga retreat" />
      <meta name="author" content="Sacred Pause" />
    
      <meta property="og:title" content="About Sacred Pause | For Your Mind, Body & Soul " />
      <meta property="og:description" content="A luxury yoga retreat designed to help you slow down, reconnect, and find balance through mindful movement, meditation, and nature." />
      <meta property="og:image" content="https://sacredpause.in/thumb.png" />
      <meta property="og:url" content="https://sacredpause.in" />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="About Sacred Pause" />
      <meta name="twitter:title" content="About Sacred Pause | For Your Mind, Body & Soul " />
      <meta name="twitter:description" content="A luxury yoga retreat designed to help you slow down, reconnect, and find balance through mindful movement, meditation, and nature." />
      <meta name="twitter:image" content="https://sacredpause.in/thumb.png" />

  
      <link rel="icon" href="/favicon.ico" />
    </Head>
  <div className="p-10 text-black bg-white">
            <h2 className="urbanist text-[40px] font-bold anim" data-aos="fade-up">Our Story</h2>
            <img  alt="Sacred Pause Story thumbnail" data-aos="fade-up" className="mb-5 mt-5 object-cover h-[300px] w-full rounded anim" src="https://images.pexels.com/photos/3820380/pexels-photo-3820380.jpeg"/> 
            <p className="urbanist anim" data-aos="fade-right">
              In the bustling marketplace of modern wellness, Sacred Pause was born from a different calling. We witnessed too many searching for transformation in all the wrong places: chasing the next technique, the perfect guru, the instant breakthrough.
              Our founders, after decades of their own spiritual seeking across India's ashrams and sacred sites, understood a profound truth: transformation doesn't happen through force or perfection. It unfolds in the spaces between breaths, in moments of genuine stillness, in the courage to simply be present with what is.
            </p><br/>
            <p className="urbanist" data-aos="fade-right">
We created Sacred Pause as a sanctuary for the professional who meditates, the leader who seeks meaning, the achiever who knows there must be more. Our retreats honor both your worldly accomplishments and your soul's deeper longing.
Every aspect of your experience is carefully curated to support your inner unfolding. From the placement of meditation cushions to the selection of organic meals, from the timing of yoga sessions to the choice of sacred sites we visit together, everything serves your journey toward remembering who you truly are.
            </p>

          </div>
          <div className="flex mt-5 gap-2 overflow-x-auto bg-[#172525] p-10 rounded">
                <img alt="sacred pause gallery" className="h-[300px] w-[400px] object-cover rounded" src="https://images.pexels.com/photos/1234035/pexels-photo-1234035.jpeg"/>

                <img alt="sacred pause gallery" className="h-[300px] w-[400px] object-cover rounded" src="https://images.pexels.com/photos/3576284/pexels-photo-3576284.jpeg"/>

                <img alt="sacred pause gallery" className="h-[300px] w-[400px] object-cover rounded" src="https://images.pexels.com/photos/906097/pexels-photo-906097.jpeg"/>
            </div>
          </>
  );
}
