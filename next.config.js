/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ['image.tmdb.org'],
  },

  async rewrites() {
    return [
      {
        source: '/api/movies',
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`,
      },
      {
        source: '/api/movies/:id',
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${process.env.API_KEY}`,
      },
    ];
  },
  assetPrefix:
    process.env.NODE_ENV === 'production'
      ? 'https://nextjs-movies-darcy.vercel.app'
      : '/',
  trailingSlash: true,
};

module.exports = nextConfig;
