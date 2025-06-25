export const metadata = {
  title: "Explore Artists – Artistly",
  description:
    "Browse performing artists by category, location, and budget. Discover singers, dancers, DJs, and more for your event.",
  keywords: [
    "artist listing",
    "book performers",
    "filter artists",
    "event entertainers",
  ],
  metadataBase: new URL("https://artistly.amaan24.tech"),
};

import ArtistPage from "@/components/artist-listing/Artist/ArtistPage";
import { MotionFadeUp } from "@/components/common/MotionWrapper";
import React from "react";

function page() {
  return (
    <div>
      <MotionFadeUp>
        <ArtistPage />
      </MotionFadeUp>
    </div>
  );
}

export default page;
