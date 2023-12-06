import React, { ChangeEvent } from 'react';
import classNames from 'classnames';

interface InputProps extends React.ComponentProps<'input'> {
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
    | 'checkbox';
  variant?: 'primary' | 'secondary' | 'text' | 'tag' | 'outlined';
  label?: string;
  placeholder?: string;
  required?: boolean;
  errorMessage?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
const InputField: React.FC<InputProps> = ({
  type,
  variant,
  label,
  required,
  onChange,
}) => {
  return (
    <div className='flex flex-col'>
      <label className={classNames('text-sm text-grey-400 ')}>{label}</label>
      <input
        className={classNames(' border-transparent', {
          ' focus:outline-none border border-white focus:border-b-pink-250 border-b-grey-400 py-3':
            variant === 'outlined',
        })}
        required={required}
        type={type}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
