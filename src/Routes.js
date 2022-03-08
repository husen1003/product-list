import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Trash from './pages/Trash';

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product-details' element={<ProductDetails />} />
        <Route path='/trash' element={<Trash />} />
      </Routes>
    </div>
  );
};

export default Router;
