import React from 'react';
import CookieIcon from '../../images/cookie_icon.svg';

const Sampler: React.FC = () => {
  return (
    <div className='grid grid-cols-4 mt-44 justify-center items-center hidden'>
      <div className='grid justify-center  items-center'>
        <div className='grid  text-5xl text-pink-250 font-bold m-auto mb-12'>
          Mystery Cookie
        </div>
        <img
          src={CookieIcon}
          className='grid grid-cols-1 justify-items-center items-center w-40 mx-auto text-pink-250'
        />
      </div>
      <div className='grid justify-center  items-center'>
        <div className='grid text-5xl text-pink-250 font-bold m-auto mb-12'>
          Three Pack
        </div>
        <img
          src={CookieIcon}
          className='grid grid-cols-1 justify-items-center items-center w-40 mx-auto text-pink-250'
        />
      </div>
      <div className='grid justify-center  items-center'>
        <div className='text-5xl text-pink-250 font-bold m-auto items-center mb-12'>
          Six Pack
        </div>
        <img
          src={CookieIcon}
          className='grid grid-cols-1 justify-items-center items-center w-40 mx-auto text-pink-250'
        />
      </div>
      <div className='grid justify-center  items-center'>
        <div className='grid  text-5xl text-pink-250 font-bold m-auto mb-12'>
          Twelve Pack
        </div>
        <img
          src={CookieIcon}
          className='grid grid-cols-1 justify-items-center items-center w-40 mx-auto text-pink-250'
        />
      </div>
    </div>
  );
};

export default Sampler;
