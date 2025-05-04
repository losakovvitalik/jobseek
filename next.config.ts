import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ['next-mdx-remote'],
  images: {
    // Кешировать оптимизированные картинки минимум 24 часа
    minimumCacheTTL: 60 * 60 * 24,
  },
};

export default nextConfig;
