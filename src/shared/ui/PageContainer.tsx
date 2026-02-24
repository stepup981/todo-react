import type { PropsWithChildren } from 'react';

const PageContainer = ({ children }: PropsWithChildren) => {
  return <div style={{ padding: 24, maxWidth: 720, margin: '0 auto' }}>{children}</div>;
};

export default PageContainer;
