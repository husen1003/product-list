import React, { useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import { HomeOutlined, DeleteOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import defaultProducts from '../data/products.json';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/actions/products';

const { Content, Sider } = Layout;

const MainLayout = ({ children, menu }) => {
  const displayProducts = useSelector((state) => state.products.products);
  const [collapsed, setCollapsed] = useState(false);
  const [currentMenu, setCurrentMenu] = useState(menu || '1');
  const [deletedProducts, setDeletedProducts] = useState(0);
  const disaptch = useDispatch();

  // state for sidebar collapse or not
  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  // getting all products from localstore if there is no data for first time then we will set dummy json data
  useEffect(() => {
    let products = JSON.parse(localStorage.getItem('products'));
    if (!products) {
      localStorage.setItem('products', JSON.stringify(defaultProducts));
      disaptch(setProducts(defaultProducts));
    } else if (displayProducts !== products) {
      disaptch(setProducts(products));
    }
  }, []);

  // calculating counts of deleted products
  useEffect(() => {
    let deleted = [];
    deleted = displayProducts.filter((product) => product.isDeleted === true);
    setDeletedProducts(deleted.length);
  }, [displayProducts]);

  return (
    <div>
      <Layout style={{ minHeight: '100vh' }}>
        {/* Sidebar */}
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className='logo' />
          <Menu
            theme='dark'
            mode='inline'
            defaultSelectedKeys={[currentMenu]}
            onClick={(cur) => setCurrentMenu(cur.key)}
          >
            <Menu.Item key='1' icon={<HomeOutlined />}>
              <Link to={'/'}>
                Home ({displayProducts.length - deletedProducts})
              </Link>
            </Menu.Item>
            <Menu.Item key='2' icon={<DeleteOutlined />}>
              <Link to={'/trash'}>Trash ({deletedProducts})</Link>
            </Menu.Item>
          </Menu>
        </Sider>

        {/* Main Layout */}
        <Layout className='site-layout'>
          <Content style={{ margin: '0 16px' }}>{children}</Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default MainLayout;
