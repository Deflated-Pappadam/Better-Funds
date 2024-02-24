import Image from "next/image";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-[2vw] bg-[#f5f5f5] poppins-regular ">
      <NavBar/>
      <section className="flex flex-col min-h-screen justify-center items-center">
        <div className="flex flex-col justify-center items-center leading-none tracking-none p-[30px]">
          <h1 className="text-[#2d2d2d] text-[6vw] font-open-sans tracking-tighter">Better</h1>
          <h1 className="text-[#2d2d2d] text-[6vw] font-open-sans tracking-tighter">Funds</h1>
        </div>
        <h2 className="w-[30%] text-[#616161] text-center text-[1.2vw]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et
          tristique eros. Aenean in lacus sagittis, viverra velit eu, tincidunt
        </h2>
        <button className="text-white text-xl px-6 py-3 bg-blue-500 rounded-xl m-2">
          Join Now
        </button>
        <div className="flex gap-[2vw] p-5">
          <Image src="/books.png" alt="" width={1080} height={1080} className="w-[200px] rounded-xl translate-y-[5vw]"/>
          <Image src="/people.png" alt="" width={1080} height={1080} className="w-[200px] rounded-xl "/>
          <Image src="/cybertruck.png" alt="" width={1080} height={1080} className="w-[200px] rounded-xl  translate-y-[5vw]"/>
          <Image src="/batman.png" alt="" width={1080} height={1080} className="w-[200px] rounded-xl  "/>
          <Image src="/plushie.png" alt="" width={1080} height={1080} className="w-[200px] rounded-xl  translate-y-[5vw]"/>
        </div>
      </section>
      <section id="aboutUs" className="w-full mt-[200px] px-[12vw] text-start poppins-medium">
        <h1 className="text-[3vw] text-[#2d2d2d9f] "><span className="text-[#2d2d2d] font-open-sans">Better Funds</span> is Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur expedita mollitia optio, molestiae voluptatum</h1>
      </section>
    </main>
  );
}
