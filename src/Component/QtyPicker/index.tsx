/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setQuantity,
  incrementQuantity,
  decrementQuantity,
} from '../../store/slices/quantitySlice';
import { RootState } from '../../store';
// import Button from '../Button';

const QtyPicker: React.FC = () => {
  // const [quantity, setQuantity] = useState(0);
  const quantity = useSelector((state: RootState) => state.quantity.value);
  const dispatch = useDispatch();

  return (
    <div className='flex'>
      <button
        onClick={() => dispatch(decrementQuantity())}
        className='border px-3'
      >
        -
      </button>
      <div className='border px-3 border-l-white border-r-white'>
        {quantity}
      </div>
      <button
        onClick={() => dispatch(incrementQuantity())}
        className='border px-3'
      >
        +
      </button>
    </div>
  );
};

export default QtyPicker;
