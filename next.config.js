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

}

module.exports = nextConfig
