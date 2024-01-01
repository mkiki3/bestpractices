/* eslint-disable @typescript-eslint/no-unused-vars */
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
      <div className='flex flex-col'>
        <div className='flex justify-center md:text-4xl text-3xl font-bold mt-8'>
          Contact Us
        </div>
        <div className='flex justify-center text-grey-500 md:my-6 md:mb-16 font-normal  md:text-lg text-sm my-3 mb-8'>
          Any questions or remarks? Just write us a message
        </div>
      </div>

      <div className='flex justify-center rounded-lg p-1 md:shadow-xl shadow-none md:w-[60%] w-full mx-auto '>
        <div className='info flex-col md:block hidden border bg-purple-700 rounded-lg w-[60%] px-8'>
          <div className='text-white text-2xl mb-4 mt-8 font-semibold'>
            Contact Information
          </div>
          <div className='text-grey-100 text-sm font-light w-full mb-12'>
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
        {/**Contact Form */}
        <form
          onSubmit={handleSubmit}
          className='form flex flex-col space-y-5  md:w-full w-auto md:px-8 px-0 md:py-6 py-0'
        >
          {/**First & Last Name */}
          <div className='flex flex-col md:flex-row'>
            <InputField
              className='md:mb-0 mb-4 md:w-[90%]'
              name='firstName'
              type='text'
              variant='outlined'
              label='First Name'
              onChange={handleInputChange}
            />
            <InputField
              className='md:w-[90%]'
              name='lastName'
              type='text'
              variant='outlined'
              label='Last Name'
              onChange={handleInputChange}
            />
          </div>
          {/**Email & Phone */}
          <div className='flex flex-col md:flex-row'>
            <InputField
              className='md:mb-0 mb-4 md:w-[90%]'
              name='email'
              type='email'
              variant='outlined'
              label='Email'
              onChange={handleInputChange}
            />
            <InputField
              className='md:w-[90%]'
              name='phone'
              type='tel'
              variant='outlined'
              label='Phone'
              onChange={handleInputChange}
            />
          </div>
          {/**Preferred */}
          <div className='flex flex-col'>
            <div className='text-purple-700 font-bold mt-4 mb-8'>
              What is your preferred contact?
            </div>
            <Radio name='radio' />
          </div>
          {/**Message */}
          <div className='flex flex-col'>
            <textarea
              name='comment'
              className='col-span-2 outline-none  line-clamp-3 rounded-lg border border-white focus:border-b-pink-250 border-b-grey-400 w-full py-3 md:mb-0 mb-8 mt-4'
              placeholder='Write a message..'
              onChange={handleInputChange}
            />
            <Button
              text='Send Message'
              className='bg-pink-250 rounded-lg text-white text-center col-end-3 md:w-1/2 w-full p-3 self-end md:mt-24'
            />
          </div>
        </form>
      </div>
    </>
  );
};
export default ContactForm;
