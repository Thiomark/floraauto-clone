/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // unoptimized: true,
    domains: ['images.pexels.com', 'res.cloudinary.com'],
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
