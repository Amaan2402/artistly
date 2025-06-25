import React from "react";
import CategoryFilter from "./CategoryFilter";
import LocationFilter from "./LocationFIlter";
import PriceFilter from "./PriceFilter";

type Props = {
  category: string;
  setCategory: (value: string) => void;
  location: string;
  setLocation: (value: string) => void;
  priceRange: string;
  setPriceRange: (value: string) => void;
};

function Filter({
  category,
  setCategory,
  location,
  setLocation,
  priceRange,
  setPriceRange,
}: Props) {
  return (
    <div>
      <h1 className="text-2xl font-bold">Filters</h1>
      <div className="md:mt-10 mt-3 flex items-center flex-wrap justify-between lg:block border dark:border-[#1c1d21] rounded-lg p-4">
        <CategoryFilter category={category} setCategory={setCategory} />
        <LocationFilter location={location} setLocation={setLocation} />
        <PriceFilter priceRange={priceRange} setPriceRange={setPriceRange} />
      </div>
    </div>
  );
}

export default Filter;
