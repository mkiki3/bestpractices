import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid';
import React, { useState } from 'react';

const QtyPicker: React.FC = () => {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className='flex justify-between rounded-full border border-grey-400 w-full px-1'>
      <MinusIcon
        onClick={() => updateQty('decrement')}
        className='w-4 h-4 my-auto rounded-full text-grey-400 hover:bg-pink-250 hover:text-white'
      />
      <div className='text-sm px-1'>{quantity}</div>
      <PlusIcon
        onClick={() => updateQty('increment')}
        className='w-4 h-4 my-auto rounded-full text-grey-400 hover:bg-pink-250 hover:text-white'
      />
    </div>
  );

  function updateQty(action: string) {
    setQuantity((prev: number) =>
      action === 'increment'
        ? prev + 1
        : action === 'decrement' && prev !== 0
        ? prev - 1
        : prev
    );
  }
};

export default QtyPicker;
