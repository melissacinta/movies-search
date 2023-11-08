import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { EMPTY_MOVIE_URL, IMAGE_URL } from '../config';

export interface IMovieCard {
  imdbID: string;
  Title: string;
  Year: string;
  Type: number;
  Poster: string;
}

const MovieCard = ({ movie }: { movie: IMovieCard }) => {
  return (
    <Link
      href={`/movie/${movie?.imdbID}`}
      className="w-full flex flex-col sm:shadow-md cursor-pointer sm:hover:shadow"
    >
      <div className="w-full h-[400px] relative">
        <Image
          src={movie?.Poster ? movie.Poster : `${EMPTY_MOVIE_URL}`}
          alt={movie?.Title}
          fill={true}
          sizes="100vw"
        />
      </div>
      <div className="flex gap-4 justify-between items-center mt-3 px-2 pb-2 bg-red">
        <h3 className="text-md font-medium">{movie?.Title}</h3>
        <span
          className={`flex flex-col p-2 text-white rounded-md bg-green-700`}
        >
          {movie?.Year}
        </span>
      </div>
    </Link>
  );
};

export default MovieCard;
