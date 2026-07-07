/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverComponentsExternalPackages: ['pg', 'drizzle-orm'],
  },
  images: {
    remotePatterns: [],
  },
};

export default nextConfig;
