import type { RootState } from '../../store/store';

export const selectorCartItems = (state: RootState) => state.cart.items ?? [];

export const selectorCartCount = (state: RootState) =>
  (state.cart.items ?? []).reduce((sum, i) => sum + i.quantity, 0);

export const selectCartTotalPrice = (state: RootState) =>
  (state.cart.items ?? []).reduce((sum, i) => sum + i.price * i.quantity, 0);
