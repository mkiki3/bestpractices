import React, { ChangeEvent } from 'react';
// import classNames from 'classnames';

interface TextAreaProp extends React.ComponentProps<'textarea'> {
  text?: string;

  variant?: 'primary' | 'secondary' | 'text' | 'tag' | 'outlined';
  label?: string;
  placeholder?: string;
  required?: boolean;
  errorMessage?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}
const TextAreaField: React.FC<TextAreaProp> = ({ label }) => {
  return (
    <div className='grid grid-cols-2'>
      <label className='col-span-2 text-sm text-grey-400'>{label}</label>
      <textarea
        name='comment'
        className='col-span-2 md:col-span-1 outline-none line-clamp-3 rounded-lg border border-white focus:border-b-pink-250 py-3'
        placeholder='Write a message..'
      />
    </div>
  );
};

export default TextAreaField;
