import { GetServerSideProps } from 'next';
import Link from 'next/link';
import MovieCard from '../../components/movies/MovieCard';
import { Seo } from '../../components/Seo';
import { API_MOVIES, PREFIX_HOME } from '../../config/config';

export default function SsrList({ movies }: any) {
  return (
    <div className="list-container">
      <Seo pageNm="Server Side Rendered Movie List" />

      {movies?.map((movie: any) => (
        <Link
          href={{
            pathname: `/ssr/${movie.id}`,
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
  // const res = await fetch(`${PREFIX_HOME}${API_MOVIES}`);
  const res = await fetch(
    `${'nextjs-movies-darcy.vercel.app'}${'/api/movies'}`,
  );
  const { results: movies } = await res.json();
  return {
    props: { movies },
  };
};
