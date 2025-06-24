"use client";

import React from "react";
import { Controller } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const feeOptions = [
  "0 - 100 USD",
  "100 - 200 USD",
  "200 - 300 USD",
  "300 - 500 USD",
  "500+ USD",
];

function FeeRangeSelect({ control, errors }: any) {
  return (
    <div>
      <label className="block font-semibold mb-1">Fee Range</label>
      <Controller
        control={control}
        name="feeRange"
        render={({ field }) => (
          <Select onValueChange={field.onChange} value={field.value}>
            <SelectTrigger className="text-white">
              <SelectValue
                placeholder="Select fee range"
                className="text-white"
              />
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
