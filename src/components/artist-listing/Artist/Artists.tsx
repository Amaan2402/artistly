"use client";

import React, { useEffect, useState } from "react";
import ArtistCard from "./ArtistCard";
import SkeletonCard from "./SkeletonCard"; // we'll define this next
import { Artist } from "@/shared/types";

function Artists({
  artists,
  category,
  location,
  feeRange,
}: {
  category: string;
  location: string;
  feeRange: string;
  artists: Artist[];
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (artists.length > 0) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [artists]);

  const filteredArtists = artists.filter((artist) => {
    const matchCategory =
      category === "all" ||
      artist.category
        .map((cat) => cat.toLowerCase())
        .includes(category.toLowerCase());
    const matchLocation =
      location === "all" ||
      artist.location.toLowerCase() === location.toLowerCase();

    const numericRange =
      feeRange === "0-100"
        ? [0, 100]
        : feeRange === "100-200"
        ? [100, 200]
        : feeRange === "200-300"
        ? [200, 300]
        : null;

    let matchPrice = true;
    if (numericRange) {
      const [min, max] = numericRange;
      const priceMatch = artist.feeRange.match(/\d+/g);
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {filteredArtists.map((artist) => (
          <ArtistCard artist={artist} key={artist.id} />
        ))}
      </div>
    </div>
  );
}

export default Artists;
