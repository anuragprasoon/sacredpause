import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['res.cloudinary.com'], // add your domain here
  },
  reactStrictMode: false,
};

export default nextConfig;
