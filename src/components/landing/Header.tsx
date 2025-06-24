import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="flex justify-between items-center p-4 w-full mb-13 sticky top-0 right-0 left-0 px-40  bg-[#0f1112] border-b border-[#1c1d21] z-10">
      <div className="w-4/12">
        <Link href="/">
          <h1 className="text-2xl font-bold">Artistly</h1>
        </Link>
      </div>

      <div className="flex items-center space-x-15 text-lg font-semibold">
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
          <h1>Dashboard</h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
