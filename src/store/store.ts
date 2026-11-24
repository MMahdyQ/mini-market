import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';
import themeReducer from '../features/theme/themeSlice';
import ProductReducer from '../features/products/productSlice';

export const store = configureStore({
  reducer: { cart: cartReducer, theme: themeReducer, products: ProductReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
