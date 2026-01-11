import type { RouteObject } from 'react-router-dom';

import { ROUTES } from '~/shared/config';

const TodoPageLazy: RouteObject['lazy'] = () =>
  import('~/pages/todo').then(({ default: Component }) => ({
    Component,
  }));

export const todoRouter: RouteObject[] = [
  {
    path: ROUTES.TODO.path,
    lazy: TodoPageLazy,
  },
];
