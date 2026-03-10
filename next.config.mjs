/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/SHY-NM',
  assetPrefix: '/SHY-NM', // This forces CSS/JS to load from the correct folder
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
