import React from 'react';
import Box from '../../images/box.svg';

const Info: React.FC = () => {
  return (
    <div className='flex  mt-48'>
      <div className='flex border justify-center w-full text-white'>1 </div>
      <div className=' flex-col w-full'>
        <div className='space-y-8 mb-8'>
          <div>
            <div className='text-5xl font-bold'>Eating well should</div>
            <div className='bg-pink-250 text-5xl font-bold w-1/3'>
              Taste good
            </div>
          </div>

          <div className='text-3xl w-3/4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <div className='grid grid-cols-2 w-full '>
          <div className='flex space-x-4'>
            <img src={Box} />
            <div className='text-3xl'>Online Order</div>
          </div>
          <div className='flex space-x-4'>
            <img src={Box} />
            <div className='text-3xl'>Online Order</div>
          </div>
          <div className='flex space-x-4'>
            <img src={Box} />
            <div className='text-3xl'>Online Order</div>
          </div>
          <div className='flex space-x-4'>
            <img src={Box} />
            <div className='text-3xl'>Online Order</div>
          </div>
          <div className='flex space-x-4'>
            <img src={Box} />
            <div className='text-3xl'>Online Order</div>
          </div>
          <div className='flex space-x-4'>
            <img src={Box} />
            <div className='text-3xl'>Online Order</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
