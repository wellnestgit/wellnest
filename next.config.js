/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: `
              default-src 'self';
              style-src 'self' 'unsafe-inline';
              script-src 'self' 'unsafe-eval' 'unsafe-inline';
              font-src 'self' data:;
              img-src 'self' data: blob: https:;
            `.replace(/\n/g, ""),
          },
        ],
      },
    ];
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/, // Fonts
      type: "asset/resource",
    });
    return config;
  },
};

module.exports = nextConfig;

