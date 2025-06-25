import Image from "next/image";
import React from "react";

type Artist = {
  id: number;
  name: string;
  category: string;
  location: string;
  priceRange: string;
  image: string;
};

function ArtistCard({ artist }: { artist: Artist }) {
  return (
    <div className="border-2 dark:border-[#1c1d21] border-[#ebebec] rounded-lg overflow-hidden">
      <div className="relative w-full h-64">
        <Image
          src={artist.image}
          alt={artist.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-3">
        <h2 className="font-semibold text-lg">{artist.name}</h2>

        <div className="text-[#a6a7ac] font-semibold text-xs mt-1">
          <p>{artist.category}</p>
          <p>
            {artist.location}, {artist.priceRange}
          </p>
        </div>

        <button className="mt-3 font-medium w-full py-2 text-sm rounded bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
          Ask for Quote
        </button>
      </div>
    </div>
  );
}

export default ArtistCard;
