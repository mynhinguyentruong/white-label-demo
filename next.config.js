/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['www.crossmint.io', 'nftstorage.link', 'tailwindui.com', 'gateway.ipfscdn.io']
  },
  async rewrites() {
    return [
      {
        source: '/collections/register',
        destination: 'https://staging.crossmint.io/api/v1-alpha1/collections',
      },
      {
        source: '/checkout/mint',
        destination: 'https://staging.crossmint.io/api/v1-alpha1/checkout/mint',
      },
      {
        source: '/wallets/create',
        destination: 'https://staging.crossmint.io/api/v1-alpha1/wallets',
      },
      {
        source: '/wallets/transfer',
        destination: 'https://staging.crossmint.io/api/v1-alpha1/transfer',
      },
    ]
  },
  // env: {
  //   CROSSMINT_X_CLIENT_SECRET: process.env.CROSSMINT_X_CLIENT_SECRET,
  //   CROSSMINT_X_PROJECT_ID: process.env.CROSSMINT_X_PROJECT_ID,
  //   API_KEY: process.env.API_KEY,
  //   PROD_PROJECT_ID: process.env.PROD_PROJECT_ID
  // }
}

module.exports = nextConfig
