import React, { useState } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import InputField from '../Component/InputField';
import { Button } from '../Component';
import DropDown from '../Component/DropDown';
import Cookie from '../images/chocolate_chip_cookie.svg';
import SugarCookie from '../images/sugar-cookie.png';
import CustomQtyPicker from '../Component/CustomQtyPicker';
import {
  BanknotesIcon,
  ShoppingCartIcon,
  ArchiveBoxIcon,
  CreditCardIcon,
  TrashIcon,
  ArrowLeftIcon,
} from '@heroicons/react/20/solid';
import PayPal from '../images/paypal.svg';
import PayPalLogo from '../images/paypal_logo.svg';
// import ApplePay from '../images/apple_pay.png';
import ApplePay from '../images/apple_pay2.svg';
import VisaCard from '../images/visa.png';
import MasteCard from '../images/mastercard.png';
import Amex from '../images/amex.svg';

const Cart: React.FC = () => {
  const arr = [
    { name: 'Chocolate Chip Cookie' },
    { name: 'Chocolate Chip Cookie' },
    { name: 'Chocolate Chip Cookie' },
    { name: 'Chocolate Chip Cookie' },
    { name: 'Chocolate Chip Cookie' },
    { name: 'Chocolate Chip Cookie' },
  ];

  const cartItems = [
    { name: 'Chocolate Chip Cookie', img: SugarCookie },
    { name: 'Chocolate Chip Cookie', img: Cookie },
  ];
  const c = [0, 1, 2, 3, 4];
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
    <>
      {/**might delete */}
      {step === 3 && (
        <div className='lg:flex hidden justify-center  pt-32 p-8'>
          {/**Left Side */}
          <div className='flex flex-col shadow-md px-6 py-3'>
            <div className='flex flex-col'>
              <div className='text-2xl my-3'>Payment Details</div>
              <div className='text-grey-400 text-xs'>
                We never store your credit card number and your payment is
                secure
              </div>
            </div>

            <div className='mt-8 mb-2'>Select Payment Method</div>
            <div className='flex w-[40%] space-x-6 mb-8'>
              <div className='flex justify-center border border-grey-400 rounded-lg w-1/3 hover:bg-pink-250'>
                <CreditCardIcon className=' text-grey-400 hover:text-white w-6' />
              </div>
              <div className='flex flex-col items-center border border-grey-400 rounded-lg w-1/3 hover:bg-pink-250 pt-2'>
                <img src={PayPalLogo} className='w-4' />
                <img src={PayPal} className='w-4' />
              </div>
              <div className='flex justify-center border border-grey-400 rounded-lg w-1/3'>
                {/**Find a better icon */}
                <img src={ApplePay} className='text-blue-400 w-8 bg-white  ' />
              </div>
            </div>

            <div className='flex flex-col w-[70%]'>
              <div className='flex w-full'>
                <InputField
                  className='text-white'
                  label='Name on the card'
                  name='fullname'
                  type='text'
                  required={true}
                  variant='outlined'
                />
              </div>
              <div className='flex space-x-6 my-2'>
                <div className='flex w-1/2'>
                  <InputField
                    className='text-white'
                    label='Card Number'
                    name='cardnumber'
                    type='text'
                    required={true}
                    variant='outlined'
                  />
                </div>
                <div className='flex w-1/2'>
                  <InputField
                    className='text-white'
                    label='Card Type'
                    name='text'
                    type='text'
                    required={true}
                    variant='outlined'
                  />
                </div>
              </div>
              <div className='flex space-x-8'>
                <div className='flex w-1/4'>
                  <InputField
                    className='text-white'
                    label='Expiration'
                    name='text'
                    type='text'
                    required={true}
                    variant='outlined'
                  />
                </div>
                <div className='flex w-1/4'>
                  <InputField
                    className='text-white'
                    label='.'
                    name='text'
                    type='text'
                    required={true}
                    variant='outlined'
                  />
                </div>
                <div className='flex w-1/3'>
                  <InputField
                    className='text-white'
                    label='CVC Code'
                    name='text'
                    type='text'
                    required={true}
                    variant='outlined'
                  />
                </div>
              </div>
            </div>
            {/** */}
          </div>
          {/**Right Side */}
          <div className='flex flex-col shadow-md p-4'>
            {cartItems.map((x, idx: number) => (
              <div key={idx} className='flex my-3'>
                {/**Image & QTY Picker */}
                <div className='flex'>
                  <div className='w-16'>
                    <img src={x.img} className='object-contain bg-[#f2f2f2]' />
                  </div>

                  <div className='flex flex-col justify-between w-1/2 pl-3'>
                    <div className='text-xs font-semibold'>{x.name}</div>
                    <div className='flex mt-3'>
                      <CustomQtyPicker />
                    </div>
                  </div>
                </div>
                <div className='flex flex-col justify-between'>
                  <div className='text-xs font-semibold'>$4.00</div>
                  <div className='text-grey-400 text-xs underline'>Remove</div>
                </div>
              </div>
            ))}

            <div className='border border-b-grey-400 border-1 border-t-0 border-r-0 border-l-0 my-3' />

            <div className='flex space-x-2'>
              <input
                className='bg-grey-100 rounded-lg text-[10px] px-3 w-full focus:outline-none '
                placeholder='Discount code'
              ></input>
              <button className='bg-grey-200 rounded-md text-white text-[10px] p-3 w-1/3'>
                Apply
              </button>
            </div>
            <div className='border border-b-grey-400 border-1 border-t-0 border-r-0 border-l-0 my-3' />

            <div className='flex flex-col space-y-1'>
              <div className='flex justify-between'>
                <div className='text-xs text-grey-400'>SubTotal</div>
                <div className='text-xs text-grey-400'>$8.00</div>
              </div>
              <div className='flex justify-between'>
                <div className='text-xs text-grey-400'>Taxes</div>
                <div className='text-xs text-grey-400'>$2.00</div>
              </div>
              <div className='flex justify-between'>
                <div className='text-xs text-grey-400'>Shipping</div>
                <div className='text-xs text-grey-400'>10.00</div>
              </div>
            </div>

            <div className='border border-b-grey-400 border-1 border-t-0 border-r-0 border-l-0 my-3' />
            <div className='flex justify-between'>
              <div className='font-semibold '>Total</div>
              <div className='flex'>
                <div className='text-[8px] font-light my-auto mr-1'>USD</div>
                <div className='font-semibold'>$10.00</div>
              </div>
            </div>

            <div className='flex justify-between text-grey-400 mx-auto w-[70%] mt-12'>
              <div className='flex flex-col items-center'>
                <BanknotesIcon className='w-5' />
                <div className='flex flex-col justify-center items-center text-center text-[8px] w-1/2'>
                  Secure Payment
                </div>
              </div>
              <div className='flex flex-col items-center'>
                <ShoppingCartIcon className='w-5' />
                <div className='flex flex-col justify-center items-center text-center text-[8px] w-1/2'>
                  Fast Delivery
                </div>
              </div>
              <div className='flex flex-col items-center'>
                <ArchiveBoxIcon className='w-5' />
                <div className='flex flex-col justify-center items-center text-center text-[8px] w-1/2'>
                  24/7 Support
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {step == 1 && (
        <div className='flex justify-center w-[65%] rounded-3xl shadow-lg mx-auto mt-16 p-6 py-10'>
          {/**Left Side */}
          <div className='p-6'>
            {/**Continue Shopping */}
            <div className='w-full'>
              <button className='flex justify-center items-center'>
                <ArrowLeftIcon className='w-5 mr-2' />
                <div className='text-lg text-grey-400 font-medium'>
                  Continue Shopping
                </div>
              </button>
            </div>
            <hr className='text-grey-400 my-4' />
            {/**Shopping Items and Filter */}
            <div className='flex justify-between'>
              <div className='flex flex-col'>
                <div className='text-lg text-grey-600 font-medium'>
                  Shopping Cart
                </div>
                <div className='text-sm text-grey-400'>
                  You have 4 items in your cart
                </div>
              </div>
              <div className='flex flex-col justify-end'> Sort by:Price</div>
            </div>

            {/**Cart Item */}
            <div className='max-h-[85%] overflow-y-auto'>
              {c.map((x, idx: number) => (
                <div
                  key={idx}
                  className='cart-item flex items-center rounded-lg shadow-md p-3 my-3'
                >
                  <div className='flex'>
                    <div className='border w-24 h-20'>
                      <img src={Cookie} className='mt-2' />
                    </div>
                    <div className='flex flex-col text-left w-[90%] px-4'>
                      <div className='text-md'>Sugar Cookie</div>
                      <div className='text-xs text-grey-400'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </div>
                    </div>
                  </div>
                  <div className='flex justify-between w-1/2'>
                    <div className='w-20 mx-4'>
                      <CustomQtyPicker />
                    </div>
                    <div className='font-semibold'>$ 4.00</div>
                    <TrashIcon className='w-5 mx-4 text-grey-400 hover:text-pink-250' />
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/**Right Side */}
          <div className='flex flex-col w-[45%] rounded-3xl shadow-md bg-pink-300  px-6'>
            <div className='font-semibold text-white mb-6 mt-10'>
              Card Details
            </div>
            <div className='text-white text-xs my-2'>Card Type</div>
            {/**Card type */}
            <div className='flex mb-8'>
              <div className='flex space-x-6'>
                <div className='border border-grey-400 rounded-lg py-2 px-3 '>
                  <img src={MasteCard} className='w-10' />
                </div>
                <div className='border border-grey-400 rounded-lg p-1 px-3'>
                  <img src={VisaCard} className='w-12' />
                </div>
                <div className='border border-grey-400 rounded-lg px-2'>
                  <img src={Amex} className='w-12 mt-1' />
                </div>
                <div className='border border-grey-400 rounded-lg my-auto py-4 px-6'>
                  <img src={PayPalLogo} className='w-6' />
                </div>
              </div>
            </div>
            {/**form */}
            <div className='flex flex-col h-56 justify-between mt-8'>
              <div className='flex flex-col w-full'>
                <label className='text-sm text-white my-2'>Name on Card</label>
                <input className='bg-[#de81ac] text-white h-12'></input>
              </div>

              <div className='flex flex-col w-full'>
                <label className='text-sm text-white my-2'>Card Number</label>
                <input className='bg-[#de81ac] text-white h-12'></input>
              </div>

              <div className='flex justify-between'>
                <div className='flex flex-col'>
                  <label className='text-sm text-white my-2'>
                    Expiration date
                  </label>
                  <input className='bg-[#de81ac] text-white h-12'></input>
                </div>
                <div className='flex flex-col w-full'>
                  <label className='text-sm text-white my-2'>CVC</label>
                  <input className='bg-[#de81ac] text-white h-12'></input>
                </div>
              </div>
            </div>
            {/**Total Price */}
            <hr className='text-white my-8' />
            <div className='flex justify-between my-4'>
              <div className='text-white'>Item Subtotal</div>
              <div className='font-semibold text-white'>$28.00</div>
            </div>
            <div className='flex justify-between mb-4'>
              <div className='text-white'>Shipping</div>
              <div className='font-semibold text-white'>$2.00</div>
            </div>
            <div className='flex justify-between my-3'>
              <div className='text-white'>Total</div>
              <div className='font-semibold text-white'>$30.00</div>
            </div>
            {/**Button */}
            <button
              onClick={() => navigate(1)}
              className='flex  justify-between bg-pink-250 rounded-lg mx-auto w-full p-4 mb-10'
            >
              <div className='text-white'>$12.00</div>
              <div className='text-white'>Checkout</div>
            </button>
          </div>
        </div>
      )}

      {/**Mobile */}
      <div className='grid grid-cols-1 lg:grid-cols-4 p-3 lg:p-20 md:mx-32'>
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
    </>
  );
};

export default Cart;
