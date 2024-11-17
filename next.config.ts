import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config: any, { isServer }: { isServer: boolean }) => {
    config.module.rules.push({ test: /\.node$/, use: "raw-loader" });

    if (!isServer) config.externals.push("canvas");

    return config;
  },
};

export default nextConfig;
