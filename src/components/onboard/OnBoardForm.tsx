"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "@/shared/types"; // ✅ shared schema
import type { FormData } from "@/shared/types"; // type-only import to avoid conflict
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import CategorySelect from "./fields/CategorySelect";
import LanguageSelect from "./fields/LanguageSelect";
import FeeRangeSelect from "./fields/FeeRangeSelect";
import ImageUpload from "./fields/ImageUpload";
import LocationInput from "./fields/LocationInput";
import { db, ID, storage } from "@/lib/appwrite";
import toast from "react-hot-toast";

function OnboardForm() {
  const [submitFormLoading, setSubmitFormLoading] = useState(false);

  const {
    control,
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      bio: "",
      category: [],
      languages: [],
      feeRange: "",
      location: "",
      image: null,
    },
  });

  const onSubmit = async (data: FormData) => {
    const loadingToast = toast.loading("Submitting your form...");
    setSubmitFormLoading(true);
    let imageUrl = null;

    if (data.image instanceof File) {
      const file = await storage.createFile(
        process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID as string,
        ID.unique(),
        data.image
      );

      const imageGetFileView = storage.getFileView(
        process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID as string,
        file.$id
      );

      imageUrl = imageGetFileView;
    }

    const formData = {
      name: data.name,
      email: data.email,
      bio: data.bio,
      category: data.category,
      languages: data.languages,
      feeRange: data.feeRange,
      location: data.location,
      image: imageUrl,
    };

    const doc = await db.createDocument(
      process.env.NEXT_PUBLIC_APPWRITE_ARTISTLY_DATABASE_ID as string,
      process.env.NEXT_PUBLIC_APPWRITE_ARTISTS_COLLECTION_ID as string,
      ID.unique(),
      formData
    );

    if (doc) {
      toast.success("Artist onboarded successfully!");
      setSubmitFormLoading(false);
      // Reset form
      reset();
      toast.dismiss(loadingToast);
      return;
    }

    toast.dismiss(loadingToast);
    reset();
    setSubmitFormLoading(false);
    toast.error("Failed to onboard artist. Please try again.");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit, (err) => {
        console.error("Form submission errors:", err);
      })}
      className="space-y-6"
    >
      <div>
        <label className="block font-semibold mb-1">Artist Name</label>
        <Input {...register("name")} />
        {errors.name && (
          <p className="text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="block font-semibold mb-1">Email</label>
        <Input type="email" {...register("email")} />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
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
      <ImageUpload control={control} errors={errors} />
      <button
        type="submit"
        className={`w-full ${submitFormLoading ? "bg-[#6748bc]" : "bg-[#5124ca]"} text-white font-semibold text-lg rounded-md py-1 cursor-pointer`}
        disabled={submitFormLoading}
      >
        {submitFormLoading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}

export default OnboardForm;
