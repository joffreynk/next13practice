/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["i.dummyjson.com", "uploadthing.com"],
  },
};
  
  module.exports = nextConfig
  