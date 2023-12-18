import React, { ChangeEvent, FormEvent, useState } from 'react';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  FaceSmileIcon,
} from '@heroicons/react/20/solid';
import InputField from '../InputField';

import Button from '../Button';
import Radio from '../Radio';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    comment: '',
    radio: '',
  });

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
      {/**Heading */}
      <div className='flex justify-center text-3xl font-bold mt-8'>
        Contact Us
      </div>
      <div className='flex justify-center text-grey-500 md:my-6 md:mb-16 font-normal text-sm my-3 mb-8'>
        Any questions or remarks? Just write us a message
      </div>
      {/**Contact Form */}
      {/* <div className='grid grid-cols-3 rounded-xl bg-white shadow-xl p-1 mx-52 mb-12'> */}
      <div className='grid grid-cols-4 rounded-xl bg-white md:shadow-xl shadow-none md:mx-52 mx-0'>
        <div className='col-span-1 bg-purple-700 rounded-xl px-10 hidden md:block'>
          <div className='text-white text-3xl mb-4 mt-12'>
            Contact Information
          </div>
          <div className='text-grey-100 text-lg font-light w-[70%] mb-12'>
            Fill up the form and our Team will get back to you within 24 hours
          </div>
          <div className='icons info flex flex-col justify-between'>
            <div className='flex'>
              <PhoneIcon className='w-5 mr-6 text-pink-300' />
              <div className='text-white'>+0123 4567 8910</div>
            </div>
            <div className='flex my-10'>
              <EnvelopeIcon className='w-5 mr-6 text-pink-300' />
              <div className='text-white'>info@cookiebakery.com</div>
            </div>
            <div className='flex'>
              <MapPinIcon className='w-5 mr-6 text-pink-300' />
              <div className='text-white'>213 E Clark St</div>
            </div>
          </div>
          <div className='flex justify-center mt-[50%] mb-8'>
            <FaceSmileIcon className='w-10 mr-6 text-pink-300' />
            <FaceSmileIcon className='w-10 mr-6 text-pink-300' />
            <FaceSmileIcon className='w-10 mr-6 text-pink-300' />
            <FaceSmileIcon className='w-10 mr-6 text-pink-300' />
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          // className='col-span-2 bg-white  px-16 pt-10'
          className='md:col-span-3 col-span-4 bg-white md:p-16 px-8'
        >
          <div className='grid grid-cols-4 gap-6'>
            <div className='md:col-span-2 col-span-4'>
              <InputField
                name='firstName'
                type='text'
                variant='outlined'
                label='First Name'
                onChange={handleInputChange}
              />
            </div>
            <div className=' md:col-span-2 col-span-4'>
              <InputField
                name='lastName'
                type='text'
                variant='outlined'
                label='Last Name'
                onChange={handleInputChange}
              />
            </div>
            <div className=' md:col-span-2 col-span-4'>
              <InputField
                name='email'
                type='email'
                variant='outlined'
                label='Email'
                onChange={handleInputChange}
              />
            </div>
            <div className=' md:col-span-2 col-span-4'>
              <InputField
                name='phone'
                type='tel'
                variant='outlined'
                label='Phone'
                onChange={handleInputChange}
              />
            </div>

            <div className='col-span-4'>
              <div className='text-purple-700 font-bold mt-4 mb-8'>
                What is your preferred contact?
              </div>
              <Radio name='radio' />
            </div>

            <div className='col-span-4'>
              <textarea
                name='comment'
                className='col-span-2 outline-none  line-clamp-3 rounded-lg border border-white focus:border-b-pink-250 border-b-grey-400 py-3  mb-6 w-full'
                placeholder='Write a message..'
                onChange={handleInputChange}
              />
            </div>
            <div className=' md:col-span-2 col-span-4'>
              <Button
                text='Send Message'
                className='bg-pink-250 rounded-lg text-white text-center col-end-3 md:w-1/2 w-full p-3 self-end'
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default ContactForm;
