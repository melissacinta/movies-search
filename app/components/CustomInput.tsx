'use client';

import { useField } from 'formik';
import { classNames } from '../config';
type Props = {
  label?: string;
  name: string;
  [x: string]: any;
};
const CustomInput = ({ label, ...props }: Props) => {
  const [field, meta] = useField(props);

  return (
    <div>
      {label && (
        <label htmlFor={props.name} className="block text-base font-bold">
          {label}
        </label>
      )}
      <div className="mt-2">
        <input
          {...field}
          id={props.name}
          {...props}
          className={classNames(
            meta.touched && meta.error
              ? 'ring-red-500 focus:ring-red-600 text-red-600 placeholder:text-red-600'
              : '',
            'block w-full border-0 py-2 px-2.5 shadow-sm ring-1 ring-inset ring-primary-20 placeholder:italic focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 bg-transparent disabled:bg-gray-300'
          )}
        />
        {meta.touched && meta.error && (
          <div className="text-red-500">{meta.error}</div>
        )}
      </div>
    </div>
  );
};
export default CustomInput;
