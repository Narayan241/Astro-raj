/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: false,

  typescript: {
    ignoreBuildErrors: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  // ⚠️ REMOVE webpack watch options – Vercel doesn't support them
  webpack: (config) => {
    return config;
  },
};

export default nextConfig;
