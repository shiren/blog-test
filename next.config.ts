import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  output: 'export',
  reactStrictMode: true,
  // eslint: {
  //   ignoreDuringBuilds: true,
  // },
  // typescript: {
  //   ignoreBuildErrors: true,
  // },
  webpack: (config) => {
    //config.resolve.fallback = { ...config.resolve.fallback, request: false };

    return config;
  },
  /*
  async redirects() {
    return [
      {
        source: '/',
        destination: '/post/page/1',
        permanent: true,
      },
    ];
  },
  */
};
