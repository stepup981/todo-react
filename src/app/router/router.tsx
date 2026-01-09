import { createBrowserRouter } from 'react-router-dom';
import App from '~/app/App';
import { PostPageLazy } from './lazyLoaders';
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
        path: ROUTES.POST.path,
        lazy: PostPageLazy,
      },
    ],
  },
]);
