import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/(.*)', // Apply to all routes
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-inline'; /* Use 'nonce-' or 'sha256-' instead if possible */
              style-src 'self' 'unsafe-inline'; /* Use 'nonce-' or 'sha256-' instead if possible */
              img-src 'self' data:;
              font-src 'self' data: https://fonts.gstatic.com;
              connect-src 'self';
            `.replace(/\s{2,}/g, ' ').trim(),
          },
        ],
      },
    ];
  },
};

export default nextConfig;

