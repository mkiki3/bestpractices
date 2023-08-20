import React from 'react';

import classNames from 'classnames';

import './App.css';
import Button from './Button';

function App() {
  return (
    <div className=''>
      <Button
        className={classNames(' text-white bg-pink-500')}
        borderRadius='rounded-full'
        size='default'
      />
      <div className='border p-3'>
        <Button
          className={classNames(' text-white bg-pink-500 right-8')}
          borderRadius='rounded-full'
          size='default'
        />
      </div>
    </div>
  );
}

export default App;
