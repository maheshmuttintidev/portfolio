/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "logos-download.com",
      },
      {
        protocol: "https",
        hostname: "logonoid.com",
      },
      {
        protocol: "https",
        hostname: "www.pinpng.com",
      },
    ],
  },
};

module.exports = nextConfig;
