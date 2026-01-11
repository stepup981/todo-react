import type { RouteObject } from 'react-router-dom';

import Home from '~/pages/home';

export const homeRouter: RouteObject[] = [
  {
    index: true,
    element: <Home />,
  },
];
