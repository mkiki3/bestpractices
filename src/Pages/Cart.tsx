import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import InputField from '../Component/InputField';
import { Button } from '../Component';
import DropDown from '../Component/DropDown';

const Cart: React.FC = () => {
  const arr = [
    { name: 'Chocolate Chip Cookie' },
    { name: 'Chocolate Chip Cookie' },
    { name: 'Chocolate Chip Cookie' },
  ];
  const options = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  interface props {
    name: string;
  }
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 p-3'>
      {arr.map((x: props, idx: number) => (
        <div key={idx} className='flex p-3'>
          <div className='bg-grey-200 rounded-lg py-10 px-3 mr-2'>
            placeholder
          </div>
          <div className='flex flex-col justify-between text-left'>
            <div className='tracking-wide'>Chocolate Cookie Chip</div>
            <div className='flex justify-between text-sm'>
              <div className='text-pink-250 font-medium text-md'>$4.00</div>
              <div>
                <DropDown options={options} iconPosition='right' />
              </div>
              <div className='underline'>Remove</div>
            </div>
          </div>
        </div>
      ))}

      <div className='border'>2</div>

      <div className='my-3'>Order Summary</div>
      <div className='flex'>
        <input
          placeholder='Enter Discount Code'
          className='border border-grey-500 rounded-lg py-2 px-2 font-light w-[80%] mr-1'
        />

        <Button
          text='APPLY'
          variant='outlined'
          className='rounded-lg text-center px-4 text-orange-500'
        />
      </div>
      <div className='flex justify-between my-4'>
        <div className='font-semibold'>Item Subtotal</div>
        <div className='font-semibold'>$28.00</div>
      </div>
      <div className='flex justify-between mb-4'>
        <div className='font-semibold'>Shipping</div>
        <div className='font-semibold'>$2.00</div>
      </div>
      <hr className='text-grey-400' />
      <div className='flex justify-between my-3'>
        <div className='font-semibold'>Total</div>
        <div className='font-semibold'>$30.00</div>
      </div>
      <button className='bg-pink-250 rounded-2xl text-white text-center px-1 py-3 my-4 w-full'>
        CONTINUE CHECKOUT
      </button>
    </div>
  );
};

export default Cart;
