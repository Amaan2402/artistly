import Image from "next/image";
import Link from "next/link";
import React from "react";

function CategoryCard({
  category,
  image,
}: {
  category: string;
  image: string;
}) {
  return (
    <Link href={`/artist-listing?category=${category.toLowerCase()}`}>
      <div className="border border-[#ebebec] dark:border-[#1f1f1f] p-3 px-15 flex flex-col items-center justify-center gap-2 rounded-xl hover:bg-[#f4f4f4] dark:hover:bg-[#1a1a1a] transition-all duration-300 cursor-pointer">
        <Image alt="Category Image" src={image} width={80} height={80} />
        <h2 className="text-xl font-semibold">{category}</h2>
      </div>
    </Link>
  );
}

export default CategoryCard;
