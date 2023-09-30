import React from 'react';
import classNames from 'classnames';
/**
 *  <Button
        className={classNames(' text-white bg-pink-500')}
        borderRadius='rounded-full'
        size='default'
      />
 */

interface ButtonProps extends React.ComponentProps<'button'> {
  children?: React.ReactNode;
  className?: string;
  iconPosition?: 'left' | 'right';
  contentAlignment?: 'center' | 'left' | 'right';
  textAlignment?: 'center' | 'left' | 'right';
  size?: 'default' | 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'text' | 'tag' | 'outlined';
  icon?: React.ReactNode;
  loading?: boolean;
  text?: string;
}

const Button: React.FC<ButtonProps> = ({
  size,
  className,
  text,
  variant,
  icon,
  iconPosition,
}) => {
  return (
    <button
      className={classNames(
        'flex items-center min-w-[64px]  hover:opacity-80',
        {
          'px-4 py-2 h-11 text-base': size === 'default',
          'px-4 py-2 h-9 text-sm': size === 'medium',
          'px-4 py-1 h-8 text-xs': size === 'small',
          'bg-transparent border': variant === 'outlined',

          [`${className}`]: className,
        }
      )}
    >
      {icon && iconPosition === 'left' && icon}
      {text}
      {icon && iconPosition === 'right' && icon}
    </button>
  );
};

export default Button;