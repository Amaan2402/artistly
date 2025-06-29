"use client";

import React from "react";
import { Controller, Control, FieldErrors } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormData } from "@/shared/types"; // ✅ shared type

const feeOptions = [
  "0 - 100 INR",
  "100 - 200 INR",
  "200 - 300 INR",
  "300 - 500 INR",
  "500+ INR",
];

interface Props {
  control: Control<FormData>;
  errors: FieldErrors<FormData>;
}

function FeeRangeSelect({ control, errors }: Props) {
  return (
    <div>
      <label className="block font-semibold mb-1">Fee Range</label>
      <Controller
        control={control}
        name="feeRange"
        render={({ field }) => (
          <Select onValueChange={field.onChange} value={field.value}>
            <SelectTrigger className="font-semibold">
              <SelectValue placeholder="Select fee range" />
            </SelectTrigger>
            <SelectContent>
              {feeOptions.map((fee) => (
                <SelectItem key={fee} value={fee}>
                  {fee}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />
      {errors.feeRange && (
        <p className="text-sm text-red-500">{errors.feeRange.message}</p>
      )}
    </div>
  );
}

export default FeeRangeSelect;
