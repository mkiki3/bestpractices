import React, { ChangeEvent } from 'react';
import classNames from 'classnames';

interface InputProps extends React.ComponentProps<'input'> {
  name?: string;
  text?: string;
  type?:
    | 'text'
    | 'email'
    | 'number'
    | 'password'
    | 'radio'
    | 'file'
    | 'search'
    | 'button'
    | 'checkbox'
    | 'tel';
  variant?: 'primary' | 'secondary' | 'text' | 'tag' | 'outlined';
  label?: string;
  placeholder?: string;
  required?: boolean;
  errorMessage?: string;
  className?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
const InputField: React.FC<InputProps> = ({
  name,
  type,
  variant,
  label,
  placeholder,
  required,
  className,
  onChange,
}) => {
  return (
    <div className='flex flex-col w-full'>
      {label && (
        <label className={classNames('text-sm text-grey-400')}>{label}</label>
      )}
      <input
        className={classNames(' border-transparent', {
          ' focus:outline-none border border-white focus:border-b-pink-250 border-b-grey-400 py-3':
            variant === 'outlined',
          [`${className}`]: className,
        })}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
