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

module.exports = withPlugins([
    withVideos

    // your other plugins here

], {
    reactStrictMode: true,
    images: {
        disableStaticImages: true,
        unoptimized: true
    },
});