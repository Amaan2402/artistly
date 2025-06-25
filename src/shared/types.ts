import * as z from "zod";

export const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  bio: z.string().min(10, "Bio must be at least 10 characters"),
  category: z.array(z.string()).min(1, "Select at least one category"),
  languages: z.array(z.string()).min(1, "Select at least one language"),
  feeRange: z.string().min(1, "Select a fee range"),
  location: z.string().min(1, "Location is required"),
  image: z.any().optional(),
});

export type FormData = z.infer<typeof formSchema>;
