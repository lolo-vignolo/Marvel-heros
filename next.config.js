/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['i.annihil.us', 'gateway.marvel.com'],
  },
};

module.exports = nextConfig;
