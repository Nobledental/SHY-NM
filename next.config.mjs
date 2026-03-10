/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/SHY-NM', // This MUST match your repo name exactly
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
