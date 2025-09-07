import Image from "next/image";
import WhyUs from "@/components/whyus";
import BenefitsSection from "@/components/benefits";
import Hero from "@/components/hero";
import Head from "next/head";

export default function Terms() {
  return (
    <>
    <Head>
      <title>Terms & Conditions | Sacred Pause</title>
      <meta name="description" content="A luxury yoga retreat designed to help you slow down, reconnect, and find balance through mindful movement, meditation, and nature." />
      <meta name="keywords" content="yoga, yoga retreat, india, ladakh yoga retreat, rishikesh yoga retreat, dharmsala yoga retreat, luxury yoga retreat" />
      <meta name="author" content="Sacred Pause" />
    
      <meta property="og:title" content="Terms & Conditions | Sacred Pause" />
      <meta property="og:description" content="A luxury yoga retreat designed to help you slow down, reconnect, and find balance through mindful movement, meditation, and nature." />
      <meta property="og:image" content="https://sacredpause.in/thumb.png" />
      <meta property="og:url" content="https://sacredpause.in" />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="Terms & Conditions | Sacred Pause" />
      <meta name="twitter:title" content="Terms & Conditions | Sacred Pause" />
      <meta name="twitter:description" content="A luxury yoga retreat designed to help you slow down, reconnect, and find balance through mindful movement, meditation, and nature." />
      <meta name="twitter:image" content="https://sacredpause.in/thumb.png" />

  
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="p-10 text-black bg-white">
            <h2 className="urbanist text-[40px] font-bold anim" data-aos="fade-up">Terms & Condition</h2>
            <Image  data-aos="fade-up" className="mb-5 mt-5 object-cover h-[300px] w-full rounded anim" src="https://images.pexels.com/photos/3820380/pexels-photo-3820380.jpeg"/> 
            <p className="urbanist anim" data-aos="fade-right">
~
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus pharetra orci, eu bibendum nulla fringilla eget. Nullam accumsan enim id tristique molestie. Cras sed tristique lorem. Aliquam imperdiet libero ac nisl porta, et congue magna eleifend. Ut pharetra aliquet eros, non consectetur quam posuere eget. Aenean placerat eros id semper bibendum. Sed at fermentum nibh.
            </p><br/>
            <p className="urbanist" data-aos="fade-right">
              Pellentesque ultricies mauris ut massa gravida sodales. Praesent malesuada libero et justo efficitur lobortis at id felis. Mauris tempor a diam sit amet rutrum. Praesent pharetra enim velit, in volutpat est fermentum sed. Curabitur est nulla, dapibus sed lobortis quis, luctus sit amet dolor. Vestibulum maximus metus ac rhoncus pellentesque. Praesent nec ex quis tortor pulvinar cursus sed facilisis nulla. Nunc vitae iaculis augue. Vestibulum iaculis augue a massa faucibus porttitor id in mi. Etiam velit metus, tempus a tellus blandit, elementum sollicitudin tellus. Nulla facilisi. Maecenas ut risus sit amet nulla ultrices imperdiet nec vel urna. Cras fringilla vitae quam finibus posuere. Vivamus eu elit turpis. Nam ac urna eu eros laoreet egestas eget vitae ipsum. Vestibulum eu malesuada ex.
            </p>
            
          </div>

          <div className="flex mt-5 gap-2 overflow-x-auto bg-[#172525] p-10 rounded">
                <Image className="h-[300px] w-[400px] object-cover rounded" src="https://images.pexels.com/photos/1234035/pexels-photo-1234035.jpeg"/>

                <Image className="h-[300px] w-[400px] object-cover rounded" src="https://images.pexels.com/photos/3576284/pexels-photo-3576284.jpeg"/>

                <Image className="h-[300px] w-[400px] object-cover rounded" src="https://images.pexels.com/photos/906097/pexels-photo-906097.jpeg"/>
            </div>
    </>
  );
}
