import React from "react";

function SkeletonCard() {
  return (
    <div className="animate-pulse rounded-lg overflow-hidden h-[360px] pb-6">
      <div className="h-60 w-full" />
      <div className="p-4 space-y-2 mb-3">
        <div className="h-4 w-3/4 rounded" />
        <div className="h-3 w-1/2 rounded" />
        <div className="h-8 w-full mt-4 rounded mb-6" />
      </div>
    </div>
  );
}

export default SkeletonCard;
