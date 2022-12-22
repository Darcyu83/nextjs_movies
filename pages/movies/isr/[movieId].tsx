import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { createTextSpan } from 'typescript';
import { Seo } from '../../../components/Seo';
import { API_MOVIES, PREFIX_HOME, PREFIX_POSTER } from '../../../config/config';
import { IGenre, IMovie, IMovieDetails } from '../../../types/movies/types';

interface IProps {
  movieDetails: IMovieDetails;
}

function IsrMovieDetails({ movieDetails }: IProps) {
  console.log('movie data', movieDetails);

  const router = useRouter();
  console.log(router);
  return (
    <div className="container">
      <Seo pageNm={`${movieDetails.title}`} />
      <button onClick={() => router.back()}>Back</button>
      <p style={{ color: 'red' }}>
        This page was generated as a Increamental Static page. It will show a
        regenerated static page when a request comes in at most once every 60
        seconds. It means all vistors will see the same generated version of
        page for one minute.
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

export const getStaticProps: GetStaticProps = async (ctx) => {
  const movieId = ctx.params?.movieId;

  const reqUrl = `${PREFIX_HOME}${API_MOVIES}`;

  const response = await fetch(`${reqUrl}/${movieId}`);

  const movieDetails: IMovieDetails = await response.json();

  return {
    props: { movieDetails },
    revalidate: 60,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const reqUrl = `${PREFIX_HOME}${API_MOVIES}`;

  const response = await fetch(reqUrl);

  const { results }: { results: IMovie[] } = await response.json();

  const paths = results.map((movie) => ({
    params: {
      movieId: movie.id.toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export default IsrMovieDetails;
