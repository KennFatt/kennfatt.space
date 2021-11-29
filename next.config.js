const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  swcMinify: true,
};

module.exports = withBundleAnalyzer(nextConfig);
