"use client";

import React from "react";
import CategoryCard from "./CategoryCard";
import { useTheme } from "next-themes";

function CategorySection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // avoid SSR mismatch

  return (
    <div>
      <h1 className="mb-5 mt-10 text-2xl font-semibold">Categories</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {["Singers", "Dancers", "Speakers", "DJs"].map((category) => (
          <CategoryCard
            key={category}
            category={category}
            image={`/category_images/${category.toLowerCase()}-${resolvedTheme}.svg`}
          />
        ))}
      </div>
    </div>
  );
}

export default CategorySection;
