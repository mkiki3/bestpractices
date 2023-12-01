import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import Profile from '../../images/profilepic.svg';
import { Star } from '../../Component';

const Sampler: React.FC = () => {
  const reviews = [
    'Ariene McCoy',
    'Alexis Jones',
    'Zack Wilson',
    'Amber Lee',
    'Chris Fields',
  ];
  return (
    <>
      <div className='flex text-pink-250 m-auto my-12 mb-20'>
        <div className='text-4xl  font-bold w-full flex justify-center '>
          <div className='w-2/5'> Kind word from our customers</div>
        </div>
        <div className='text-2xl  w-full flex'>
          <div className='w-1/2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </div>
        </div>
      </div>
      <Swiper
        loop={true}
        spaceBetween={20}
        slidesPerView={4}
        pagination={{ clickable: true }}
      >
        {reviews.map((x: string, index: number) => (
          <SwiperSlide key={index} className='bg-transparent ml-6'>
            <div className='bg-pink-150 p-5'>
              <div className='w-3/4 mb-7'>
                “The workers are amazing and so helpful. The cookies were
                delicious”
              </div>
              <div className='flex w-3/4'>
                <img src={Profile} className='h-20' />
                <div className='ml-3 mt-2'>
                  <div className='font-bold'>{x}</div>
                  <div className='text-grey-300'>Happy Customer</div>
                  <div className='flex justify-between'>
                    {reviews.map((x: unknown, index: number) => (
                      <Star key={index} width={18} height={18} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Sampler;
