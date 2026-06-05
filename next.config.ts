import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      rules: {
        "*.css": ["@tailwindcss/postcss"],
      },
    },
  },
};

export default nextConfig;