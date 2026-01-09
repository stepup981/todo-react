import { NavLink } from 'react-router-dom';

import { ROUTES } from '~/shared/config';

const Header = () => {
  return (
    <nav>
      {Object.entries(ROUTES).map(([key, route]) => (
        <NavLink to={route.path} key={key}>
          {route.label}
        </NavLink>
      ))}
    </nav>
  );
};

export default Header;
