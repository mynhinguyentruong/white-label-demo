/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['www.crossmint.io']
  },
  async rewrites() {
    return [
      {
        source: '/collections/register',
        destination: 'https://staging.crossmint.io/api/v1-alpha1/collections',
      },
    ]
  },
}

module.exports = nextConfig
