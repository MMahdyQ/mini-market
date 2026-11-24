import { useContext } from 'react';
import { CartContext } from './CartContext';

function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error('useCart must be used within <CardProvider>');
  }
  return ctx;
}

export default useCart;
