import { NavLink } from 'react-router-dom';

import { ROUTES } from '~/shared/config';

const Header = () => {
  const links = Object.entries(ROUTES).map(([key, route]) => {
    return (
      <NavLink key={key} to={route.path}>
        {route.label}
      </NavLink>
    );
  });

  return <nav>{links}</nav>;
};

export default Header;
