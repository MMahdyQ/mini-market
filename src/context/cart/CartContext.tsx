import { createContext } from 'react';
import type { CartItem, ProductsType } from '../../constants/constants';

export type CartContextType = {
  cart: CartItem[];
  handleAddToCart: (product: ProductsType) => void;
  handleRemoveFromCart: (id: number) => void;
  handleClearCart: () => void;
  handleIncrementQuantity: (id: number) => void;
  handleDecrementQuantity: (id: number) => void;
};

export const CartContext = createContext<CartContextType | undefined>(
  undefined,
);
