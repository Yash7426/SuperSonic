import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    ppr: true,
    serverActions: {},
  },
  images: {
    remotePatterns: [
      {
        hostname: 'avatar.vercel.sh',
      },
      {
        protocol: 'https',
        hostname: 'cryptologos.cc',
        pathname: '/**',
      },
      {
        hostname: 'coin-images.coingecko.com',
      },
      {
        hostname: 'assets.coingecko.com',
      },
    ],
  },
};

export default nextConfig;
