'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SearchBox() {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex">
        {' '}
        <input
          placeholder="search"
          className="w-full px-5 py-1.5 focus:ring-transparent rounded-l-3xl bg-gray-100 text-gray-800"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="submit"
          className="text-md px-2 bg-primary text-white font-bold disabled:text-gray-400"
          disabled={!search}
        >
          Search
        </button>
      </div>
    </form>
  );
}
