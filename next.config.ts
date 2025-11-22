import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",

  reactStrictMode: false,

  typescript: {
    ignoreBuildErrors: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  experimental: {
    manualClientBasePath: true, // 👈 Vercel routes-manifest.json fix
  },

  webpack: (config) => {
    return config;
  },
};

export default nextConfig;
