export interface IMovie {
  id: number;
  poster_path: string;
  title: string;
}

export interface IMovieDetails {
  id: number;
  poster_path: string;
  title: string;
  tagline: string;
  overview: string;
  original_language: string;
  genres: IGenre[];
}

export interface IGenre {
  id: number;
  name: string;
}
