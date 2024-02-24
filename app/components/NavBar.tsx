import React from "react";

function NavBar() {
  return (
    <nav className="flex w-[95%] mx-auto text-[#2d2d2d] justify-between items-center my-5">
      <a
        href="/"
        className="flex flex-col items-center justify-center poppins-semibold min-w-[200px]  text-lg tracking-none leading-none"
      >
        <div>Better</div>
        <div>Funds</div>
      </a>
      <div className="flex gap-6 text-xl">
        <a href="/" className="cursor-pointer">Home</a>
        <a href="/#aboutUs" className="cursor-pointer">About</a>
        <a href="/marketplace" className="cursor-pointer">
          MarketPlace
        </a>
      </div>
      <div className="min-w-[200px]">
        <a href="/BetterFunds.pdf" download className="bg-[#2d2d2d] text-white rounded-md px-4 py-2  ">
          Download Abstract
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
