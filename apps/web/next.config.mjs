/** @type {import('next').NextConfig} */
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  transpilePackages: ["@20twenty/ui", "@20twenty/database"],
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
