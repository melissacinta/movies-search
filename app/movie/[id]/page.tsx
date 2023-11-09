import { EMPTY_MOVIE_URL, classNames, options, url } from '@/app/config';
import { IMovieCard } from '@/app/components/MovieCard';
import MovieItemCard, {
  MovieItemCardTwo,
} from '@/app/components/MovieItemCard';
import dayjs from 'dayjs';
import Image from 'next/image';
import BackButton from '@/app/components/BackButton';

interface IParamsMovieDetails {
  params: {
    id: IMovieCard['imdbID'];
  };
}

async function getMovieDetails(id: IMovieCard['imdbID']) {
  const res = await fetch(
    `${url}?i=${id}&r=json&page=1'`,
    options as RequestInit
  );
  return res.json();
}

const MoviePage = async ({ params }: IParamsMovieDetails) => {
  const { id } = params;
  const movie = await getMovieDetails(id);

  const durationHours = Math.round(
    Number(movie?.Runtime.split(' min')[0]) / 60
  );
  const durationMinutes = Math.round(
    Number(movie?.Runtime.split(' min')[0]) % 60
  );

  return (
    <main className="my-5 flex flex-col">
      <div className="w-[1000px] max-w-full px-4 mx-auto">
        <div className="flex justify-end">
          <BackButton />
        </div>
        <div className="flex flex-col mt-6">
          <div className="flex gap-7 items-center sm:items-start flex-col sm:flex-row">
            <div className="flex relative">
              <div className="w-[270px] h-[400px] relative">
                <Image
                  src={movie?.Poster ? movie?.Poster : `${EMPTY_MOVIE_URL}`}
                  alt={movie?.title}
                  fill={true}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex gap-3 items-center">
                <h2 className="text-xl font-medium">{movie?.Title}</h2>
                <span
                  className={`flex flex-col p-2 text-white rounded-md bg-green-700`}
                >
                  {movie?.Rated}
                </span>
              </div>
              <div className="flex gap-4 items-center mt-4">
                <h5 className="text-md font-medium">
                  {dayjs(movie?.Released).format('MMM DD YYYY')}
                </h5>
                <h5> | </h5>
                {movie?.Runtime && movie?.Runtime !== 'N/A' && (
                  <>
                    <h5 className="text-md font-medium">{`${durationHours}h ${durationMinutes}m`}</h5>
                    <h5> | </h5>
                  </>
                )}
                <h5 className="text-md font-medium">{movie?.Genre}</h5>
              </div>
              <div className="flex flex-col mt-5">
                <p className="text-md font-normal">{movie?.Plot}</p>
              </div>
              <MovieItemCardTwo title="Writer(s)" value={movie?.Writer} />
              <MovieItemCardTwo title="Director" value={movie?.Director} />
              <MovieItemCardTwo title="Actors" value={movie?.Actors} />
              <MovieItemCardTwo title="Language" value={movie?.Language} />
              <div className="flex gap-4 items-start mt-4">
                <h5 className="text-md font-medium">Ratings:</h5>
                <p className="text-md font-normal">
                  <ul>
                    {movie?.Ratings.map(
                      (item: { Source: string; Value: string }) => (
                        <li key={item.Source}>
                          <span className="text-sm font-medium mr-2">
                            {item.Source}:
                          </span>
                          <span>{item.Value}</span>
                        </li>
                      )
                    )}
                  </ul>
                </p>
              </div>
              <div className="flex gap-4 items-start mt-4 divide-x">
                <MovieItemCard
                  title="Imdb Votes"
                  value={movie?.imdbVotes}
                  style={'items-center pl-4'}
                />
                <MovieItemCard
                  title="Type"
                  value={movie?.Type}
                  style={'items-center pl-4'}
                />
                {movie?.DVD && (
                  <MovieItemCard
                    title="DVD"
                    value={movie?.DVD}
                    style={'items-center pl-4'}
                  />
                )}
                {movie?.BoxOffice && (
                  <MovieItemCard
                    title="Box Office"
                    value={movie?.BoxOffice}
                    style={'items-center pl-4'}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MoviePage;
