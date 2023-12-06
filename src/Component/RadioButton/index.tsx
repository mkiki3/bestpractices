import React from 'react';

interface RadioProps extends React.ComponentProps<'input'> {
  text?: string;
  errorMessage?: string;
  required?: boolean;
}

const RadioButton: React.FC<RadioProps> = ({ text, required }) => {
  return (
    <div className='flex'>
      <input type='radio' required={required} className='text-pink-250' />
      <div className='ml-3'>{text}</div>
    </div>
  );
};

export default RadioButton;
