/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   esmExternals: "loose",
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
      { protocol: "https", hostname: "s3.us-west-2.amazonaws.com" },
      { protocol: "https", hostname: "via.placeholder.com" },
      {
        protocol: "https",
        hostname: "prod-files-secure.s3.us-west-2.amazonaws.com",
      },
    ],
  },
};

module.exports = nextConfig;
