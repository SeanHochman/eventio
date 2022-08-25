/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack5: true,
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: {
    PUBLIC_DOMAIN: process.env.PUBLIC_DOMAIN,
  },
};

module.exports = nextConfig;
