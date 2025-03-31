import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  /* config options here */
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    //additionalData: `@import "styles/_mixins.scss";`,
  },
  reactStrictMode: true,
  images: {
    domains: [
      'www.notion.so',
      'images.unsplash.com',
      's3.us-west-2.amazonaws.com',
    ],
  },
};
module.exports = {
  images: {
    domains: ['prod-files-secure.s3.us-west-2.amazonaws.com'],
  },
};
export default nextConfig;
