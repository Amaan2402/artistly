"use client";

import ArtistCard from "@/components/artist-listing/Artist/ArtistCard";
import { db } from "@/lib/appwrite";
import { Artist } from "@/shared/types";
import { useModalStore } from "@/store/useModalStore";
import { Query } from "appwrite";
import React, { useEffect, useState } from "react";

function ArtistModal() {
  const { closeModal, isOpen, artistId } = useModalStore();
  const [loading, setLoading] = useState(true);
  const [artist, setArtist] = useState<Artist | null>(null);

  useEffect(() => {
    const fetchArtist = async () => {
      const artistDb = await db.listDocuments(
        process.env.NEXT_PUBLIC_APPWRITE_ARTISTLY_DATABASE_ID!,
        process.env.NEXT_PUBLIC_APPWRITE_ARTISTS_COLLECTION_ID!,
        [Query.equal("$id", artistId!)]
      );

      setArtist({
        id: artistDb.documents[0].$id,
        name: artistDb.documents[0].name,
        email: artistDb.documents[0].email,
        category: artistDb.documents[0].category,
        location: artistDb.documents[0].location,
        languages: artistDb.documents[0].languages,
        feeRange: artistDb.documents[0].feeRange,
        image: artistDb.documents[0].image,
      });
      setLoading(false);
    };
    if (isOpen && artistId) {
      fetchArtist();
    }
  }, [isOpen, artistId]);
  if (!isOpen) return null;

  if (loading || !artist) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-black opacity-50"
          onClick={closeModal}
        ></div>

        <div className="relative bg-[#111111] flex flex-col items-center rounded-xl shadow-lg p-4 px-6 z-60 w-[90%] max-w-md">
          <h1>Loading...</h1>
        </div>
      </div>
    );
  }
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-blue-500 opacity-50"
        onClick={closeModal}
      ></div>

      <div className="relative bg-[#111111] flex flex-col items-center rounded-xl shadow-lg p-4 px-6 z-60 w-[80%] max-w-md">
        <ArtistCard artist={artist} />
      </div>
    </div>
  );
}

export default ArtistModal;
