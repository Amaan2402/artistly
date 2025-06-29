import * as z from "zod";

export const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  bio: z.string().min(10, "Bio must be at least 10 characters"),
  category: z.array(z.string()).min(1, "Select at least one category"),
  languages: z.array(z.string()).min(1, "Select at least one language"),
  feeRange: z.string().min(1, "Select a fee range"),
  location: z.string().min(1, "Location is required"),
  image: z
    .any()
    .refine(
      (file) =>
        file &&
        file instanceof File &&
        ["image/png", "image/jpeg"].includes(file.type),
      "Only PNG or JPG images are allowed"
    ),
});

export type Artist = {
  id: string;
  name: string;
  email: string;
  category: string[];
  languages: string[];
  location: string;
  feeRange: string;
  image: string;
};

export type FormData = z.infer<typeof formSchema>;
