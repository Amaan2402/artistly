"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, FormData } from "@/shared/types"; // ✅ shared schema + type
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import CategorySelect from "./fields/CategorySelect";
import LanguageSelect from "./fields/LanguageSelect";
import FeeRangeSelect from "./fields/FeeRangeSelect";
import ImageUpload from "./fields/ImageUpload";
import LocationInput from "./fields/LocationInput";

function OnboardForm() {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
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
        className="w-full bg-[#5124ca] text-white font-semibold text-lg rounded-md py-1"
      >
        Submit
      </button>
    </form>
  );
}

export default OnboardForm;
