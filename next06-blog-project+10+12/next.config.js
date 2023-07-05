/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/Polo11121/BlogPosts/main/public/images/**",
      },
    ],
  },
};

module.exports = nextConfig;
