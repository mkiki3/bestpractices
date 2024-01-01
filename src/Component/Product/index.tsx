import React, { useState } from 'react';
import Cookie from '../../images/chocolate_chip_cookie.svg';
import Button from '../Button';
import Star from '../Star';
import QtyPicker from '../QtyPicker';

const Product: React.FC = () => {
  const stars = [false, false, false, false, false];
  const [star] = useState(stars);
  return (
    <div className='grid grid-cols-2 mx-64 mt-20'>
      {/**update the path to match this */}
      <div className='col-span-2 text-grey-700 mb-36'>
        Products / Cookie / ChocolateChip
      </div>
      <div className='col-span-1 flex items-center justify-center'>
        <img src={Cookie} />
      </div>
      <div className='col-span-1 '>
        <div className='text-left text-2xl font-light'>
          Chocolate Chip Cookie
        </div>
        <div className='border border-white  border-b-pink-250  border-b-4 text-left my-3 w-10'></div>
        <div className='text-left text-xl font-light'>$6.00</div>
        <div className='border border-white  border-b-grey-200  border-b-2 text-left my-3 w-1/2'></div>
        <div className='text-left font-light w-1/2'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div className='flex items-center my-3'>
          <div className='flex justify-between w-28'>
            {star.map((x: unknown, index: number) => (
              <Star key={index} width={16} height={16} />
            ))}
          </div>
          <div className='ml-2 text-grey-700'>(12)</div>
        </div>
        <div className='flex my-3'>
          <div className='flex justify-between w-1/2'>
            <div>Quantity</div>
            <QtyPicker />
          </div>

          <div className='hidden'>
            <div className=''>
              <Button text='-' className='border flex justify-center w-5' />
            </div>
            <div className='border px-5'>1</div>
            <div>
              <Button text='+' className='border flex justify-center' />
            </div>
          </div>
        </div>
        <Button
          text='ADD TO CART'
          className=' flex justify-center bg-pink-250  w-1/2 my-8 p-2'
        />
      </div>
    </div>
  );
};

export default Product;
