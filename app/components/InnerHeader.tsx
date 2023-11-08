'use client';

import { useRouter } from 'next/navigation';

export interface IInnerHeader {
  title: string;
}

const InnerHeader = ({ title }: IInnerHeader) => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-between mb-6 mt-6">
      <h1 className="text-2xl font-medium capitalize">{title}</h1>
      <button
        className="py-2 px-5 bg-slate-800 text-md font-normal text-white"
        onClick={() => router.back()}
      >
        Back
      </button>
    </div>
  );
};

export default InnerHeader;
