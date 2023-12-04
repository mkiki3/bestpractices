import React from 'react';

import { Link } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import {
  ChevronUpIcon,
  HandThumbDownIcon as ThumbsDown,
  HandThumbUpIcon as ThumbsUp,
} from '@heroicons/react/20/solid';
import { faq } from '../data';
import { faqProp } from '../types/faq';

const FAQ: React.FC = () => {
  return (
    <>
      <div className='border flex flex-col  items-center'>
        {/**Title */}
        <div className='md:text-5xl sm:text-3xl pt-20 pb-16'>
          Frequently <span className='text-pink-250'>Ask Questions</span>
        </div>
        {/**Menu */}
        <div className='flex justify-between w-1/4 mb-10 '>
          <span className='hover:border hover:border-white hover:border-b-pink-500 pb-1'>
            <Link to='/faq'>General</Link>
          </span>
          <span className='hover:border hover:border-white hover:border-b-pink-500 pb-1'>
            <Link to='/faq'>Service</Link>
          </span>
          <span className='hover:border hover:border-white hover:border-b-pink-500 pb-1'>
            <Link to='/faq'>Payment</Link>
          </span>
          <span className='hover:border hover:border-white hover:border-b-pink-500 pb-1'>
            <Link to='/faq'>Refund</Link>
          </span>
          <span className='hover:border hover:border-white hover:border-b-pink-500 pb-1'>
            <Link to='/faq'>Return</Link>
          </span>
        </div>

        <div className='mx-auto w-1/2 rounded-2xl bg-white p-2 '>
          {faq.map((x: faqProp, index: number) => (
            <Disclosure key={index}>
              {({ open }) => (
                <>
                  <Disclosure.Button className='flex w-full justify-between rounded-lg bg-pink-100 px-4 py-2 my-3 text-left text-sm font-medium text-purple-900 hover:bg-pink-200 focus:outline-none focus-visible:ring focus-visible:ring-pink-500/75'>
                    <span>{x.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? 'rotate-180 transform' : ''
                      } h-5 w-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className='px-4 pb-2 pt-4 text-sm text-gray-500'>
                    {x.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </div>
        <div className='bg-pink-50'>
          <div className=''>Comments</div>
          <div className='flex w-1/2  rounded-lg p-5 '>
            <div className='flex'>
              <div className='bg-grey-200 w-1/4 rounded-lg mr-7'>
                placeholder
              </div>
              <div className='flex flex-col'>
                <span className='text-pink-600 font-bold '>Jane Doe</span>
                <span className='text-md'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud.
                </span>
              </div>
              <div className='flex justify-between w-1/4 ml-8'>
                <ThumbsDown className='w-8 text-grey-300 hover:text-pink-600' />
                <ThumbsUp className='w-8 text-grey-300 hover:text-pink-600' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
