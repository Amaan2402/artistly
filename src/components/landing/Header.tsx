import Link from "next/link";
import React from "react";
import { ModeToggle } from "../ThemeToggle/ModeToggle";

function Header() {
  return (
    <div className="flex justify-between dark:bg-[#0a0a0a] bg-white py-1 items-center md:p-4 min-w-full mb-2 md:mb-13 sticky top-0 right-0 left-0  px-2 sm:px-5 lg:px-20 border-b dark:border-[#1c1d21] border-gray-300 z-10">
      <div className="w-4/12">
        <Link href="/">
          <h1 className="text-base font-medium md:text-2xl md:font-bold">
            Artistly
          </h1>
        </Link>
      </div>

      <div className="flex justify-between w-full items-center text-[10px] font-medium md:text-lg md:font-semibold lg:text-xl">
        <div>
          <Link href="/">
            <h1>Home</h1>
          </Link>
        </div>

        <div>
          <Link href="/artist-listing">
            <h1>Explore Artists</h1>
          </Link>
        </div>

        <div>
          <Link href="/artists/onboard">
            <h1>Become an Artist</h1>
          </Link>
        </div>

        <div>
          <Link href="/dashboard">
            <h1>Dashboard</h1>
          </Link>
        </div>

        <div className="hidden sm:block">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}

export default Header;
