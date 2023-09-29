import React, { useState } from 'react';

import classNames from 'classnames';

import Button from '../Button';
import Cookie from '../../images/dark_chocolate_cookie.png';
import Star from '../Star';

const CarouselCard: React.FC = () => {
  const stars = [false, false, false, false, false];
  const [star] = useState(stars);
  return (
    <div className=' m-auto rounded-lg text-center bg-grey-50 pb-4'>
      <img className='m-auto h-56' src={Cookie} />
      <div className='text-pink-250 font-bold text-2xl w-1/2 m-auto'>
        Chocolate Chip Cookies
      </div>
      <div className='flex justify-between  m-auto w-9/12 my-6'>
        {star.map((x: unknown, index: number) => (
          <div key={index}>
            <Star />
          </div>
        ))}
      </div>
      <div className='font-light text-grey-400 mb-12 m-auto w-3/4'>
        Lorem ipsum dolor sit amet, consectetur adipiscing.
      </div>
      <div className='flex justify-between px-3'>
        <div className=' text-pink-250 font-bold'> $8</div>
        <div>
          <Button
            className={classNames(
              '  rounded-3xl border-1 border-pink-250 text-pink-250 '
            )}
            size='small'
            text='Add to cart'
            variant='outlined'
          />
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
