import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/pereira",
        destination: "https://luma.com/63xdcail",
        permanent: false,
      },
      {
        source: "/lima",
        destination: "https://luma.com/0bdpg02o",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
