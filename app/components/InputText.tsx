import { ChangeEvent } from 'react';

type Props = {
  label?: string;
  type?: string;
  name: string;
  placeholder?: string;
  value?: string | number;
  disabled: boolean;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
const InputText = ({
  label,
  type,
  name,
  placeholder,
  value,
  handleChange,
  disabled,
}: Props) => {
  return (
    <div>
      {label && (
        <label
          htmlFor={name}
          className="block text-base text-primary-10 font-bold"
        >
          {label}
        </label>
      )}
      <div className="mt-2">
        <input
          type={type ?? 'text'}
          name={name}
          id={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          disabled={disabled}
          className="block w-full border-0 py-2 px-2.5 text-secondary-20 shadow-sm ring-1 ring-inset ring-primary-20 placeholder:text-secondary-10 placeholder:italic focus:ring-2 focus:ring-inset focus:ring-primary-10 sm:text-sm sm:leading-6 bg-transparent"
        />
      </div>
    </div>
  );
};

export default InputText;
