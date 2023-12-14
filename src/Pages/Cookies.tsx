/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import Cookie from '../images/chocolate_chip_cookie.svg';
import { Link } from 'react-router-dom';
import QtyPicker from '../Component/QtyPicker';

const Cookies: React.FC = () => {
  const arr = [
    'chocolate',
    'sugar',
    'brown',
    'banana pudding',
    'smores',
    'double fudge',
  ];
  return (
    <>
      <div className='w-full mx-auto text-center text-5xl font-light lg:my-20 my-12'>
        Flavor
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
        {arr.map((x, idx: number) => (
          <div key={idx} className='flex justify-between my-3 shadow-lg'>
            <div className='flex'>
              <img src={Cookie} className='mr-auto my-5 ' />
            </div>
            <div className='flex flex-col pl-4'>
              <div className='lg:text-3xl text-base'>Chocolate Chip</div>
              <div className='border border-white  border-b-pink-250 border-b-4 lg:my-3 my-1 w-1/4 '></div>
              <div className='text-grey-400 lg:text-xs text-sm  text-left'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
              {/**update dynamic routing */}
              <Link
                to={'/product/'}
                className='text-grey-600 underline hidden sm:block'
              >
                View Pastry
              </Link>
              <div className='flex justify-between my-3 w-1/3 space-x-3'>
                <div className=' text-pink-250 text-xl font-light'>$4.00</div>
                <QtyPicker />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cookies;
