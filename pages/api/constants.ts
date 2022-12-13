export const API_MOVIES = '/api/movies';

export const PREFIX_POSTER = 'https://image.tmdb.org/t/p/w500';

export function createAPIAddrToGetMovieDetails(id: number) {
  return `${API_MOVIES}/${id}`;
}
