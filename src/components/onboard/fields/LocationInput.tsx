"use client";

import React from "react";
import { Input } from "@/components/ui/input";

function LocationInput({ register, errors }: any) {
  return (
    <div>
      <label className="block font-semibold mb-1">Location</label>
      <Input {...register("location")} placeholder="Enter city or region" />
      {errors.location && (
        <p className="text-sm text-red-500">{errors.location.message}</p>
      )}
    </div>
  );
}

export default LocationInput;
