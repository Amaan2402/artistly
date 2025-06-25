"use client";

import React, { useState } from "react";
import { Controller, Control } from "react-hook-form";
import Image from "next/image";
import { FormData } from "@/shared/types"; // ✅ shared type

interface Props {
  control: Control<FormData>;
}

function ImageUpload({ control }: Props) {
  const [preview, setPreview] = useState<string | null>(null);

  return (
    <div>
      <label className="block font-semibold mb-1">Profile Image</label>
      <Controller
        name="image"
        control={control}
        render={({ field }) => (
          <div>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  setPreview(URL.createObjectURL(file));
                  field.onChange(file);
                }
              }}
            />
            {preview && (
              <Image
                src={preview}
                alt="Preview"
                className="mt-4 object-cover rounded-md border"
                width={128}
                height={128}
              />
            )}
          </div>
        )}
      />
    </div>
  );
}

export default ImageUpload;
