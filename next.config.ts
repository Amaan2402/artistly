import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["fra.cloud.appwrite.io"], // ✅ add this line
  },
};

export default nextConfig;
