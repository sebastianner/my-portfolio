/* eslint-disable @typescript-eslint/no-var-requires */
const { withContentlayer } = require("next-contentlayer");
/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "i.ibb.co",
        pathname: "/**/**",
        port: "",
        protocol: "https",
      },
      {
        hostname: "storage.googleapis.com",
        pathname: "/sebastianner-dev-portfolio-statics/**/**",
        port: "",
        protocol: "https",
      },
    ],
  },
};

module.exports = withContentlayer(nextConfig);
