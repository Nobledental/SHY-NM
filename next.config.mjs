/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // This tells Next.js that the site is in a subfolder named /SHY-NM
  basePath: '/SHY-NM', 
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
