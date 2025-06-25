import React from "react";
import CategoryCard from "./CategoryCard";

function CategorySection() {
  return (
    <div>
      <h1 className="mb-5 mt-10 text-2xl font-semibold">Categories</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {["Singers", "Dancers", "Speakers", "DJs"].map((category) => (
          <CategoryCard
            category={category}
            image={`/category_images/${category.toLowerCase()}.svg`}
            key={category}
          />
        ))}
      </div>
    </div>
  );
}

export default CategorySection;
