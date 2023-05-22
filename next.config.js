// /** @type {import('next').NextConfig} */
// const withVideos = require('next-videos')
//
// const nextConfig = {
//     reactStrictMode: true,
//     compress: true,
//     images: {
//         unoptimized: false
//     }
// }
//
//
// module.exports = nextConfig
// module.exports = withVideos()


const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const withVideos = require('next-videos')

module.exports = withPlugins([optimizedImages,
    withVideos

    // your other plugins here

], {
    trailingSlash: true,
    reactStrictMode: true,
    images: {
        minimumCacheTTL: 60,
        unoptimized: true
    },
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
    },
});