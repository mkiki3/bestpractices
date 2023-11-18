import React, { useState } from 'react';

// import classNames from 'classnames';

import { Button, Star } from '../Component';
import Cookie from '../images/cookie_basket.svg';
import ChocolateCookie from '../images/dark_chocolate_cookie.png';

// import Banner from '../images/banner.svg';
// import CookieBasket from '../images/cookie_basket.svg';
// import CookieRecipe from '../images/cookie_recipe.svg';
// import Cookie from '../images/dark_chocolate_cookie.png';

// import Profile from '../images/profilepic.svg';
// import Box from '../images/box.svg';

const Playground2: React.FC = () => {
  const stars = [false, false, false, false, false];
  const [star] = useState(stars);

  return (
    <div className='border p-3 mx-auto '>
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </div>
      <div className='flex justify-center my-3'>
        <Button
          text='Explore menu'
          variant='secondary'
          size='small'
          className='bg-pink-250 text-white border  border-pink-250 rounded-2xl shadow-md shadow-grey-500'
        />
      </div>
      <img className='my-8' src={Cookie} />
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor
      </div>
      {/**Filter Buttons */}
      <div className='m-auto  mt-5  flex justify-between text-sm '>
        <div className='border flex-col rounded-lg items-center justify-center '>
          <div className='block bg-pink-250 flex-col p-1 rounded-lg '> X</div>
          <div>Dessert</div>
        </div>
        <div className='border'>Dinner</div>
        <div className='border'>Breakfast</div>
        <div className='border'>Dessert</div>
      </div>

      <div className='text-[8px] rounded-lg  bg-grey-50 py-1 w-1/2'>
        pr
        <img className='m-auto h-12' src={ChocolateCookie} />
        <div className=' text-center text-pink-250 '>
          Chocolate Chip Cookies
        </div>
        <div className='flex justify-between  m-auto w-12  my-1'>
          {star.map((x: unknown, index: number) => (
            <div key={index}>
              <Star width={10} height={10} />
            </div>
          ))}
        </div>
        <div className='font-light text-grey-400  mx-1 text-center text-[8px]'>
          Lorem ipsum dolor sit amet
        </div>
      </div>
    </div>
  );
};

export default Playground2;
