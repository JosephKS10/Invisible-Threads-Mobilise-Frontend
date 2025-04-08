import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["avatars.githubusercontent.com","assets.aceternity.com","image.lexica.art","img.freepik.com","cdn-om.cdnpk.net","i.ibb.co"],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if there are ESLint errors.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
