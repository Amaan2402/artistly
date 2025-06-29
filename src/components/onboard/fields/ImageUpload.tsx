import React, { useState, useEffect } from "react";
import { Controller, Control, FieldErrors, useWatch } from "react-hook-form";
import Image from "next/image";
import { FormData } from "@/shared/types";

interface Props {
  control: Control<FormData>;
  errors: FieldErrors<FormData>;
}

function ImageUpload({ control, errors }: Props) {
  const [preview, setPreview] = useState<string | null>(null);

  // 👇 Watch for changes in the image field
  const image = useWatch({
    control,
    name: "image",
  });

  useEffect(() => {
    if (!image) {
      setPreview(null); // Clear preview if image is cleared
    } 
  }, [image]);

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
              accept=".png, .jpg, .jpeg"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  setPreview(URL.createObjectURL(file));
                  field.onChange(file);
                } else {
                  setPreview(null);
                  field.onChange(null);
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
      {typeof errors.image?.message === "string" && (
        <p className="text-sm text-red-500 mt-2">{errors.image.message}</p>
      )}
    </div>
  );
}

export default ImageUpload;
