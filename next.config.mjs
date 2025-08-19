/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
        "images.unsplash.com", 
        "nextjs.org", 
        "raw.githubusercontent.com",
        "pbs.twimg.com",
        "x.com"
    ],
  },
  experimental: {
    motion: true,
  },
};

export default nextConfig;
