import { useDispatch } from 'react-redux';
import type { CartItem } from '../constants/constants';
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from '../features/cart/cartSlice';

const ShopCard = ({ item }: { item: CartItem }) => {
  const dispatch = useDispatch();

  return (
    <div className='flex rounded-[14px] shadow-lg shadow-gray-200 p-4 items-center gap-4 bg-white'>
      <div className='flex items-center justify-center shrink-0 bg-gray-100 rounded-lg w-20 h-20 text-2xl'>
        {item.icon}
      </div>
      <div className='flex flex-col items-start gap-1 flex-1'>
        <h3 className='font-bold text-lg'>{item.product_name}</h3>
        <span className='bg-gray-100 rounded-full px-2 py-0.5 text-xs text-gray-600'>
          {item.category}
        </span>
        <span className='text-sm text-gray-700 mt-2'>
          ${item.price} × {item.quantity}
        </span>
      </div>
      <div className='flex flex-col items-end justify-between self-stretch'>
        <span className='text-xl font-bold text-purple-700'>
          ${(item.price * item.quantity).toFixed(2)}
        </span>

        <div className='flex items-center gap-2 '>
          <div className='flex items-center rounded-[10px] bg-gray-100 border border-gray-200'>
            <button
              onClick={() => dispatch(decrementQuantity(item.id))}
              aria-label='Decrease quantity'
              className='px-3 py-1 hover:bg-gray-300 rounded-l-[10px] cursor-pointer'
            >
              −
            </button>
            <span className='px-3 text-sm font-bold min-w-6 text-center'>
              {item.quantity}
            </span>
            <button
              onClick={() => dispatch(incrementQuantity(item.id))}
              aria-label='Increase quantity'
              className='px-3 py-1 hover:bg-gray-300 rounded-r-[10px] cursor-pointer'
            >
              +
            </button>
          </div>

          <button
            onClick={() => dispatch(removeFromCart(item.id))}
            className='bg-red-700 py-1 px-2 rounded-[10px] text-white'
          >
            🗑️
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
