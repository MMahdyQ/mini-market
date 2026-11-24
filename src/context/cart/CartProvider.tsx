import { useCallback, useMemo, useState, type ReactNode } from 'react';
import type { CartItem, ProductsType } from '../../constants/constants';
import { CartContext, type CartContextType } from './CartContext';

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleAddToCart = useCallback((product: ProductsType) => {
    setCartItems((prevCart) => {
      if (prevCart.some((item) => item.id === product.id)) {
        return prevCart.map((item) => {
          if (item.id === product.id)
            return { ...item, quantity: item.quantity + 1 };
          return item;
        });
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  }, []);

  const handleRemoveFromCart = useCallback((id: number) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== id));
  }, []);

  const handleClearCart = useCallback(() => setCartItems([]), []);

  const handleIncrementQuantity = useCallback((id: number) => {
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  }, []);

  const handleDecrementQuantity = useCallback((id: number) => {
    setCartItems((prevCart) => {
      const item = prevCart.find((item) => item.id === id);
      if (!item) return prevCart;

      if (item.quantity === 1) {
        return prevCart.filter((item) => item.id !== id);
      } else {
        return prevCart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        );
      }
    });
  }, []);

  const value = useMemo<CartContextType>(
    () => ({
      cart: cartItems,
      handleAddToCart: handleAddToCart,
      handleRemoveFromCart: handleRemoveFromCart,
      handleClearCart: handleClearCart,
      handleIncrementQuantity: handleIncrementQuantity,
      handleDecrementQuantity: handleDecrementQuantity,
    }),
    [
      cartItems,
      handleAddToCart,
      handleRemoveFromCart,
      handleIncrementQuantity,
      handleDecrementQuantity,
      handleClearCart,
    ],
  );
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
