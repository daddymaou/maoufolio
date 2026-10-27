import type { NextConfig } from \"next\";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: \"github.com\" },
      { hostname: \"*.githubusercontent.com\" },
    ],
  },
  devIndicators: false,
};

export default nextConfig;
