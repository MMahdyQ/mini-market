import { Link } from 'react-router';
import { useSelector } from 'react-redux';
import { selectorCartCount } from '../features/cart/selectors';

const Header = () => {
  const cartQuantity = useSelector(selectorCartCount);
  return (
    <div className='flex justify-around mt-5 border-b border-gray-200 pb-5'>
      <Link
        to='/'
        className='bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-bold text-[24px]'
      >
        Mini Marketplace
      </Link>
      <div className='flex items-center gap-2'>
        <button className='bg-slate-900 text-white px-3 py-2 rounded-lg hover:cursor-pointer'>
          🌙Dark/☀️Light
        </button>
        <button className='bg-linear-to-r from-teal-500 to-teal-600 text-white px-4 py-2 rounded-lg hover:cursor-pointer'>
          Login
        </button>
        <Link
          to='/cart'
          className='relative bg-linear-to-r from-orange-400 to-orange-700 p-2 rounded-lg hover:cursor-pointer'
        >
          🛒
          {cartQuantity > 0 && (
            <span className='absolute -top-2 -right-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-600 px-1 text-xs font-bold text-white'>
              {cartQuantity}
            </span>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Header;
