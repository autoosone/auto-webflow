/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  basePath: "/app", // REQUIRED for Webflow Cloud mount path
  assetPrefix: "/app", // REQUIRED for Webflow Cloud assets
  images: {
    unoptimized: true,
    domains: ['uploads-ssl.webflow.com', 'cdn.prod.website-files.com', 'images.unsplash.com'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  }
}

// Initialize OpenNext for development
if (process.env.NODE_ENV === 'development') {
  try {
    const { initOpenNextCloudflareForDev } = require('@opennextjs/cloudflare');
    initOpenNextCloudflareForDev();
  } catch (e) {
    // OpenNext not available in development
  }
}

module.exports = nextConfig