/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack5: true,
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: {
    PUBLIC_DOMAIN: process.env.PUBLIC_DOMAIN,
    PUBLIC_EVENTS_URL: process.env.PUBLIC_EVENTS_URL,
    PUBLIC_AUTH_URL: process.env.PUBLIC_AUTH_URL,
  },
};

module.exports = nextConfig;
