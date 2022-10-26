/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.pexels.com', 'res.cloudinary.com'],
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
