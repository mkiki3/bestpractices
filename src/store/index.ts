import { configureStore } from '@reduxjs/toolkit';
import quantityReducer from './slices/quantitySlice';

const store = configureStore({
  reducer: {
    quantity: quantityReducer,
    // Add other reducers here
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
