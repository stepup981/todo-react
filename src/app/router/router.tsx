import { createBrowserRouter } from 'react-router-dom';

import { TodoPageLazy } from './lazyLoaders';

import App from '~/app/App';
import Home from '~/pages/home';
import { ROUTES } from '~/shared/config';

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME.path,
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: ROUTES.TODO.path,
        lazy: TodoPageLazy,
      },
    ],
  },
]);
