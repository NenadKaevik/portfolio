import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enables static site export
  images: {
    unoptimized: true, // Required if you're using the Next.js Image component
  },
};

export default nextConfig;
