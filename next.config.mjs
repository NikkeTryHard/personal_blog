import createMDX from '@next/mdx';

const withMDX = createMDX({});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  allowedDevOrigins: ['127.0.0.1'],
};

export default withMDX(nextConfig);
