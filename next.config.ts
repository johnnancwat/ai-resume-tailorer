import { withTailwind } from "@tailwindcss/next";

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default withTailwind(nextConfig);