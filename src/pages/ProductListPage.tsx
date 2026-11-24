import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../constants/constants';
import { selectorCartCount } from '../features/cart/selectors';
import { addToCart } from '../features/cart/cartSlice';
import type { RootState } from '../store/store';
import { useEffect } from 'react';
import { fetchProducts } from '../features/products/productSlice';

const ProductList = () => {
  const cartCount = useSelector(selectorCartCount);
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector(
    (state: RootState) => state.products,
  );

  useEffect(() => {
    dispatch(fetchProducts() as any);
  }, [dispatch]);

  if (loading || items.length === 0) return <p>Loading...</p>;

  if (error) return <p>Error: {error}</p>;

  return (
    <div className='flex flex-col items-center mt-10'>
      {/* Hero Section */}
      <section className='flex flex-col gap-2 items-center'>
        <h1 className='text-[40px] font-bold'>Discover Amazing Products</h1>
        <p className='text-gray-700 font-medium'>
          Find the perfect products for your lifestyle with our curated
          collection
        </p>
        <button className='w-37.5 mt-10 py-3 text-sm font-medium rounded-full shadow-lg shadow-gray-300 hover:cursor-pointer'>
          🛒 Cart: {cartCount} items
        </button>
      </section>
      {/* Main Section */}
      <main className='mt-15 grid grid-cols-4 gap-6 '>
        {PRODUCTS.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={() => dispatch(addToCart(product))}
          />
        ))}
      </main>
    </div>
  );
};

export default ProductList;
