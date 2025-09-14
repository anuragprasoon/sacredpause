import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['res.cloudinary.com',"images.pexels.com",'cdn.builder.io'], // add your domain here
  },
  reactStrictMode: false,
};

export default nextConfig;
