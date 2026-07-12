import { NavLink } from 'react-router-dom';

import { THEME, useTheme } from '~/widgets/theme';

import { ROUTES } from '~/shared/config';
import { Button } from '~/shared/ui/button';

const Header = () => {
  const { theme, setTheme } = useTheme();
  const items = Object.values(ROUTES).map((route) => ({
    key: route.path,
    label: (
      <NavLink key={route.path} to={route.path}>
        {route.label}
      </NavLink>
    ),
  }));

  return (
    <>
      <Button onClick={() => setTheme(theme === THEME.DARK ? THEME.LIGHT : THEME.DARK)}>
        СВИТЧ ТЕМУ
      </Button>
      {items.map((i) => i.label)}
    </>
  );
};

export default Header;
