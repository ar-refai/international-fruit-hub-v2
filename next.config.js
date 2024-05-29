/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir:"_next",
  images: {
    domains: ["localhost"],
    unoptimized:true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
