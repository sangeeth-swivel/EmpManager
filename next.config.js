/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // async redirects() {
  //   return [
  //     {
  //       source: "/",
  //       destination: "/employee",
  //       permanent: true,
  //     },
  //   ];
  // },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
