'use client';

import InputText from '../components/InputText';

const LoginPage = () => {
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

      <form className="gap-4 xl:gap-6 mt-9 flex flex-col">
        <InputText
          label="Email address"
          name="email"
          type="email"
          disabled={false}
          placeholder="Bolatito_001@gmail.com"
          handleChange={() => {}}
        />
        <div>
          <InputText
            label="Password"
            name="password"
            type="password"
            disabled={false}
            placeholder="*************"
            handleChange={() => {}}
          />
          <div className="mt-2 flex items-center justify-between">
            <div className="text-sm">
              <a
                href={'#'}
                className="font-bold text-primary-10 hover:text-primary-20 text-xs"
              >
                Forgot password?
              </a>
            </div>
          </div>
        </div>

        <div className="mt-auto">
          <button
            type="submit"
            className="w-full py-2 px-5 bg-slate-800 text-md font-normal text-white"
          >
            Log in
          </button>
        </div>
      </form>
      <div className="hidden flex-1 mt-4 lg:mt-8">
        <p className="mt-auto text-center text-sm text-gray-500 flex-1">
          Don’t have an account yet?
          <a
            href={'#'}
            className="pl-1 font-black font-base text-primary-20 hover:text-primary-10"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
