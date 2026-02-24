import { Layout, Menu, Typography } from 'antd';
import { NavLink, useLocation } from 'react-router-dom';

import { ROUTES } from '~/shared/config';

const { Header: AntHeader } = Layout;
const { Title } = Typography;

const Header = () => {
  const location = useLocation();

  const items = Object.values(ROUTES).map(route => ({
    key: route.path,
    label: <NavLink to={route.path}>{route.label}</NavLink>,
  }));

  return (
    <AntHeader style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
      <Title level={4} style={{ color: '#fff', margin: 0, flexShrink: 0 }}>
        Todo App
      </Title>
      <Menu mode="horizontal" theme="dark" items={items} selectedKeys={[location.pathname]} style={{ flex: 1 }} />
    </AntHeader>
  );
};

export default Header;
