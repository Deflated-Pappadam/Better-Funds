import Image from "next/image";
import NavBar from "./components/NavBar";
import Datablock from "./components/Datablock";

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
        Your Token, Your Impact, Our Marketplace
         
        </h2>
        <button className="text-white text-xl px-6 py-3 bg-blue-500 rounded-xl m-2">
          Join Now
        </button>
        <div className="flex gap-[2vw] p-5">
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
        </div>
      </section>
      <section
        id="aboutUs"
        className="w-full mt-[200px] px-[12vw] text-start poppins-medium"
      >
        <h1 className="text-[3vw] text-[#2d2d2d9f] ">
          <span className="text-[#2d2d2d] font-open-sans">Better Funds</span> is
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          expedita mollitia optio, molestiae voluptatum
        </h1>
      </section>
      <section className="flex w-full bg-[#1c1c1c] min-h-screen mt-10">
        <div className="flex w-[50%] justify-center items-center ">
          <h1 className="w-[70%] text-[3vw] text-[#ffffff6d] tracking-tighter leading-none">
            <span className="text-white poppins-medium">
              Multiple workspaces.
            </span>
            Create custom spaces for all of your businesses or clients and
            easily switch between them.
          </h1>
        </div>
        <div className="flex justify-center items-center w-[50%]">
          <Image
            src="/plushie.png"
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
            src="/plushie.png"
            alt=""
            width={1080}
            height={1080}
            className="w-[500px] h-[500px] object-cover rounded-[2rem]"
          />
        </div>
        <div className="flex w-[50%] justify-center items-center ">
          <h1 className="w-[70%] text-[3vw] text-[#ffffff6d] tracking-tighter leading-none">
            <span className="text-white poppins-medium">
              Multiple workspaces.
            </span>
            Create custom spaces for all of your businesses or clients and
            easily switch between them.
          </h1>
        </div>
      </section>
      <section className="w-full flex flex-col justify-center items-center text-center">
        <div className="leading-none poppins-medium  text-[#2d2d2d9d] text-[2vw] p-[2vw] pt-[4vw]">
          <h1 className="text-black">...and much more. </h1>
          ‍‍<h1>Join thousands making the switch.</h1>
        </div>
        <div className="flex flex-wrap gap-6 h-fit p-[4vw] justify-center items-center">
        <Datablock heading="Privacy friendly" desc="We collect far less data than most email marketing platforms, and strive to comply with all global privacy regulations."/>
        <Datablock heading="Privacy friendly" desc="We collect far less data than most email marketing platforms, and strive to comply with all global privacy regulations."/>
        <Datablock heading="Privacy friendly" desc="We collect far less data than most email marketing platforms, and strive to comply with all global privacy regulations."/>
        <Datablock heading="Privacy friendly" desc="We collect far less data than most email marketing platforms, and strive to comply with all global privacy regulations."/>
        <Datablock heading="Privacy friendly" desc="We collect far less data than most email marketing platforms, and strive to comply with all global privacy regulations."/>
        <Datablock heading="Privacy friendly" desc="We collect far less data than most email marketing platforms, and strive to comply with all global privacy regulations."/>
         </div>
      </section>

      <footer className="min-h-[400px] bg-[#1c1c1c] w-full">

      </footer>
    </main>
  );
}
