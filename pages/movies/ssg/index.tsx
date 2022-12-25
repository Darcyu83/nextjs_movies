import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import { API_MOVIES, PREFIX_HOME } from '../../../api/config/config';
import { IMovie } from '../../../types/movies/types';
import styles from '../../../styles/Home.module.css';
import MovieCard from '../../../components/movies/MovieCard';
import styled from '@emotion/styled';

const UrlsContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ececec;
  padding: 0.5rem;
  border-radius: 0.5rem;
  width: 80%;
  margin-bottom: 0.5rem;
`;
export function SsgList({
  staticMovies,
  notStaticMovieId,
}: {
  staticMovies: IMovie[];
  notStaticMovieId: number;
}) {
  return (
    <main className={styles.main}>
      <h1>Static Site Generationpage list</h1>

      <UrlsContainer>
        <p>The path with not solid root is going to occur 404 error :</p>
        <p style={{ color: 'red' }}>
          {` ${PREFIX_HOME}movies/ssg/${notStaticMovieId}`}
        </p>
      </UrlsContainer>
      <UrlsContainer>
        <p>
          These pages below was generated as a Static Site Generation with solid
          path :
        </p>
        {staticMovies.map((movie) => {
          return (
            <p key={movie.id} style={{ color: 'red' }}>
              {PREFIX_HOME}movies/ssg/{movie.id}
            </p>
          );
        })}
      </UrlsContainer>

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
  const notStaticMovieId = results[4].id;
  return {
    props: { staticMovies, notStaticMovieId },
  };
};
