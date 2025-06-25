"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { FormData } from "@/shared/types"; // ✅ shared type

interface Props {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

function LocationInput({ register, errors }: Props) {
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
