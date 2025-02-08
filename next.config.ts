import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: { loader: 'custom', loaderFile: './cldloader.ts' },
  // eslint: {
  //   ignoreDuringBuilds: true,
  // },
  // typescript: {
  //   ignoreBuildErrors: true,
  // },
  webpack: (config) => {
    config.resolve.fallback = { ...config.resolve.fallback, request: false };
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname), // or "app" if needed
    };

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
