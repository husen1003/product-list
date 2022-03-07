import React from 'react';
import Layout from '../components/Layout';

const Home = () => {
  return (
    <>
      <Layout menu={'1'}>
        <div className='flex justify-center items-center h-screen  bg-lightbrown text-darkbrown'>
          <h1 className='text-5xl mt-5'>Home</h1>
        </div>
      </Layout>
    </>
  );
};

export default Home;
