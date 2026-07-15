import { RiSunFill, RiMoonFill } from '@remixicon/react';
import { NavLink } from 'react-router-dom';

import { THEME, useTheme } from '~/widgets/theme';

import { ROUTES } from '~/shared/config';
import { Button } from '~/shared/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '~/shared/ui/navigation-menu';

const Header = () => {
  const { theme, setTheme } = useTheme();

  const links = Object.values(ROUTES).map((route) => ({
    key: route.path,
    render: () => <NavLink to={route.path}>{route.label}</NavLink>,
  }));

  return (
    <header className="flex items-center justify-between p-4">
      <NavigationMenu>
        <NavigationMenuList className="flex items-center gap-2">
          {links.map((link) => (
            <NavigationMenuItem>
              <NavigationMenuLink render={link.render} />
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <Button
        variant={'outline'}
        size={'icon'}
        onClick={() => setTheme(theme === THEME.DARK ? THEME.LIGHT : THEME.DARK)}
      >
        {theme === THEME.DARK ? <RiSunFill /> : <RiMoonFill />}
      </Button>
    </header>
  );
};

export default Header;
