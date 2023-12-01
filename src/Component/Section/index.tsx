import React from 'react';
import CookieBasket from '../../images/cookie_basket.svg';
const Section: React.FC = () => {
  return (
    <>
      <div className='flex my-20 mt-36'>
        <div className='flex justify-end'>
          <img src={CookieBasket} className=' rounded-xl w-3/4' />
        </div>
        <div className='w-full pl-16'>
          <div className='space-y-20'>
            <div>
              <div className='text-5xl font-bold'>Eating well should</div>
              <div className='bg-pink-250 text-5xl font-bold w-1/3'>
                Taste good
              </div>
            </div>

            <div className='text-4xl w-11/12 '>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section;
