import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import { API_MOVIES, PREFIX_HOME } from '../../../api/config/config';
import { IMovie } from '../../../types/movies/types';
import styles from '../../../styles/Home.module.css';
import MovieCard from '../../../components/movies/MovieCard';

export function SsgList({ staticMovies }: { staticMovies: IMovie[] }) {
  return (
    <main className={styles.main}>
      <h1>Server Side Generation page list</h1>
      <p>Top 3 Movies</p>

      <div>
        {staticMovies?.map((movie: IMovie) => (
          <Link
            key={'ssg_movie_' + movie.title}
            href={`${PREFIX_HOME}movies/ssg/${movie.id}`}
          >
            <MovieCard movie={movie} />
          </Link>
        ))}
      </div>
    </main>
  );
}

export default SsgList;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const reqUrl = `${PREFIX_HOME}${API_MOVIES}`;

  const response = await fetch(reqUrl);

  const { results }: { results: IMovie[] } = await response.json();

  const staticMovies = results.slice(0, 3);

  return {
    props: { staticMovies },
  };
};
