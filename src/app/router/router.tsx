import { createBrowserRouter } from 'react-router-dom';

import App from '~/app/App';

import { ROUTES } from '~/shared/config';

import { homeRoutes } from './home.router';
import { todoRoutes } from './todo.router';

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME.path,
    element: <App />,
    children: [...homeRoutes, ...todoRoutes],
  },
]);
