module.exports = {
  swcMinify: false,
  trailingSlash: true,
  // reactStrictMode: true,
  env: {
    // HOST
    HOST_API_KEY: '',
    DEV_API: '',
    PRODUCTION_API: '',
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