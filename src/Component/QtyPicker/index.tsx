import React, { useState } from 'react';
// import Button from '../Button';

const QtyPicker: React.FC = () => {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className='flex'>
      <button onClick={() => updateQty('decrement')} className='border px-3'>
        -
      </button>
      <div className='border px-3 border-l-white border-r-white'>
        {quantity}
      </div>
      <button onClick={() => updateQty('increment')} className='border px-3'>
        +
      </button>
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
