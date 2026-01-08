import { createBrowserRouter } from 'react-router-dom';
import App from '~/app/App';
import { PostPageLazy } from './lazyLoaders';
import Home from '~/pages/home';
import { ROUTE_PATH } from '~/shared/config';

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
