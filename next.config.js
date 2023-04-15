/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compress: true,
    images: {
        unoptimized: true
    }
}

const withVideos = require('next-videos')

module.exports = nextConfig
module.exports = withVideos()
