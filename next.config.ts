import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "github.com" },
      { hostname: "*.githubusercontent.com" },
    ],
  },
  devIndicators: {
    buildActivity: false,
  },
};

export default nextConfig;
