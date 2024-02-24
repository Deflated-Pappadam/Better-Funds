'use client' 
import Image from "next/image";
import NavBar from "./components/NavBar";
import Datablock from "./components/Datablock";
import { motion } from "framer-motion"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#f5f5f5] poppins-regular ">
      <div className="pt-[2vw] w-full">
        <NavBar />
      </div>
      <section className="flex flex-col min-h-screen justify-center items-center p-[2vw] ">
        <div className="flex flex-col justify-center items-center leading-none tracking-none p-[30px]">
          <h1 className="text-[#2d2d2d] text-[6vw] font-open-sans tracking-tighter">
            Better
          </h1>
          <h1 className="text-[#2d2d2d] text-[6vw] font-open-sans tracking-tighter">
            Funds
          </h1>
        </div>
        <h2 className="w-[30%] text-[#616161] text-center text-[1.2vw]">
        Contributions to Tokens, Projects to Progress, Marketplace to Discover        </h2>
        <div className="flex gap-2">
        <a href="/business/dashboard" className="text-white text-xl px-8 py-3 bg-[#2d2d2d] rounded-xl m-2">
        Entrepreneur
        </a>
        <a  href="/contributor/dashboard" className="text-white text-xl px-8 py-3 bg-[#2d2d2d] rounded-xl m-2">
          Contributor
        </a>
        </div>
        
        <motion.div  className="flex gap-[2vw] p-5" initial={{ opacity: 0,y:40 }}
    animate={{ opacity: 1,y:0}}
    transition={{ duration: 1.0 }}>

          <Image
            src="/books.png"
            alt=""
            width={1080}
            height={1080}
            className="w-[200px] rounded-xl translate-y-[5vw]"
          />
   
     
          <Image
            src="/people.png"
            alt=""
            width={1080}
            height={1080}
            className="w-[200px] rounded-xl "
          />
   
    
          <Image
            src="/cybertruck.png"
            alt=""
            width={1080}
            height={1080}
            className="w-[200px] rounded-xl  translate-y-[5vw]"
          />

      
          <Image
            src="/batman.png"
            alt=""
            width={1080}
            height={1080}
            className="w-[200px] rounded-xl  "
          />
      
     
          <Image
            src="/plushie.png"
            alt=""
            width={1080}
            height={1080}
            className="w-[200px] rounded-xl  translate-y-[5vw]"
          />
       
        </motion.div>
      </section>
      <section
        id="aboutUs"
        className="w-full mt-[200px] px-[12vw] text-start poppins-medium"
      >
        <h1 className="text-[3vw] text-[#2d2d2d9f] ">

        <span className="text-[#2d2d2d] font-open-sans"> Better Funds : </span>Fuel projects, earn tokens, shop the marketplace. Transform contributions into a better future.




        </h1>
      </section>
      <section className="flex w-full bg-[#1c1c1c] min-h-screen mt-10">
        <div className="flex w-[50%] justify-center items-center ">
          <h1 className="w-[70%] text-[3vw] text-[#ffffff6d] tracking-tighter leading-none">
            <span className="text-white poppins-medium">
              
            Comprehensively advantageous .   
            </span>
             Here, your contributions spark innovation and projects come to life. 
          </h1>
        </div>
        <div className="flex justify-center items-center w-[50%]">
          <Image
            src="/bulb.png"
            alt=""
            width={1080}
            height={1080}
            className="w-[500px] h-[500px] object-cover rounded-[2rem]"
          />
        </div>
      </section>
      <section className="flex w-full bg-[#1c1c1c] pb-[6vw]">
        <div className="flex justify-center items-center w-[50%]">
          <Image
            src="/hands.png"
            alt=""
            width={1080}
            height={1080}
            className="w-[500px] h-[500px] object-cover rounded-[2rem]"
          />
        </div>
        <div className="flex w-[50%] justify-center items-center ">
          <h1 className="w-[70%] text-[3vw] text-[#ffffff6d] tracking-tighter leading-none">
            <span className="text-white poppins-medium">
            Co-Operative Ecosystem . 
            </span>
            Unlock innovation with your tokens. Deep dive into our marketplace.
          </h1>
        </div>
      </section>
      <section className="w-full flex flex-col justify-center items-center text-center">
        <div className="leading-none poppins-medium  text-[#2d2d2d9d] text-[2vw] p-[2vw] pt-[4vw]">
          <h1 className="text-black">...and much more. </h1>
          ‍‍<h1>Join us in making a change .</h1>
        </div>
        <div className="flex flex-wrap gap-6 h-fit p-[4vw] justify-center items-center">
        <Datablock heading="Blockchain Based" desc="Assured transparency and ease of transaction by utilizing the scopes of crytpo-wallets and tokens available."/>
        <Datablock heading="Incentives/Rewards" desc="Contributors receive PDM tokens proportional to their contributions, redeemable on our marketplace."/>
        <Datablock heading="Incremental Funding" desc="Businesses receive funds incrementally based on progress achieved and handled ."/>
        <Datablock heading="StableCoins and etc" desc="All Crypto donations are converted to StableCoins which make it near to immune to market fluctuations."/>
        <Datablock heading="Mutually Beneficial" desc="We create an ecosystem that aims to benefit both entrepreneurs and contributors."/>
        <Datablock heading="Re-finig Fundraisers" desc="Better Funds aims to replace the current framework with a more advanced counterpart."/>
         </div>
      </section>

      <footer className="flex flex-col min-h-[400px] bg-[#1c1c1c] w-full p-5 justify-center items-center">
<h1 className="text-[7vw] text-[#f6f6f6]">Better Funds</h1>
<h2 className="text-[1.5vw] text-[#f6f6f6]">Contributions to Tokens, Projects to Progress, Marketplace to Discover</h2>
<h3 className="text-[#f6f6f6] text-lg  p-5"> ©️ deflated pappadam 2024</h3>

<h4 className="text-[#f6f6f6] p-5">All assets used in this website are generated using stable diffusion</h4>
      </footer>
    </main>
  );
}
