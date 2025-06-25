"use client";

import React, { useEffect, useState } from "react";
import { artistData as staticArtists } from "@/data/artists";
import ArtistCard from "./ArtistCard";
import SkeletonCard from "./SkeletonCard"; // we'll define this next

type Artist = {
  id: number;
  name: string;
  category: string;
  location: string;
  priceRange: string;
  image: string;
};

function Artists({
  category,
  location,
  priceRange,
}: {
  category: string;
  location: string;
  priceRange: string;
}) {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setArtists(staticArtists); // simulate API load
      setLoading(false);
    }, 1000); // 1 second delay

    return () => clearTimeout(timeout);
  }, []);

  const filteredArtists = artists.filter((artist) => {
    const matchCategory =
      category === "all" ||
      artist.category.toLowerCase() === category.toLowerCase();
    const matchLocation =
      location === "all" ||
      artist.location.toLowerCase() === location.toLowerCase();

    const numericRange =
      priceRange === "0-100"
        ? [0, 100]
        : priceRange === "100-200"
        ? [100, 200]
        : priceRange === "200-300"
        ? [200, 300]
        : null;

    let matchPrice = true;
    if (numericRange) {
      const [min, max] = numericRange;
      const priceMatch = artist.priceRange.match(/\d+/g);
      if (priceMatch) {
        const avg = (parseInt(priceMatch[0]) + parseInt(priceMatch[1])) / 2;
        matchPrice = avg >= min && avg <= max;
      }
    }

    return matchCategory && matchLocation && matchPrice;
  });

  if (loading) {
    return (
      <div className="w-full px-4">
        <h1 className="text-2xl font-bold mb-10">Artists</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array(6)
            .fill(0)
            .map((_, i) => (
              <SkeletonCard key={i} />
            ))}
        </div>
      </div>
    );
  }

  if (!artists.length) {
    return <p className="text-center text-gray-400">No artists found.</p>;
  }

  return (
    <div className="w-full px-4">
      <h1 className="text-2xl font-bold mb-10">Artists</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArtists.map((artist) => (
          <ArtistCard artist={artist} key={artist.id} />
        ))}
      </div>
    </div>
  );
}

export default Artists;
