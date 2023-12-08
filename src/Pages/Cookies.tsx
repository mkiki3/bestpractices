import React from 'react';
import Cookie from '../images/chocolate_chip_cookie.svg';
import { Link } from 'react-router-dom';

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
    <div className='grid grid-cols-4 gap-4 border px-6'>
      <div className='flex col-span-4 items-center justify-center text-5xl font-light my-24'>
        Flavors
      </div>

      {arr.map((x, idx: number) => (
        <div
          className='col-span-2 flex justify-center items-center p-4 shadow-lg rounded-lg'
          key={idx}
        >
          <img src={Cookie} className='my-3' />
          <div className='p-4'>
            <div className='text-3xl'>Chocolate Chip</div>
            <div className='border border-white  border-b-pink-250  border-b-4 my-3 w-1/4'></div>
            <div className='text-md text-grey-400'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
            {/**update dynamic routing */}
            <Link to={'/product/'} className='text-grey-600 underline'>
              View Pastry
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cookies;
