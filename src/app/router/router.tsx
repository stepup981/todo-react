import { createBrowserRouter } from 'react-router-dom';

import App from '~/app/App';

import { ROUTES } from '~/shared/config';

import { homeRouter } from './home.router';
import { todoRouter } from './todo.router';

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME.path,
    element: <App />,
    children: [...homeRouter, ...todoRouter],
  },
]);
