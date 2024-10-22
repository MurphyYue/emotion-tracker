import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: "export",
  webpack: (config, { isServer }) => {
    // Add the alias
    config.resolve.alias['@'] = __dirname;
    return config;
  },
};

export default nextConfig;
