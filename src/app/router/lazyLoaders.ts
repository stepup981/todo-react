export const PostPageLazy = () => import('@/pages/post').then(({ default: Component }) => ({ Component }));
