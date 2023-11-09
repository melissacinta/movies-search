import React from 'react';
import ProfileForm from './form';
import Link from 'next/link';

export default function ProfilePAge() {
  return (
    <div className="px-4 pb-8 lg:px-0 mt-10 sm:mx-auto sm:w-full sm:max-w-sm md:max-w-md min-h-[80vh] flex flex-col lg:max-w-[20.6875rem]">
      <div>
        <h1 className="text-primary-10 font-bold text-[2rem] leading-[2.375rem]">
          My Profile
        </h1>
      </div>

      <ProfileForm />
    </div>
  );
}
