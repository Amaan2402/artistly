"use client";

import { artistData } from "@/data/artists";
import ReusableTable from "@/components/common/ReusableTable";

// Type your artist data shape
type Artist = {
  id: number;
  name: string;
  category: string;
  location: string;
  priceRange: string;
  image: string;
};

const columns: { label: string; key: keyof Artist }[] = [
  { label: "Name", key: "name" },
  { label: "Category", key: "category" },
  { label: "Location", key: "location" },
  { label: "Fee", key: "priceRange" },
];

export default function DashboardTable() {
  return (
    <div className="min-h-screen px-1 sm:px-4 py-10 bg-[#0f1112] text-white">
      <div className="max-w-5xl mx-auto p-6 rounded-lg shadow-md border border-[#2a2b2f] bg-[#1a1b1e]">
        <h1 className="text-3xl font-bold mb-6">Manager Dashboard</h1>

        <ReusableTable<Artist>
          data={artistData}
          columns={columns}
          renderActions={() => (
            <button className="bg-muted hover:bg-muted/90 font-semibold cursor-pointer text-black transition px-3 py-1 rounded text-xs sm:text-sm">
              View
            </button>
          )}
        />
      </div>
    </div>
  );
}
