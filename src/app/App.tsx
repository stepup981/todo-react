import { Outlet } from 'react-router-dom';
import '~/app/styles/index.css';

import Header from '~/widgets/header';
import { ThemeProvider } from '~/widgets/theme';

import PageContainer from '~/shared/ui/PageContainer';

export default function App() {
  return (
    <ThemeProvider>
      <Header />
      <PageContainer>
        <Outlet />
      </PageContainer>
    </ThemeProvider>
  );
}
