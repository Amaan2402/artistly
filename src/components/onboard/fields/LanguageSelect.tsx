"use client";

import React from "react";
import { Controller, Control, FieldErrors } from "react-hook-form";
import { MultiSelect } from "@/components/ui/multiselect";
import { FormData } from "@/shared/types"; // ✅ import shared type

const languages = ["English", "Hindi", "Telugu", "Tamil", "Bengali"];

interface Props {
  control: Control<FormData>;
  errors: FieldErrors<FormData>;
}

function LanguageSelect({ control, errors }: Props) {
  return (
    <div>
      <label className="block font-semibold mb-1">Languages Spoken</label>
      <Controller
        control={control}
        name="languages"
        render={({ field }) => (
          <MultiSelect
            options={languages}
            selected={field.value}
            onChange={field.onChange}
            placeholder="Select languages"
          />
        )}
      />
      {errors.languages && (
        <p className="text-sm text-red-500">{errors.languages.message}</p>
      )}
    </div>
  );
}

export default LanguageSelect;
