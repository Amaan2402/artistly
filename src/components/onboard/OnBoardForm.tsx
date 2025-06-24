"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import CategorySelect from "./fields/CategorySelect";
import LanguageSelect from "./fields/LanguageSelect";
import FeeRangeSelect from "./fields/FeeRangeSelect";
import ImageUpload from "./fields/ImageUpload";
import LocationInput from "./fields/LocationInput";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  bio: z.string().min(10, "Bio must be at least 10 characters"),
  category: z.array(z.string()).min(1, "Select at least one category"),
  languages: z.array(z.string()).min(1, "Select at least one language"),
  feeRange: z.string().min(1, "Select a fee range"),
  location: z.string().min(1, "Location is required"),
  image: z.any().optional(),
});

type FormData = z.infer<typeof schema>;

function OnboardForm() {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      bio: "",
      category: [],
      languages: [],
      feeRange: "",
      location: "",
      image: null,
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Submitted Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label className="block font-semibold mb-1">Artist Name</label>
        <Input {...register("name")} />
        {errors.name && (
          <p className="text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="block font-semibold mb-1">Bio</label>
        <Textarea rows={4} {...register("bio")} />
        {errors.bio && (
          <p className="text-sm text-red-500">{errors.bio.message}</p>
        )}
      </div>

      <CategorySelect control={control} errors={errors} />
      <LanguageSelect control={control} errors={errors} />
      <FeeRangeSelect control={control} errors={errors} />
      <LocationInput register={register} errors={errors} />
      <ImageUpload control={control} />

      <button
        type="submit"
        className="w-full bg-[#5124ca] font-semibold text-lg rounded-md py-1"
      >
        Submit
      </button>
    </form>
  );
}

export default OnboardForm;
