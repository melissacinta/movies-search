import Link from 'next/link';
import SearchBox from './searchBox';

const Header = () => {
  return (
    <header className="py-4 px-5 bg-gray-800 text-white flex flex-col sm:flex-row items-center gap-4">
      <Link href="/" className="text-xl font-medium ">
        Movie App
      </Link>
      <nav className="flex gap-4 flex-1 items-center flex-col sm:flex-row">
        <div className="flex gap-4 flex-1 items-center">
          {' '}
          <Link href="/movies/upcoming" className="hover:text-primary">
            Upcoming
          </Link>
          <Link href="/movies/popular" className="hover:text-primary">
            Popular
          </Link>
          <Link
            href="/movies/top-rated"
            className="hover:text-primary flex-shrink-0"
          >
            Top Rated
          </Link>
        </div>
        <div className="ml-auto">
          <SearchBox />
        </div>
      </nav>
    </header>
  );
};

export default Header;
