import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Seo } from '../../../components/Seo';
import { API_MOVIES, PREFIX_HOME } from '../../../api/config/config';
import useConfigContext from '../../../context/hooks/useConfigContext';
import { IGenre, IMovie, IMovieDetails } from '../../../types/movies/types';

export function SsgMovieDetails({
  movieDetails,
}: {
  movieDetails: IMovieDetails;
}) {
  const { PREFIX_POSTER } = useConfigContext();
  console.log('movie data', movieDetails);

  const router = useRouter();
  console.log(router);

  return (
    <div className="container">
      <Seo pageNm={`${movieDetails.title}`} />
      <button onClick={() => router.back()}>Back</button>
      <p style={{ color: 'red' }}>
        This page was generated as a Static Site with solid path :
        {` ${PREFIX_HOME}movies/ssg/${movieDetails.id}`}
      </p>

      <p className="title">{`${movieDetails.title}`}</p>
      <p>{movieDetails.tagline}</p>
      <div className="inner-container">
        <div className="image-container">
          <Image
            src={`${PREFIX_POSTER}${movieDetails.poster_path}`}
            alt={`poster_${movieDetails.title}`}
            fill
          />
        </div>

        <div className="divider" />

        <div className="info-container">
          <p>{movieDetails?.title}</p>
          <p>OverView: {movieDetails?.overview}</p>
          <p>Language: {movieDetails?.original_language}</p>
          <p>Genres: </p>
          <div className="genres">
            {movieDetails?.genres.map((genre: IGenre) => (
              <span key={genre.id}>●{genre.name}</span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .container {
          max-width: 800px;
          width: 90%;
          border: 1px solid #eaeaea;
          transition: color 0.15s ease, border-color 0.15s ease;
          border-radius: 10px;
          overflow: hidden;
          padding: 10px;
        }

        .title {
          font-weight: bold;
          font-size: 2rem;
        }

        .divider {
          margin: 5px;
          padding: 1px;
          background-color: #eaeaea;
        }

        .inner-container {
          display: flex;
          flex-direction: row;
          justify-content: center;
        }

        .image-container {
          position: relative;
          width: 50%;
          aspect-ratio: 9 / 16;
        }

        .info-container {
          width: 50%;
        }

        .info-container > p:first-letter {
          color: dodgerblue;
          font-weight: bold;
          font-size: 2rem;
          font-style: italic;
        }

        .genres {
          display: flex;
          width: 100%;
          justify-content: flex-start;
        }

        .genres > span {
          margin: 5px;
        }
        .genres > span:first-letter {
          color: dodgerblue;
          font-weight: bold;
          margin-right: 5px;
        }

        @media screen and (max-width: 500px) {
          .inner-container {
            flex-direction: column;
          }
          .image-container {
            width: 100%;
            /* aspect-ratio: 9 / 16; */
          }
          .info-container {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}

export default SsgMovieDetails;

export const getStaticPaths: GetStaticPaths = async () => {
  const reqUrl = `${PREFIX_HOME}${API_MOVIES}`;

  const response = await fetch(reqUrl);

  const { results }: { results: IMovie[] } = await response.json();

  const paths = results.slice(0, 3).map((movie) => ({
    params: {
      movieId: movie.id.toString(),
    },
  }));

  console.log('paths ==== ', paths);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  /**
   * @TODO : Server Side build시 실행되는 코드들 중복 해결해야함??
   */
  console.log('ctx ==== ', ctx.params);

  const reqUrl = `${PREFIX_HOME}${API_MOVIES}`;

  const responseDetail = await fetch(
    reqUrl + `/${Number(ctx.params?.movieId)}`,
  );

  const movieDetails: IMovieDetails = await responseDetail.json();

  return {
    props: { movieDetails: movieDetails },
  };
};
