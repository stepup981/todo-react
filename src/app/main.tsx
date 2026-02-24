import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import 'antd/dist/reset.css';

import { router } from '~/app/router/router';

createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />);
