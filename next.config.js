/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com',
        port: '',
        pathname: '/public/**',
      },
    ],
  },
}


// https://arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/