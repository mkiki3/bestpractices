import React, { useState } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import InputField from '../Component/InputField';
import { Button } from '../Component';
import DropDown from '../Component/DropDown';
import Cookie from '../images/chocolate_chip_cookie.svg';

const Cart: React.FC = () => {
  const arr = [
    { name: 'Chocolate Chip Cookie' },
    { name: 'Chocolate Chip Cookie' },
    { name: 'Chocolate Chip Cookie' },
    { name: 'Chocolate Chip Cookie' },
    { name: 'Chocolate Chip Cookie' },
    { name: 'Chocolate Chip Cookie' },
  ];
  const options = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const [step, setStep] = useState(1);

  const buttonText = ['CONTINUE CHECKOUT', 'PAY NOW $30.00', 'BACK TO HOME'];

  const navigate = (page: number) => {
    setStep(page);
  };
  interface props {
    name: string;
  }
  return (
    <div className='grid grid-cols-1 lg:grid-cols-4 p-3 lg:p-20'>
      <div className='border bg-grey-50 col-span-3 px-8 hidden lg:block'>
        <div>Payment Details</div>
        <div>
          We never store your credit card number and your payment is secure
        </div>
        <div>Select Payemnt Method</div>
        <div className='grid grid-cols-4 border px-20'>
          <InputField label='Name on Card' className='col-span-4' />
          <InputField label='Card Number' className='col-span-3' />
          <InputField label='.' className='col-span-1' />
          {/* <DropDown options={options} className='col-span-1' /> */}
          <InputField label='Expiration' className='col-span-1' />
          <InputField className='col-span-1' />
          <InputField label='CVC' className='col-span-1' />
        </div>
      </div>
      <div className='border bg-grey-50 col-span-1 hidden lg:block'>2</div>
      {step !== 1 && (
        <div className='flex justify-between mb-8 lg:hidden'>
          <div className='flex flex-col items-center'>
            <button
              className='border-8  border-pink-50 bg-pink-250 px-4 rounded-full p-1 h-12'
              onClick={() => navigate(1)}
            ></button>
            <div className='text-pink-250 text-xs mt-2'>Shipping</div>
          </div>

          <div className='flex flex-col items-center'>
            <button
              className='border-8  border-pink-50 bg-pink-250 px-4 rounded-full p-1 h-12'
              onClick={() => navigate(2)}
            ></button>
            <div className='text-pink-250 text-xs mt-2'>Payment</div>
          </div>
          <div className='flex flex-col items-center'>
            <button
              className='border-8  border-pink-50 bg-pink-250 px-4 rounded-full p-1 h-12'
              onClick={() => navigate(3)}
            ></button>
            <div className='text-pink-250 text-xs mt-2'>Review</div>
          </div>
        </div>
      )}
      {step === 1 && (
        <div className='lg:hidden'>
          <div className='flex justify-between px-3 my-3'>
            <div>Shopping Cart</div>
            <div className='underline'>Continue Shopping</div>
          </div>
          <div className='max-h-96 overflow-y-auto pb-8'>
            {arr.map((x: props, idx: number) => (
              <div key={idx} className='flex p-3'>
                <div className='rounded-lg py-10 px-3 mr-2 border border-grey-400'>
                  <img src={Cookie} className='w-48' />
                </div>
                <div className='flex flex-col justify-between text-left'>
                  <div className='tracking-wide'>Chocolate Cookie Chip</div>
                  <div className='text-sm text-grey-600 font-light'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing.
                  </div>
                  <div className='flex justify-between text-sm items-center'>
                    <div className='text-pink-250 font-medium text-md'>
                      $4.00
                    </div>
                    <div>
                      <DropDown options={options} iconPosition='right' />
                    </div>
                    <div className='underline'>Remove</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {step === 2 && (
        <div className='lg:hidden'>
          <div className='shipping flex flex-col border border-grey-400 rounded-lg p-3'>
            <div className='flex justify-between'>
              <div className='font-semibold'>Shipping Address</div>
              <div className='underline'>Edit</div>
            </div>
            <div className='flex justify-between'>
              <div className=''>Name</div>
              <div className=''>Jane Doe</div>
            </div>
            <div className='flex justify-between'>
              <div className=''>Street</div>
              <div className=''>213 Clark St.</div>
            </div>
            <div className='flex justify-between'>
              <div className=''>City</div>
              <div className=''>Houston</div>
            </div>
          </div>
          <div className='payment flex flex-col border border-grey-400 rounded-lg p-3 mt-3'>
            <div className='flex justify-between mb-2'>
              <div className='font-semibold'>Payment</div>
              <div className='underline'>Edit</div>
            </div>
            <div className='flex justify-between'>
              <div>**** 8372</div> <div>01/24</div>
            </div>
          </div>
        </div>
      )}
      {step === 3 && (
        <div className='flex flex-col justify-center items-center py-32 lg:hidden'>
          <div className='rounded-full border-8 px-12 py-12 border-pink-50  bg-pink-250 mb-8'></div>
          <div className='font-semibold text-xl  text-center w-[75%] mb-3'>
            Payment has been received sucessfully!
          </div>
          <div className='font-light text-grey-400'>
            Youll get a notification of your order status
          </div>
        </div>
      )}
      {step !== 3 && (
        <div className='lg:hidden'>
          <div className='my-3'>Order Summary</div>
          <div className='flex'>
            <input
              placeholder='Enter Discount Code'
              className='border border-grey-500 rounded-lg py-2 px-2 font-light w-[80%] mr-1'
            />

            <Button
              text='APPLY'
              variant='outlined'
              className='rounded-lg text-center px-4 text-pink-250 hover:text-white hover:bg-pink-250'
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
        </div>
      )}
      <button
        className='bg-pink-250 rounded-2xl text-white text-center fixed bottom-4 left-1/2 transform -translate-x-1/2 w-96 py-2 lg:hidden'
        onClick={() => setStep((prev) => prev + 1)}
      >
        {buttonText[step - 1]}
      </button>
    </div>
  );
};

export default Cart;
