import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setProducts } from '../redux/actions/products';

const ProductCard = ({ name, image, id, product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products } = useSelector((state) => state.products);

  // Soft deleting the product
  const deleteProduct = () => {
    let arr = [];
    let index = products.indexOf(products.find((product) => product.id === id));
    products.forEach((product, i) => {
      if (index === i) {
        arr.push({ ...product, isDeleted: true });
      } else {
        arr.push(product);
      }
    });
    dispatch(setProducts(arr));
  };

  return (
    <div className='shadow-lg hover:shadow-2xl rounded-lg m-5 py-5 w-full sm:w-5/12 md:w-3/12 lg:w-2/12 cursor-pointer transition-all duration-300'>
      <Link
        to={'#'}
        onClick={(e) => {
          e.preventDefault();
          navigate('/product-details', { state: product });
        }}
      >
        <div className='flex flex-col items-center justify-between h-full text-black'>
          <div>
            <img src={image} alt={name} className='mx-auto' />
          </div>
          <div className='text-center px-4 text-xs mt-5 hover:text-blue-400 transition-all duration-300'>
            {name}
          </div>
          <div className='w-full px-4 mt-2'>
            <button
              onClick={(e) => {
                e.stopPropagation();
                deleteProduct();
              }}
              className='cursor-pointer rounded-md hover:shadow-lg bg-red-500 w-full py-2'
            >
              Delete
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
