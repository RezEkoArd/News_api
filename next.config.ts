import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Remote Pattern untuk akses keluar 
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-58e865775a6c4d6a99f5a4ebc3135cb3.r2.dev"
      }
    ]
  }
};

export default nextConfig;
