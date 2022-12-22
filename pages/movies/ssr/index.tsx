import { GetServerSideProps } from 'next';
import Link from 'next/link';
import MovieCard from '../../../components/movies/MovieCard';
import { Seo } from '../../../components/Seo';
import { API_MOVIES, PREFIX_HOME } from '../../../api/config/config';
import { IMovie } from '../../../types/movies/types';

export default function SsrList({ movies }: { movies: IMovie[] }) {
  return (
    <div className="list-container">
      <Seo pageNm="Server Side Rendered Movie List" />

      {movies?.map((movie: IMovie) => (
        <Link
          href={{
            pathname: `${PREFIX_HOME}movies/ssr/details/${movie.id}`,
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

export const getServerSideProps: GetServerSideProps = async () => {
  const url = `${PREFIX_HOME}${API_MOVIES}`;

  const res = await fetch(url);

  const { results: movies } = await res.json();
  return {
    props: { movies },
  };
};
