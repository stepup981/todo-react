import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

import Header from '~/widgets/header';

import PageContainer from '~/shared/ui/PageContainer';

const { Content } = Layout;

export default function App() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header />
      <Content>
        <PageContainer>
          <Outlet />
        </PageContainer>
      </Content>
    </Layout>
  );
}
