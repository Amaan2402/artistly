export const metadata = {
  title: "Manager Dashboard – Artistly",
  description:
    "Manage your submitted artists, track booking interests, and edit profiles with ease on the Artistly manager dashboard.",
  keywords: ["artist manager", "dashboard", "manage bookings", "artist leads"],
  metadataBase: new URL("https://artistly.amaan24.tech"),
};
import { MotionFadeUp } from "@/components/common/MotionWrapper";
import DashboardTable from "@/components/dashboard/DashboardTable";
import React from "react";

function page() {
  return (
    <div className="min-h-screen px-4">
      <MotionFadeUp>
        <DashboardTable />
      </MotionFadeUp>
    </div>
  );
}

export default page;
