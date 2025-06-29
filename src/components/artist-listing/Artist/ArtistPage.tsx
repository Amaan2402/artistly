"use client";

import Artists from "@/components/artist-listing/Artist/Artists";
import Filter from "@/components/artist-listing/Filter/Filter";
import { db } from "@/lib/appwrite";
import { Artist } from "@/shared/types";
import { Query } from "appwrite";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function ArtistPage() {
  const [category, setCategory] = useState("all");
  const [location, setLocation] = useState("all");
  const [feeRange, setFeeRange] = useState("all");

  const [artists, setArtists] = useState<Artist[]>([]);

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

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const artistsDb = await db.listDocuments(
          process.env.NEXT_PUBLIC_APPWRITE_ARTISTLY_DATABASE_ID!,
          process.env.NEXT_PUBLIC_APPWRITE_ARTISTS_COLLECTION_ID!,
          [
            Query.select([
              "name",
              "email",
              "category",
              "languages",
              "feeRange",
              "location",
              "image",
            ]),
          ]
        );

        const artists: Artist[] = artistsDb.documents.map((artist) => ({
          id: artist.$id,
          name: artist.name,
          email: artist.email,
          category: artist.category,
          location: artist.location,
          languages: artist.languages,
          feeRange: artist.feeRange,
          image: artist.image,
        }));

        setArtists(artists);
      } catch (error) {
        console.error("Error fetching artists:", error);
      }
    };

    fetchArtists();
  }, []);

  return (
    <div className="lg:flex lg:justify-between">
      <Filter
        category={category}
        setCategory={setCategory}
        location={location}
        setLocation={setLocation}
        feeRange={feeRange}
        setFeeRange={setFeeRange}
      />
      <Artists
        category={category}
        location={location}
        feeRange={feeRange}
        artists={artists}
      />
    </div>
  );
}

export default ArtistPage;
