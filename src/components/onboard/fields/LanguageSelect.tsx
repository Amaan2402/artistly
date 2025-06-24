"use client";

import React from "react";
import { Controller } from "react-hook-form";
import { MultiSelect } from "@/components/ui/multiselect";

const languages = ["English", "Hindi", "Telugu", "Tamil", "Bengali"];

function LanguageSelect({ control, errors }: any) {
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
