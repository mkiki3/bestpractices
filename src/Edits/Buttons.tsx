import React from 'react';

function Buttons() {
  return (
    <div className='bg-pink-50'>
      <div className='text-center'>Best Practices</div>
      <div className='flex justify-between border p-3'>
        <button className='bg-pink-500 text-white font-medium py-2 px-4 text-base rounded-lg shadow-2xl'>
          Primary
        </button>
        <button className='bg-transparent text-pink-500 font-medium border py-2 px-4 text-base border-pink-500 rounded-lg'>
          Primary
        </button>
        <button className='bg-grey-100 text-grey-500 font-medium border-grey-100 py-2 px-4 text-base rounded-lg'>
          Primary
        </button>
      </div>
      <div className='flex justify-between border p-3'>
        <button className='bg-pink-500 text-white font-medium border-pink-500 py-2 px-4 text-base rounded-lg'>
          Secondary
        </button>
        <button className='bg-transparent text-grey-500 font-medium border border-grey-500 py-2 px-4 text-base rounded-lg'>
          Secondary
        </button>
        <button className='bg-grey-100 text-grey-500 font-medium border-grey-100 py-2 px-4 text-base rounded-lg'>
          Primary
        </button>
      </div>
      <div className='flex justify-between border p-3'>
        <button className='bg-pink-400 text-white font-medium border-pink-500 py-2 px-4 text-base rounded-lg h-11 min-w-[64px]'>
          Secondary
        </button>
        <button className='bg-pink-400 text-white font-medium border-pink-500 py-2 px-4 text-sm rounded-lg h-9 min-w-[64px]'>
          Secondary
        </button>
        <button className='bg-pink-400 text-white font-medium border-pink-500 py-2 px-4 text-xs rounded-lg h-8 min-w-[64px]'>
          Secondary
        </button>
      </div>
      <div className='flex justify-between border p-3'>
        <button className='bg-pink-250 text-white font-medium border-pink-250 py-2 px-4 text-base rounded-full h-11 min-w-[64px]'>
          Secondary
        </button>
        <button className='bg-pink-250 text-white font-medium border-pink-250 py-2 px-4 text-sm rounded-full h-9 min-w-[64px]'>
          Secondary
        </button>
        <button className='bg-pink-250 text-white font-medium border-pink-250 py-2 px-4 text-xs rounded-full h-8 min-w-[64px]'>
          Secondary
        </button>
      </div>
      <div className='flex justify-between border p-3'>
        <button className='bg-transparent text-pink-500 font-medium border border-pink-500 py-2 px-4 text-base rounded-lg h-11 min-w-[64px]'>
          Secondary
        </button>
        <button className='bg-transparent text-pink-500 font-medium border border-pink-500 py-2 px-4 text-sm rounded-lg h-9 min-w-[64px]'>
          Secondary
        </button>
        <button className='bg-transparent text-pink-500 font-medium border border-pink-500 py-2 px-4 text-xs rounded-lg h-8 min-w-[64px]'>
          Secondary
        </button>
      </div>
      <div className='flex justify-between border p-3'>
        <button className='bg-transparent text-grey-500 font-medium border-2 border-grey-100 py-2 px-4 text-base rounded-full h-11 min-w-[64px]'>
          Secondary
        </button>
        <button className='bg-transparent text-grey-500 font-medium border-2 border-grey-100 py-1 px-4 text-sm rounded-full h-9 min-w-[64px]'>
          Secondary
        </button>
        <button className='bg-transparent text-grey-500 font-medium border-2 border-grey-100 py-1 px-4 text-xs rounded-full h-8 min-w-[64px]'>
          Secondary
        </button>
      </div>
      <div>
        <div className='text-white bg-pink-50'>#FBECF3</div>
        <div className='text-white bg-pink-100'>#F7D9E7</div>
        <div className='text-white bg-pink-200'>#EFB4CF</div>
        <div className='text-white bg-pink-250'>#EAB1B1</div>
        <div className='text-white bg-pink-300'>#E88EB8</div>
        <div className='text-white bg-pink-400'>#E069A0</div>
        <div className='text-white bg-pink-500'>#D84388</div>
        <div className='text-white bg-pink-600'>#AD366D</div>
        <div className='text-white bg-pink-700'>#822852</div>
        <div className='text-white bg-pink-800'>#561B36</div>
        <div className='text-white bg-pink-900'>#2B0D1B</div>
      </div>
    </div>
  );
}

export default Buttons;
