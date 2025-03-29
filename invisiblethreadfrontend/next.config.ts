import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["assets.aceternity.com","image.lexica.art","img.freepik.com","cdn-om.cdnpk.net"],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if there are ESLint errors.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
