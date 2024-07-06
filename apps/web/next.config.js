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
        // pathname: "maheshmuttintidev/*",
      },
      {
        protocol: "https",
        hostname: "s3.us-west-2.amazonaws.com",
        // pathname: "maheshmuttintidev/*",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        // pathname: "maheshmuttintidev/*",
      },
      {
        protocol: "https",
        hostname: "prod-files-secure.s3.us-west-2.amazonaws.com",
        // pathname: "maheshmuttintidev/*",
      },
    ],
  },
};

module.exports = nextConfig;
