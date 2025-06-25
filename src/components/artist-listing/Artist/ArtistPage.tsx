"use client";

import Artists from "@/components/artist-listing/Artist/Artists";
import Filter from "@/components/artist-listing/Filter/Filter";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function ArtistPage() {
  const [category, setCategory] = useState("all");
  const [location, setLocation] = useState("all");
  const [priceRange, setPriceRange] = useState("all");

  const searchParams = useSearchParams();
  const categoryParams = searchParams.get("category");

  useEffect(() => {
    if (categoryParams) {
      const formattedCategory = categoryParams.endsWith("s")
        ? categoryParams.slice(0, -1)
        : categoryParams;

      setCategory(formattedCategory);
    }
  }, [categoryParams]);

  return (
    <div className="lg:flex lg:justify-between">
      <Filter
        category={category}
        setCategory={setCategory}
        location={location}
        setLocation={setLocation}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
      />
      <Artists
        category={category}
        location={location}
        priceRange={priceRange}
      />
    </div>
  );
}

export default ArtistPage;
