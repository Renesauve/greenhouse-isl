import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "plantagreenhouses.ca",
      },
      {
        protocol: "https",
        hostname: "plantagreenhouses.com",
      },
    ],
  },
};

export default nextConfig;
