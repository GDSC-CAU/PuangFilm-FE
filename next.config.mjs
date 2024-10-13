/** @type {import('next').NextConfig} */
const { AWS_S3_BUCKET, ASW_S3_REGION } = process.env;

const nextConfig = {
  reactStrictMode: false,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  images: {
    domains: [`${AWS_S3_BUCKET}.s3.${ASW_S3_REGION}.amazonaws.com`],
  },
};

export default nextConfig;
