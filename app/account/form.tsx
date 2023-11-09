'use client';

import CustomInput from '../components/CustomInput';
import { Form, Formik } from 'formik';
import { registerSchema } from '../config';

export default function RegisterForm() {
  const handleSignUp = async (values: any, actions: any) => {
    const { passwordConfirmation, ...others } = values;
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify(others),
    });
    console.log(response);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{
        name: '',
        phone: '',
        email: '',
        password: '',
        passwordConfirmation: '',
      }}
      validationSchema={registerSchema}
      onSubmit={handleSignUp}
    >
      {({ isSubmitting }) => (
        <Form className="gap-4 mt-9 flex-1 flex flex-col">
          <CustomInput
            label="Name"
            name="name"
            type="text"
            placeholder="Jane Doe"
          />
          <CustomInput
            label="Phone number"
            name="phone"
            type="text"
            placeholder="+2349012341211"
          />
          <CustomInput
            label="Email address"
            name="email"
            type="email"
            placeholder="Bolatito_001@gmail.com"
          />
          <CustomInput
            label="Password"
            name="password"
            type="password"
            placeholder="*************"
          />
          <CustomInput
            label="Confirm Password"
            name="passwordConfirmation"
            type="password"
            placeholder="*************"
          />
          <div className="mt-auto">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2 px-5 bg-slate-800 text-md font-normal text-white"
            >
              Register
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
