import Results from '@/app/components/Results';
import { options, url } from '@/app/config';
import Image from 'next/image';

async function getMovie(term: string) {
  const res = await fetch(
    `${url}?s=${term}&r=json&page=1'`,
    options as RequestInit
  );
  return await res.json();
}
export default async function MoviePage({ params }: any) {
  const searchTerm = params.searchTerm;

  const result = await getMovie(searchTerm);
  return (
    <main className="mt-5 flex flex-col">
      <div className="w-[1300px] max-w-full px-4 mx-auto">
        {result?.Search && result?.Search.length === 0 && <h1> No Results</h1>}
        {result?.Search && <Results results={result?.Search} />}
      </div>
    </main>
  );
}
