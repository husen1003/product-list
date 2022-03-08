import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setProducts } from '../redux/actions/products';

const DeletedProduct = ({ name, image, id, product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products } = useSelector((state) => state.products);
  const restoreProduct = (e) => {
    e.stopPropagation();
    let arr = [];
    let index = products.indexOf(products.find((product) => product.id === id));
    products.forEach((product, i) => {
      if (index === i) {
        arr.push({ ...product, isDeleted: false });
      } else {
        arr.push(product);
      }
    });
    dispatch(setProducts(arr));
  };

  const deleteProduct = (e) => {
    e.stopPropagation();
    let arr = [...products];
    let index = products.indexOf(products.find((product) => product.id === id));
    arr.splice(index, 1);
    dispatch(setProducts(arr));
  };

  return (
    <>
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
            <div className='flex w-full px-4'>
              <button
                onClick={restoreProduct}
                className='cursor-pointer bg-transparent w-full py-2'
              >
                Restore
              </button>
              <button
                onClick={deleteProduct}
                className='cursor-pointer bg-red-500 w-full py-2'
              >
                Remove
              </button>
            </div>
          </div>
        </Link>
      </div>
      {/* <div className='flex flex-col items-center justify-between shadow-lg hover:shadow-2xl rounded-lg m-5 py-5 w-full sm:w-5/12 md:w-3/12 lg:w-2/12 cursor-pointer transition-all duration-300'>
      <div>
        <img src={image} alt={name} className='mx-auto' />
      </div>
      <div className='text-center px-4 text-xs mt-5 hover:text-blue-400 transition-all duration-300'>
        {name}
      </div>
      <div className='flex w-full px-4'>
        <button
          onClick={restoreProduct}
          className='cursor-pointer bg-transparent w-full py-2'
        >
          Restore
        </button>
        <button
          onClick={deleteProduct}
          className='cursor-pointer bg-red-500 w-full py-2'
        >
          Remove
        </button>
      </div>
    </div> */}
    </>
  );
};

export default DeletedProduct;
