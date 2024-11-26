/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "media.licdn.com",
        pathname: "/**/**",
        port: "",
        protocol: "https",
      },
      {
        hostname: "i.ibb.co",
        pathname: "/**/**",
        port: "",
        protocol: "https",
      },
      {
        hostname: "drive.google.com",
        pathname: "/**/**",
        port: "",
        protocol: "https",
      },
    ],
  },
};

module.exports = nextConfig;
