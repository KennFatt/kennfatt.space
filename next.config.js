const withPlugins = require("next-compose-plugins");
// const { withSentryConfig } = require("@sentry/nextjs");
const withBundleAnalyzer = require("@next/bundle-analyzer");
const withPWA = require("next-pwa");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  swcMinify: true,
  images: { domains: ["media.graphassets.com"] },
  output: 'standalone',
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = withPlugins(
  [
    [
      withBundleAnalyzer,
      {
        enabled: process.env.ANALYZE === "true",
      },
    ],
    [
      withPWA,
      {
        pwa: {
          dest: "public",
        },
      },
    ],
    // [
    //   withSentryConfig,
    //   {
    //     // Additional config options for the Sentry Webpack plugin. Keep in mind that
    //     // the following options are set automatically, and overriding them is not
    //     // recommended:
    //     //   release, url, org, project, authToken, configFile, stripPrefix,
    //     //   urlPrefix, include, ignore

    //     silent: true, // Suppresses all logs
    //     // For all available options, see:
    //     // https://github.com/getsentry/sentry-webpack-plugin#options.
    //   },
    // ],
  ],
  nextConfig
);
