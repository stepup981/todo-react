import { ROUTE_PATH, ROUTE_NAMES, type RouteKey } from '~/shared/config';
import { NavLink } from 'react-router-dom';

export default function Header() {
  const links = (Object.keys(ROUTE_PATH) as RouteKey[]).map(key => ({
    key,
    to: ROUTE_PATH[key],
    label: ROUTE_NAMES[key],
  }));

  return (
    <nav>
      {links.map(val => (
        <NavLink to={val.to} key={val.key}>
          {val.label}
        </NavLink>
      ))}
    </nav>
  );
}
