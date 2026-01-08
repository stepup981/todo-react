import { ROUTE_PATH } from '@/shared/config';
import { createBrowserRouter } from 'react-router-dom';
import App from '@/app/App';
import Home from '@/pages/home';
import { PostPageLazy } from './lazyLoaders';

export const router = createBrowserRouter([
  {
    path: ROUTE_PATH.HOME,
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: ROUTE_PATH.POST,
        lazy: PostPageLazy,
      },
    ],
  },
]);
