import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mdx.fubon.ru',
      },
    ],
  },
};

export default nextConfig;