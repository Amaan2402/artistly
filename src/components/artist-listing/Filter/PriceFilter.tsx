import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function PriceFilter({
  priceRange,
  setPriceRange,
}: {
  priceRange: string;
  setPriceRange: (value: string) => void;
}) {
  return (
    <div className="lg:mt-3">
      <h1 className="font-medium text-sm md:text-lg mb-2">Price Range</h1>
      <Select onValueChange={setPriceRange} value={priceRange}>
        <SelectTrigger className="md:w-[180px] w-[140px] font-bold">
          <SelectValue placeholder="All" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="0-100">₹0 - ₹100K</SelectItem>
          <SelectItem value="100-200">₹100K - ₹200K</SelectItem>
          <SelectItem value="200-300">₹200K - ₹300K</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default PriceFilter;
