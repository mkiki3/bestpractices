import React, { useRef } from 'react';

import classNames from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
// import { useSwiper } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';

import { Button, CarouselCard, Star } from '../Component';

import Banner from '../images/banner.svg';
import CookieBasket from '../images/cookie_basket.svg';
import CookieRecipe from '../images/cookie_recipe.svg';
import Cookie from '../images/dark_chocolate_cookie.png';
import LeftArrowCircle from '../images/arrow-left-circle.svg';
import RightArrowCircle from '../images/arrow-right-circle.svg';
import Profile from '../images/profilepic.svg';
import Box from '../images/box.svg';

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

  const reviews = [
    'Ariene McCoy',
    'Alexis Jones',
    'Zack Wilson',
    'Amber Lee',
    'Chris Fields',
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
        <div className='flex my-32 border'>
          <div className='bg-pink-250 text-5xl border font-bold m-auto'>
            Class Sampler
          </div>
          <div className='bg-pink-250 text-5xl border font-bold m-auto'>
            Class Sampler
          </div>
          <div className='bg-pink-250 text-5xl border font-bold m-auto'>
            Class Sampler
          </div>
          <div className='bg-pink-250 text-5xl border font-bold m-auto'>
            Class Sampler
          </div>
        </div>
        {/**Section */}
        <div className='flex  mt-48'>
          <div className='flex border justify-center w-full text-white'>1 </div>
          <div className=' flex-col w-full'>
            <div className='space-y-8 mb-8'>
              <div>
                <div className='text-5xl font-bold'>Eating well should</div>
                <div className='bg-pink-250 text-5xl font-bold w-1/3'>
                  Taste good
                </div>
              </div>

              <div className='text-3xl w-3/4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </div>
            <div className='grid grid-cols-2 w-full '>
              <div className='flex space-x-4'>
                <img src={Box} />
                <div className='text-3xl'>Online Order</div>
              </div>
              <div className='flex space-x-4'>
                <img src={Box} />
                <div className='text-3xl'>Online Order</div>
              </div>
              <div className='flex space-x-4'>
                <img src={Box} />
                <div className='text-3xl'>Online Order</div>
              </div>
              <div className='flex space-x-4'>
                <img src={Box} />
                <div className='text-3xl'>Online Order</div>
              </div>
              <div className='flex space-x-4'>
                <img src={Box} />
                <div className='text-3xl'>Online Order</div>
              </div>
              <div className='flex space-x-4'>
                <img src={Box} />
                <div className='text-3xl'>Online Order</div>
              </div>
            </div>
          </div>
        </div>

        {/**Image */}
        <div className='cookie-basket'>
          <img src={CookieBasket} className='w-full my-32' />
        </div>

        {/** Customer Reviews */}
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

        {/**Section */}
        <div className='flex my-20 mt-36'>
          <div className='flex justify-end'>
            <img src={CookieBasket} className=' rounded-xl w-3/4' />
          </div>
          <div className='w-full pl-16'>
            <div className='space-y-20'>
              <div>
                <div className='text-5xl font-bold'>Eating well should</div>
                <div className='bg-pink-250 text-5xl font-bold w-1/3'>
                  Taste good
                </div>
              </div>

              <div className='text-4xl w-11/12 '>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </div>
          </div>
        </div>

        <div className='cookie-recipe relative mt-48'>
          <img src={CookieRecipe} className='w-full my-32' />

          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full'>
            <div className='text-white text-4xl font-bold text-center'>
              Download the app now.
            </div>
            <div className='text-white text-xl font-light text-center my-8'>
              Available on your favorite store. Start yor premium experience now{' '}
            </div>
            <div className='flex justify-between m-auto w-56 '>
              <Button
                className={classNames(
                  ' text-white bg-pink-250 rounded-lg border-0'
                )}
                size='default'
                text='Playstore'
              />
              <Button
                className={classNames(
                  ' text-white border-1 border-white  rounded-lg '
                )}
                size='default'
                text='App store'
                variant='outlined'
              />
            </div>
          </div>
        </div>
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
