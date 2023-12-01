import React from 'react';
import CookieRecipe from '../../images/cookie_recipe.svg';
import classNames from 'classnames';

import { Button } from '../../Component';

const DownloadApp: React.FC = () => {
  return (
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
  );
};

export default DownloadApp;
