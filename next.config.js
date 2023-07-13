/** @type {import('next').NextConfig} */

const BASE_URL = "https://api.themoviedb.org/3/movie/popular";
const API_KEY = process.env.API_KEY;

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/old/:path*",
        destination: "/new/:path*",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `${BASE_URL}?api_key=${API_KEY}`,
      },
    ];
  },
};

module.exports = nextConfig;
