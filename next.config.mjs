/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Required for the "./out" path in your YAML
  images: {
    unoptimized: true, // Required for static hosting
  },
  // If your repo is "shynm-redesign", add:
  // basePath: '/shynm-redesign', 
};

export default nextConfig;
