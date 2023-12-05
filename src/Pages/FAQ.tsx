import React, { useState, ChangeEvent, FormEvent } from 'react';

import { Disclosure } from '@headlessui/react';
import {
  ChevronUpIcon,
  HandThumbDownIcon as ThumbsDown,
  HandThumbUpIcon as ThumbsUp,
} from '@heroicons/react/20/solid';

import { faq } from '../data';
import { FAQProp } from '../types/faq';
import { Button } from '../Component';

const FAQ: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selected, setSelected] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: '',
  });

  const titleItems = ['General', 'Payments', 'Returns', 'Refunds'];

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Submitted data:', formData);
    // Add your logic for handling the form data here
  };

  return (
    <>
      <div className='flex flex-col  items-center'>
        {/**Title */}
        <div className='md:text-5xl sm:text-3xl pt-20 pb-16'>
          Frequently <span className='text-pink-250'>Ask Questions</span>
        </div>
        {/**Menu */}
        <div className='flex justify-between w-1/4 mb-10 '>
          {titleItems.map((x: string, idx: number) => (
            <span
              key={idx}
              className='hover:border hover:border-white hover:border-b-pink-500 pb-1'
            >
              <Button text={x} onClick={() => setSelected(x)} />
            </span>
          ))}
        </div>
      </div>

      <div className='mx-auto w-1/2 rounded-2xl bg-white p-2 '>
        {faq
          .filter((x) => x.type === selected)
          .map((x: FAQProp, index: number) => (
            <Disclosure key={index}>
              {({ open }) => (
                <>
                  <Disclosure.Button className='flex w-full justify-between rounded-lg bg-pink-100 px-4 py-6 my-3 text-left text-md font-medium text-purple-900 hover:bg-pink-200 focus:outline-none focus-visible:ring focus-visible:ring-pink-500/75'>
                    <span>{x.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? 'rotate-180 transform' : ''
                      } h-5 w-5 text-black`}
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
      {/**Comment Section */}
      <div className='bg-pink-50 border w-1/2 mx-auto hidden'>
        <div className=''>Comments</div>
        <div className='flex w-1/2  rounded-lg p-5 '>
          <div className='flex'>
            <div className='bg-grey-200 w-1/4 rounded-lg mr-7'>placeholder</div>
            <div className='flex flex-col'>
              <span className='text-pink-600 font-bold '>Jane Doe</span>
              <span className='text-md'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud.
              </span>
            </div>
            <div className='flex justify-between w-1/4 ml-8'>
              <ThumbsDown className='w-8 text-grey-300 hover:text-pink-600' />
              <ThumbsUp className='w-8 text-grey-300 hover:text-pink-600' />
            </div>
          </div>
        </div>
      </div>

      {/**Add a Review */}
      <div className='text-pink-600 mx-auto w-1/2 mt-12 font-semibold text-xl mb-4'>
        Add a review
      </div>
      <form
        onSubmit={handleSubmit}
        className='grid grid-cols-2 mx-auto w-1/2 gap-6'
      >
        <input
          name='name'
          className='border rounded-lg p-3'
          onChange={handleInputChange}
        />
        <input
          name='email'
          className='border rounded-lg p-3'
          onChange={handleInputChange}
        />
        <textarea
          name='comment'
          className='col-span-2 line-clamp-4 border rounded-lg p-3 mt-4 h-52'
          onChange={handleInputChange}
        />
        <Button
          className='col-span-2 flex justify-center mb-8 bg-pink-300 w-1/4 mx-auto p-3 rounded-lg'
          text='Submit'
          type='submit'
          variant='secondary'
        />
      </form>
    </>
  );
};

export default FAQ;
