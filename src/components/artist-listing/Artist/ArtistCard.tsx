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
    <div className="border border-[#1c1d21] bg-[#131518] rounded-lg overflow-hidden">
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

        <div className="text-[#a6a7ac] text-xs mt-1">
          <p>{artist.category}</p>
          <p>
            {artist.location}, {artist.priceRange}
          </p>
        </div>

        <button className="bg-[#1e1f25] hover:bg-[#2a2c32] mt-3 font-medium w-full py-2 text-sm rounded">
          Ask for Quote
        </button>
      </div>
    </div>
  );
}

export default ArtistCard;
