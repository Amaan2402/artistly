"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
function CategoryFilter({
  category,
  setCategory,
}: {
  category: string;
  setCategory: (v: string) => void;
}) {
  const router = useRouter();

  const handleSetCategory = (value: string) => {
    setCategory(value);
    router.push("/artist-listing?category=" + value + "s");
  };
  return (
    <div>
      <h1 className="font-medium md:text-lg mb-2 text-sm">Category</h1>
      <Select onValueChange={handleSetCategory} value={category}>
        <SelectTrigger className="md:w-[180px] w-[140px] font-bold">
          <SelectValue placeholder="All" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="singer">Singers</SelectItem>
          <SelectItem value="dancer">Dancers</SelectItem>
          <SelectItem value="speaker">Speakers</SelectItem>
          <SelectItem value="dj">DJs</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default CategoryFilter;
