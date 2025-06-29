"use client";

import ReusableTable from "@/components/common/ReusableTable";
import { db } from "@/lib/appwrite";
import { Artist } from "@/shared/types";
import { useModalStore } from "@/store/useModalStore";
import { Query } from "appwrite";
import { useEffect, useState } from "react";

const columns: { label: string; key: keyof Artist }[] = [
  { label: "Name", key: "name" },
  { label: "Category", key: "category" },
  { label: "Location", key: "location" },
  { label: "Fee", key: "feeRange" },
];

export default function DashboardTable() {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [loading, setLoading] = useState(true);

  const { openModal } = useModalStore();

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
      } finally {
        setLoading(false);
      }
    };

    fetchArtists();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen px-1 sm:px-4 py-10">
        <div className="max-w-5xl mx-auto p-6 rounded-lg shadow-md border dark:border-[#2a2b2f]">
          <h1 className="text-3xl font-bold mb-6">Manager Dashboard</h1>
          <p className="text-gray-500">Loading...</p>
        </div>
      </div>
    );
  }

  if (artists.length === 0) {
    return (
      <div className="min-h-screen px-1 sm:px-4 py-10">
        <div className="max-w-5xl mx-auto p-6 rounded-lg shadow-md border dark:border-[#2a2b2f]">
          <h1 className="text-3xl font-bold mb-6">Manager Dashboard</h1>
          <p className="text-gray-500">No artists found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-1 sm:px-4 py-10">
      <div className="max-w-5xl mx-auto p-6 rounded-lg shadow-md border dark:border-[#2a2b2f]">
        <h1 className="text-3xl font-bold mb-6">Manager Dashboard</h1>

        <ReusableTable<Artist>
          data={artists}
          columns={columns}
          renderActions={(row) => (
            <button
              className="font-semibold cursor-pointer transition px-3 py-1 rounded text-xs sm:text-sm"
              onClick={() => {
                openModal(row.id);
              }}
            >
              View
            </button>
          )}
        />
      </div>
    </div>
  );
}
