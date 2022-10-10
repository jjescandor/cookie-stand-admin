/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
}

module.exports = nextConfig

// module.exports = {
//   async rewrites() {
//     return [
//       {
//         source: '/api/* http://44.202.123.64/',
//         destination: 'http://localhost:4000/:path*'
//       }
//     ]
//   }
// }