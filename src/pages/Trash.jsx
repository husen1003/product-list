import React from 'react';
import Layout from '../components/Layout';

const Trash = () => {
  return (
    <>
      <Layout menu={'2'}>
        <div className='flex justify-center items-center h-screen  bg-lightbrown text-darkbrown'>
          <h1 className='text-5xl'>Trash</h1>
        </div>
      </Layout>
    </>
  );
};

export default Trash;
