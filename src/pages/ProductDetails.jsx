import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

const ProductDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const product = state;
  return (
    <Layout>
      <button
        onClick={(e) => {
          e.preventDefault();
          navigate(-1);
        }}
      >
        Back
      </button>
      <div>ProductDetails</div>
      <div>
        <img src={product?.image} alt={product?.name} />
      </div>
      <div>{product?.name}</div>
      <div>{product?.description}</div>
    </Layout>
  );
};

export default ProductDetails;
