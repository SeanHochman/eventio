/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack5: true,
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: {
    PUBLIC_DOMAIN: process.env.PUBLIC_DOMAIN,
    PUBLIC_AUTH_URL: process.env.PUBLIC_AUTH_URL,
  },
};

module.exports = nextConfig;
