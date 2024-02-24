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
      </section>
    </main>
  );
}
