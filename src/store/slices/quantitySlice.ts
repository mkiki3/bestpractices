import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface QuantityState {
  value: number;
}

const initialState: QuantityState = {
  value: 1,
};

const quantitySlice = createSlice({
  name: 'quantity',
  initialState,
  reducers: {
    setQuantity: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
    incrementQuantity: (state) => {
      state.value += 1;
    },
    decrementQuantity: (state) => {
      state.value = Math.max(1, state.value - 1);
    },
  },
});

export const { setQuantity, incrementQuantity, decrementQuantity } =
  quantitySlice.actions;
export default quantitySlice.reducer;
