/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  transpilePackages: ['utils', 'ui'],
  images: {
    domains: ['images.unsplash.com'],
  },
};
