import React from 'react';
import classNames from 'classnames';
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
  type?: 'submit' | 'button' | 'reset';
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  size,
  className,
  text,
  variant,
  icon,
  iconPosition,
  type,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        'flex justify-center items-center hover:opacity-80',
        {
          'px-4 py-2 h-11 text-base': size === 'default',
          'px-4 py-2 h-9 text-sm': size === 'medium',
          'px-4 py-1 h-8 text-xs': size === 'small',
          'bg-transparent border': variant === 'outlined',

          [`${className}`]: className,
        }
      )}
      type={type}
    >
      {icon && iconPosition === 'left' && icon}
      {text}
      {icon && iconPosition === 'right' && icon}
    </button>
  );
};

export default Button;
