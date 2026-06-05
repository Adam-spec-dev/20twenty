/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@20twenty/ui", "@20twenty/database"],
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
