module.exports = {
  swcMinify: false,
  trailingSlash: true,
  // reactStrictMode: true,
  env: {
    // HOST
    HOST_API_KEY: 'https://api-dev-minimal-v4.vercel.app',
    DEV_API: '',
    PRODUCTION_API: 'https://api-dev-minimal-v4.vercel.app',
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
};