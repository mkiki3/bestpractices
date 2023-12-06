import React, { ChangeEvent, FormEvent, useState } from 'react';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  FaceSmileIcon,
} from '@heroicons/react/20/solid';
import InputField from '../InputField';

import Button from '../Button';
import Example from '../Example';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    comment: '',
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
      <div className='flex justify-center text-3xl font-bold'>Contact Us</div>
      <div className='flex justify-center text-grey-500 my-6 mb-16 font-normal'>
        Any questions or remarks? Just write us a message
      </div>
      {/**Contact Form */}
      <div className='grid grid-cols-3 rounded-xl bg-white shadow-xl p-1 mx-44 mb-12'>
        <div className='col-span-1 bg-purple-700 rounded-xl px-10'>
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
          className='col-span-2 bg-white  px-16 pt-10 '
        >
          <div className='grid grid-cols-2 gap-10'>
            <InputField
              label='First Name'
              variant='outlined'
              onChange={handleInputChange}
            />
            <InputField
              label='Last Name'
              variant='outlined'
              onChange={handleInputChange}
            />
            <InputField
              label='Email'
              variant='outlined'
              onChange={handleInputChange}
            />
            <InputField
              label='Phone'
              variant='outlined'
              onChange={handleInputChange}
            />
            <div className='text-purple-700 font-bold'>
              What is your preferred contact?
            </div>
            <Example className='col-span-2' />
            <textarea
              name='comment'
              className='col-span-2 outline-none  line-clamp-3 rounded-lg border border-white focus:border-b-pink-250 py-3'
              placeholder='Write a message..'
              onChange={handleInputChange}
            />
            <Button
              text='Send Message'
              className='bg-pink-250 rounded-lg text-white text-center col-end-3 w-1/2 p-3 self-end'
            />
          </div>
        </form>
      </div>
    </>
  );
};
export default ContactForm;
