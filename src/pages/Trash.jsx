import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import DeletedProduct from '../components/DeletedProductCard';
import Layout from '../components/Layout';

const Trash = () => {
  const { products } = useSelector((state) => state.products);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(async () => {
    let filteredProducts = products.filter(
      (product) => product.isDeleted === true
    );
    if (filteredProducts) {
      setFilteredProducts(filteredProducts);
    }
  }, [products]);

  return (
    <>
      <Layout menu={'2'}>
        {filteredProducts && filteredProducts.length > 0 ? (
          <div className='flex flex-wrap justify-around'>
            {filteredProducts?.map((product) => {
              return (
                <DeletedProduct
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  image={product.image}
                  product={product}
                />
              );
            })}
          </div>
        ) : (
          <div className='flex items-center justify-center text-3xl h-screen'>
            No deleted Products!
          </div>
        )}
      </Layout>
    </>
  );
};

export default Trash;
