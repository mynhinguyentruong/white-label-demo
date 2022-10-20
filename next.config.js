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
  env: {
    CROSSMINT_X_CLIENT_SECRET: process.env.CROSSMINT_X_CLIENT_SECRET,
    CROSSMINT_X_PROJECT_ID: process.env.CROSSMINT_X_PROJECT_ID
  }
}

module.exports = nextConfig
