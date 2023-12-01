import React from 'react';
import { Link } from 'react-router-dom';

const FAQ: React.FC = () => {
  return (
    <div className=' flex flex-col  items-center'>
      <div className='text-5xl pt-20 pb-16'>
        Frequently <span className='text-pink-250'>Ask Questions</span>
      </div>
      <div className='flex justify-between w-1/4'>
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
    </div>
  );
};

export default FAQ;
