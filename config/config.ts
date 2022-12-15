export const PREFIX_HOME =
  process.env.NODE_ENV === 'production'
    ? 'nextjs-movies-darcy.vercel.app'
    : 'http://localhost:3000';

export const PREFIX_POSTER = 'https://image.tmdb.org/t/p/w500';

export const API_MOVIES = '/api/movies';
