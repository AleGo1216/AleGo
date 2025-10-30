import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains:['7072-prod-7gg3usnk188655b8-1328449234.tcb.qcloud.la'],
    remotePatterns: [new URL('https://7072-prod-7gg3usnk188655b8-1328449234.tcb.qcloud.la/**')],
  },
};

export default nextConfig;
