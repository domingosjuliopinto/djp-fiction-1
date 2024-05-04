import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  PlayCircleOutlined,
  VideoCameraOutlined,
  ReadOutlined,
  UserOutlined,
  FundOutlined,
  TeamOutlined
  
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
const { Header, Sider } = Layout;

function Body(props){
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  
  return (
    <Layout style={{background:"none"}}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="demo-logo-vertical" />
            <Menu theme="dark" defaultSelectedKeys={[props.skey]} mode="inline">
              <Menu.Item key="1">
                <HomeOutlined />
                <span>Home</span>
                <Link to="/" />
              </Menu.Item>
              <Menu.Item key="2">
                <PlayCircleOutlined />
                <span>Play Story</span>
                <Link to="/playstory" />
              </Menu.Item>
              <Menu.Item key="3">
                <VideoCameraOutlined/>
                <span>Custom Bout</span>
                <Link to="/custom-bout" />
              </Menu.Item>
              <Menu.Item key="4">
                <ReadOutlined />
                <span>Read Story</span>
                <Link to="/readstory" />
              </Menu.Item>
              <Menu.Item key="5">
                <UserOutlined/>
                <span>Characters</span>
                <Link to="/characters" />
              </Menu.Item>
              <Menu.Item key="6">
                <FundOutlined />
                <span>Extras</span>
                <Link to="/extras" />
              </Menu.Item>
              <Menu.Item key="7">
                <TeamOutlined />
                <span>About</span>
                <Link to="/about" />
              </Menu.Item>
            </Menu>
        </Sider>
        <Layout style={{background:"none"}}>
            <Header
            style={{
                padding: 0,
                background: colorBgContainer,
            }}
            >
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
            {props.content}
        </Layout>
    </Layout>
  );
};
export default Body;