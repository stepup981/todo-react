export const TodoPageLazy = () => import('~/pages/todo').then(({ default: Component }) => ({ Component }));
