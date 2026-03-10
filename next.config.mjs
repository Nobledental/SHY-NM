/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/SHY-NM', 
  // REMOVED assetPrefix: '/SHY-NM'
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
