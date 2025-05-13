/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image configuration
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
    unoptimized: true,
  },
  // Enable strict mode for better development experience
  reactStrictMode: true,
  // Output static export for Netlify
  output: 'export',
  // Disable ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable TypeScript checking during build
  typescript: {
    ignoreBuildErrors: true,
  },
  // Transpile packages that have issues with Next.js
  transpilePackages: ['parallax-controller', 'react-scroll-parallax'],
};

module.exports = nextConfig;
