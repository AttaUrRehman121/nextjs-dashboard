import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    ppr: 'incremental' // Enable Partial Prerendering its help to improve performance 
  }
};

export default nextConfig;
