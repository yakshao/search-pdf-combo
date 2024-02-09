module.exports = {
  webpack: (config) => {
    config.externals = [...config.externals, "canvas", "jsdom"];
    return config;
  },
  async rewrites() {
    return [
      {
        source: "/bseindia/:path*",
        destination: "https://www.bseindia.com/:path*",
      },
    ];
  },
};
