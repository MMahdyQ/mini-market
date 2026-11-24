import type { CartItem } from './constants/constants';

export const calculateCartQuantity = (cartItems: CartItem[]) =>
  cartItems.reduce((acc, cur) => acc + cur.quantity, 0);
