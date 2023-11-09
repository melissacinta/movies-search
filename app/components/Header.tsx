import Link from 'next/link';
import SearchBox from './searchBox';
import Logout from '../logout';

const Header = ({ session }: { session: any }) => {
  console.log({ session });
  return (
    <header className="py-4 px-5 bg-gray-800 text-white flex flex-col sm:flex-row items-center gap-4">
      <Link href="/" className="text-xl font-medium ">
        Movie App
      </Link>
      <nav className="flex gap-4 sm:ml-auto items-center">
        <div className="ml-auto">
          <SearchBox />
        </div>
        {!!session && <Link href="/profile">Profile</Link>}
        {!!session && <Logout />}
        {!session && <Link href="/login">Login</Link>}
      </nav>
    </header>
  );
};

export default Header;
