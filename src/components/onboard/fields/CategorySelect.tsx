"use client";

import React from "react";
import { Controller } from "react-hook-form";
import { MultiSelect } from "@/components/ui/multiselect"; // You can implement or import this from a lib

const categories = ["Singer", "Dancer", "Speaker", "DJ"];

function CategorySelect({ control, errors }: any) {
  return (
    <div>
      <label className="block font-semibold mb-1">Category</label>
      <Controller
        control={control}
        name="category"
        render={({ field }) => (
          <MultiSelect
            options={categories}
            selected={field.value}
            onChange={field.onChange}
            placeholder="Select categories"
          />
        )}
      />
      {errors.category && (
        <p className="text-sm text-red-500">{errors.category.message}</p>
      )}
    </div>
  );
}

export default CategorySelect;
