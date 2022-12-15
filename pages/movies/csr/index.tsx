import Link from 'next/link';
import { useEffect, useState } from 'react';
import MovieCard from '../../../components/movies/MovieCard';
import { Seo } from '../../../components/Seo';
import { API_MOVIES, PREFIX_HOME } from '../../../config/config';

export default function CsrList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const url = `${PREFIX_HOME}${API_MOVIES}`;

      const res = await fetch(url);

      const { results: _movies } = await res.json();
      setMovies(_movies);
    })();
  }, []);

  return (
    <div className="list-container">
      <Seo pageNm="Server Side Rendered Movie List" />

      {movies?.map((movie: any) => (
        <Link
          href={{
            pathname: `${PREFIX_HOME}movies/details/${movie.id}`,
            query: { id: movie.id, posterPath: movie.poster_path },
          }}
          key={movie.id}
        >
          <MovieCard movie={movie} />
        </Link>
      ))}

      <style jsx>{`
        .list-container {
          width: 100%;
          display: flex;
          max-width: 800px;
          flex-wrap: wrap;
          justify-content: center;
          flex: 1;
        }
      `}</style>
    </div>
  );
}
