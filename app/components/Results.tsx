import MovieCard from './MovieCard';

export default function Results({ results }: any) {
  return (
    <div className="cards-grid px-4 mx-auto py-4">
      {results.map((result: any) => {
        return <MovieCard key={result.imdbID} movie={result} />;
      })}
    </div>
  );
}
