'use client';
import Image from 'next/image';
import Link from 'next/link';
import Logo from './dojo-logo.png';
import SearchBox from './searchBox';
import { usePathname } from 'next/navigation';
import { classNames } from '../config';

export default function Navbar() {
  const pathname = usePathname();
  console.log({ pathname });
  return (
    <nav className="flex gap-4 flex-1 items-center">
      <Link
        href="/movies/upcoming"
        className={classNames(
          pathname.includes('upcoming') ? 'text-primary' : '',
          'hover:text-primary'
        )}
      >
        Upcoming
      </Link>
      <Link href="/movies/popular" className="hover:text-primary">
        Popular
      </Link>
      <Link href="/movies/top-rated" className="hover:text-primary">
        Top Rated
      </Link>
      <div className="ml-auto">
        <SearchBox />
      </div>
    </nav>
  );
}
