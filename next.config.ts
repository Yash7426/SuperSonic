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
        hostname: 'cryptologos.cc',
      },
      {
        hostname: 'coin-images.coingecko.com',
      },
    ],
  },
};

export default nextConfig;
