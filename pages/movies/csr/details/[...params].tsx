import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Seo } from '../../../../components/Seo';
import { PREFIX_HOME } from '../../../../config/config';
import useConfigContext from '../../../../context/hooks/useConfigContext';
import { IGenre, IMovieDetails } from '../../types';

export default function MovieDetails() {
  const { PREFIX_POSTER } = useConfigContext();

  const [movieDetails, setMovieDetails] = useState<IMovieDetails>();
  console.log('movie data', movieDetails);

  const router = useRouter();
  console.log(router);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `${PREFIX_HOME}/api/movies/${router.query.id}`,
      );

      const data = await response.json();
      setMovieDetails(data);
    })();
  }, []);

  return (
    <div className="container">
      <Seo pageNm={`${movieDetails?.title}`} />
      <button onClick={() => router.back()}>Back</button>
      <p className="title">{`${movieDetails?.title}`}</p>
      <p>{movieDetails?.tagline}</p>
      <div className="inner-container">
        <div className="image-container">
          {movieDetails?.poster_path && (
            <Image
              src={`${PREFIX_POSTER}${movieDetails.poster_path}`}
              alt={`poster_${movieDetails?.title}`}
              fill
            />
          )}
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
