import { getServerSession } from 'next-auth';
import LoginForm from './form';
import { redirect } from 'next/navigation';

export default async function LoginPage() {
  const session = await getServerSession();
  if (session) {
    redirect('/');
  }
  return (
    <div className="px-4 pb-8 lg:px-0 mt-10 sm:mx-auto sm:w-full sm:max-w-sm md:max-w-md min-h-[80vh] flex flex-col lg:max-w-[20.6875rem]">
      <div>
        <h1 className="text-primary-10 font-bold text-[2rem] leading-[2.375rem]">
          Login
        </h1>
        <p className="text-secondary-20 text-base mt-2">
          Enter your details to access your account
        </p>
      </div>
      <LoginForm />
      <div className="flex flex-1 mt-4 lg:mt-8">
        <p className="mt-auto text-center text-sm text-gray-500 flex-1">
          Already have an account yet?
          <a
            href={'/account'}
            className="pl-1 font-black font-base text-primary hover:opacity-80"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
