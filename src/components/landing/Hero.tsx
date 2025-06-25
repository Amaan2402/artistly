import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div className="text-center">
      <section className="text-start sm:text-center">
        <h1 className="text-4xl lg:text-6xl font-bold mb-8">
          Discover and book <br /> performing artists
        </h1>
        <p className="text-lg text-[#7d7d7d] font-medium mb-4">
          Find the perfect performers for your next event with Artistly.
        </p>

        <Link href="/artist-listing">
          <button className="bg-white rounded-lg text-[#131313] font-bold p-1 px-4 text-base sm:text-lg cursor-pointer">
            Browse Artists
          </button>
        </Link>
      </section>
    </div>
  );
}

export default Hero;
