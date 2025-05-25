/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Valid syntax, but hides lint errors
  },
  typescript: {
    ignoreBuildErrors: true, // Valid syntax, but hides type errors
  },
  images: {
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vercel', // Valid syntax, but broadly allows all HTTPS hostnames
      },
    ],
  },
  // Removed experimental optimizeCss that was causing critters error // Valid comment
}

export default nextConfig
