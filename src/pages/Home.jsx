import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const { products } = useSelector((state) => state.products);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(async () => {
    let filteredProducts;
    filteredProducts = products.filter(
      (product) => product.isDeleted === false
    );
    if (filteredProducts) {
      setFilteredProducts(filteredProducts);
    }
  }, [products]);

  return (
    <>
      <Layout menu={'1'}>
        <div className='flex flex-wrap justify-around'>
          {filteredProducts &&
            filteredProducts.length > 0 &&
            filteredProducts.map((product) => {
              return (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  image={product.image}
                  product={product}
                />
              );
            })}
        </div>
      </Layout>
    </>
  );
};

export default Home;
