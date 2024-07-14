import './MyLayout.scss'
import React, { ReactNode, useState, useEffect } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu } from 'antd';
import type { MenuProps } from 'antd';
import { NavLink } from 'react-router-dom';
type MenuItem = Required<MenuProps>['items'][number];

const { Header, Sider, Content } = Layout;

interface MyLayoutType {
  children: ReactNode
}

const MyLayout: React.FC<MyLayoutType> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [items, setItems] = useState([] as MenuItem[])

  useEffect(() => {
    const curItems: MenuItem[] = [
      {
        key: '/',
        icon: <UserOutlined />,
        label: <NavLink to={'/'}>首页</NavLink>,
      },
      {
        key: '/device',
        icon: <VideoCameraOutlined />,
        label: <NavLink to={'/device'}>设备管理</NavLink>,
        children: [
          {
            key: '/device/school',
            label: <NavLink to={'/device/school'}>学校设备</NavLink>
          },
          {
            key: '/device/setDevice',
            label: <NavLink to={'/device/setDevice'}>设备配置</NavLink>
          }
        ]
      },
      {
        key: '/user',
        icon: <UploadOutlined />,
        label: <NavLink to={'/user'}>个人中心</NavLink>,
      },
    ]

    setItems(items.splice(0, items.length, ...curItems))
  }, [])


  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} className='menu-box'>
        <div className="logo-box" >
          <img className='logo-img' src="/src/assets/react.svg" alt="logo部分" />
          <span className='logo-text'>后台管理</span>
        </div>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: '#ffffff' }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content className='content'>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default MyLayout;