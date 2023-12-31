import React, { useRef, useState } from 'react';

import classNames from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Swiper as SwiperType } from 'swiper';

import { Button, CarouselCard, Star } from '../Component';

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
import Profile from '../images/profilepic.svg';

const Home: React.FC = () => {
  interface filterProps {
    icon: string;
    type: string;
  }

  const arr2 = [
    { icon: '', type: 'Chocolate' },
    { icon: '', type: 'Sugar' },
    { icon: '', type: 'Holiday' },
    { icon: '', type: 'Fruity' },
  ];

  const reviews = [
    'Ariene McCoy',
    'Alexis Jones',
    'Zack Wilson',
    'Amber Lee',
    'Chris Fields',
  ];
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
  const [star] = useState(stars);
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
      {/**Desktop */}
      <div className='hidden sm:block'>
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
        <div className='flex justify-center text-6xl font-medium m-auto w-1/4 mt-12'>
          <span>
            <span> Choosing Food just got</span>
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
      <div className='p-3 mx-auto lg:hidden'>
        <div className='text-3xl mt-8 '>
          <div className='flex space-x-1 justify-center'>
            <span>Good</span>
            <span className='text-pink-250 pl-1'>Food</span>
          </div>
          <div className='flex space-x-1 justify-center'>
            <span>Good</span>
            <span className='bg-pink-250 px-1'>Mood</span>
          </div>
        </div>
        <div className='flex-col mt-5 text-sm text-center w-3/4 mx-auto font-light'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </div>
        <div className='flex justify-center my-3'>
          <Button
            text='Explore menu'
            variant='secondary'
            size='small'
            className='bg-pink-250 text-white border  border-pink-250 rounded-2xl shadow-md shadow-grey-500'
          />
        </div>
        <img className='my-8 mx-auto' src={Cookie} />
        <div className='mt-8 flex-col mx-auto text-2xl'>
          <div className='flex space-x-1 justify-center'>
            <span>Choosing Food</span>
          </div>
          <div className='flex space-x-1 justify-center'>
            <span>
              just got <span className='bg-pink-250 px-1'>easier</span>
            </span>
          </div>
        </div>
        <div className='flex-col mt-5 text-sm text-center w-3/4 mx-auto font-light'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </div>

        {/**Filter Buttons */}
        <div className='m-auto  mt-5  flex justify-between text-sm '>
          {arr2.map((x: filterProps, idx: number) => (
            <div
              key={idx}
              className='flex-col items-center justify-center text-center rounded-lg  bg-pink-250 w-1/5 shadow-2xl'
            >
              <img
                src={Cookie}
                className='object-contain w-20 rounded-3xl mt-2 drop-shadow-xl'
              />
              <div className='font-semibold hover:text-white text-xs mt-2 mb-2'>
                {x.type}
              </div>
            </div>
          ))}
        </div>

        <div className='grid grid-cols-2 gap-3'>
          {arr2.map((x: filterProps, idx: number) => (
            <div key={idx} className='col-span-1'>
              <div className='text-[8px] rounded-lg  bg-grey-50 py-1 mt-8 p-3'>
                <img className='m-auto ' src={Cookie} />
                <div className=' text-center text-pink-250 text-lg mx-auto'>
                  Chocolate Chip Cookies
                </div>
                <div className='flex justify-between  m-auto w-16 my-1'>
                  {star.map((x: unknown, index: number) => (
                    <div key={index}>
                      <Star width={10} height={10} />
                    </div>
                  ))}
                </div>
                <div className='font-light text-grey-400   text-center text-[8px]'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </div>
                <div className='flex justify-between items-center text-pink-250 mt-4 mb-1'>
                  <div className='text-[14px]'>$4</div>
                  <Button
                    text='Add to cart'
                    variant='outlined'
                    className='flex items-center justify-center rounded-xl text-center p-1'
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='text-center mt-12 text-2xl'>Eating well should </div>
        <div className='text-center text-2xl bg-pink-250 w-1/3 mx-auto'>
          Taste good
        </div>
        <div className='text-center text-grey-500 font-light px-3 mt-3 mb-12'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>

        <div className='grid grid-cols-4 bg-grey-50 rounded-xl p-4'>
          <div className='col-span-1'>
            <img src={Profile} className='h-20' />
          </div>

          <div className='col-span-3 text-sm'>
            <div className='text-pink-250 font-bold text-lg'>
              Anthony Williams
            </div>
            <div className='flex justify-between w-1/2 my-3'>
              {reviews.map((x: unknown, index: number) => (
                <Star key={index} width={18} height={18} />
              ))}
            </div>
            <div className='text-grey-700 text-left'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
        </div>
        <div className='grid grid-cols-4 bg-grey-50 rounded-xl mt-3 p-4'>
          <div className='col-span-1'>
            <img src={Profile} className='h-20' />
          </div>

          <div className='col-span-3 text-sm'>
            <div className='text-pink-250 font-bold text-lg'>Cecil Winans</div>
            <div className='flex justify-between w-1/2 my-3'>
              {reviews.map((x: unknown, index: number) => (
                <Star key={index} width={18} height={18} />
              ))}
            </div>
            <div className='text-grey-700 text-left'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
