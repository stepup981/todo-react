import { Outlet } from 'react-router-dom';

import Header from '~/widgets/header';

export default function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
