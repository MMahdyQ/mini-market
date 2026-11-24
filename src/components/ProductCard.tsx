import { useState } from 'react';
import { type ProductsType } from '../constants/constants';

interface ProductCardProps {
  product: ProductsType;
  onAddToCart: (product: ProductsType) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeToggle = () => setIsLiked((prev) => !prev);

  return (
    <>
      <div className='flex flex-col gap-2 border border-gray-200 shadow-lg shadow-gray-200 rounded-xl overflow-hidden'>
        <div className='relative flex items-center justify-center h-48  bg-gray-200'>
          <span className='text-6xl'>{product.icon}</span>
          <span className='absolute top-3 right-3 bg-white rounded-full px-2 py-0.5 text-xs'>
            {product.category}
          </span>
          <button
            onClick={handleLikeToggle}
            className='absolute top-3 left-3 bg-white rounded-full px-1 py-0.5 shadow-lg transition-colors duration-300'
          >
            <span
              className={`text-xl transition-colors duration-300 ${isLiked ? 'text-red-500' : 'text-gray-400 group-hover/like:text-red-300'}`}
            >
              {isLiked ? '🩷' : '🤍'}
            </span>
          </button>
        </div>
        <div className='flex flex-col gap-3 p-6'>
          <span className='text-xs text-gray-600'>
            ⭐⭐⭐⭐⭐({product.rating})
          </span>
          <h3 className='font-bold text-lg'>{product.product_name}</h3>
          <span className='text-2xl font-bold bg-linear-to-r from-purple-800 to-purple-500 bg-clip-text text-transparent mb-2'>
            ${product.price}
          </span>
          <button
            onClick={() => onAddToCart(product)}
            className='bg-linear-to-r from-purple-800 via-purple-600 to-purple-400 text-white rounded-[10px] px-8 py-3 hover:cursor-pointer'
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
