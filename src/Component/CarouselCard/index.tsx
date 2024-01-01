/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';

import classNames from 'classnames';

import Button from '../Button';
// import Cookie from '../../images/dark_chocolate_cookie.png';
import Star from '../Star';
import { FilterType } from '../../types/filter';

const CarouselCard: React.FC<FilterType> = ({ type, icon }) => {
  const stars = [false, false, false, false, false];
  const [star] = useState(stars);
  return (
    <div className='rounded-lg text-center bg-grey-50  pb-4'>
      <img className='m-auto h-56' src={icon} />
      <div className='flex justify-center text-pink-250 font-bold  mx-12  text-2xl text-wrap overflow-x-auto h-16'>
        {type}
      </div>
      <div className='flex justify-between  m-auto w-[50%] mt-3 mb-6'>
        {star.map((x: unknown, index: number) => (
          <div key={index}>
            <Star width={24} height={24} />
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
              '  rounded-3xl border-1 border-pink-250 text-pink-250  hover:text-white hover:bg-pink-250'
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
