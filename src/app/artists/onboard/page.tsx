export const metadata = {
  title: "Become an Artist – Artistly",
  description:
    "Fill out your profile to join Artistly as a performing artist. Get discovered and booked by event planners across India.",
  keywords: [
    "artist registration",
    "submit artist profile",
    "join as performer",
  ],
  metadataBase: new URL("https://artistly.amaan24.tech"),
};
import { MotionFadeUp } from "@/components/common/MotionWrapper";
import OnboardForm from "@/components/onboard/OnBoardForm";
import React from "react";

function page() {
  return (
    <div className="min-h-screen px-4">
      <div className="max-w-2xl mx-auto border dark:border-[#292828] rounded-xl p-6">
        <h1 className="text-3xl font-bold mb-6">Add New Artist</h1>
        <MotionFadeUp>
          <OnboardForm />
        </MotionFadeUp>
      </div>
    </div>
  );
}

export default page;
