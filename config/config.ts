export const PREFIX_HOME =
  process.env.NODE_ENV === 'production'
    ? 'https://nextjs-movies-g9aa6tdpi-darcyu83.vercel.app'
    : 'http://localhost:3000';

export const PREFIX_POSTER = 'https://image.tmdb.org/t/p/w500';

export const API_MOVIES = '/api/movies';
