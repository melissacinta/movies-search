'use client';

import { useRouter } from 'next/navigation';

const BackButton = () => {
  const router = useRouter();
  return (
    <button
      className="py-2 px-5 bg-slate-800 text-md font-normal text-white"
      onClick={() => router.back()}
    >
      Back to search results
    </button>
  );
};

export default BackButton;
