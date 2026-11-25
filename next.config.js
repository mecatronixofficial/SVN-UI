/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep production builds from overwriting the running dev server's modules.
  distDir: process.env.NODE_ENV === "development" ? ".next-dev" : ".next",
  reactStrictMode: true,
  images: {
    remotePatterns: [
     {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;

