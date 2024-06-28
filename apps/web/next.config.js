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
        pathname: "maheshmuttintidev.in/*",
      },
      {
        protocol: "https",
        hostname: "s3.us-west-2.amazonaws.com",
        pathname: "maheshmuttintidev.in/*",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        pathname: "maheshmuttintidev.in/*",
      },
      {
        protocol: "https",
        hostname: "prod-files-secure.s3.us-west-2.amazonaws.com",
        pathname: "maheshmuttintidev.in/*",
      },
    ],
  },
};

module.exports = nextConfig;
