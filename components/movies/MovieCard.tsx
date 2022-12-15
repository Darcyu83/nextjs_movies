import Image from 'next/image';
import { useEffect } from 'react';
import useConfigContext from '../../context/hooks/useConfigContext';

export default function MovieCard({ movie }: any) {
  const { PREFIX_POSTER } = useConfigContext();

  const posterPath = `${PREFIX_POSTER}${movie.poster_path}`;

  useEffect(() => {
    console.log('posterPath ::', posterPath);
  }, []);
  return (
    <div className="card-container">
      <span>{movie.title}</span>

      <div className="image-wrapper">
        <Image
          src={posterPath}
          alt={`poster_${movie.title}`}
          fill
          sizes="(max-width: 800px) 100%"
        />
      </div>

      <style jsx>{`
        .card-container {
          margin: 1rem;
          max-width: 300px;
          width: 300px;
          text-align: center;
          color: inherit;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
          aspect-ratio: 9 / 16;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
        }

        .card-container:hover,
        .card-container:active,
        .card-container:focus {
          color: dodgerblue;
          border-color: dodgerblue;
        }

        .image-wrapper {
          position: relative;
          width: 90%;

          background-color: white;
          aspect-ratio: 9 / 16;
        }
      `}</style>
    </div>
  );
}
