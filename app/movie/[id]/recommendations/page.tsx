import InnerHeader from '@/app/components/InnerHeader';
import MovieCard, { IMovieCard } from '@/app/components/MovieCard';

interface IParamsRecommendations {
  params: {
    id: IMovieCard['id'];
  };
}

async function getAllRecommendations(id: IMovieCard['id']) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.API_KEY}&language=en-US`
  );
  return res.json();
}

const page = async ({ params }: IParamsRecommendations) => {
  const { id } = params;

  const movieRecommendations = await getAllRecommendations(id);

  return (
    <main className="mt-5 flex flex-col mb-6">
      <div className="w-[1200px] max-w-full px-4 mx-auto">
        <InnerHeader title="All Recommendations" />
        <div className="cards-grid mt-4">
          {movieRecommendations?.results?.map((movie: IMovieCard) => (
            <MovieCard key={movie?.id} movie={movie} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default page;
