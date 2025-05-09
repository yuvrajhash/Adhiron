/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for simpler hosting
  output: 'export',
  // Image configuration
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Disable strict mode during build
  reactStrictMode: false,
  // Disable eslint during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable type checking during build
  typescript: {
    ignoreBuildErrors: true,
  },
  // Add trailing slash for static export
  trailingSlash: true,
};

module.exports = nextConfig;
