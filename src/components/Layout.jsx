import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { HomeOutlined, DeleteOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

const MainLayout = ({ children, menu }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [currentMenu, setCurrentMenu] = useState(menu || '1');

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  return (
    <div>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className='logo' />
          <Menu
            theme='dark'
            defaultSelectedKeys={['1']}
            mode='inline'
            defaultSelectedKeys={[currentMenu]}
            onClick={(cur) => setCurrentMenu(cur.key)}
          >
            <Menu.Item key='1' icon={<HomeOutlined />}>
              <Link to={'/'}>Home</Link>
            </Menu.Item>
            <Menu.Item key='2' icon={<DeleteOutlined />}>
              <Link to={'/trash'}>Trash</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className='site-layout'>
          <Content style={{ margin: '0 16px' }}>{children}</Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default MainLayout;
