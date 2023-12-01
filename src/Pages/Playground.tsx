import React, { useRef } from 'react';

import classNames from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Swiper as SwiperType } from 'swiper';

import { Button, CarouselCard } from '../Component';

import Banner from '../images/banner.svg';
import CookieBasket from '../images/cookie_basket.svg';
import Cookie from '../images/dark_chocolate_cookie.png';
import LeftArrowCircle from '../images/arrow-left-circle.svg';
import RightArrowCircle from '../images/arrow-right-circle.svg';
import Sampler from '../Component/Sampler';
import Review from '../Component/Review';
import DownloadApp from '../Component/DownloadApp';
import Section from '../Component/Section';
import Info from '../Component/Info';

const Playground: React.FC = () => {
  const stars = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ];

  const swiperRef = useRef<SwiperType>(null);

  const goNext = () => {
    console.log('Next button clicked');
    if (swiperRef.current && swiperRef.current.slideNext) {
      swiperRef.current.slideNext();
    }
  };

  const goPrev = () => {
    console.log('Previous button clicked');
    if (swiperRef.current && swiperRef.current.slidePrev) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <>
      <div className=''>
        {/**Banner */}
        <div className='relative'>
          <img src={Banner} alt='' className='w-auto h-auto m-0 p-0 block' />
          <div className='flex-col w-1/2 absolute top-14 ml-12 '>
            <div className='text-6xl'>
              Good <span className='text-pink-250'>Food</span>
            </div>
            <div className='text-6xl'>
              Good <span className='bg-pink-250 px-3'>Mood</span>
            </div>
            <div className=' text-4xl w-9/12 font-light my-14'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <Button
              className={classNames(' text-white bg-pink-250 rounded-3xl')}
              size='default'
              text='Explore menu'
            />
          </div>
        </div>

        {/**Title */}
        <div className='flex justify-center text-6xl font-medium m-auto w-1/4 mt-32'>
          <span>
            <span> Choosing Food just got</span>{' '}
            <span className='bg-pink-250'>easier</span>
          </span>
        </div>

        {/**Dummy Text */}
        <div className='flex justify-center text-3xl m-auto mt-20 w-1/2 text-center'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </div>

        {/**Filter Buttons */}
        <div className='m-auto w-1/3 p-3 flex justify-between mb-20 mt-10'>
          <Button
            icon={<img src={Cookie} className='w-7' />}
            iconPosition='left'
            className='bg-white hover:bg-pink-250 rounded-full drop-shadow-2xl text-lg font-medium px-1 pr-3  hover:text-white'
            size='medium'
            text='Cookie'
          />
          <Button
            icon={<img src={Cookie} className='w-7' />}
            iconPosition='left'
            className='bg-white hover:bg-pink-250 rounded-full drop-shadow-2xl text-lg font-medium px-1 pr-3  hover:text-white'
            size='medium'
            text='Cookie'
          />
          <Button
            icon={<img src={Cookie} className='w-7' />}
            iconPosition='left'
            className='bg-white hover:bg-pink-250 rounded-full drop-shadow-2xl text-lg font-medium px-1 pr-3  hover:text-white'
            size='medium'
            text='Cookie'
          />
          <Button
            icon={<img src={Cookie} className='w-7' />}
            iconPosition='left'
            className='bg-white hover:bg-pink-250 rounded-full drop-shadow-2xl text-lg font-medium px-1 pr-3  hover:text-white'
            size='medium'
            text='Cookie'
          />
        </div>

        {/**Swiper */}
        <div className='swiper-container m-auto w-10/12 flex'>
          <div
            className='flex items-center justify-center mr-6 ustom-swiper-button-prev'
            onClick={goPrev}
          >
            <img src={LeftArrowCircle} className='h-56' />
          </div>

          <Swiper
            loop={true}
            spaceBetween={20}
            slidesPerView={4}
            navigation={{
              nextEl: '.custom-swiper-button-next',
              prevEl: '.custom-swiper-button-prev',
            }}
            // pagination={{ clickable: true }}
            // onSlideChange={() => console.log('slide change')}
          >
            {stars.map((x: unknown, index: number) => (
              <SwiperSlide key={index} className='bg-transparent'>
                <CarouselCard />
              </SwiperSlide>
            ))}
          </Swiper>
          <div
            className='flex items-center justify-center ml-6 custom-swiper-button-next'
            onClick={goNext}
          >
            <img src={RightArrowCircle} className='h-56' />
          </div>
        </div>

        {/**Section Pack */}
        <Sampler />

        {/**Image */}
        <div className='cookie-basket '>
          <img src={CookieBasket} className='w-full my-64' />
        </div>

        {/**Section */}
        <Info />

        {/** Customer Reviews */}
        <Review />

        {/**Section */}
        <Section />
        {/*Download App */}
        <DownloadApp />
      </div>

      {/**Mobile */}
      <div className='hidden'>
        <div className=' flex-col justify-center items-center mx-16 mt-24'>
          <div className='text-5xl'>
            Good <span className='text-pink-250'>Food</span>
          </div>
          <div className='text-5xl'>
            Good <span className='bg-pink-250 px-3'>Mood</span>
          </div>
          <div className='flex justify-center items-center text-sm text-center w-full my-8'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <Button
            className={classNames(' text-white bg-pink-250 rounded-3xl m-auto')}
            size='small'
            text='Explore menu'
          />
          <div className='flex justify-center items-center text-4xl text-center font-medium m-auto mt-14'>
            <span>
              <span> Choosing Food just got</span>{' '}
              <span className='bg-pink-250'>easier</span>
            </span>
          </div>
          <div className='text-sm mt-4 text-center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <div className='cookie-basket'>
          <img src={CookieBasket} className='w-full my-20' />
        </div>
      </div>
    </>
  );
};

export default Playground;
