import React from 'react';
import classNames from 'classnames';

interface ButtonProps extends React.ComponentProps<'button'> {
  children?: React.ReactNode;
  className?: string;
  iconPosition?: 'left' | 'right';
  contentAlignment?: 'center' | 'left' | 'right';
  textAlignment?: 'center' | 'left' | 'right';
  size?: 'default' | 'small' | 'large';
  variant?: 'primary' | 'secondary' | 'text' | 'tag' | 'outlined';
  icon?: React.ReactNode;
  loading?: boolean;
  borderRadius?: 'rounded' | 'rounded-md' | 'rounded-lg' | 'rounded-full';
}

const Button: React.FC<ButtonProps> = ({ size, borderRadius, className }) => {
  return (
    <button
      className={classNames(
        'flex items-center rounded-lg min-w-[64px]  hover:opacity-80',
        {
          'px-4 py-2 h-11 text-base': size === 'default',
          'px-4 py-2 h-9 text-sm': size === 'large',
          'px-4 py-1 h-8 text-xs': size === 'small',
          'rounded-md': borderRadius === 'rounded-md',
          'rounded-lg': borderRadius === 'rounded-lg',
          'rounded-full': borderRadius === 'rounded-full',
          'bg-transparent border': 'outlined',
          'border-0': 'text',
          [`${className}`]: className,
        }
      )}
    >
      Button
    </button>
  );
};

export default Button;
