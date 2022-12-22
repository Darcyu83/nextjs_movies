import { GetStaticProps } from 'next';
import Link from 'next/link';
import MovieCard from '../../../components/movies/MovieCard';
import { API_MOVIES, PREFIX_HOME } from '../../../config/config';
import { IMovie } from '../../../types/movies/types';
import styles from '../../../styles/Home.module.css';

interface IProps {
  staticMovies: IMovie[];
}
function IsrList({ staticMovies }: IProps) {
  return (
    <main className={styles.main}>
      <h1>Increamental Static Regeneration page list</h1>
      <p>Top 3 Movies</p>

      <div>
        {staticMovies?.map((movie: IMovie) => (
          <Link
            key={'ssg_movie_' + movie.title}
            href={`${PREFIX_HOME}movies/isr/${movie.id}`}
          >
            <MovieCard movie={movie} />
          </Link>
        ))}
      </div>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const reqUrl = `${PREFIX_HOME}${API_MOVIES}`;

  const response = await fetch(reqUrl);

  const { results }: { results: IMovie[] } = await response.json();

  const staticMovies = results.slice(0, 3);

  return {
    props: { staticMovies },
  };
};

export default IsrList;
