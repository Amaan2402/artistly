"use client";

import React from "react";
import { Controller, Control, FieldErrors } from "react-hook-form";
import { MultiSelect } from "@/components/ui/multiselect";
import { FormData } from "@/shared/types"; // ✅ shared type

const categories = ["Singer", "Dancer", "Speaker", "DJ"];

interface Props {
  control: Control<FormData>;
  errors: FieldErrors<FormData>;
}

function CategorySelect({ control, errors }: Props) {
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
