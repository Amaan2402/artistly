import OnboardForm from "@/components/onboard/OnBoardForm";
import React from "react";

function page() {
  return (
    <div className="min-h-screen px-4">
      <div className="max-w-2xl mx-auto border border-[#292828] rounded-xl p-6 bg-[#1a1a1a]">
        <h1 className="text-3xl font-bold mb-6">Add New Artist</h1>
        <OnboardForm />
      </div>
    </div>
  );
}

export default page;
