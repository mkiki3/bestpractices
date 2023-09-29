import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const FAQ: React.FC = () => {
  return (
    <div className='bg-pink-250'>
      <h1>FAQ</h1>
      <div className='swiper-container m-auto w-10/12'>
        <Swiper
          spaceBetween={15}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSlideChange={() => console.log('slide change')}
          className='bg-blue-200'
        >
          <SwiperSlide className='bg-green-200'>
            <div className='border m-auto'>Slide 1</div>
          </SwiperSlide>
          <SwiperSlide className='bg-orange-200 '>
            <div className='border m-auto'>Slide 2</div>
          </SwiperSlide>
          <SwiperSlide className='bg-green-200'>
            <div className='border m-auto'>Slide 3</div>
          </SwiperSlide>
          <SwiperSlide className='bg-orange-200'>
            <div className='border  m-auto'>Slide 4</div>
          </SwiperSlide>
          <SwiperSlide className='bg-green-200'>
            <div className='border m-auto'>Slide 5</div>
          </SwiperSlide>
          <SwiperSlide className='bg-orange-200 '>
            <div className='border m-auto'>Slide 6</div>
          </SwiperSlide>
          <SwiperSlide className='bg-green-200'>
            <div className='border m-auto'>Slide 7</div>
          </SwiperSlide>
          <SwiperSlide className='bg-orange-200'>
            <div className='border  m-auto'>Slide 8</div>
          </SwiperSlide>
          <SwiperSlide className='bg-green-200'>
            <div className='border m-auto'>Slide 9</div>
          </SwiperSlide>
          <SwiperSlide className='bg-orange-200 '>
            <div className='border m-auto'>Slide 10</div>
          </SwiperSlide>
          <SwiperSlide className='bg-green-200'>
            <div className='border m-auto'>Slide 11</div>
          </SwiperSlide>
          <SwiperSlide className='bg-orange-200'>
            <div className='border  m-auto'>Slide 12</div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default FAQ;
