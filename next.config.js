/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  swcMinify: true,
  experimental: {
    // Required:
    appDir: true
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "addisababa.eotc.org.et",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.pngitem.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        port: "",
        pathname: "/**",
      }
    ],
  },
}

module.exports = nextConfig
