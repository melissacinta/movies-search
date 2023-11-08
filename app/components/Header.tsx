import Link from 'next/link';
import SearchBox from './searchBox';

const Header = () => {
  return (
    <header className="py-4 px-5 bg-gray-800 text-white flex flex-col sm:flex-row items-center gap-4">
      <Link href="/" className="text-xl font-medium ">
        Movie App
      </Link>
      <nav className="flex gap-4 ml-auto items-center">
        <div className="ml-auto">
          <SearchBox />
        </div>
        <Link href="/login">Login</Link>
      </nav>
    </header>
  );
};

export default Header;
