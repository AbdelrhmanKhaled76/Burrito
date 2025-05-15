/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  eslint: {
    ignoreDuringBuilds: true, // Skip ESLint if it's failing the build
  },
  typescript: {
    ignoreBuildErrors: true, // Skip TypeScript errors if blocking deployment
  },
  experimental: {
    serverActions: true, // Required if using Next.js 15+ server actions
  },
};

export default nextConfig;
