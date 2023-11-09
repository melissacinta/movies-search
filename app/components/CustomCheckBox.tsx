'use client';

import { useField } from 'formik';
import { classNames } from '../config';
type Props = {
  label?: string;
  name: string;
  [x: string]: any;
};
const CustomCheckbox = ({ label, ...props }: Props) => {
  const [field, meta] = useField(props);

  return (
    <>
      <div className="flex gap-[7px] items-center">
        <input
          {...field}
          {...props}
          id={props.id}
          className={classNames(
            meta.touched && meta.error
              ? 'border-red-500 focus:border-red-600 checked:bg-red-500'
              : 'border-primary-20 focus:border-primary-10 checked:bg-primary-20',
            'relative peer shrink-0 appearance-none rounded-[5px] border-2 w-[15px] h-[15px] bg-white checked:border-0 outline-none focus:ring-transparent'
          )}
        />
        <label
          htmlFor={props.id}
          className='className="text-[#231F20] text-[1.4375rem]"'
        >
          {label}
        </label>
      </div>

      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </>
  );
};
export default CustomCheckbox;
