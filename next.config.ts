/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
  dest: "public",
  sw: "service-worker-name.js",
  scope: "/",
  cacheStartUrl: true,
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

module.exports = withPWA({
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Cache-Control", value: "s-maxage=0, must-revalidate" },
        ],
      },
    ];
  },
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 60,
  },
});