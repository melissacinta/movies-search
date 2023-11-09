'use client';

import { signIn } from 'next-auth/react';
import CustomInput from '../components/CustomInput';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const router = useRouter();
  const handleLogin = async (values: any, actions: any) => {
    const { password, email } = values;

    const response = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    if (!response?.error) {
      router.push('/');
      router.refresh();
    }
  };
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={handleLogin}
    >
      {({ isSubmitting }) => (
        <Form className="gap-4 mt-9 flex-1 flex flex-col">
          <CustomInput
            label="Email address"
            name="email"
            type="email"
            required
            placeholder="Bolatito_001@gmail.com"
          />
          <CustomInput
            label="Password"
            name="password"
            type="password"
            required
            placeholder="*************"
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
          <div className="mt-auto">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2 px-5 bg-slate-800 text-md font-normal text-white"
            >
              {isSubmitting ? 'Loading...' : 'Log in'}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
