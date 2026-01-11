import type { RouteObject } from 'react-router-dom';

import Home from '~/pages/home';

export const homeRoutes: RouteObject[] = [
  {
    index: true,
    element: <Home />,
  },
];
