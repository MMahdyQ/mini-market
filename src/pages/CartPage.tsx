import { Link } from 'react-router';
import ShopCard from '../components/ShopCard';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCartTotalPrice,
  selectorCartCount,
  selectorCartItems,
} from '../features/cart/selectors';
import { clearCart } from '../features/cart/cartSlice';

const CartPage = () => {
  const cartItems = useSelector(selectorCartItems);
  const cartCount = useSelector(selectorCartCount);
  const dispatch = useDispatch();

  const cartTotalPrice = useSelector(selectCartTotalPrice);

  const tax = cartTotalPrice * 0.08;
  const total = cartTotalPrice + tax;

  if (cartItems.length === 0) {
    return (
      <div className='min-h-screen flex flex-col items-center gap-6 mt-30'>
        <span className='text-6xl'>🛒</span>
        <h1 className='text-3xl font-bold'>Your cart is empty</h1>
        <p className='text-gray-600'>
          Looks like you haven't added anything yet.
        </p>
        <Link
          to='/'
          className='bg-linear-to-r from-teal-500 to-teal-600 text-white px-6 py-3 rounded-xl'
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className='min-h-screen flex flex-col items-center mt-10 gap-8 mb-10'>
      <section className='flex flex-col items-center gap-2'>
        <h1 className='text-[40px] font-bold'>Your Shopping Cart</h1>
        <p className='text-gray-700'>{cartCount} items in your cart</p>
      </section>
      <div>
        <button
          onClick={() => dispatch(clearCart())}
          className='bg-red-700 py-2 px-4 text-white rounded-[10px]'
        >
          Clear Cart
        </button>
      </div>
      <section className='flex flex-col gap-6 w-full max-w-3xl'>
        {cartItems.map((item) => (
          <ShopCard key={item.id} item={item} />
        ))}
      </section>
      <section className='flex flex-col gap-4 w-full max-w-3xl p-6 bg-white rounded-[14px] shadow-lg shadow-gray-200'>
        <h2 className='font-bold text-lg'>Order Summary</h2>
        <div className='flex justify-between'>
          <span className='text-sm text-gray-800'>
            Subtotal ({cartCount} items)
          </span>
          <span className='text-sm font-bold'>
            ${cartTotalPrice.toFixed(2)}
          </span>
        </div>
        <div className='flex justify-between'>
          <span className='text-sm text-gray-800'>Shipping</span>
          <span className='text-sm font-bold text-teal-600'>Free</span>
        </div>
        <div className='flex justify-between'>
          <span className='text-sm text-gray-800'>Tax</span>
          <span className='text-sm font-bold'>${tax.toFixed(2)}</span>
        </div>
        <div className='w-full border border-gray-100'></div>
        <div className='flex justify-between mt-2'>
          <span className='font-bold text-xl'>Total</span>
          <span className='text-xl font-bold'>${total.toFixed(2)}</span>
        </div>
        <Link
          to='#'
          className='bg-linear-to-r from-teal-500 to-teal-600 text-white py-3 rounded-xl text-center mt-3'
        >
          Proceed to Checkout
        </Link>
        <Link
          to='/'
          className='text-center text-gray-600 font-medium text-sm mt-2'
        >
          Continue Shopping
        </Link>
      </section>
    </div>
  );
};

export default CartPage;
