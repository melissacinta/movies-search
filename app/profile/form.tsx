'use client';

import CustomInput from '../components/CustomInput';
import { Form, Formik } from 'formik';
import { updateSchema } from '../config';
import { useSession } from 'next-auth/react';

export default function ProfileForm() {
  const { data: session } = useSession();
  const handleUpdateProfile = async (values: any, actions: any) => {
    const response = await fetch('/api/user', {
      method: 'PUT',
      body: JSON.stringify(values),
    });
    console.log({ response });
  };
  console.log({ session });
  return (
    <Formik
      initialValues={{
        name: session?.user?.name,
        phone: session?.user?.phone,
        email: session?.user?.email,
      }}
      validationSchema={updateSchema}
      onSubmit={handleUpdateProfile}
      enableReinitialize={true}
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
            disabled="true"
            placeholder="Bolatito_001@gmail.com"
          />

          <div className="mt-auto">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2 px-5 bg-slate-800 text-md font-normal text-white"
            >
              Update Profile
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
